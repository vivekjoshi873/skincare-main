import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase-client";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    // Check for session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  const signup = (email, password) =>
    supabase?.auth.signUp({ email, password });
  const login = (email, password) =>
    supabase?.auth.signInWithPassword({ email, password });
  const loginWithGoogle = () =>
    supabase?.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  const logout = () => supabase?.auth.signOut();

  return (
    <AuthContext.Provider
      value={{ user, signup, login, loginWithGoogle, logout, loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

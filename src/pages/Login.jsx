import React, { useState } from 'react'
import Navbar from '../components/Header/Navbar'
import storeImage from '../assets/store3.avif'
import researchImage from '../assets/research.avif'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-emerald-50 text-black">
      <div className="sticky top-0 z-20 border-b border-zinc-100 bg-white/90 backdrop-blur-md">
        <Navbar className="relative" />
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:px-8 lg:flex-row lg:items-center lg:py-20">
        <section className="relative w-full overflow-hidden rounded-3xl bg-black text-white shadow-2xl">
          <img
            src={storeImage}
            alt="Ray skincare studio"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="relative z-10 flex flex-col gap-6 p-8 md:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Members-only perks
            </span>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Login to unlock routines curated by dermats and loved by 50k+
              customers.
            </h2>
            <p className="text-base text-white/80 md:text-lg">
              Track orders, manage subscriptions, and get skin reports updated
              every month with expert notes.
            </p>
            <div className="grid grid-cols-2 gap-4 text-left text-sm text-white/80">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-3xl font-semibold text-white">4.9/5</p>
                <p>Community rating</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-3xl font-semibold text-white">72 hrs</p>
                <p>Avg. expert reply</p>
              </div>
              <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <img
                  src={researchImage}
                  alt="Lab research"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    Featured this month
                  </p>
                  <p className="text-lg font-medium text-white">
                    Night barrier lab notes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur-sm md:p-12">
          <div className="mb-8 space-y-2 text-center md:text-left">
            <p className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
              Welcome back
            </p>
            <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
              Sign in to ray.
            </h1>
            <p className="text-sm text-zinc-500 md:text-base">
              Continue with your email to access personalized skincare plans.
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-700">
                Email address
              </label>
              <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 focus-within:border-black">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full border-none bg-transparent text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-zinc-700">
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm font-semibold text-emerald-600 hover:text-emerald-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 focus-within:border-black">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full border-none bg-transparent text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
                  required
                  minLength={6}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="inline-flex items-center gap-3 text-sm text-zinc-600">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                Remember this device
              </label>
              <button type="button" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-black py-3 text-base font-semibold text-white transition hover:bg-zinc-900"
            >
              Continue
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-zinc-400">
                <span className="h-px flex-1 bg-zinc-200" />
                or continue with
                <span className="h-px flex-1 bg-zinc-200" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
                <button type="button" className="rounded-2xl border border-zinc-200 py-3 text-zinc-800 hover:border-black">
                  Google
                </button>
                <button type="button" className="rounded-2xl border border-zinc-200 py-3 text-zinc-800 hover:border-black">
                  Apple
                </button>
              </div>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-zinc-500">
            New to ray.?{' '}
            <a href="/allproduct" className="font-semibold text-emerald-600 hover:text-emerald-500">
              Discover the collection
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default Login


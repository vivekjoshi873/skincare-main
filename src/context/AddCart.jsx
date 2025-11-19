import React,{createContext,useState} from "react";
const AddCart =createContext();

const AddCartProvider =({children})=>{
    const [cart,setCart]=useState([]);
    const addtoCart = (product) => {
        setCart(prevCart => {
          const itemInCart = prevCart.find(item => item.id === product.id);
          if (itemInCart) {
            return prevCart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      };
      const increaseQuantity = (productId) => {
        setCart(prevCart =>
          prevCart.map(item =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      };
      
      const decreaseQuantity = (productId) => {
        setCart(prevCart =>
          prevCart
            .map(item =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item.quantity > 0)
        );
      };
      
    const removeFromCart=(product)=>{
        setCart(cart.filter((item)=>item.id!==product.id));
    }
    return (
        <AddCart.Provider value={{cart, addtoCart, removeFromCart ,increaseQuantity, decreaseQuantity}}>
            {children}
        </AddCart.Provider>
    )
}
export default AddCartProvider;
export {AddCart}; 


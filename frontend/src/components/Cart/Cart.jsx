import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddCart } from '../../context/AddCart';
import '../../index.css';

function Cart() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(AddCart);
  const navigate = useNavigate();

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen]);

  const goToCheckout = () => {
    if (!cart.length) {
      navigate('/allproduct');
      return;
    }
    setIsDrawerOpen(false);
    navigate('/checkout');
  };

  const goToPurchaseHistory = () => {
    setIsDrawerOpen(false);
    navigate('/purchase-history');
  };

  return (
    <div className='text-base font-medium'>
      <button className='text-base font-medium nav-link' onClick={toggleDrawer}>
        Cart ({cart.length})
      </button>

      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
          <button onClick={toggleDrawer} style={{ fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>&times;</button>
        </div>

        <div style={{ padding: '1rem' }}>
          <h2 className='text-lg font-bold mb-4'>Shopping Cart</h2>
        </div>

        <div className='px-4 flex-1 overflow-auto'>
          {cart.length > 0 ? (
            <div>
              {cart.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-20 h-22 object-cover mr-4  my-2 bg-zinc-100 rounded-sm" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-400  my-2">Rs.{item.price}</p>
                      <div className="flex items-center">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-1 border border-gray-300 rounded-l hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2 py-1 border border-gray-300 rounded-r hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="border border-b-gray-400 rounded-md  text-sm text-gray-400 hover:text-gray-800"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-center'>Your Cart is empty.</p>
          )}
        </div>

        {cart.length > 0 && (
          <div className='px-4 py-4 border-t mt-auto'>
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold">Total:</p>
              <p className="font-bold">Rs.{cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)}</p>
            </div>
            <div className='flex justify-between items-center mb-4'>
              <p className='text-gray-400 text-sm font-medium'>Shipping</p>
              <p className='text-gray-400 text-sm font-medium'>Free</p>
            </div>
            <div>
              <button
                onClick={goToCheckout}
                className=' bg-black text-white w-full py-3 sm:py-4 px-4 text-sm sm:text-base font-medium rounded-md tracking-widest '
              >
                Proceed to Checkout - Rs.{cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)}
              </button>
            </div>
            <button
              onClick={goToPurchaseHistory}
              className='mt-3 w-full py-3 sm:py-4 px-4 text-sm sm:text-base font-medium rounded-md tracking-widest border border-black text-black hover:bg-black hover:text-white transition-colors'
            >
              Purchase History
            </button>
          </div>
        )}

        {cart.length === 0 && (
          <div className='px-4 py-4 border-t mt-auto'>
            <button
              onClick={goToPurchaseHistory}
              className='w-full py-3 sm:py-4 px-4 text-sm sm:text-base font-medium rounded-md tracking-widest border border-black text-black hover:bg-black hover:text-white transition-colors'
            >
              Purchase History
            </button>
          </div>
        )}
      </div>

      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.3)',
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
}

export default Cart;

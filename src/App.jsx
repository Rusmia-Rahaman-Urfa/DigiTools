import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Toggles from './components/Toggles';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// Data and Context
import productsData from './data/products.json';
import { useCart } from './context/CartContext';

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [activeTab, setActiveTab] = useState('products');
  
  // Destructure values from our Global Cart Context
  const { cart, totalPrice, clearCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#0B132B] min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />
      <Banner />
      <Stats />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Tab Switcher */}
        <Toggles activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'products' ? (
          /* SECTION: PRODUCT MARKETPLACE */
          <div data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {productsData.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {/* Added extra sections to the home/product view */}
            <Steps />
            <Pricing />
          </div>
        ) : (
          /* SECTION: CART VIEW */
          <div className="mt-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-bold text-[#0B132B]">
                  Your Cart ({cart.length})
                </h2>
                <button 
                  onClick={() => setActiveTab('products')} 
                  className="text-[#7C3AED] text-sm font-bold hover:underline"
                >
                  Add More Tools
                </button>
              </div>

              {cart.length > 0 ? (
                <>
                  {/* List of Items */}
                  <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {cart.map(item => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>

                  {/* Checkout Summary */}
                  <div className="mt-8 border-t border-gray-100 pt-6 space-y-4">
                    <div className="flex justify-between items-center text-gray-500 text-sm px-2">
                      <span>Subtotal</span>
                      <span>${totalPrice}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500 text-sm px-2">
                      <span>Tax (Estimated)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xl font-black text-[#0B132B] px-2">
                      <span>Total Amount</span>
                      <span className="text-[#7C3AED]">${totalPrice}</span>
                    </div>
                    
                    <button 
                      onClick={() => {
                        clearCart();
                        setActiveTab('products');
                      }}
                      className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#7C3AED]/30 transition-all transform active:scale-95"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              ) : (
                /* Empty Cart State */
                <div className="text-center py-16">
                  <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                     <img src="/assets/shopping-cart.png" className="w-8 h-8 opacity-20" alt="empty" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B132B] mb-2">Empty Cart</h3>
                  <p className="text-gray-400 text-sm mb-8">Your Cart is currently empty. Visit the Products page to add some tools!</p>
                  <button 
                    onClick={() => setActiveTab('products')}
                    className="bg-[#0B132B] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-black transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
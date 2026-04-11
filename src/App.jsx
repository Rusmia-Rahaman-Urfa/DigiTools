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
    /* Main Wrapper: Set to light gray as the base background */
    <div className="bg-gray-50 min-h-screen font-sans overflow-x-hidden selection:bg-[#7C3AED]/30">
      
      {/* 1. Navbar: Pass setActiveTab to allow switching from Nav buttons */}
      <Navbar setActiveTab={setActiveTab} />
      
      {/* 2. Top Dark Section: Contains Banner and Stats */}
      <div className="bg-[#0B132B] text-white">
        <Banner />
        <Stats />
      </div>
      
      {/* 3. Main Content: Everything here sits on the Light Gray (bg-gray-50) background */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Tab Switcher - Centered on the light background */}
        <div className="flex justify-center mb-12">
          <Toggles activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        {activeTab === 'products' ? (
          /* SECTION: PRODUCT MARKETPLACE */
          <div data-aos="fade-up" className="space-y-32">
            {/* Grid for Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Extra home sections on light background */}
            <Steps />
            <Pricing />
          </div>
        ) : (
          /* SECTION: CART VIEW (On Light Background) */
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100">
              <div className="flex justify-between items-center mb-10 border-b border-gray-50 pb-6">
                <h2 className="text-3xl font-black text-[#0B132B]">
                  Your Cart <span className="text-[#7C3AED]">({cart.length})</span>
                </h2>
                <button 
                  onClick={() => setActiveTab('products')} 
                  className="text-gray-400 hover:text-[#7C3AED] text-sm font-bold transition-colors"
                >
                  ← Continue Shopping
                </button>
              </div>

              {cart.length > 0 ? (
                <>
                  {/* List of Items */}
                  <div className="space-y-4 mb-10">
                    {cart.map(item => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>

                  {/* Checkout Summary */}
                  <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                    <div className="flex justify-between items-center text-gray-500 font-medium">
                      <span>Subtotal</span>
                      <span className="text-[#0B132B]">${totalPrice}</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-gray-200 pt-4 text-2xl font-black text-[#0B132B]">
                      <span>Total Amount</span>
                      <span className="text-[#7C3AED]">${totalPrice}</span>
                    </div>
                    
                    <button 
                      onClick={() => {
                        clearCart();
                        setActiveTab('products');
                        alert("Purchase Successful!");
                      }}
                      className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-5 rounded-2xl font-bold shadow-lg shadow-purple-200 transition-all transform active:scale-[0.98] mt-4"
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </>
              ) : (
                /* Empty Cart State */
                <div className="text-center py-20">
                  <div className="bg-purple-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                     <span className="text-4xl">🛒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B132B] mb-2">Your cart is empty</h3>
                  <p className="text-gray-400 mb-8">Looks like you haven't added any tools yet.</p>
                  <button 
                    onClick={() => setActiveTab('products')}
                    className="bg-[#7C3AED] text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all"
                  >
                    Browse Tools
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      
      {/* 4. Footer: Typically dark as per design */}
      <Footer />
    </div>
  );
}

export default App;
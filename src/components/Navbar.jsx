import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[#0B132B]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/products/package.png" alt="logo" className="w-8 h-8" />
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            DigiTools
          </span>
        </div>

        {/* Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Products</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Testimonials</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer p-2 hover:bg-white/5 rounded-full transition-all">
            <img src="/products/shopping-cart.png" alt="cart" className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#7C3AED] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#0B132B]">
                {cart.length}
              </span>
            )}
          </div>
          <button className="hidden sm:block text-sm font-semibold hover:text-[#7C3AED] transition-colors">
            Login
          </button>
          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#7C3AED]/20 transition-all">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
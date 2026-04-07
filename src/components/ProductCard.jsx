import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div 
      data-aos="fade-up"
      className="group relative bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#7C3AED]/40 hover:bg-white/[0.06] transition-all"
    >
      {/* Category Badge */}
      <span className="absolute top-4 right-4 bg-[#7C3AED]/10 text-[#7C3AED] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-[#7C3AED]/20">
        {product.category}
      </span>

      {/* Icon Area */}
      <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <img src={product.icon} alt={product.name} className="w-10 h-10 object-contain" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {product.description}
      </p>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-xs text-gray-300">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Footer Info */}
      <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-6">
        <div>
          <span className="text-2xl font-black text-white">${product.price}</span>
          <span className="text-gray-500 text-[10px] uppercase ml-1">/ one-time</span>
        </div>
        <button 
          onClick={() => addToCart(product)}
          className="bg-[#7C3AED] hover:bg-[#6D28D9] px-6 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-[#7C3AED]/10 transform active:scale-95 transition-all"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
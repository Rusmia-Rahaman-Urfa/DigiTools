import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-[#7C3AED]/50 transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-white/10 p-3 rounded-xl"><img src={product.icon} className="w-10 h-10" alt="" /></div>
        <span className="bg-[#7C3AED]/20 text-[#7C3AED] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
          {product.tag}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-400 text-sm mb-6 line-clamp-2">{product.description}</p>
      <div className="mb-6">
        <span className="text-3xl font-black">${product.price}</span>
        <span className="text-gray-500 text-xs ml-1 italic">/ {product.period}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {product.features.map((f, i) => (
          <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
            <span className="text-[#7C3AED]">✔</span> {f}
          </li>
        ))}
      </ul>
      <button 
        onClick={() => addToCart(product)}
        className="w-full bg-[#7C3AED] py-3 rounded-xl font-bold hover:bg-[#6D28D9] active:scale-95 transition-all"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
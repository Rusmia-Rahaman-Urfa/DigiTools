import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl mb-4 border border-gray-100 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-4">
        {/* Product Icon */}
        <div className="bg-gray-50 p-3 rounded-lg w-16 h-16 flex items-center justify-center">
          <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
        </div>
        
        {/* Product Info */}
        <div>
          <h4 className="font-bold text-[#0B132B]">{item.name}</h4>
          <p className="text-[#7C3AED] font-semibold">${item.price}</p>
        </div>
      </div>

      {/* Remove Button */}
      <button 
        onClick={() => removeFromCart(item.id)}
        className="p-2 hover:bg-red-50 rounded-full group transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
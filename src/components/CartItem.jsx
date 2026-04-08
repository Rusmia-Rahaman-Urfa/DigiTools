import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 group">
      <div className="flex items-center gap-6">
        <div className="bg-white p-3 rounded-xl shadow-sm"><img src={item.icon} className="w-12 h-12" alt="" /></div>
        <div>
          <h4 className="font-bold text-lg">{item.name}</h4>
          <p className="text-[#7C3AED] font-bold">${item.price}</p>
        </div>
      </div>
      <button 
        onClick={() => removeFromCart(item.id)}
        className="text-red-400 font-bold hover:text-red-600 px-4 py-2 hover:bg-red-50 rounded-lg transition-all"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
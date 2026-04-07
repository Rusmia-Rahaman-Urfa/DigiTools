const Toggles = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-4">Premium Digital Tools</h2>
      <p className="text-gray-400 max-w-xl mb-8">
        Choose from our curated collection of premium digital products designed to boost your productivity.
      </p>
      
      <div className="bg-white/5 p-1.5 rounded-full border border-white/10 flex items-center">
        <button 
          onClick={() => setActiveTab('products')}
          className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
            activeTab === 'products' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-gray-400 hover:text-white'
          }`}
        >
          Products
        </button>
        <button 
          onClick={() => setActiveTab('cart')}
          className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
            activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-gray-400 hover:text-white'
          }`}
        >
          Cart
        </button>
      </div>
    </div>
  );
};

export default Toggles;
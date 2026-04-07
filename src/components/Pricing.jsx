const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      features: ["Access to Free Tools", "1 Project Slot", "Community Support"],
      isPopular: false,
    },
    {
      name: "Pro Plan",
      price: "49",
      features: ["All Premium Tools", "Unlimited Projects", "Priority Support", "Early Access"],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "199",
      features: ["Custom Solutions", "Team Training", "Dedicated Manager", "SLA Support"],
      isPopular: false,
    },
  ];

  return (
    <section className="py-24 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400">Choose the plan that fits your ambition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-3xl border transition-all ${
                plan.isPopular 
                ? 'bg-white/10 border-[#7C3AED] scale-105 shadow-2xl shadow-[#7C3AED]/20 py-12' 
                : 'bg-white/5 border-white/10'
              }`}
              data-aos={plan.isPopular ? "zoom-in" : "fade-up"}
            >
              {plan.isPopular && (
                <span className="bg-[#7C3AED] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">${plan.price}</span>
                <span className="text-gray-500 text-sm">/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-[#7C3AED]">✔</span> {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.isPopular 
                ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
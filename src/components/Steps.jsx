const Steps = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Join our community of digital creators and professionals.",
      icon: "/assets/user.png",
    },
    {
      id: "02",
      title: "Choose Tools",
      desc: "Select the perfect automation tools for your specific workflow.",
      icon: "/assets/Play.png",
    },
    {
      id: "03",
      title: "Scale Fast",
      desc: "Download your assets and start scaling your business immediately.",
      icon: "/assets/rocket.png",
    },
  ];

  return (
    <section className="py-24 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Get Started in 3 Steps</h2>
          <p className="text-gray-400">Your journey to a faster workflow begins here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-white/5 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:border-[#7C3AED]/50 transition-all">
                <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
                <span className="absolute -top-4 -right-2 bg-[#7C3AED] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-[#0B132B]">
                  {step.id}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed px-6">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
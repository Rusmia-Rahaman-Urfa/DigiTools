const Stats = () => {
  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Digital Tools", value: "200+" },
    { label: "Global Rating", value: "4.9/5" },
    { label: "Success Rate", value: "99%" },
  ];

  return (
    <section className="py-20 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-aos="zoom-in">
              <h3 className="text-4xl font-extrabold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
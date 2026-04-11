const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B132B] pt-32 pb-20 px-4">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#7C3AED]/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#7C3AED] text-xs font-bold mb-6 uppercase tracking-widest">
            <img src="/products/rocket.png" alt="rocket" className="w-4 h-4" />
            Launch Your Success
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tighter">
            Supercharge Your <br />
            <span className="text-[#7C3AED]">Digital Workflow</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Discover a curated marketplace of premium tools designed to automate your tasks, 
            boost productivity, and scale your digital presence effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-[#7C3AED]/20 transition-all transform hover:-translate-y-1">
              Get Started Now
            </button>
            <button className="flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all">
              <img src="/products/Play.png" alt="play" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-2xl" data-aos="fade-left">
          <div className="relative group">
            {/* Soft Glow behind the image */}
            <div className="absolute inset-0 bg-[#7C3AED]/20 blur-[100px] -z-10 group-hover:bg-[#7C3AED]/30 transition-all" />
            <img 
              src="/products/banner.png" 
              alt="banner" 
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(124,58,237,0.3)] group-hover:scale-105 transition-all duration-700" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
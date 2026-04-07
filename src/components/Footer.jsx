const Footer = () => {
  return (
    <footer className="bg-[#0B132B] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img src="/assets/package.png" alt="logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-white tracking-widest uppercase">
              DigiTools
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Elevate your digital presence with high-fidelity software and templates for creators and developers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Marketplace</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-[#7C3AED] transition-all">Browse Tools</a></li>
            <li><a href="#" className="hover:text-[#7C3AED] transition-all">New Releases</a></li>
            <li><a href="#" className="hover:text-[#7C3AED] transition-all">Bestsellers</a></li>
            <li><a href="#" className="hover:text-[#7C3AED] transition-all">Bundle Deals</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Company</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-[#7C3AED] transition-all">About Us</a></li>
            <li><a href="#" className="hover:text-[#7C3AED] transition-all">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#7C3AED] transition-all">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#7C3AED] transition-all">Contact Support</a></li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Stay Connected</h4>
          <p className="text-gray-400 text-sm mb-6">Join our community and get the latest updates on new tools.</p>
          <div className="flex items-center gap-4">
            {/* Placeholder social icons */}
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/50 cursor-pointer transition-all">
              <span className="text-white text-xs">FB</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/50 cursor-pointer transition-all">
              <span className="text-white text-xs">LI</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/50 cursor-pointer transition-all">
              <span className="text-white text-xs">X</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 border-t border-white/5 pt-10 text-center sm:flex sm:justify-between sm:text-left items-center">
        <p className="text-gray-500 text-xs mb-4 sm:mb-0">
          © {new Date().getFullYear()} DigiTools. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs">
          Built for creators, by creators.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
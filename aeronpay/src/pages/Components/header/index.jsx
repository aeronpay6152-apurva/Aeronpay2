import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../../assets/images/light-logo.svg';
import CompanyNav from './companyNav';
import ProductNav, { productLinks } from './productNav';
import SolutionNav from './solutionNav';

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(productLinks[0]);

  const closeMenus = () => {
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
    setIsCompanyOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-[#0b0b0b]">
      <div className="mx-auto flex h-[68px] w-full max-w-[1300px] items-center justify-between gap-3 px-3 sm:gap-4 sm:px-7 lg:px-0">
        <Link to="/" aria-label="Go to AeronPay home" className="flex shrink-0 items-center">
          <img src={logo} alt="AeronPay Logo" className="logo-zoom-pulse h-9 w-auto object-contain sm:h-[42px]" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-[36px] md:flex">
          <ProductNav
            isOpen={isProductsOpen}
            activeProduct={activeProduct}
            onOpen={() => { setIsProductsOpen(true); setIsSolutionsOpen(false); setIsCompanyOpen(false); }}
            onClose={() => setIsProductsOpen(false)}
            onToggle={() => { setIsProductsOpen((open) => !open); setIsSolutionsOpen(false); setIsCompanyOpen(false); }}
            onProductHover={setActiveProduct}
            closeMenus={closeMenus}
          />

          <SolutionNav
            isOpen={isSolutionsOpen}
            onOpen={() => { setIsSolutionsOpen(true); setIsProductsOpen(false); setIsCompanyOpen(false); }}
            onClose={() => setIsSolutionsOpen(false)}
            onToggle={() => { setIsSolutionsOpen((open) => !open); setIsProductsOpen(false); setIsCompanyOpen(false); }}
            closeMenus={closeMenus}
          />

          <CompanyNav
            isOpen={isCompanyOpen}
            onOpen={() => { setIsCompanyOpen(true); setIsProductsOpen(false); setIsSolutionsOpen(false); }}
            onToggle={() => { setIsCompanyOpen((open) => !open); setIsProductsOpen(false); setIsSolutionsOpen(false); }}
            onClose={() => setIsCompanyOpen(false)}
          />

          <Link to="/blog" className="whitespace-nowrap text-[17px] font-semibold text-white transition-colors duration-200 hover:text-blue-400">Our Blogs</Link>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link to="/contact#contact-form" className="flex h-[40px] items-center rounded-full border border-[#2a3d70] bg-[#040b1f] px-[20px] text-[14px] font-semibold text-white transition-all duration-200 hover:border-[#9ec3ff] hover:bg-[#0d1735]">Contact Us</Link>

          <Link to="/contact" className="flex h-[40px] items-center rounded-full border border-[#2a3d70] bg-[#040b1f] px-[22px] text-[14px] font-semibold text-white transition-all duration-200 hover:border-[#9ec3ff] hover:bg-[#0d1735] hover:shadow-[0_0_20px_rgba(99,102,241,0.18)]">
            Log In
            <span className="ml-2 text-[16px]">→</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2a3d70] text-white md:hidden"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-[#0b0b0b] px-4 py-4 shadow-2xl md:hidden">
          <nav className="flex flex-col items-stretch gap-4">
            <ProductNav
              isOpen={isProductsOpen}
              activeProduct={activeProduct}
              onOpen={() => { setIsProductsOpen(true); setIsSolutionsOpen(false); setIsCompanyOpen(false); }}
              onClose={() => setIsProductsOpen(false)}
              onToggle={() => { setIsProductsOpen((open) => !open); setIsSolutionsOpen(false); setIsCompanyOpen(false); }}
              onProductHover={setActiveProduct}
            />
            <SolutionNav
              isOpen={isSolutionsOpen}
              onOpen={() => { setIsSolutionsOpen(true); setIsProductsOpen(false); setIsCompanyOpen(false); }}
              onClose={() => setIsSolutionsOpen(false)}
              onToggle={() => { setIsSolutionsOpen((open) => !open); setIsProductsOpen(false); setIsCompanyOpen(false); }}
            />
            <CompanyNav
              isOpen={isCompanyOpen}
              onOpen={() => { setIsCompanyOpen(true); setIsProductsOpen(false); setIsSolutionsOpen(false); }}
              onToggle={() => { setIsCompanyOpen((open) => !open); setIsProductsOpen(false); setIsSolutionsOpen(false); }}
              onClose={() => setIsCompanyOpen(false)}
            />
            <Link to="/blog" onClick={closeMenus} className="text-left text-[16px] font-semibold text-white">
              Our Blogs
            </Link>
            <div className="flex gap-3 border-t border-white/10 pt-4">
              <Link to="/contact#contact-form" onClick={closeMenus} className="flex h-10 flex-1 items-center justify-center rounded-full border border-[#2a3d70] bg-[#040b1f] text-sm font-semibold text-white">
                Contact Us
              </Link>
              <Link to="/contact" onClick={closeMenus} className="flex h-10 flex-1 items-center justify-center rounded-full border border-[#2a3d70] bg-[#040b1f] text-sm font-semibold text-white">
                Log In →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

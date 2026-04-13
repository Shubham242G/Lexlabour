"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  const showPage = (page: string) => {
    if (page === "home") {
      router.push("/");
    } else {
      router.push(`/${page}`);
    }
  };

  return (
    <footer className="bg-[#061526] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="footer-brand">
            <a href="#" onClick={() => showPage("home")} className="font-['Bebas_Neue'] text-[1.4rem] tracking-[0.12em] text-white no-underline flex items-center gap-2.5 mb-3.5">
              {/* Custom Logo - Replace with your logo */}
              <Image 
                src="/assets/logo.png" 
                alt="Labour Law Logo" 
                width={300} 
                height={300} 
                className="w-150 h-150 object-contain mt-5"
              />
            </a>
            <p className="text-white/55 text-[0.78rem] leading-relaxed max-w-[220px]">India's dedicated labour law advisory. Serving employers and employees with formal legal counsel since 2007.</p>
            <div className="mt-5 flex gap-2.5">
              <a href="#" onClick={() => showPage("employer")} className="px-4 py-2 text-[0.65rem] tracking-[0.1em] uppercase font-medium rounded bg-white text-[#061526] border border-white hover:bg-[#E8F0FA] transition-all flex items-center gap-2">
                <img src="/assets/employer-portal.png" alt="Employer" className="w-3.5 h-3.5" />
                Employer Portal
              </a>
              <a href="#" onClick={() => showPage("employee")} className="px-4 py-2 text-[0.65rem] tracking-[0.1em] uppercase font-medium rounded border border-white/30 text-white hover:bg-white/10 transition-all flex items-center gap-2">
                <img src="/assets/employee-portal.png" alt="Employee" className="w-3.5 h-3.5" />
                Employee Portal
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A8C4E0] mb-4.5">For Employers</h5>
            <a href="#" onClick={() => showPage("employer")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Compliance Advisory</a>
            <a href="#" onClick={() => showPage("employer")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">HR Documentation</a>
            <a href="#" onClick={() => showPage("employer")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Labour Audits</a>
            <a href="#" onClick={() => showPage("employer")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Industrial Relations</a>
            <a href="#" onClick={() => showPage("employer")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Startup HR Desk</a>
          </div>
          <div>
            <h5 className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A8C4E0] mb-4.5">For Employees</h5>
            <a href="#" onClick={() => showPage("employee")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Know Your Rights</a>
            <a href="#" onClick={() => showPage("employee")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Salary Disputes</a>
            <a href="#" onClick={() => showPage("employee")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Wrongful Termination</a>
            <a href="#" onClick={() => showPage("employee")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">PF & Gratuity</a>
            <a href="#" onClick={() => showPage("employee")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Labour Court Help</a>
          </div>
          <div>
            <h5 className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A8C4E0] mb-4.5">Resources</h5>
            <a href="#" onClick={() => showPage("library")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Law Library</a>
            <a href="#" onClick={() => showPage("insights")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Insights</a>
            <a href="#" onClick={() => showPage("about")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">About Us</a>
            <a href="#" onClick={() => showPage("contact")} className="block text-white/40 text-[0.78rem] mb-2 hover:text-white transition-colors no-underline">Contact</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-[0.65rem]">© 2025 Labour Law · Bar Council of India Compliant · New Delhi, India</div>
          <div className="text-white/40 text-[0.65rem]">Privacy Policy · Terms of Use · Disclaimer</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
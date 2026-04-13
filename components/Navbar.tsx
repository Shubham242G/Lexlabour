"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getActivePage = () => {
    const path = pathname.substring(1);
    if (path === "" || path === "home") return "home";
    return path;
  };

  const activePage = getActivePage();

  const showPage = (page: string) => {
    if (page === "home") {
      router.push("/");
    } else {
      router.push(`/${page}`);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[60px] transition-all duration-300 ${
      scrolled ? "h-[60px] shadow-lg bg-[#061526]" : "h-[72px] bg-[#061526]"
    } border-b border-white/10`}>
      <a href="#" onClick={() => showPage("home")} className="font-['Bebas_Neue'] text-[1.6rem] tracking-[0.12em] text-white no-underline flex items-center gap-3">
        <Image 
                        src="/assets/logo.png" 
                        alt="Labour Law Logo" 
                        width={300} 
                        height={300} 
                        className="w-150 h-150 object-contain mr-30"
                      />
      </a>
      <ul className="flex items-center gap-[2px] list-none">
  <li><a href="#" onClick={() => showPage("home")} className={`text-[0.72rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded transition-colors font-medium ${
    activePage === "home" ? "text-[#A8C4E0]" : "text-white/65 hover:text-[#A8C4E0]"
  }`}>Home</a></li>
  <li><div className="w-px h-3.5 bg-white/20 mx-1.5"></div></li>
  <li><a href="#" onClick={() => showPage("about")} className={`text-[0.72rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded transition-colors font-medium ${
    activePage === "about" ? "text-[#A8C4E0]" : "text-white/65 hover:text-[#A8C4E0]"
  }`}>About</a></li>
  <li><a href="#" onClick={() => showPage("contact")} className={`text-[0.72rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded transition-colors font-medium ${
    activePage === "contact" ? "text-[#A8C4E0]" : "text-white/65 hover:text-[#A8C4E0]"
  }`}>Contact</a></li>
</ul>

{/* Portal Buttons with Custom Icons */}
<div className="flex gap-2.5">
  <a
    href="#"
    onClick={() => showPage("employer")}
    className="px-5 py-2 text-[0.7rem] tracking-[0.1em] uppercase font-medium rounded bg-white text-[#061526] border border-white hover:bg-[#E8F0FA] transition-all flex items-center gap-2"
  >
    <img src="/assets/employer-portal.png" alt="Employer" className="w-4 h-4" />
    For Employer
  </a>
  <a
    href="#"
    onClick={() => showPage("employee")}
    className="px-5 py-2 text-[0.7rem] tracking-[0.1em] uppercase font-medium rounded border border-white/30 text-white hover:bg-white/10 transition-all flex items-center gap-2"
  >
    <img src="/assets/employee-portal.png" alt="Employee" className="w-4 h-4" />
    For Employee 
  </a>
</div>
    </nav>
  );
};

export default Navbar;
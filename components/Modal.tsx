"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    openModal?: (type: string) => void;
  }
}

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<"employer" | "employee">("employer");

  useEffect(() => {
    window.openModal = (type: string) => {
      setModalType(type as "employer" | "employee");
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const handleSubmit = () => {
    alert("Thank you. We will contact you within 24 hours to confirm your consultation.");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[1000] bg-black/88 flex items-center justify-center transition-opacity duration-400 backdrop-blur-md ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={(e) => e.target === e.currentTarget && closeModal()}>
      <div className={`bg-[#1E3A5F] border border-white/25 p-13 max-w-[480px] w-[90%] relative transition-transform duration-400 ${isOpen ? "translate-y-0" : "translate-y-5"}`}>
        <button className="absolute top-4.5 right-4.5 bg-none border-none text-white/65 text-xl cursor-pointer" onClick={closeModal}>✕</button>
        <div className="eyebrow mb-2.5">Free Consultation</div>
        <h3 className="font-['Playfair_Display'] text-[1.5rem] font-semibold mb-1.5">{modalType === "employer" ? "Employer Consultation" : "Employee Consultation"}</h3>
        <p className="text-[0.8rem] text-white/65 mb-7">{modalType === "employer" ? "30 minutes, no charge. We will review your compliance position and advise on priority steps." : "30 minutes, no charge. Tell us what has happened and we will explain your legal options."}</p>
        <div className="mb-5.5">
          <label className="block text-[0.6rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-2">Full Name</label>
          <input type="text" placeholder="Your name" className="w-full bg-white/5 border-none border-b border-white/15 text-white font-['DM_Sans'] text-[0.88rem] py-3 outline-none focus:border-[#A8C4E0] transition-colors" />
        </div>
        <div className="mb-5.5">
          <label className="block text-[0.6rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-2">Contact (Phone or Email)</label>
          <input type="text" placeholder="+91 or email address" className="w-full bg-white/5 border-none border-b border-white/15 text-white font-['DM_Sans'] text-[0.88rem] py-3 outline-none focus:border-[#A8C4E0] transition-colors" />
        </div>
        <div className="mb-5.5">
          <label className="block text-[0.6rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-2">Brief Description</label>
          <textarea style={{ height: "80px" }} placeholder="Describe your situation briefly." className="w-full bg-white/5 border-none border-b border-white/15 text-white font-['DM_Sans'] text-[0.88rem] py-3 outline-none focus:border-[#A8C4E0] transition-colors resize-vertical"></textarea>
        </div>
        <button className="btn btn-gold w-full justify-center" onClick={handleSubmit}>Request Consultation Callback</button>
      </div>
    </div>
  );
};

export default Modal;
"use client";

import { useState } from "react";
import Image from "next/image";

declare global {
  interface Window {
    openModal?: (type: string) => void;
  }
}

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<"employer" | "employee">("employer");

  const handleSubmit = () => {
    alert("Your enquiry has been received. A specialist will respond within one business day.");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Panel */}
      <div className="bg-[#061526] p-10 lg:p-20 border-r border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
        <div className="relative z-10">
          <div className="eyebrow mb-4">Contact Us</div>
          <h1 className="display text-[clamp(2.4rem,4.5vw,4rem)] mb-4.5">
            Speak with
            <br />
            a <em>specialist.</em>
          </h1>
          <p className="lead mb-10">
            Your first consultation is free. Tell us your situation and we will advise you on your legal position and next steps.
          </p>

          <div className="mb-8">
            <div className="text-[0.6rem] tracking-[0.18em] uppercase text-[#A8C4E0] mb-3.5">Who Are You?</div>
            <div className="grid grid-cols-2 gap-2.5">
              <div
                onClick={() => setSelectedType("employer")}
                className={`border border-white/15 p-5 transition-all duration-300 cursor-pointer ${
                  selectedType === "employer"
                    ? "border-white/40 bg-white/10"
                    : "hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className="mb-2">
                  <Image src="/assets/employer-portal.png" alt="Employer" width={28} height={28} />
                </div>
                <div className="text-[0.68rem] tracking-[0.12em] uppercase text-[#A8C4E0] mb-1">Employer</div>
                <div className="text-[0.74rem] text-white/65 leading-[1.55]">
                  Company, HR team, startup, or factory seeking compliance advisory
                </div>
              </div>
              <div
                onClick={() => setSelectedType("employee")}
                className={`border border-white/15 p-5 transition-all duration-300 cursor-pointer ${
                  selectedType === "employee"
                    ? "border-white/40 bg-white/10"
                    : "hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className="mb-2">
                  <Image src="/assets/employee-portal.png" alt="Employee" width={28} height={28} />
                </div>
                <div className="text-[0.68rem] tracking-[0.12em] uppercase text-[#A8C4E0] mb-1">Employee</div>
                <div className="text-[0.74rem] text-white/65 leading-[1.55]">
                  Individual seeking rights assistance, wage recovery, or legal representation
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-0">
            <div className="py-5 border-b border-white/10 flex gap-3.5">
              <div className="w-9 h-9 border border-white/15 flex items-center justify-center text-[0.9rem] flex-shrink-0">✉</div>
              <div>
                <div className="text-[0.58rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-0.5">Email</div>
                <div className="text-[0.84rem] text-white">hello@lexlabour.in</div>
                <div className="text-[0.7rem] text-white/30 mt-0.5">Replied within 24 working hours</div>
              </div>
            </div>
            <div className="py-5 border-b border-white/10 flex gap-3.5">
              <div className="w-9 h-9 border border-white/15 flex items-center justify-center text-[0.9rem] flex-shrink-0">☎</div>
              <div>
                <div className="text-[0.58rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-0.5">Telephone</div>
                <div className="text-[0.84rem] text-white">+91 11 4000 0000</div>
                <div className="text-[0.7rem] text-white/30 mt-0.5">Monday – Saturday · 10:00am – 7:00pm IST</div>
              </div>
            </div>
            <div className="py-5 border-b border-white/10 flex gap-3.5">
              <div className="w-9 h-9 border border-white/15 flex items-center justify-center text-[0.9rem] flex-shrink-0">💬</div>
              <div>
                <div className="text-[0.58rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-0.5">WhatsApp</div>
                <div className="text-[0.84rem] text-white">+91 98100 00000</div>
                <div className="text-[0.7rem] text-white/30 mt-0.5">For urgent queries</div>
              </div>
            </div>
            <div className="py-5 flex gap-3.5">
              <div className="w-9 h-9 border border-white/15 flex items-center justify-center text-[0.9rem] flex-shrink-0">📍</div>
              <div>
                <div className="text-[0.58rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-0.5">Office</div>
                <div className="text-[0.84rem] text-white">New Delhi, India</div>
                <div className="text-[0.7rem] text-white/30 mt-0.5">Connaught Place · By appointment only</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="bg-white/5 p-10 lg:p-20">
        <h2 className="font-['Playfair_Display'] text-[1.6rem] font-semibold mb-2">Send an Enquiry</h2>
        <p className="text-[0.82rem] text-white/65 mb-9">
          Complete the form below. A qualified specialist will review your matter and respond within one business day.
        </p>

        <div className="grid grid-cols-2 gap-5">
          <div className="mb-5.5">
            <label className="block text-[0.6rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-2">First Name *</label>
            <input
              type="text"
              placeholder="Your first name"
              className="w-full bg-white/5 border-none border-b border-white/15 text-white font-['DM_Sans'] text-[0.88rem] py-3 outline-none focus:border-[#A8C4E0] transition-colors"
            />
          </div>
          <div className="mb-5.5">
            <label className="block text-[0.6rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-2">Last Name *</label>
            <input
              type="text"
              placeholder="Your last name"
              className="w-full bg-white/5 border-none border-b border-white/15 text-white font-['DM_Sans'] text-[0.88rem] py-3 outline-none focus:border-[#A8C4E0] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="mb-5.5">
            <label className="block text-[0.6rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-2">Email Address *</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-white/5 border-none border-b border-white/15 text-white font-['DM_Sans'] text-[0.88rem] py-3 outline-none focus:border-[#A8C4E0] transition-colors"
            />
          </div>
          <div className="mb-5.5">
            <label className="block text-[0.6rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-2">Telephone</label>
            <input
              type="tel"
              placeholder="+91 xxxxx xxxxx"
              className="w-full bg-white/5 border-none border-b border-white/15 text-white font-['DM_Sans'] text-[0.88rem] py-3 outline-none focus:border-[#A8C4E0] transition-colors"
            />
          </div>
        </div>

        <div className="mb-5.5">
          <label className="block text-[0.6rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-2">I Am An *</label>
          <select className="w-full bg-white/5 border-none border-b border-white/15 text-white font-['DM_Sans'] text-[0.88rem] py-3 outline-none focus:border-[#A8C4E0] transition-colors appearance-none">
            <option className="bg-[#1a3a5c]">Employer / Company / HR Professional</option>
            <option className="bg-[#1a3a5c]">Employee / Worker</option>
            <option className="bg-[#1a3a5c]">Startup Founder</option>
            <option className="bg-[#1a3a5c]">Factory / Manufacturer</option>
            <option className="bg-[#1a3a5c]">Other</option>
          </select>
        </div>

        <div className="mb-5.5">
          <label className="block text-[0.6rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-2">Area of Legal Concern *</label>
          <select className="w-full bg-white/5 border-none border-b border-white/15 text-white font-['DM_Sans'] text-[0.88rem] py-3 outline-none focus:border-[#A8C4E0] transition-colors appearance-none">
            <option className="bg-[#1a3a5c]">— Employer Services —</option>
            <option className="bg-[#1a3a5c]">Labour Law Compliance</option>
            <option className="bg-[#1a3a5c]">HR & Employment Documentation</option>
            <option className="bg-[#1a3a5c]">Labour Law Audit</option>
            <option className="bg-[#1a3a5c]">Industrial Relations</option>
            <option className="bg-[#1a3a5c]">Termination / Disciplinary Action</option>
            <option className="bg-[#1a3a5c]">Social Security Compliance</option>
            <option className="bg-[#1a3a5c]">Startup & SME HR Desk</option>
            <option className="bg-[#1a3a5c]">— Employee Services —</option>
            <option className="bg-[#1a3a5c]">Salary / Wage Dispute</option>
            <option className="bg-[#1a3a5c]">PF / Gratuity Claim</option>
            <option className="bg-[#1a3a5c]">Wrongful Termination</option>
            <option className="bg-[#1a3a5c]">Workplace Harassment</option>
            <option className="bg-[#1a3a5c]">Labour Court Representation</option>
            <option className="bg-[#1a3a5c]">Employment Contract Review</option>
            <option className="bg-[#1a3a5c]">Other / Not Sure</option>
          </select>
        </div>

        <div className="mb-5.5">
          <label className="block text-[0.6rem] tracking-[0.16em] uppercase text-[#A8C4E0] mb-2">Brief Description of Your Matter *</label>
          <textarea
            placeholder="Please describe your situation briefly. Include relevant dates or context where possible. This helps us assign the appropriate specialist and give you a more useful initial response."
            className="w-full bg-white/5 border-none border-b border-white/15 text-white font-['DM_Sans'] text-[0.88rem] py-3 outline-none focus:border-[#A8C4E0] transition-colors resize-vertical h-[100px]"
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          className="btn btn-gold w-full justify-center mt-1"
        >
          Submit Enquiry — Response Within 24 Hours
        </button>

        <p className="text-[0.65rem] text-white/30 text-center mt-3.5 leading-relaxed">
          Your information is held in strict confidence. This form does not constitute legal advice or create a solicitor-client relationship. Bar Council of India Compliant.
        </p>
      </div>
    </div>
  );
}
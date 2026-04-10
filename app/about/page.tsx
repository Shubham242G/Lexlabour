"use client";

import { useRouter } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { ReactNode } from "react";

declare global {
  interface Window {
    openModal?: (type: string) => void;
  }
}

export default function AboutPage() {
  const router = useRouter();

  const showPage = (page: string) => {
    if (page === "home") {
      router.push("/");
    } else {
      router.push(`/${page}`);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero py-40 px-[60px] border-b border-white/15 bg-[#061526] max-lg:px-5 max-lg:pt-30 max-lg:pb-15">
        <div className="eyebrow mb-4">About LexLabour</div>
        <h1 className="display">
          17 Years.<br />One Specialisation.<br /><em>Two Sides Served.</em>
        </h1>
        <p className="lead max-w-[520px] mt-5">
          India's dedicated labour law advisory — representing employers who need compliance and employees who need justice with equal rigour since 2007.
        </p>
      </section>

      {/* About Body - Our Story & Why Labour Law Matters */}
      <div className="about-body grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 px-[60px] items-start max-lg:px-5 max-lg:py-12">
        <ScrollReveal>
          <div className="eyebrow mb-4">Our Story</div>
          <h2 className="sec-title mb-6">
            Built for India's<br /><em>working world.</em>
          </h2>
          <p className="text-[0.9rem] leading-[1.9] text-white/65 mb-4.5">
            LexLabour was established on a foundational principle: that both sides of the employment relationship deserve expert, accessible legal counsel. For too long, quality labour law advice was reserved for large corporations with in-house legal teams. <strong className="text-white font-normal">Individual employees and small businesses were left to navigate a complex statutory landscape alone.</strong>
          </p>
          <p className="text-[0.9rem] leading-[1.9] text-white/65 mb-4.5">
            Over 17 years of active practice across Delhi's Labour Courts, Industrial Tribunals, and High Court, our team has handled every category of labour dispute and compliance failure. We have seen what happens when businesses do not take compliance seriously — and what happens when employees do not know their rights.
          </p>
          <p className="text-[0.9rem] leading-[1.9] text-white/65 mb-8">
            We built LexLabour to prevent both. <strong className="text-white font-normal">Compliance for employers. Protection for employees.</strong> Both with the same standard of formal, qualified legal counsel.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button 
              onClick={() => window.openModal?.("employer")} 
              className="btn btn-gold"
            >
              Employer Consultation
            </button>
            <button 
              onClick={() => window.openModal?.("employee")} 
              className="btn btn-outline-gold"
            >
              Employee Consultation
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="eyebrow mb-4">Why Labour Law Matters</div>
          <div className="flex flex-col gap-0 border border-white/15">
            <div className="p-5.5 border-b border-white/15 flex gap-3.5">
              <span className="text-[#A8C4E0] text-base flex-shrink-0 mt-0.5">⚖</span>
              <div>
                <div className="text-[0.86rem] font-medium mb-1">Non-compliance is expensive</div>
                <div className="text-[0.76rem] text-white/65 leading-relaxed">
                  A single labour court case can cost more than years of advisory fees. Prevention is always the more economical path.
                </div>
              </div>
            </div>
            <div className="p-5.5 border-b border-white/15 flex gap-3.5">
              <span className="text-[#A8C4E0] text-base flex-shrink-0 mt-0.5">📜</span>
              <div>
                <div className="text-[0.86rem] font-medium mb-1">India's Labour Codes are transforming the law</div>
                <div className="text-[0.76rem] text-white/65 leading-relaxed">
                  29 central labour laws are being consolidated into 4 codes. Every employer needs an expert to navigate the transition.
                </div>
              </div>
            </div>
            <div className="p-5.5 border-b border-white/15 flex gap-3.5">
              <span className="text-[#A8C4E0] text-base flex-shrink-0 mt-0.5">🔍</span>
              <div>
                <div className="text-[0.86rem] font-medium mb-1">Inspections and enforcement are increasing</div>
                <div className="text-[0.76rem] text-white/65 leading-relaxed">
                  Labour department enforcement activity is intensifying across all sectors. Businesses must be inspection-ready at all times.
                </div>
              </div>
            </div>
            <div className="p-5.5 flex gap-3.5">
              <span className="text-[#A8C4E0] text-base flex-shrink-0 mt-0.5">👤</span>
              <div>
                <div className="text-[0.86rem] font-medium mb-1">Employees have strong statutory remedies</div>
                <div className="text-[0.76rem] text-white/65 leading-relaxed">
                  Indian labour law is strongly protective of employee rights. Exercising these rights effectively requires a qualified advocate.
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Team Section */}
      <div className="team-section px-[60px] pb-20 max-lg:px-5">
        <div className="eyebrow mb-3.5">Our Team</div>
        <h2 className="sec-title mb-10">
          Qualified advocates.<br /><em>17 years of practice.</em>
        </h2>
        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          <ScrollReveal>
            <div className="team-card bg-[#0B3C5D] p-10 transition-colors duration-350 hover:bg-[#1E3A5F]">
              <div className="avatar w-[72px] h-[72px] border border-white/30 flex items-center justify-center font-['Playfair_Display'] text-[1.8rem] font-bold text-white mb-5">A</div>
              <h3 className="font-['Playfair_Display'] text-[1.1rem] font-semibold mb-1">Adv. Arjun Kapoor</h3>
              <div className="team-role text-[0.62rem] tracking-[0.15em] uppercase text-[#A8C4E0] mb-3.5">Founder & Senior Partner</div>
              <p className="text-[0.78rem] text-white/65 leading-relaxed">
                17 years of labour law practice. Founder and principal advocate of LexLabour. Former legal counsel to three Fortune 500 companies in India. Specialises in industrial disputes, labour court representation, and compliance strategy.
              </p>
              <div className="bar-enroll text-[0.65rem] text-white/30 mt-4 tracking-[0.06em]">Enrolled — Bar Council of Delhi · 2007</div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="team-card bg-[#0B3C5D] p-10 transition-colors duration-350 hover:bg-[#1E3A5F]">
              <div className="avatar w-[72px] h-[72px] border border-white/30 flex items-center justify-center font-['Playfair_Display'] text-[1.8rem] font-bold text-white mb-5">S</div>
              <h3 className="font-['Playfair_Display'] text-[1.1rem] font-semibold mb-1">Adv. Shreya Nair</h3>
              <div className="team-role text-[0.62rem] tracking-[0.15em] uppercase text-[#A8C4E0] mb-3.5">Partner — Employer Advisory</div>
              <p className="text-[0.78rem] text-white/65 leading-relaxed">
                Specialist in HR compliance, employment documentation, and multi-statute labour law audits. Has advised 200+ businesses across manufacturing, IT, and services on statutory compliance and risk management.
              </p>
              <div className="bar-enroll text-[0.65rem] text-white/30 mt-4 tracking-[0.06em]">Enrolled — Bar Council of Delhi · 2014</div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="team-card bg-[#0B3C5D] p-10 transition-colors duration-350 hover:bg-[#1E3A5F]">
              <div className="avatar w-[72px] h-[72px] border border-white/30 flex items-center justify-center font-['Playfair_Display'] text-[1.8rem] font-bold text-white mb-5">R</div>
              <h3 className="font-['Playfair_Display'] text-[1.1rem] font-semibold mb-1">Adv. Rahul Desai</h3>
              <div className="team-role text-[0.62rem] tracking-[0.15em] uppercase text-[#A8C4E0] mb-3.5">Associate — Employee Rights</div>
              <p className="text-[0.78rem] text-white/65 leading-relaxed">
                Dedicated employee rights litigator. Specialises in wrongful termination, PF and Gratuity claims, salary disputes, and workplace harassment proceedings before Labour Courts and Tribunals.
              </p>
              <div className="bar-enroll text-[0.65rem] text-white/30 mt-4 tracking-[0.06em]">Enrolled — Bar Council of Delhi · 2019</div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Industries Section */}
      <div className="industries-section bg-white/5 border-t border-white/10 py-[70px] px-[60px] max-lg:px-5">
        <div className="eyebrow mb-3.5">Industries Served</div>
        <h2 className="sec-title mb-0">
          We advise across<br /><em>every sector.</em>
        </h2>
        <div className="ind-grid grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mt-10">
          <ScrollReveal>
            <div className="ind-item bg-[#0B3C5D] p-7 text-center transition-colors duration-300 hover:bg-[#1E3A5F]">
              <div className="ind-icon text-[1.6rem] mb-2.5">🏭</div>
              <div className="ind-name text-[0.74rem] tracking-[0.06em] text-white/65 leading-5">Manufacturing & Factories</div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="ind-item bg-[#0B3C5D] p-7 text-center transition-colors duration-300 hover:bg-[#1E3A5F]">
              <div className="ind-icon text-[1.6rem] mb-2.5">💻</div>
              <div className="ind-name text-[0.74rem] tracking-[0.06em] text-white/65 leading-5">Information Technology</div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="ind-item bg-[#0B3C5D] p-7 text-center transition-colors duration-300 hover:bg-[#1E3A5F]">
              <div className="ind-icon text-[1.6rem] mb-2.5">🏗️</div>
              <div className="ind-name text-[0.74rem] tracking-[0.06em] text-white/65 leading-5">Construction</div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="ind-item bg-[#0B3C5D] p-7 text-center transition-colors duration-300 hover:bg-[#1E3A5F]">
              <div className="ind-icon text-[1.6rem] mb-2.5">🛒</div>
              <div className="ind-name text-[0.74rem] tracking-[0.06em] text-white/65 leading-5">Retail & E-Commerce</div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="ind-item bg-[#0B3C5D] p-7 text-center transition-colors duration-300 hover:bg-[#1E3A5F]">
              <div className="ind-icon text-[1.6rem] mb-2.5">🏥</div>
              <div className="ind-name text-[0.74rem] tracking-[0.06em] text-white/65 leading-5">Healthcare & Pharma</div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="ind-item bg-[#0B3C5D] p-7 text-center transition-colors duration-300 hover:bg-[#1E3A5F]">
              <div className="ind-icon text-[1.6rem] mb-2.5">🍽️</div>
              <div className="ind-name text-[0.74rem] tracking-[0.06em] text-white/65 leading-5">Hospitality & F&B</div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="ind-item bg-[#0B3C5D] p-7 text-center transition-colors duration-300 hover:bg-[#1E3A5F]">
              <div className="ind-icon text-[1.6rem] mb-2.5">🚀</div>
              <div className="ind-name text-[0.74rem] tracking-[0.06em] text-white/65 leading-5">Startups & SMEs</div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="ind-item bg-[#0B3C5D] p-7 text-center transition-colors duration-300 hover:bg-[#1E3A5F]">
              <div className="ind-icon text-[1.6rem] mb-2.5">🚚</div>
              <div className="ind-name text-[0.74rem] tracking-[0.06em] text-white/65 leading-5">Logistics & Supply Chain</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
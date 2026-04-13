"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

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
      <section className="about-hero py-32 px-[60px] border-b border-white/15 bg-[#061526] max-lg:px-5 max-lg:pt-24 max-lg:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-4">About Labour Law</div>
          <h1 className="display">
            17 Years.<br />One Specialisation.<br /><em>Two Sides Served.</em>
          </h1>
          <p className="lead max-w-[560px] mt-6">
            India's dedicated labour law advisory — representing employers who need compliance and employees who need justice with equal rigour since 2007.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-[60px] py-16 max-lg:px-5 max-lg:py-12">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#1E3A5F] to-[#0B3C5D] rounded-2xl border border-white/15 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Founder Image */}
              <div className="lg:col-span-1">
                <div className="h-full w-full min-h-[350px] bg-[#061526]/50 flex items-center justify-center p-8">
                  <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden border-2 border-[#A8C4E0]/30">
                    <Image
                      src="/assets/GAURAV-SHARMA-UNSAATHI.jpg"
                      alt="Gaurav Sharma - Founder of Labour Law"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Founder Content */}
              <div className="lg:col-span-2 p-8 lg:p-10">
                <div className="eyebrow mb-3">Founder & Managing Partner</div>
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-white mb-4">
                  Gaurav Sharma
                </h2>
                <div className="w-16 h-0.5 bg-[#A8C4E0] mb-6"></div>
                <div className="space-y-4">
                  <p className="text-[0.95rem] leading-relaxed text-white/70">
                    Gaurav Sharma established LexLabour with a vision to create a law firm that combines deep legal expertise with a genuine commitment to client success. With over 17 years of experience, he has earned a reputation as a formidable litigator and a trusted advisor.
                  </p>
                  <p className="text-[0.95rem] leading-relaxed text-white/70">
                    His practice focuses on complex litigation and advisory, but his passion lies in building lasting relationships with clients and mentoring the next generation of legal talent at the firm.
                  </p>
                  <p className="text-[0.95rem] leading-relaxed text-white/70">
                    With a sharp legal mind and a strong commitment to justice. He graduated from Delhi University with an LLB and is a dedicated advocate for his clients rights in the courtroom. His relentless pursuit of favorable outcomes for his clients has earned him a reputation as a formidable legal advocate.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <button 
                    onClick={() => window.openModal?.("employer")} 
                    className="btn btn-gold"
                  >
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* About Body - Our Story & Why Labour Law Matters */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-20 px-[60px] max-lg:px-5 max-lg:py-12">
          {/* Left Column - Our Story */}
          <ScrollReveal>
            <div className="h-full flex flex-col">
              <div className="eyebrow mb-4">Our Story</div>
              <h2 className="sec-title mb-6">
                Built for India's<br /><em>working world.</em>
              </h2>
              <div className="space-y-5 flex-1">
                <p className="text-[0.95rem] leading-[1.85] text-white/65">
                  Labour Law was established on a foundational principle: that both sides of the employment relationship deserve expert, accessible legal counsel. For too long, quality labour law advice was reserved for large corporations with in-house legal teams. <strong className="text-white font-medium">Individual employees and small businesses were left to navigate a complex statutory landscape alone.</strong>
                </p>
                <p className="text-[0.95rem] leading-[1.85] text-white/65">
                  Over 17 years of active practice across Delhi's Labour Courts, Industrial Tribunals, and High Court, our team has handled every category of labour dispute and compliance failure. We have seen what happens when businesses do not take compliance seriously — and what happens when employees do not know their rights.
                </p>
                <p className="text-[0.95rem] leading-[1.85] text-white/65">
                  We built LexLabour to prevent both. <strong className="text-white font-medium">Compliance for employers. Protection for employees.</strong> Both with the same standard of formal, qualified legal counsel.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap mt-10">
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
            </div>
          </ScrollReveal>

          {/* Right Column - Why Labour Law Matters */}
          <ScrollReveal>
            <div className="h-full flex flex-col">
              <div className="eyebrow mb-4">Why Labour Law Matters</div>
              <div className="flex flex-col gap-0 border border-white/15 rounded-sm overflow-hidden flex-1">
                <div className="p-6 border-b border-white/15 flex gap-4 hover:bg-white/5 transition-colors">
                  <span className="text-[#A8C4E0] text-xl flex-shrink-0 mt-0.5">⚖</span>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-white mb-1.5">Non-compliance is expensive</div>
                    <div className="text-[0.8rem] text-white/60 leading-relaxed">
                      A single labour court case can cost more than years of advisory fees. Prevention is always the more economical path.
                    </div>
                  </div>
                </div>
                <div className="p-6 border-b border-white/15 flex gap-4 hover:bg-white/5 transition-colors">
                  <span className="text-[#A8C4E0] text-xl flex-shrink-0 mt-0.5">📜</span>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-white mb-1.5">India's Labour Codes are transforming the law</div>
                    <div className="text-[0.8rem] text-white/60 leading-relaxed">
                      29 central labour laws are being consolidated into 4 codes. Every employer needs an expert to navigate the transition.
                    </div>
                  </div>
                </div>
                <div className="p-6 border-b border-white/15 flex gap-4 hover:bg-white/5 transition-colors">
                  <span className="text-[#A8C4E0] text-xl flex-shrink-0 mt-0.5">🔍</span>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-white mb-1.5">Inspections and enforcement are increasing</div>
                    <div className="text-[0.8rem] text-white/60 leading-relaxed">
                      Labour department enforcement activity is intensifying across all sectors. Businesses must be inspection-ready at all times.
                    </div>
                  </div>
                </div>
                <div className="p-6 flex gap-4 hover:bg-white/5 transition-colors">
                  <span className="text-[#A8C4E0] text-xl flex-shrink-0 mt-0.5">👤</span>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-white mb-1.5">Employees have strong statutory remedies</div>
                    <div className="text-[0.8rem] text-white/60 leading-relaxed">
                      Indian labour law is strongly protective of employee rights. Exercising these rights effectively requires a qualified advocate.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Industries Section */}
      <div className="industries-section bg-white/5 border-t border-white/10 py-20 px-[60px] max-lg:px-5 max-lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="eyebrow justify-center mb-4">Industries Served</div>
            <h2 className="sec-title">
              We advise across<br /><em>every sector.</em>
            </h2>
          </div>
          <div className="ind-grid grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent mt-6">
            <ScrollReveal>
              <div className="ind-item bg-[#0B3C5D] p-6 text-center transition-all duration-300 hover:bg-[#1E3A5F] hover:translate-y-[-2px] rounded-lg border border-white/10">
                <div className="ind-icon text-2xl mb-3">🏭</div>
                <div className="ind-name text-[0.8rem] tracking-[0.06em] text-white/70 leading-tight">Manufacturing & Factories</div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="ind-item bg-[#0B3C5D] p-6 text-center transition-all duration-300 hover:bg-[#1E3A5F] hover:translate-y-[-2px] rounded-lg border border-white/10">
                <div className="ind-icon text-2xl mb-3">💻</div>
                <div className="ind-name text-[0.8rem] tracking-[0.06em] text-white/70 leading-tight">Information Technology</div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="ind-item bg-[#0B3C5D] p-6 text-center transition-all duration-300 hover:bg-[#1E3A5F] hover:translate-y-[-2px] rounded-lg border border-white/10">
                <div className="ind-icon text-2xl mb-3">🏗️</div>
                <div className="ind-name text-[0.8rem] tracking-[0.06em] text-white/70 leading-tight">Construction</div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="ind-item bg-[#0B3C5D] p-6 text-center transition-all duration-300 hover:bg-[#1E3A5F] hover:translate-y-[-2px] rounded-lg border border-white/10">
                <div className="ind-icon text-2xl mb-3">🛒</div>
                <div className="ind-name text-[0.8rem] tracking-[0.06em] text-white/70 leading-tight">Retail & E-Commerce</div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="ind-item bg-[#0B3C5D] p-6 text-center transition-all duration-300 hover:bg-[#1E3A5F] hover:translate-y-[-2px] rounded-lg border border-white/10">
                <div className="ind-icon text-2xl mb-3">🏥</div>
                <div className="ind-name text-[0.8rem] tracking-[0.06em] text-white/70 leading-tight">Healthcare & Pharma</div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="ind-item bg-[#0B3C5D] p-6 text-center transition-all duration-300 hover:bg-[#1E3A5F] hover:translate-y-[-2px] rounded-lg border border-white/10">
                <div className="ind-icon text-2xl mb-3">🍽️</div>
                <div className="ind-name text-[0.8rem] tracking-[0.06em] text-white/70 leading-tight">Hospitality & F&B</div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="ind-item bg-[#0B3C5D] p-6 text-center transition-all duration-300 hover:bg-[#1E3A5F] hover:translate-y-[-2px] rounded-lg border border-white/10">
                <div className="ind-icon text-2xl mb-3">🚀</div>
                <div className="ind-name text-[0.8rem] tracking-[0.06em] text-white/70 leading-tight">Startups & SMEs</div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="ind-item bg-[#0B3C5D] p-6 text-center transition-all duration-300 hover:bg-[#1E3A5F] hover:translate-y-[-2px] rounded-lg border border-white/10">
                <div className="ind-icon text-2xl mb-3">🚚</div>
                <div className="ind-name text-[0.8rem] tracking-[0.06em] text-white/70 leading-tight">Logistics & Supply Chain</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";

declare global {
  interface Window {
    openModal?: (type: string) => void;
  }
}

export default function HomePage() {
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
      <section className="relative min-h-screen bg-[#061526] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-radial from-white/5 to-transparent pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-[60px] pt-20 pb-0 relative z-10 min-h-screen">
          <div className="py-20">
            <div className="eyebrow mb-7">India&apos;s Labour Law Advisory</div>

            <h1 className="display mb-7">
              Expert
              <br />
              Labour Law.
              <br />
              <em>For Both Sides.</em>
            </h1>

            <p className="lead max-w-[440px] mb-12">
              Comprehensive legal advisory for employers who need compliance, and employees who need protection. Formal counsel. Clear advice. Proven results.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showPage("employer");
                }}
                className="btn btn-gold flex items-center gap-2"
              >
                <Image src="/assets/employer-advisory.png" alt="Employer" width={18} height={18} />
                Employer Advisory
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showPage("employee");
                }}
                className="btn btn-outline-gold flex items-center gap-2"
              >
                <Image src="/assets/empoyee-assistance.png" alt="Employee" width={18} height={18} />
                Employee Assistance
              </a>
            </div>
          </div>

          <div className="relative ml-10 max-lg:ml-0">
            <div className="absolute left-1/2 top-10 bottom-10 w-px bg-white/15 max-lg:hidden"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B3C5D] border border-white/12 py-2.5 px-3.5 text-[0.6rem] tracking-[0.14em] uppercase text-white/40 whitespace-nowrap z-10 max-lg:hidden">
              Choose Your Path
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
              <div className="bg-white/10 p-13 relative overflow-hidden flex flex-col gap-6 transition-all duration-400 min-h-[420px] hover:bg-white/15 border border-white/12 border-r-0 hover:border-white/50 hover:shadow-[-8px_0_40px_rgba(168,196,224,0.1)]">
                <div>
                  <div className="inline-flex items-center gap-2 text-[0.6rem] tracking-[0.18em] uppercase border border-white/20 py-1.5 px-3.5 w-fit text-white/65">
                    <Image src="/assets/employer-portal.png" alt="Employer" width={14} height={14} />
                    For Employers
                  </div>

                  <h2 className="font-['Playfair_Display'] text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.01em] mt-4 mb-3">
                    Employer
                    <br />
                    Advisory Portal
                  </h2>

                  <p className="text-[0.84rem] leading-[1.8] text-white/65 mb-4">
                    Compliance, HR documentation, audits, industrial relations — full-service labour law support for businesses of every size.
                  </p>

                  <ul className="list-none flex flex-col gap-2">
                    <li className="text-[0.78rem] text-white/30 flex items-center gap-2.5">
                      <span className="text-[#A8C4E0]">—</span> Labour Law Compliance
                    </li>
                    <li className="text-[0.78rem] text-white/30 flex items-center gap-2.5">
                      <span className="text-[#A8C4E0]">—</span> HR & Employment Documentation
                    </li>
                    <li className="text-[0.78rem] text-white/30 flex items-center gap-2.5">
                      <span className="text-[#A8C4E0]">—</span> Labour Audits & Risk Assessment
                    </li>
                    <li className="text-[0.78rem] text-white/30 flex items-center gap-2.5">
                      <span className="text-[#A8C4E0]">—</span> Industrial Relations Advisory
                    </li>
                    <li className="text-[0.78rem] text-white/30 flex items-center gap-2.5">
                      <span className="text-[#A8C4E0]">—</span> Startup & SME HR Desk
                    </li>
                  </ul>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      showPage("employer");
                    }}
                    className="flex items-center gap-2.5 text-[0.72rem] tracking-[0.12em] uppercase font-medium no-underline transition-all text-white hover:gap-4"
                  >
                    Enter Employer Portal
                    <div className="w-11 h-11 border border-white flex items-center justify-center text-base text-[#061526] flex-shrink-0 bg-white">
                      <Image src="/assets/employer-portal.png" alt="Arrow" width={16} height={16} />
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white/5 p-13 relative overflow-hidden flex flex-col gap-6 transition-all duration-400 min-h-[420px] hover:bg-white/10 border border-white/12 hover:border-white/50 hover:shadow-[8px_0_40px_rgba(168,196,224,0.08)]">
                <div>
                  <div className="inline-flex items-center gap-2 text-[0.6rem] tracking-[0.18em] uppercase border border-white/20 py-1.5 px-3.5 w-fit text-[#A8C4E0]">
                    <Image src="/assets/employee-portal.png" alt="Employee" width={14} height={14} />
                    For Employees
                  </div>

                  <h2 className="font-['Playfair_Display'] text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.01em] mt-4 mb-3">
                    Employee
                    <br />
                    Assistance Portal
                  </h2>

                  <p className="text-[0.84rem] leading-[1.8] text-white/65 mb-4">
                    Know your rights. Recover unpaid wages. Challenge wrongful termination. Get legal help for any workplace matter.
                  </p>

                  <ul className="list-none flex flex-col gap-2">
                    <li className="text-[0.78rem] text-white/30 flex items-center gap-2.5">
                      <span className="text-[#A8C4E0]">—</span> Know Your Employee Rights
                    </li>
                    <li className="text-[0.78rem] text-white/30 flex items-center gap-2.5">
                      <span className="text-[#A8C4E0]">—</span> Salary & Wage Dispute Recovery
                    </li>
                    <li className="text-[0.78rem] text-white/30 flex items-center gap-2.5">
                      <span className="text-[#A8C4E0]">—</span> Wrongful Termination Redress
                    </li>
                    <li className="text-[0.78rem] text-white/30 flex items-center gap-2.5">
                      <span className="text-[#A8C4E0]">—</span> PF & Gratuity Claims
                    </li>
                    <li className="text-[0.78rem] text-white/30 flex items-center gap-2.5">
                      <span className="text-[#A8C4E0]">—</span> Labour Court Representation
                    </li>
                  </ul>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      showPage("employee");
                    }}
                    className="flex items-center gap-2.5 text-[0.72rem] tracking-[0.12em] uppercase font-medium no-underline transition-all text-[#A8C4E0] hover:gap-4"
                  >
                    Enter Employee Portal
                    <div className="w-11 h-11 border border-white flex items-center justify-center text-base text-[#A8C4E0] flex-shrink-0">
                      <Image src="/assets/employee-portal.png" alt="Arrow" width={16} height={16} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#061526] border-t border-white/10 grid grid-cols-2 md:grid-cols-4 relative z-10">
          <div className="p-7 border-r border-white/15 hover:bg-[#1E3A5F] transition-colors">
            <div className="font-['Playfair_Display'] text-[2.4rem] font-bold text-white leading-none mb-1.5">17+</div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-white/65 leading-5">
              Years of Labour Law Practice
            </div>
          </div>

          <div className="p-7 border-r border-white/15 hover:bg-[#1E3A5F] transition-colors">
            <div className="font-['Playfair_Display'] text-[2.4rem] font-bold text-white leading-none mb-1.5">800+</div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-white/65 leading-5">
              Businesses Advised on Compliance
            </div>
          </div>

          <div className="p-7 border-r border-white/15 hover:bg-[#1E3A5F] transition-colors">
            <div className="font-['Playfair_Display'] text-[2.4rem] font-bold text-white leading-none mb-1.5">2,000+</div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-white/65 leading-5">
              Employee Cases Resolved
            </div>
          </div>

          <div className="p-7 hover:bg-[#1E3A5F] transition-colors">
            <div className="font-['Playfair_Display'] text-[2.4rem] font-bold text-white leading-none mb-1.5">4</div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-white/65 leading-5">
              Labour Codes Covered in Full
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white/5 border-y border-white/10 py-[70px] px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-lg:px-5 max-lg:py-12">
        <div>
          <div className="eyebrow mb-4">About LexLabour</div>

          <h2 className="sec-title mb-5.5">
            India&apos;s dedicated
            <br />
            <em>labour law firm.</em>
          </h2>

          <p className="text-[0.9rem] leading-[1.85] text-white/65 mb-4">
            LexLabour was established to serve two equally important clients: the{" "}
            <strong className="text-white font-normal">business that needs to stay compliant and protected</strong>, and the{" "}
            <strong className="text-white font-normal">worker whose rights have been violated</strong>. For 17 years, we have represented both sides with the same rigour, expertise, and commitment to clear outcomes.
          </p>

          <p className="text-[0.9rem] leading-[1.85] text-white/65 mb-4">
            Based in New Delhi with a pan-India practice, we advise companies from startups to large manufacturers, and represent individual employees before Labour Courts, Industrial Tribunals, and the High Court.
          </p>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              showPage("about");
            }}
            className="btn btn-outline-gold mt-2"
          >
            Learn About Us →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/10">
          <div className="bg-[#0B3C5D] p-6 hover:bg-[#224268] transition-colors">
            <div className="font-['Bebas_Neue'] text-[2.5rem] text-white opacity-15 leading-none mb-1.5">01</div>
            <div className="text-[0.82rem] font-medium text-white mb-1">Formal Legal Expertise</div>
            <div className="text-[0.74rem] text-white/65 leading-[1.65]">
              Qualified advocates with 17+ years of specialisation in labour and employment law.
            </div>
          </div>

          <div className="bg-[#0B3C5D] p-6 hover:bg-[#224268] transition-colors">
            <div className="font-['Bebas_Neue'] text-[2.5rem] text-white opacity-15 leading-none mb-1.5">02</div>
            <div className="text-[0.82rem] font-medium text-white mb-1">Prevention First</div>
            <div className="text-[0.74rem] text-white/65 leading-[1.65]">
              We structure your compliance to prevent disputes before they arise.
            </div>
          </div>

          <div className="bg-[#0B3C5D] p-6 hover:bg-[#224268] transition-colors">
            <div className="font-['Bebas_Neue'] text-[2.5rem] text-white opacity-15 leading-none mb-1.5">03</div>
            <div className="text-[0.82rem] font-medium text-white mb-1">Clear Communication</div>
            <div className="text-[0.74rem] text-white/65 leading-[1.65]">
              Legal advice in plain language — no jargon, no ambiguity.
            </div>
          </div>

          <div className="bg-[#0B3C5D] p-6 hover:bg-[#224268] transition-colors">
            <div className="font-['Bebas_Neue'] text-[2.5rem] text-white opacity-15 leading-none mb-1.5">04</div>
            <div className="text-[0.82rem] font-medium text-white mb-1">Defined Timelines</div>
            <div className="text-[0.74rem] text-white/65 leading-[1.65]">
              Every matter has committed turnaround times. We meet them.
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-[60px] max-lg:px-5">
        <div className="eyebrow mb-4">Latest Updates</div>

        <h2 className="sec-title">
          Labour Law Updates
          <br />
          <em>You Need to Know</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mt-12">
          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-8 hover:bg-[#1E3A5F] transition-colors">
              <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[#A8C4E0] mb-3.5">December 2024</div>
              <h4 className="font-['Playfair_Display'] text-base font-semibold mb-2.5 leading-[1.4]">
                4 Labour Codes: Current Implementation Status
              </h4>
              <p className="text-[0.78rem] text-white/65 leading-relaxed">
                All 4 Labour Codes have been enacted but await full state implementation. Here is what employers and employees must do in the interim.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-8 hover:bg-[#1E3A5F] transition-colors">
              <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[#A8C4E0] mb-3.5">November 2024</div>
              <h4 className="font-['Playfair_Display'] text-base font-semibold mb-2.5 leading-[1.4]">
                POSH Act: Updated Guidance on ICC Constitution
              </h4>
              <p className="text-[0.78rem] text-white/65 leading-relaxed">
                New guidance on constituting valid Internal Complaints Committees — including external member requirements and mandatory annual reports.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-8 hover:bg-[#1E3A5F] transition-colors">
              <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[#A8C4E0] mb-3.5">October 2024</div>
              <h4 className="font-['Playfair_Display'] text-base font-semibold mb-2.5 leading-[1.4]">
                Gig Workers & the Social Security Code
              </h4>
              <p className="text-[0.78rem] text-white/65 leading-relaxed">
                The Social Security Code, 2020 introduces social security obligations for gig and platform workers. What aggregator businesses need to prepare.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="text-right mt-7">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              showPage("insights");
            }}
            className="btn btn-outline-gold"
          >
            View All Insights →
          </a>
        </div>
      </div>

      <div className="bg-white py-[70px] px-[60px] flex flex-col md:flex-row items-center justify-between gap-10 max-lg:px-5">
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#061526] max-w-[480px] leading-[1.2]">
          Speak with a Labour Law Specialist.
          <br />
          First Consultation Is Free.
        </h2>

        <div className="flex gap-3.5 flex-shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.openModal?.("employer");
            }}
            className="btn btn-white flex items-center gap-2"
          >
            <Image src="/assets/employer-consultation.png" alt="Employer" width={25} height={25} />
            Employer Consultation
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.openModal?.("employee");
            }}
            className="btn btn-outline-gold border-[#061526] text-[#061526] hover:bg-black/5 flex items-center gap-2"
          >
            <Image src="/assets/employee-consultation.png" alt="Employee" width={25} height={25} />
            Employee Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useRouter } from "next/navigation";
import ScrollReveal from "../../components/ScrollReveal";

declare global {
  interface Window {
    openModal?: (type: string) => void;
  }
}

export default function EmployerPortal() {
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
      <section className="relative py-40 px-[60px] bg-[#061526] border-b border-white/10 overflow-hidden max-lg:px-5 max-lg:pt-30 max-lg:pb-15">
        <div className="absolute pointer-events-none rounded-full top-[-200px] right-[-200px] w-[600px] h-[600px] bg-radial from-white/5 to-transparent"></div>
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-15 items-end">
          <div>
            <div className="eyebrow mb-4">Employer Advisory Portal</div>
            <h1 className="display">
              Compliance.
              <br />
              Protection.
              <br />
              <em>Certainty.</em>
            </h1>
            <p className="lead max-w-[500px] mt-5">
              Comprehensive labour law services for companies, HR departments, factories, and startups. We keep your business legally sound — before inspectors arrive.
            </p>
            <div className="flex gap-3.5 mt-9 flex-wrap">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.openModal?.("employer");
                }}
                className="btn btn-gold"
              >
                Book Free Compliance Review
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showPage("library");
                }}
                className="btn btn-outline-gold"
              >
                Read the Labour Codes
              </a>
            </div>
          </div>
          <div className="border border-white/15 p-7 bg-[#1E3A5F] flex-shrink-0 min-w-[240px]">
            <div className="text-[0.6rem] tracking-[0.18em] uppercase text-[#A8C4E0] mb-2">Switch Portal</div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showPage("employer");
              }}
              className="p-3.5 border border-white/15 text-[0.74rem] tracking-[0.1em] uppercase font-medium no-underline flex items-center justify-between transition-all text-white bg-white/10 border-white/30"
            >
              🏢 Employer Advisory <span className="text-base">✓</span>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showPage("employee");
              }}
              className="p-3.5 border border-white/15 text-[0.74rem] tracking-[0.1em] uppercase font-medium no-underline flex items-center justify-between transition-all text-white/65 hover:text-white mt-3"
            >
              👤 Employee Assistance <span className="text-base">→</span>
            </a>
            <div className="mt-4 pt-4 border-t border-white/15">
              <div className="text-[0.65rem] text-white/65 leading-relaxed">
                Are you an <strong className="text-white">employee</strong> looking for rights assistance? Switch to the Employee Portal.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-[70px] px-[60px] max-lg:px-5">
        <div className="flex justify-between items-end flex-wrap gap-5 mb-12">
          <div>
            <div className="eyebrow mb-3.5">Our Services</div>
            <h2 className="sec-title">
              Eight practice areas.
              <br />
              <em>Complete coverage.</em>
            </h2>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.openModal?.("employer");
            }}
            className="btn btn-outline-gold"
          >
            Book a Consultation
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-9 relative overflow-hidden transition-colors hover:bg-[#1E3A5F] border-b-2 border-transparent hover:border-white/30">
              <div className="absolute right-5 top-4 font-['Bebas_Neue'] text-4xl text-white opacity-5 leading-none pointer-events-none">01</div>
              <div className="text-[1.5rem] mb-4">📋</div>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-[#A8C4E0] border border-white/20 py-0.5 px-2.5 inline-block mb-3.5">
                Code on Wages, 2019 · SS Code, 2020
              </div>
              <h3 className="font-['Playfair_Display'] text-[1.05rem] font-semibold mb-2.5">Labour Law Compliance</h3>
              <p className="text-[0.78rem] text-white/65 leading-relaxed mb-4.5">
                End-to-end compliance advisory covering registrations, filings, and regulatory obligations across all applicable statutes.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Labour law registrations (Shops Act, Factories Act)
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Wage structure and minimum wage compliance
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Statutory registers and record maintenance
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Payroll compliance and deduction structuring
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-9 relative overflow-hidden transition-colors hover:bg-[#1E3A5F] border-b-2 border-transparent hover:border-white/30">
              <div className="absolute right-5 top-4 font-['Bebas_Neue'] text-4xl text-white opacity-5 leading-none pointer-events-none">02</div>
              <div className="text-[1.5rem] mb-4">📝</div>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-[#A8C4E0] border border-white/20 py-0.5 px-2.5 inline-block mb-3.5">
                Contract Labour Act · Fixed-Term Employment
              </div>
              <h3 className="font-['Playfair_Display'] text-[1.05rem] font-semibold mb-2.5">HR & Employment Documentation</h3>
              <p className="text-[0.78rem] text-white/65 leading-relaxed mb-4.5">
                Legally sound, enforceable employment documents — drafted for Indian courts and Indian business realities.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Employment contracts (permanent, fixed-term, contractual)
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Appointment letters and offer letter drafting
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> HR policy manuals and standing orders
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Employee handbook and code of conduct
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-9 relative overflow-hidden transition-colors hover:bg-[#1E3A5F] border-b-2 border-transparent hover:border-white/30">
              <div className="absolute right-5 top-4 font-['Bebas_Neue'] text-4xl text-white opacity-5 leading-none pointer-events-none">03</div>
              <div className="text-[1.5rem] mb-4">🔍</div>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-[#A8C4E0] border border-white/20 py-0.5 px-2.5 inline-block mb-3.5">
                Multi-statute compliance audit
              </div>
              <h3 className="font-['Playfair_Display'] text-[1.05rem] font-semibold mb-2.5">Labour Law Audits</h3>
              <p className="text-[0.78rem] text-white/65 leading-relaxed mb-4.5">
                Identify compliance gaps before regulators do. Our audits cover all applicable statutes and deliver a prioritised remediation plan.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Comprehensive audit across all applicable laws
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Statutory compliance review and gap analysis
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Inspection preparedness and documentation readiness
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Risk assessment and compliance rating report
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-9 relative overflow-hidden transition-colors hover:bg-[#1E3A5F] border-b-2 border-transparent hover:border-white/30">
              <div className="absolute right-5 top-4 font-['Bebas_Neue'] text-4xl text-white opacity-5 leading-none pointer-events-none">04</div>
              <div className="text-[1.5rem] mb-4">🤝</div>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-[#A8C4E0] border border-white/20 py-0.5 px-2.5 inline-block mb-3.5">
                Industrial Relations Code, 2020
              </div>
              <h3 className="font-['Playfair_Display'] text-[1.05rem] font-semibold mb-2.5">Industrial Relations</h3>
              <p className="text-[0.78rem] text-white/65 leading-relaxed mb-4.5">
                Expert advisory on union matters, collective bargaining, and industrial dispute resolution under India&apos;s reformed IR framework.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Trade union recognition and negotiations
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Collective bargaining agreement drafting
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Strikes and lockouts advisory
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Industrial dispute resolution and conciliation
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-9 relative overflow-hidden transition-colors hover:bg-[#1E3A5F] border-b-2 border-transparent hover:border-white/30">
              <div className="absolute right-5 top-4 font-['Bebas_Neue'] text-4xl text-white opacity-5 leading-none pointer-events-none">05</div>
              <div className="text-[1.5rem] mb-4">⚠️</div>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-[#A8C4E0] border border-white/20 py-0.5 px-2.5 inline-block mb-3.5">
                IR Code, 2020 · Model Standing Orders
              </div>
              <h3 className="font-['Playfair_Display'] text-[1.05rem] font-semibold mb-2.5">Termination & Disciplinary Action</h3>
              <p className="text-[0.78rem] text-white/65 leading-relaxed mb-4.5">
                Navigate employee terminations and disciplinary proceedings with legal precision. One procedural error can overturn a termination in court.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Domestic enquiry procedures and documentation
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Termination and dismissal advisory
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Layoffs and retrenchment compliance
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Suspension orders and charge sheet drafting
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-9 relative overflow-hidden transition-colors hover:bg-[#1E3A5F] border-b-2 border-transparent hover:border-white/30">
              <div className="absolute right-5 top-4 font-['Bebas_Neue'] text-4xl text-white opacity-5 leading-none pointer-events-none">06</div>
              <div className="text-[1.5rem] mb-4">🛡️</div>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-[#A8C4E0] border border-white/20 py-0.5 px-2.5 inline-block mb-3.5">
                EPF Act, 1952 · Gratuity Act, 1972
              </div>
              <h3 className="font-['Playfair_Display'] text-[1.05rem] font-semibold mb-2.5">Social Security Compliance</h3>
              <p className="text-[0.78rem] text-white/65 leading-relaxed mb-4.5">
                Ensure full compliance with India&apos;s statutory social security obligations — from PF and ESIC contributions to gratuity structuring.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Provident fund registration and compliance
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Gratuity fund structuring and payment advisory
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> ESIC registration and contribution compliance
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Social Security Code readiness assessment
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-9 relative overflow-hidden transition-colors hover:bg-[#1E3A5F] border-b-2 border-transparent hover:border-white/30">
              <div className="absolute right-5 top-4 font-['Bebas_Neue'] text-4xl text-white opacity-5 leading-none pointer-events-none">07</div>
              <div className="text-[1.5rem] mb-4">🏭</div>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-[#A8C4E0] border border-white/20 py-0.5 px-2.5 inline-block mb-3.5">
                OSH Code, 2020 · Factories Act, 1948
              </div>
              <h3 className="font-['Playfair_Display'] text-[1.05rem] font-semibold mb-2.5">Workplace Safety Compliance</h3>
              <p className="text-[0.78rem] text-white/65 leading-relaxed mb-4.5">
                Meet your occupational safety and health obligations. We advise factories, construction sites, and large establishments on OSH compliance.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Factory and establishment compliance under OSH Code
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Safety audits and hazard identification
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Contractor workforce compliance management
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Workplace inspection preparedness
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-9 relative overflow-hidden transition-colors hover:bg-[#1E3A5F] border-b-2 border-transparent hover:border-white/30">
              <div className="absolute right-5 top-4 font-['Bebas_Neue'] text-4xl text-white opacity-5 leading-none pointer-events-none">08</div>
              <div className="text-[1.5rem] mb-4">🚀</div>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-[#A8C4E0] border border-white/20 py-0.5 px-2.5 inline-block mb-3.5">
                All applicable statutes · Gig economy
              </div>
              <h3 className="font-['Playfair_Display'] text-[1.05rem] font-semibold mb-2.5">Startup & SME HR Desk</h3>
              <p className="text-[0.78rem] text-white/65 leading-relaxed mb-4.5">
                Build your HR and compliance foundation correctly from the first hire. Affordable, structured labour compliance for growing businesses.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Labour law compliance roadmap for new businesses
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> First-hire and onboarding compliance
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Gig worker and platform compliance advisory
                </li>
                <li className="text-[0.74rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">→</span> Contractor management and misclassification risk
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
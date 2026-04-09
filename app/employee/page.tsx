"use client";

import { useRouter } from "next/navigation";
import ScrollReveal from "../../components/ScrollReveal";

declare global {
  interface Window {
    openModal?: (type: string) => void;
  }
}

export default function EmployeePortal() {
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
        <div className="absolute pointer-events-none rounded-full top-[-200px] left-[-200px] w-[600px] h-[600px] bg-radial from-white/4 to-transparent"></div>
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-15 items-end">
          <div>
            <div className="eyebrow mb-4">Employee Assistance Portal</div>
            <h1 className="display">
              Know Your
              <br />
              Rights.
              <br />
              <em>We Enforce Them.</em>
            </h1>
            <p className="lead max-w-[500px] mt-5">
              You have legal rights as an employee in India — regardless of your contract, company size, or employment type. We are here to help you understand and exercise every one of them.
            </p>
            <div className="flex gap-3.5 mt-9 flex-wrap">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.openModal?.("employee");
                }}
                className="btn btn-gold"
              >
                Get Legal Help Now
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showPage("library");
                }}
                className="btn btn-outline-gold"
              >
                Read Your Rights
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
              className="p-3.5 border border-white/15 text-[0.74rem] tracking-[0.1em] uppercase font-medium no-underline flex items-center justify-between transition-all text-white/65 hover:text-white"
            >
              🏢 Employer Advisory <span className="text-base">→</span>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showPage("employee");
              }}
              className="p-3.5 border border-white/15 text-[0.74rem] tracking-[0.1em] uppercase font-medium no-underline flex items-center justify-between transition-all text-white bg-white/10 border-white/30 mt-3"
            >
              👤 Employee Assistance <span className="text-base">✓</span>
            </a>
            <div className="mt-4 pt-4 border-t border-white/15">
              <div className="text-[0.65rem] text-white/65 leading-relaxed">
                Are you an <strong className="text-white">employer</strong> or HR professional? Switch to the Employer Advisory Portal.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-[60px] my-0 mb-15 bg-white/10 border border-white/25 p-9 flex flex-col md:flex-row items-center justify-between gap-8 max-lg:mx-5 max-lg:my-10 max-lg:p-7">
        <div>
          <h3 className="font-['Playfair_Display'] text-[1.3rem] font-semibold mb-1.5">Facing an Urgent Legal Situation?</h3>
          <p className="text-[0.84rem] text-white/65 max-w-[480px] leading-relaxed">
            Unpaid salary, sudden termination, workplace harassment — if you are dealing with an urgent matter, call us directly. We provide same-day consultations for employees in immediate need of legal assistance.
          </p>
        </div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.openModal?.("employee");
          }}
          className="btn btn-gold"
        >
          Request Urgent Consultation
        </a>
      </div>

      <div className="py-[70px] px-[60px] max-lg:px-5">
        <div className="mb-12">
          <div className="eyebrow mb-3.5">Areas of Assistance</div>
          <h2 className="sec-title">
            Your rights.
            <br />
            <em>Fully protected.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-10 transition-colors hover:bg-[#1E3A5F] border-l-3 border-transparent hover:border-l-white/40">
              <div className="text-[1.8rem] mb-4.5">💡</div>
              <h3 className="font-['Playfair_Display'] text-[1.1rem] font-semibold mb-2.5">Know Your Employee Rights</h3>
              <p className="text-[0.82rem] text-white/65 leading-relaxed mb-4.5">
                Every employee in India has fundamental rights guaranteed under law. Many are routinely violated. Start here to understand what you are entitled to as a matter of law.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Right to minimum wages and timely payment
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Right to PF, gratuity, and ESIC contributions
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Protection against arbitrary termination
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Right to safe and dignified working conditions
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-10 transition-colors hover:bg-[#1E3A5F] border-l-3 border-transparent hover:border-l-white/40">
              <div className="text-[1.8rem] mb-4.5">💰</div>
              <h3 className="font-['Playfair_Display'] text-[1.1rem] font-semibold mb-2.5">Salary & Wage Disputes</h3>
              <p className="text-[0.82rem] text-white/65 leading-relaxed mb-4.5">
                Your employer is legally obligated to pay your full salary on time. If they have not, you have strong remedies under the Code on Wages, 2019 and the Payment of Wages Act.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Unpaid salary recovery proceedings
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Delayed wages complaints to Labour Authority
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Overtime payment disputes
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Illegal deduction and withholding challenges
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-10 transition-colors hover:bg-[#1E3A5F] border-l-3 border-transparent hover:border-l-white/40">
              <div className="text-[1.8rem] mb-4.5">📑</div>
              <h3 className="font-['Playfair_Display'] text-[1.1rem] font-semibold mb-2.5">PF & Gratuity Claims</h3>
              <p className="text-[0.82rem] text-white/65 leading-relaxed mb-4.5">
                Provident Fund and Gratuity are statutory entitlements — not discretionary employer benefits. We assist you in claiming what is legally yours when employers delay or dispute payment.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> PF withdrawal claim assistance
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> PF transfer and balance dispute
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Gratuity eligibility and calculation disputes
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Employer non-deposit complaints to EPFO
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-10 transition-colors hover:bg-[#1E3A5F] border-l-3 border-transparent hover:border-l-white/40">
              <div className="text-[1.8rem] mb-4.5">⚖️</div>
              <h3 className="font-['Playfair_Display'] text-[1.1rem] font-semibold mb-2.5">Wrongful Termination</h3>
              <p className="text-[0.82rem] text-white/65 leading-relaxed mb-4.5">
                Being dismissed without proper procedure, adequate notice, or legitimate cause is illegal in India. You may be entitled to reinstatement or significant monetary compensation.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Illegal termination challenge before Labour Court
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Forced resignation and constructive dismissal
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Retrenchment dispute and compensation claims
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Reinstatement proceedings
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-10 transition-colors hover:bg-[#1E3A5F] border-l-3 border-transparent hover:border-l-white/40">
              <div className="text-[1.8rem] mb-4.5">🛡️</div>
              <h3 className="font-['Playfair_Display'] text-[1.1rem] font-semibold mb-2.5">Workplace Harassment</h3>
              <p className="text-[0.82rem] text-white/65 leading-relaxed mb-4.5">
                Every employee has the right to a safe, dignified workplace. We assist with formal complaints, guide you through ICC proceedings, and represent you before relevant authorities.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Sexual harassment complaints under POSH Act, 2013
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Internal Complaints Committee guidance
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Workplace discrimination cases
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Whistleblower protection advisory
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B3C5D] p-10 transition-colors hover:bg-[#1E3A5F] border-l-3 border-transparent hover:border-l-white/40">
              <div className="text-[1.8rem] mb-4.5">🏛️</div>
              <h3 className="font-['Playfair_Display'] text-[1.1rem] font-semibold mb-2.5">Labour Court Representation</h3>
              <p className="text-[0.82rem] text-white/65 leading-relaxed mb-4.5">
                When internal resolution fails, we represent you before Conciliation Officers, Labour Courts, and Industrial Tribunals. Formal legal representation that gets results.
              </p>
              <ul className="list-none flex flex-col gap-1.5">
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Conciliation and mediation proceedings
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Labour Court representation and advocacy
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Industrial Tribunal matters
                </li>
                <li className="text-[0.78rem] text-white/30 flex gap-2">
                  <span className="text-[#A8C4E0]">✓</span> Enforcement of awards and court orders
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
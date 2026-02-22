import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu as MenuIcon, X as CloseIcon } from 'lucide-react';

export default function App() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll-triggered fade-in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Nav bg on scroll
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 60) {
          navRef.current.style.background = 'var(--black)';
          navRef.current.style.borderBottomColor = 'var(--gold)/[0.10]';
        } else {
          navRef.current.style.background = 'linear-gradient(180deg,var(--black)/[0.95] 0%,var(--black)/[0] 100%)';
          navRef.current.style.borderBottomColor = 'var(--gold)/[0.06]';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'MISSION', href: '#mission' },
    { name: 'VISION', href: '#vision' },
    { name: 'MARKET', href: '#market' },
    { name: 'MODEL', href: '#model' },
    { name: 'INVEST', href: '#invest' },
    { name: 'PRODUCTS', href: '#products' },
  ];

  const stats = [
    { value: '380K+', label: 'FAITH ORGANIZATIONS IN NORTH AMERICA' },
    { value: '100M+', label: 'ADDRESSABLE END USERS' },
    { value: '$300K', label: 'CURRENT CAPITAL RAISE' },
    { value: '$2.5M', label: 'VALUATION CAP' },
  ];

  const principles = [
    { icon: '⚙', title: 'PREPAREDNESS OVER REACTION', description: 'Emergency readiness must be proactive, structured, and continuously maintained.' },
    { icon: '🛡', title: 'CLARITY IN CRISIS', description: 'Confusion costs time. Time costs lives. Systems must be intuitive and role-specific.' },
    { icon: '🌐', title: 'ACCESSIBILITY FOR ALL', description: 'Emergency technology should not be limited by cost barriers.' },
    { icon: '🔒', title: 'OPERATIONAL INTEGRITY', description: 'Security, reliability, and compliance are foundational — not optional.' },
    { icon: '🤝', title: 'COMMUNITY-CENTERED DESIGN', description: 'Faith institutions, schools, hospitals, and civic organizations are frontline responders. Technology must serve them.' },
  ];

  const platformFeatures = [
    { number: '01', icon: '📱', title: 'MOBILE-FIRST INFRASTRUCTURE', description: 'Native iOS and Android deployment. Built for real-world field use, not desktop administration.' },
    { number: '02', icon: '🎯', title: 'SCENARIO-BASED RESPONSE', description: 'Pre-structured workflows for medical events, security incidents, natural disasters, and multi-agency coordination.' },
    { number: '03', icon: '👤', title: 'ROLE-SPECIFIC INTERFACES', description: 'Separate dashboards for leadership, staff, community members, and first responders — no confusion, no overload.' },
    { number: '04', icon: '🏛', title: 'MULTI-LOCATION COMMAND', description: 'Unified oversight for organizations operating across campuses, districts, or jurisdictions — one command view.' },
  ];

  const marketSegments = [
    { value: '380K+', label: 'FAITH-BASED ORGANIZATIONS', description: 'Churches, mosques, synagogues, temples — empowered as frontline community responders with advanced coordination.' },
    { value: '130K+', label: 'K–12 SCHOOLS', description: 'Federally required emergency plans seamlessly integrated with unified mobile coordination standards.' },
    { value: '6,000+', label: 'HOSPITALS & HEALTHCARE', description: 'High-stakes environments optimized with robust coordination for enhanced patient safety and operational excellence.' },
    { value: '∞', label: 'MUNICIPAL & STATE AGENCIES', description: 'Emergency management offices equipped with scalable, compliant mobile response infrastructure at every level.' },
  ];

  const businessModelPhases = [
    { phase: '01', title: 'MASS ADOPTION', description: 'Low-cost annual mobile subscription. Reduces adoption friction. Builds the community network effect across individual and organizational users.' },
    { phase: '02', title: 'INSTITUTIONAL EXPANSION', description: 'Tiered enterprise subscriptions with admin dashboards, expanded analytics, deployment management, and dedicated support infrastructure.' },
    { phase: '03', title: 'STRATEGIC LICENSING', description: 'School district deployments, healthcare system integrations, public sector contracts, and customized white-label agreements at scale.' },
  ];

  const useOfFunds = [
    'MVP finalization & security testing',
    'App store distribution launch',
    'Server infrastructure build-out',
    'Institutional outreach expansion',
    'Intellectual property protection',
    'Operational continuity buffer',
  ];

  const futureProducts = [
    {
      category: 'Specialized Hardware & IoT Integration',
      items: [
        { title: 'Emergency Beacons/Sensors', description: 'Devices that integrate directly with the AERA platform to automatically detect environmental threats (e.g., smoke, CO, seismic activity, flood levels) or trigger silent alarms.' },
        { title: 'Ruggedized Communication Devices', description: 'Handheld devices pre-loaded with AERA, designed for extreme conditions to ensure communication even when traditional networks are down.' },
        { title: 'Portable Command Kits', description: 'Physical kits containing pre-configured AERA tablets, satellite communication devices, and power banks for rapid deployment in remote or disaster-stricken areas.' },
      ],
    },
    {
      category: 'Training & Certification Programs',
      items: [
        { title: 'Emergency Preparedness Consulting', description: 'Consulting services to help organizations develop robust emergency plans, conduct drills, and integrate AERA seamlessly into their existing protocols.' },
        { title: 'Scenario Simulation Modules', description: 'Interactive training modules within AERA that simulate various emergency scenarios (e.g., active shooter, natural disaster, medical crisis) for practice and skill development.' },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      {/* Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[900] h-[72px] flex items-center justify-between px-4 sm:px-6 md:px-[60px] bg-gradient-to-b from-[var(--black)]/[0.95] to-[var(--black)]/[0] backdrop-blur-md border-b border-[var(--gold)]/[0.08] transition-colors">
        <a href="#" className="flex items-center gap-[12px] no-underline touch-feedback">
          <svg width="38" height="38" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="nGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'var(--gold)'}}/>
                <stop offset="100%" style={{stopColor:'var(--gold2)'}}/>
              </linearGradient>
            </defs>
            {/* Gear outer ring */}
            <circle cx="40" cy="40" r="34" fill="none" stroke="url(#nGrad)" strokeWidth="3" strokeDasharray="8 4"/>
            {/* Shield */}
            <path d="M26 20 L54 20 Q58 20 58 24 L58 46 Q58 62 40 70 Q22 62 22 46 L22 24 Q22 20 26 20 Z" fill="var(--crimson)" opacity="0.9"/>
            <path d="M28 23 L52 23 Q55 23 55 26 L55 45 Q55 59 40 66 Q25 59 25 45 L25 26 Q25 23 28 23 Z" fill="none" stroke="var(--gold)/[0.4]" strokeWidth="1"/>
            {/* Cross */}
            <rect x="36" y="30" width="8" height="24" rx="2" fill="url(#nGrad)"/>
            <rect x="28" y="38" width="24" height="8" rx="2" fill="url(#nGrad)"/>
          </svg>
          <span className="nav-wordmark font-display text-[22px] font-bold text-[var(--white)] tracking-[0.12em]"><span className="text-[var(--gold)]">G</span>EAR</span>
        </a>
        <div className="flex items-center">
          {/* desktop links */}
          <ul className="hidden md:flex gap-[36px] items-center list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--mist)] no-underline relative transition-colors hover:text-[var(--gold)] group touch-feedback">
                  {link.name}
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[var(--gold)] scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
            <li>
              <a href="#invest" className="bg-[var(--crimson)] text-[var(--white)] px-[22px] py-[9px] rounded-[4px] font-bold text-[12px] tracking-[0.16em] uppercase transition-colors hover:bg-[var(--crim3)] border border-[var(--white)]/[0.1] no-underline touch-feedback">
                INVEST
              </a>
            </li>
          </ul>
          {/* mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[var(--gold)] focus:outline-none"
            aria-label="Menu"
          >
            {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* mobile dropdown */}
        {menuOpen && (
          <ul className="absolute top-[72px] left-0 right-0 bg-[var(--black)]/95 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[14px] font-semibold tracking-[0.16em] uppercase text-[var(--mist)] no-underline touch-feedback"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#invest"
                className="bg-[var(--crimson)] text-[var(--white)] px-[22px] py-[9px] rounded-[4px] font-bold text-[14px] tracking-[0.16em] uppercase transition-colors hover:bg-[var(--crim3)] border border-[var(--white)]/[0.1] no-underline touch-feedback"
                onClick={() => setMenuOpen(false)}
              >
                INVEST
              </a>
            </li>
          </ul>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-[60px] py-[120px]">
          <div className="hero-bg" aria-hidden="true"></div>
          <div className="absolute inset-0 bg-grid-pattern mask-radial-gradient-hero-grid"></div>

          <div className="relative z-10 max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
            <div className="hero-left">
              <div className="inline-flex items-center gap-[10px] bg-[var(--crimson)]/[0.15] border border-[var(--crimson)]/[0.3] rounded-[4px] px-[16px] py-[7px] text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--gold)] mb-[28px]">
                <span className="w-[6px] h-[6px] bg-[var(--crim3)] rounded-full animate-blink"></span>
                NOW SEEKING STRATEGIC PARTNERS
              </div>
              <h1 className="font-display text-[72px] leading-[0.95] font-bold text-[var(--white)] tracking-[0.02em] mb-[10px]">
                GLOBAL EMERGENCY AID <span className="text-[var(--gold)] drop-shadow-gold-lg">RESPONSE</span>.
              </h1>
              <p className="font-display text-[13px] font-semibold tracking-[0.28em] uppercase text-[var(--crimson)] mb-[32px]">
                RESPONSE. RELIEF. RESCUE.
              </p>
              <div className="w-[64px] h-[3px] bg-gradient-to-r from-[var(--gold)] to-transparent rounded-[2px] mb-[28px]"></div>
              <p className="text-[17px] font-light leading-[1.75] text-[var(--mist)] max-w-[480px] mb-[44px]">
                Modernizing emergency
                response infrastructure
                through coordinated,
                accessible, and reliable crisis
                management technology.
              </p>
              <div className="flex gap-[16px] flex-wrap">
                <a href="#vision" className="bg-[var(--crimson)] text-[var(--white)] text-[12px] font-bold tracking-[0.16em] uppercase px-[36px] py-[16px] rounded-[4px] border border-[var(--white)]/[0.08] transition-all shadow-crimson-xl hover:bg-[var(--crim3)] hover:shadow-crimson-2xl hover:-translate-y-[1px] no-underline touch-feedback">
                  EXPLORE OUR VISION
                </a>
                <a href="#invest" className="bg-transparent text-[var(--gold)] text-[12px] font-bold tracking-[0.16em] uppercase px-[32px] py-[15px] rounded-[4px] border border-[var(--gold)]/[0.4] transition-all hover:bg-[var(--gold)]/[0.08] hover:border-[var(--gold)] no-underline touch-feedback">
                  INVESTMENT OVERVIEW
                </a>
              </div>
            </div>
            <div className="hero-right flex items-center justify-center relative">
              <div className="relative flex items-center justify-center">
                <div className="absolute rounded-full border border-[var(--gold)]/[0.12] w-[320px] h-[320px] animate-ringPulse-0"></div>
                <div className="absolute rounded-full border border-[var(--crimson)]/[0.18] w-[240px] h-[240px] animate-ringPulse-1"></div>
                <div className="absolute rounded-full border border-[var(--gold)]/[0.12] w-[160px] h-[160px] animate-ringPulse-2"></div>
                <svg className="hero-emblem w-[180px] h-[180px] relative z-10 drop-shadow-gold-lg drop-shadow-crimson-xl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GEAR shield emblem">
                  <defs>
                    <linearGradient id="heroGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'var(--gold)'}}/>
                      <stop offset="50%" style={{stopColor:'var(--gold2)'}}/>
                      <stop offset="100%" style={{stopColor:'var(--gold3)'}}/>
                    </linearGradient>
                    <linearGradient id="heroCrim" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'var(--crim2)'}}/>
                      <stop offset="100%" style={{stopColor:'var(--crimson)'}}/>
                    </linearGradient>
                    <linearGradient id="heroSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'var(--gold)',stopOpacity:0}}/>
                      <stop offset="50%" style={{stopColor:'var(--gold)'}}/>
                      <stop offset="100%" style={{stopColor:'var(--white)',stopOpacity:0.6}}/>
                    </linearGradient>
                    <filter id="heroGlow">
                      <feGaussianBlur stdDeviation="3" result="blur"/>
                      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                    </filter>
                    <radialGradient id="heroShieldFill" cx="40%" cy="30%">
                      <stop offset="0%" style={{stopColor:'var(--crim2)'}}/>
                      <stop offset="100%" style={{stopColor:'var(--crimson)'}}/>
                    </radialGradient>
                  </defs>

                  {/* Outer gear ring */}
                  <circle cx="100" cy="100" r="88" fill="none" stroke="url(#heroGold)" strokeWidth="4" opacity="0.6"/>

                  {/* Gear teeth (12 teeth) */}
                  <g fill="url(#heroGold)" opacity="0.75">
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(0 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(30 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(60 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(90 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(120 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(150 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(180 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(210 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(240 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(270 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(300 100 100)"/>
                    <rect x="94" y="4" width="12" height="14" rx="3" transform="rotate(330 100 100)"/>
                  </g>

                  {/* Shield body */}
                  <path d="M54 50 L146 50 Q154 50 154 58 L154 112 Q154 156 100 174 Q46 156 46 112 L46 58 Q46 50 54 50 Z"
                        fill="url(#heroShieldFill)"/>

                  {/* Shield rim */}
                  <path d="M58 54 L142 54 Q148 54 148 60 L148 111 Q148 151 100 168 Q52 151 52 111 L52 60 Q52 54 58 54 Z"
                        fill="none" stroke="url(#heroGold)" strokeWidth="2" opacity="0.6"/>

                  {/* Gold swoosh across shield */}
                  <path d="M48 130 Q80 95 152 75"
                        fill="none" stroke="url(#heroSwoosh)" strokeWidth="6"
                        strokeLinecap="round" filter="url(#heroGlow)" opacity="0.9"/>
                  <path d="M48 138 Q84 108 152 90"
                        fill="none" stroke="url(#heroSwoosh)" strokeWidth="3"
                        strokeLinecap="round" opacity="0.4"/>

                  {/* Cross (medical aid symbol) */}
                  <rect x="88" y="68" width="24" height="72" rx="5" fill="url(#heroGold)"/>
                  <rect x="60" y="96" width="80" height="24" rx="5" fill="url(#heroGold)"/>

                  {/* Cross highlight */}
                  <rect x="88" y="68" width="10" height="72" rx="5" fill="rgba(255,255,255,0.18)"/>
                  <rect x="60" y="96" width="80" height="10" rx="5" fill="rgba(255,255,255,0.18)"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-[var(--dark2)] border-y border-[var(--gold)]/[0.08] py-[40px] px-4 sm:px-6 md:px-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center px-[24px] ${index < stats.length - 1 ? 'border-r border-[var(--gold)]/[0.06]' : ''}`}>
              <span className="font-display text-[44px] font-bold text-[var(--gold)] leading-none block drop-shadow-gold-md">{stat.value}</span>
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--smoke)] mt-[6px] block leading-[1.4]">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Mission Section */}
        <section id="mission" className="bg-[var(--dark)] border-t border-[var(--gold)]/[0.08] py-[120px] px-4 sm:px-6 md:px-[60px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
            <div className="mission-left">
              <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--gold)] mb-[18px] block">
                OUR MISSION
              </span>
              <h2 className="font-display text-[48px] leading-[1.1] font-bold text-[var(--ash)] tracking-[0.02em] mb-[24px]">
                Modernizing emergency response infrastructure.
              </h2>
              <p className="text-[17px] font-light leading-[1.75] text-[var(--mist)] max-w-[480px] mb-[44px]">
                Global Emergency Accelerated Response LLC (GEAR) is a Michigan-based emergency technology and operational strategy company focused on closing systemic gaps in crisis coordination. GEAR develops and deploys the Accelerated Emergency Response Application (AERA) — a mobile emergency coordination platform that replaces fragmented protocols with unified, role-driven action systems. GEAR is building emergency response infrastructure.
              </p>
              <a href="#vision" className="inline-flex items-center gap-[10px] text-[12px] font-bold tracking-[0.16em] uppercase text-[var(--gold)] no-underline group touch-feedback">
                <span>EXPLORE OUR VISION</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-[4px]" />
              </a>
            </div>
            <div className="mission-right grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              {principles.map((p, index) => (
                <div key={index} className="mission-card p-[32px] bg-[var(--dark2)] rounded-[8px] border border-[var(--gold)]/[0.06] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] group-hover:opacity-[0.1] transition-opacity"></div>
                  <span className="text-[36px] mb-[16px] block relative z-10 drop-shadow-gold-sm">{p.icon}</span>
                  <h3 className="font-display text-[20px] font-bold text-[var(--ash)] tracking-[0.02em] mb-[8px] relative z-10">{p.title}</h3>
                  <p className="text-[15px] text-[var(--mist)] leading-[1.6] relative z-10">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section id="vision" className="bg-[var(--black)] border-t border-[var(--gold)]/[0.08] py-[120px] px-4 sm:px-6 md:px-[60px]">
          <div className="max-w-[1100px] mx-auto">
            <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--gold)] mb-[18px] block">
              OUR VISION
            </span>
            <h2 className="font-display text-[48px] leading-[1.1] font-bold text-[var(--ash)] tracking-[0.02em] mb-[24px]">
              Our Vision
            </h2>
            <p className="text-[17px] font-light leading-[1.75] text-[var(--mist)] max-w-[720px] mb-[60px]">
              GEAR is setting the national standard for coordinated mobile emergency response, empowering institutions of every size with robust, reliable infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              {platformFeatures.map((feature) => (
                <div key={feature.number} className="platform-card p-[32px] bg-[var(--dark2)] rounded-[8px] border border-[var(--gold)]/[0.06] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] group-hover:opacity-[0.1] transition-opacity"></div>
                  <span className="text-[36px] mb-[16px] block relative z-10 drop-shadow-gold-sm">{feature.icon}</span>
                  <h3 className="font-display text-[20px] font-bold text-[var(--ash)] tracking-[0.02em] mb-[8px] relative z-10">{feature.title}</h3>
                  <p className="text-[15px] text-[var(--mist)] leading-[1.6] relative z-10">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Market Section */}
        <section id="market" className="bg-[var(--dark)] border-t border-[var(--gold)]/[0.08] py-[120px] px-4 sm:px-6 md:px-[60px]">
          <div className="max-w-[1100px] mx-auto">
            <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--gold)] mb-[18px] block">
              MARKET OPPORTUNITY
            </span>
            <h2 className="font-display text-[48px] leading-[1.1] font-bold text-[var(--ash)] tracking-[0.02em] mb-[24px]">
              Dominating a critical market opportunity.
            </h2>
            <p className="text-[17px] font-light leading-[1.75] text-[var(--mist)] max-w-[720px] mb-[60px]">
              The global emergency response market is projected to reach $300B by 2030, presenting a significant opportunity for GEAR to lead the transformation towards resilient and coordinated infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
              {marketSegments.map((segment, index) => (
                <div key={index} className="market-card p-[32px] bg-[var(--dark2)] rounded-[8px] border border-[var(--gold)]/[0.06] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] group-hover:opacity-[0.1] transition-opacity"></div>
                  <span className="font-display text-[44px] font-bold text-[var(--gold)] leading-none block drop-shadow-gold-md mb-[10px] relative z-10">{segment.value}</span>
                  <h3 className="font-display text-[20px] font-bold text-[var(--ash)] tracking-[0.02em] mb-[8px] relative z-10">{segment.label}</h3>
                  <p className="text-[15px] text-[var(--mist)] leading-[1.6] relative z-10">{segment.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-[80px] text-center">
              <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--gold)] mb-[10px] block">
                TOTAL ADDRESSABLE MARKET — NORTH AMERICA
              </span>
              <p className="font-display text-[64px] font-bold text-[var(--ash)] leading-none drop-shadow-gold-lg">100M+ End Users</p>
            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section id="model" className="bg-[var(--black)] border-t border-[var(--gold)]/[0.08] py-[120px] px-4 sm:px-6 md:px-[60px]">
          <div className="max-w-[1100px] mx-auto">
            <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--gold)] mb-[18px] block">
              BUSINESS MODEL
            </span>
            <h2 className="font-display text-[48px] leading-[1.1] font-bold text-[var(--ash)] tracking-[0.02em] mb-[24px]">
              Three-phase revenue architecture.
            </h2>
            <p className="text-[17px] font-light leading-[1.75] text-[var(--mist)] max-w-[720px] mb-[60px]">
              GEAR's revenue model is designed for rapid adoption, scalable growth, and long-term strategic partnerships across multiple sectors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
              {businessModelPhases.map((phase, index) => (
                <div key={index} className="model-card p-[32px] bg-[var(--dark2)] rounded-[8px] border border-[var(--gold)]/[0.06] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] group-hover:opacity-[0.1] transition-opacity"></div>
                  <span className="font-display text-[44px] font-bold text-[var(--gold)] leading-none block drop-shadow-gold-md mb-[10px] relative z-10">{phase.phase}</span>
                  <h3 className="font-display text-[20px] font-bold text-[var(--ash)] tracking-[0.02em] mb-[8px] relative z-10">{phase.title}</h3>
                  <p className="text-[15px] text-[var(--mist)] leading-[1.6] relative z-10">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Investment Opportunity Section */}
        <section id="invest" className="bg-[var(--dark)] border-t border-[var(--gold)]/[0.08] py-[120px] px-[60px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
            <div className="invest-left">
              <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--gold)] mb-[18px] block">
                INVESTMENT OPPORTUNITY
              </span>
              <h2 className="font-display text-[48px] leading-[1.1] font-bold text-[var(--ash)] tracking-[0.02em] mb-[24px]">
                Raise $300,000 to build the national standard.
              </h2>
              <p className="text-[17px] font-light leading-[1.75] text-[var(--mist)] max-w-[480px] mb-[44px]">
                Join GEAR. Build the infrastructure that saves lives.
              </p>

              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[20px] mb-[44px]">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--smoke)] block">STRUCTURE</span>
                  <span className="font-display text-[28px] font-bold text-[var(--ash)] drop-shadow-gold-sm">SAFE</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--smoke)] block">RAISE GOAL</span>
                  <span className="font-display text-[28px] font-bold text-[var(--ash)] drop-shadow-gold-sm">$300K</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--smoke)] block">VALUATION CAP</span>
                  <span className="font-display text-[28px] font-bold text-[var(--ash)] drop-shadow-gold-sm">$2.5M</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--smoke)] block">DISCOUNT / MIN.</span>
                  <span className="font-display text-[28px] font-bold text-[var(--ash)] drop-shadow-gold-sm">20% / $10K</span>
                </div>
              </div>

              <h3 className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--gold)] mb-[18px] block">USE OF FUNDS</h3>
              <ul className="list-none space-y-[10px] mb-[44px]">
                {useOfFunds.map((item, index) => (
                  <li key={index} className="text-[15px] text-[var(--mist)] flex items-center gap-[8px]">
                    <span className="w-[5px] h-[5px] bg-[var(--gold)] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[15px] italic text-[var(--smoke)] leading-[1.6]">
                "We are not improving existing systems. We are replacing fragmentation with structure."
              </p>
            </div>
            <div className="invest-right p-[32px] bg-[var(--dark2)] rounded-[8px] border border-[var(--gold)]/[0.08] text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
              <img
                src="https://picsum.photos/seed/gear-invest-2/600/400"
                alt="Investment Opportunity"
                className="w-full h-auto rounded-[4px] mb-[32px] border border-[var(--gold)]/[0.06] relative z-10"
                referrerPolicy="no-referrer"
              />
              <h3 className="font-display text-[28px] font-bold text-[var(--ash)] tracking-[0.02em] mb-[16px] relative z-10">
                Ready to Respond?
              </h3>
              <p className="text-[17px] font-light leading-[1.75] text-[var(--mist)] max-w-[480px] mx-auto mb-[44px] relative z-10">
                Whether you're a community leader, institutional partner, or qualified investor — GEAR has a role for you in the future of emergency response.
              </p>
              <div className="flex flex-col gap-[16px] relative z-10">
                <a href="#contact" className="bg-[var(--crimson)] text-[var(--white)] text-[12px] font-bold tracking-[0.16em] uppercase px-[36px] py-[16px] rounded-[4px] border border-[var(--white)]/[0.1] transition-all shadow-crimson-xl hover:bg-[var(--crim3)] hover:shadow-crimson-2xl hover:-translate-y-[1px] no-underline touch-feedback">
                  CONTACT GEAR
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* Future Products Section */}
        <section id="products" className="bg-[var(--black)] border-t border-[var(--gold)]/[0.08] py-[120px] px-[60px]">
          <div className="max-w-[1100px] mx-auto">
            <span className="text-[11px] font-bold tracking-[0.20em] uppercase text-[var(--gold)] mb-[18px] block">
              FUTURE PRODUCTS
            </span>
            <h2 className="font-display text-[48px] leading-[1.1] font-bold text-[var(--ash)] tracking-[0.02em] mb-[24px]">
              Expanding the ecosystem of emergency readiness.
            </h2>
            <p className="text-[17px] font-light leading-[1.75] text-[var(--mist)] max-w-[720px] mb-[60px]">
              GEAR is continuously innovating to provide comprehensive solutions that extend beyond software, integrating hardware and advanced training to create a complete emergency response ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
              {futureProducts.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="font-display text-[28px] font-bold text-[var(--gold)] tracking-[0.02em] mb-[24px] fade-up text-[var(--ash)]">
                    {category.category}
                  </h3>
                  <div className="space-y-[30px]">
                    {category.items.map((product, prodIndex) => (
                      <div key={prodIndex} className="fade-up">
                        <h4 className="font-display text-[20px] font-bold text-[var(--ash)] tracking-[0.02em] mb-[8px]">
                          {product.title}
                        </h4>
                        <p className="text-[15px] text-[var(--mist)] leading-[1.6]">
                          {product.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE / MISSION */}
        <section className="relative overflow-hidden bg-[var(--black)] py-[100px] text-center border-y border-[var(--gold)]/[0.06]">
          <div className="quote-bg absolute inset-0 bg-radial-gradient-quote pointer-events-none"></div>
          <blockquote className="relative z-10 mx-auto mb-[24px] max-w-[800px] font-display text-[36px] font-bold leading-[1.4] text-[var(--ash)] tracking-[0.02em]">
            "We are not improving existing systems.<br />We are replacing <em className="text-[var(--gold)]">fragmentation</em> with structure."
          </blockquote>
          <div className="quote-attr relative z-10 text-[12px] font-semibold uppercase tracking-[0.20em] text-[var(--smoke)]">
            Global Emergency Accelerated Response LLC · Michigan, USA
          </div>
        </section>

        {/* CTA FOOTER SECTION */}
        <section id="contact" className="relative overflow-hidden bg-[var(--dark2)] py-[90px] text-center">
          <div className="cta-bg absolute inset-0 bg-radial-gradient-cta pointer-events-none"></div>
          <h2 className="cta-h relative z-10 mb-[18px] font-display text-[52px] font-black leading-[1.05] text-[var(--ash)] tracking-[0.04em]">
            Ready to <span className="text-[var(--gold)] drop-shadow-gold-cta">Respond</span>?
          </h2>
          <p className="cta-sub relative z-10 mb-[44px] text-[17px] font-light leading-[1.7] text-[var(--mist)]">
            Whether you're a community leader, institutional partner, or qualified investor —<br />
            GEAR has a role for you in the future of emergency response.
          </p>
          <div className="cta-btns relative z-10 flex justify-center gap-[16px]">
            <a href="mailto:info@gear-aera.com" className="btn-primary bg-[var(--crimson)] text-[var(--white)] text-[12px] font-bold tracking-[0.16em] uppercase px-[36px] py-[16px] rounded-[4px] border border-[var(--white)]/[0.1] transition-all shadow-crimson-xl hover:bg-[var(--crim3)] hover:shadow-crimson-2xl hover:-translate-y-[1px] no-underline touch-feedback">
              Contact GEAR
            </a>
            <a href="#vision" className="btn-secondary bg-transparent text-[var(--gold)] text-[12px] font-bold tracking-[0.16em] uppercase px-[32px] py-[15px] rounded-[4px] border border-[var(--gold)]/[0.4] transition-all hover:bg-[var(--gold)]/[0.08] hover:border-[var(--gold)] no-underline touch-feedback">
              Explore Our Vision
            </a>
          </div>
          <span className="cta-url relative z-10 mt-[28px] block font-display text-[14px] font-semibold uppercase tracking-[0.18em] text-[var(--smoke)]">
            gear-aera.com · Michigan, USA
          </span>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--black)] border-t border-[var(--gold)]/[0.08] py-[32px] px-[60px] flex items-center justify-between">
          <a href="#" className="foot-logo font-display text-[20px] font-bold text-[var(--ash)] tracking-[0.12em] no-underline touch-feedback">
            <span className="text-[var(--gold)]">G</span>EAR
          </a>
          <span className="foot-copy text-[11px] font-medium tracking-[0.10em] text-[var(--smoke)]">
            © 2025 Global Emergency Accelerated Response LLC · All Rights Reserved
          </span>
          <ul className="foot-links flex list-none gap-[24px]">
            <li><a href="#mission" className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--smoke)] no-underline transition-colors hover:text-[var(--gold)] touch-feedback">Mission</a></li>
            <li><a href="#vision" className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--smoke)] no-underline transition-colors hover:text-[var(--gold)] touch-feedback">Vision</a></li>
            <li><a href="#invest" className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--smoke)] no-underline transition-colors hover:text-[var(--gold)] touch-feedback">Invest</a></li>
            <li><a href="#contact" className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--smoke)] no-underline transition-colors hover:text-[var(--gold)] touch-feedback">Contact</a></li>
          </ul>
        </footer>
      </main>
    </motion.div>
  );
}

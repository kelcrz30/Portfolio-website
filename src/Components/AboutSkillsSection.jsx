import React, { useEffect, useRef, useState } from 'react';

/* ─── Real skills from resume ─── */
const skillGroups = [
  {
    id: '01',
    category: 'Frontend',
    description: 'Building interactive, responsive web applications with modern JavaScript and component-based architecture.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    years: '2+ yrs',
    highlight: 'Core Stack',
  },
  {
    id: '02',
    category: 'Styling',
    description: 'Designing clean, mobile-first interfaces that look great across all screen sizes and devices.',
    skills: ['Tailwind CSS', 'Responsive Design', 'Figma', 'UI/UX Design'],
    years: '2+ yrs',
    highlight: null,
  },
  {
    id: '03',
    category: 'Database',
    description: 'Writing structured queries and managing relational data to support dynamic, data-driven applications.',
    skills: ['SQL', 'MySQL'],
    years: '1+ yrs',
    highlight: null,
  },
  {
    id: '04',
    category: 'Tools',
    description: 'Shipping projects confidently with a reliable workflow from local dev to live deployment.',
    skills: ['Git', 'GitHub', 'Vite', 'Vercel', 'Netlify', 'Shopify'],
    years: '1+ yrs',
    highlight: null,
  },
];

const stats = [
  { value: '15+',  label: 'Projects Shipped' },
  { value: '2+',  label: 'Freelance Clients' },
  { value: '96',  label: 'Top Achiever Score' },
  { value: '\'25', label: 'BSCS Graduate' },
];

const marqueeItems = [
  'HTML5', 'CSS3', 'JavaScript', 'React',
  'Tailwind CSS', 'Figma', 'Git', 'Vite',
  'SQL', 'MySQL', 'Vercel', 'Netlify', 'Shopify', 'Responsive Design',
];

export default function AboutSkillSection() {
  const rowRefs    = useRef([]);
  const statRefs   = useRef([]);
  const marqueeRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  /* intersection reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.dataset.visible = 'true';
      }),
      { threshold: 0.12 }
    );
    [...rowRefs.current, ...statRefs.current].forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* rAF marquee */
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let x = 0, raf;
    const step = () => {
      x -= 0.5;
      const half = el.scrollWidth / 2;
      if (Math.abs(x) >= half) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        [data-reveal][data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="bg-white">

        {/* ══ HEADER ══ */}
        <div className="px-6 md:px-10 lg:px-16 pt-16 md:pt-24 pb-10 md:pb-14 border-b border-neutral-100">
          <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-neutral-400 uppercase mb-3 font-medium">
                What I Bring
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter leading-none uppercase">
                Skills
              </h2>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              Frontend developer specializing in React and Tailwind CSS — focused on responsive, user-first interfaces.
            </p>
          </div>
        </div>

        {/* ══ MARQUEE ══ */}
        <div className="overflow-hidden border-b border-neutral-100 py-3 bg-black select-none">
          <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-5">
                <span className="text-[11px] tracking-[0.22em] uppercase text-neutral-300 font-medium">
                  {item}
                </span>
                <span className="w-1 h-1 rounded-full bg-neutral-600 shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* ══ SKILL ROWS ══ */}
        <div className="max-w-screen-lg mx-auto px-6 md:px-10 lg:px-16 divide-y divide-neutral-100">
          {skillGroups.map((group, i) => (
            <div
              key={group.id}
              ref={(el) => (rowRefs.current[i] = el)}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className="py-9 md:py-11 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-10 cursor-default"
              onMouseEnter={() => setHovered(group.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Left */}
              <div className="flex md:flex-col md:justify-between gap-3 md:gap-0">
                <div>
                  <span className="text-[10px] tracking-widest text-neutral-400 font-medium">[{group.id}]</span>
                  <h3 className="text-base font-black text-black uppercase tracking-tight mt-0.5 leading-none">
                    {group.category}
                  </h3>
                </div>
                <div className="flex items-center gap-2 md:mt-auto">
                  <span className="text-[10px] tracking-widest text-neutral-400 uppercase">{group.years}</span>
                  {group.highlight && (
                    <span className="px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-black text-white rounded-full">
                      {group.highlight}
                    </span>
                  )}
                </div>
              </div>

              {/* Right */}
              <div>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5 max-w-lg">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`
                        px-3 py-1.5 text-[11px] font-semibold tracking-wide rounded-full border
                        transition-all duration-200 cursor-default
                        ${hovered === group.id
                          ? 'border-black text-black bg-white'
                          : 'border-neutral-200 text-neutral-600 bg-white'}
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ══ CURRENTLY LEARNING ══ */}
        <div className="border-t border-neutral-100 bg-neutral-50">
          <div className="max-w-screen-lg mx-auto px-6 md:px-10 lg:px-16 py-9 md:py-11 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="shrink-0">
              <p className="text-[10px] tracking-[0.28em] text-neutral-400 uppercase font-medium">Currently Exploring</p>
              <h3 className="text-base font-black text-black uppercase tracking-tight mt-0.5">Learning Now</h3>
            </div>
            <div className="w-px h-8 bg-neutral-200 hidden sm:block mx-4 shrink-0" />
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'Node.js', 'Express', 'GSAP', 'Three.js'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-[11px] font-semibold tracking-wide rounded-full border border-dashed border-neutral-300 text-neutral-500 bg-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ══ ACHIEVEMENTS ══ */}
        <div className="border-t border-neutral-100 bg-white">
          <div className="max-w-screen-lg mx-auto px-6 md:px-10 lg:px-16 py-9 md:py-11">
            <p className="text-[10px] tracking-[0.28em] text-neutral-400 uppercase font-medium mb-6">Recognition</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Best in Thesis Awardee', school: 'ICCT Colleges · Nov 2025' },
                { label: 'Top 25 Achiever', school: 'Intermediate Programming · Grade 96.37' },
                { label: 'Academic Achievement Award', school: 'Computer Programming 2 · Grade 92, 8th rank' },
              ].map(({ label, school }) => (
                <div key={label} className="border border-neutral-100 rounded-lg px-5 py-4 bg-neutral-50">
                  <p className="text-xs font-black text-black uppercase tracking-tight leading-snug">{label}</p>
                  <p className="text-[10px] text-neutral-400 mt-1 tracking-wide">{school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ STATS ══ */}
        <div className="border-t border-neutral-100">
          <div className="max-w-screen-lg mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                ref={(el) => (statRefs.current[i] = el)}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-none">{value}</p>
                <p className="text-[10px] tracking-[0.22em] text-neutral-400 uppercase mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}
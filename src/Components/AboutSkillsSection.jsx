import React, { useEffect, useMemo, useRef, useState } from "react";

const AboutSkillsSection = () => {
  const sectionRef = useRef(null);

  const skills = useMemo(
    () => [
      { name: "JAVASCRIPT", description: "Core UI logic, async flows, clean interactions, reusable functions." },
      { name: "REACT", description: "Component systems, hooks, state patterns, scalable front-end architecture." },
      { name: "TAILWIND", description: "Utility-first styling, responsive layouts, fast UI iteration & consistency." },
      { name: "HTML", description: "Semantic structure, accessibility-first markup, SEO-friendly layouts." },
      { name: "CSS", description: "Grid/Flex layouts, animations, responsive polish, UI micro-details." },
      { name: "FIGMA", description: "UI/UX layout, design systems, clean handoff for development." },
      { name: "GIT/GITHUB", description: "Version control workflow, branching, clean commits, collaboration." },
      { name: "SHOPIFY", description: "Theme development, Liquid sections, storefront UX, product/collection layouts." },
    ],
    []
  );

  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 30 }); // percent

  // Intersection observer
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Cursor spotlight only within section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      setSpot({
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      });
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  // Auto cycle
  useEffect(() => {
    if (!isVisible || paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % skills.length), 2600);
    return () => clearInterval(id);
  }, [isVisible, paused, skills.length]);

  const activeSkill = skills[active];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND: grid + spotlight + grain */}
      <div className="pointer-events-none absolute inset-0">
        {/* spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(700px circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.10), transparent 60%)`,
            transition: "background 120ms linear",
          }}
        />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        {/* grain */}
        <div className="absolute inset-0 opacity-[0.09] mix-blend-overlay grain" />
        {/* edge fades */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        {/* TOP ROW */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: big title + copy */}
          <div className="lg:col-span-7">
            <div
              className={[
                "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2",
                "text-[11px] tracking-[0.28em] uppercase text-white/70",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                "transition-all duration-700",
              ].join(" ")}
            >
              <span className="h-2 w-2 rounded-full bg-white/70" />
              About / Skills
            </div>

            <h2
              className={[
                "mt-6 font-black leading-[0.9]",
                "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                "transition-all duration-700 delay-75",
              ].join(" ")}
            >
              BUILDING
              <span className="block text-white/60">INTERFACES</span>
              <span className="block">THAT FEEL</span>
              <span className="block text-white/60">PREMIUM.</span>
            </h2>

            <p
              className={[
                "mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                "transition-all duration-700 delay-150",
              ].join(" ")}
            >
              I’m Kel — a front-end developer focused on modern, responsive, user-friendly experiences.
              I like clean layouts, strong typography, and micro-interactions that make a product feel “alive”.
            </p>

            {/* quick chips */}
            <div
              className={[
                "mt-8 flex flex-wrap gap-2",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                "transition-all duration-700 delay-200",
              ].join(" ")}
            >
  
            </div>
          </div>

          {/* RIGHT: mini stats (awwwards style cards) */}
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:gap-6">
              {[
                { k: "02", v: "Client Projects", note: "Freelance builds delivered" },
                { k: "08", v: "Core Skills", note: "Focused tech stack" },
              ].map((x, i) => (
                <div
                  key={x.v}
                  className={[
                    "rounded-2xl border border-white/15 bg-white/5 p-6",
                    "hover:bg-white/7 transition",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    "transition-all duration-700",
                  ].join(" ")}
                  style={{ transitionDelay: `${180 + i * 80}ms` }}
                >
                  <div className="flex items-end justify-between">
                    <div className="text-5xl font-black leading-none">{x.k}</div>
                    <div className="text-[11px] tracking-[0.28em] uppercase text-white/55">Index</div>
                  </div>
                  <div className="mt-3 text-sm font-semibold text-white/85">{x.v}</div>
                  <div className="mt-1 text-sm text-white/60">{x.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="mt-14 sm:mt-20 border-y border-white/10 py-4 overflow-hidden">
          <div className="marquee">
            <div className="marquee__track">
              {[...skills, ...skills].map((s, idx) => (
                <span key={`${s.name}-${idx}`} className="marquee__item">
                  <span className="dot" /> {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* TECH STACK SECTION */}
        <div className="mt-14 sm:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: list */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl sm:text-4xl font-black">TECH STACK_</h3>
              <div className="text-[11px] tracking-[0.28em] uppercase text-white/55">
                {paused ? "Paused" : "Auto"}
              </div>
            </div>

            <div
              className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-3 sm:p-4"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {skills.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setActive(i)}
                    className={[
                      "w-full group flex items-center justify-between rounded-xl px-4 py-4",
                      "border transition",
                      isActive
                        ? "border-white/35 bg-white/10"
                        : "border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-white/55 w-10">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <span className="font-mono tracking-wide text-sm sm:text-base">
                        {s.name}
                      </span>
                    </div>

                    <span
                      className={[
                        "h-2 w-2 rounded-full transition",
                        isActive ? "bg-white scale-125" : "bg-white/25 group-hover:bg-white/50",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: sticky detail */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-20">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 overflow-hidden relative">
                <div className="absolute inset-0 opacity-25">
                  <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] tracking-[0.28em] uppercase text-white/55">
                      Selected Skill
                    </div>
                    <div className="text-[11px] tracking-[0.28em] uppercase text-white/55">
                      {String(active + 1).padStart(2, "0")}/{String(skills.length).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="mt-4 text-4xl sm:text-5xl font-black tracking-wide">
                    {activeSkill?.name}
                  </div>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70 max-w-xl">
                    {activeSkill?.description}
                  </p>

                  {/* progress */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between text-xs text-white/55">
                      <span>Rotation</span>
                      <span>{paused ? "Manual" : "Auto"}</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-white/60 transition-all duration-500"
                        style={{ width: `${((active + 1) / skills.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* footer note */}
                  <div className="mt-6 flex items-center justify-between text-xs text-white/45">
                    <span>Hover list to pause.</span>
                    <span className="font-mono">kel / portfolio</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CSS helpers */}
      <style>{`
        /* grain overlay */
        .grain {
          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        /* marquee */
        .marquee { width: 100%; overflow: hidden; }
        .marquee__track {
          display: flex;
          gap: 2.2rem;
          width: max-content;
          animation: marquee 18s linear infinite;
          will-change: transform;
        }
        .marquee__item {
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 12px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: rgba(255,255,255,.65);
          white-space: nowrap;
        }
        .marquee__item .dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(255,255,255,.6);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee__track { animation: none; }
          * { transition: none !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutSkillsSection;

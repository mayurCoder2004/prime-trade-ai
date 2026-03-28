import React from 'react';

const HERO_STATS = [
  { title: 'Secure', subtitle: 'Token-based sessions' },
  { title: 'Fast', subtitle: 'Live task refresh' },
  { title: 'Simple', subtitle: 'Single-page workflow' },
];

export default function AuthHero() {
  return (
    <section className="auth-hero animate-rise">
      <p className="eyebrow">Prime Trade AI Workspace</p>
      <h1 className="hero-title">Command your workflow with a cleaner and faster task cockpit.</h1>
      <p className="hero-copy">
        Organize priorities, ship updates quickly, and keep your trade workflow focused from one polished dashboard.
      </p>
      <div className="stats-grid">
        {HERO_STATS.map((item) => (
          <article key={item.title} className="stat-chip">
            <p className="stat-value">{item.title}</p>
            <p className="stat-label">{item.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

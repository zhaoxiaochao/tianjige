export default function Home({ onNavigate }) {
  const modules = [
    { id: 'tarot', icon: '🃏', title: '塔罗牌占卜', subtitle: 'Tarot Reading', desc: '78张塔罗牌，多种牌阵，解读命运的指引', accent: '#8b5cf6' },
    { id: 'zodiac', icon: '⭐', title: '星座运势', subtitle: 'Astrology', desc: '十二星座、太阳月亮星座、星座配对分析', accent: '#f59e0b' },
    { id: 'iching', icon: '☰', title: '六爻占卜', subtitle: 'I Ching / Six Lines', desc: '铜钱摇卦，六十四卦详解，古老的智慧', accent: '#d4a843' },
    { id: 'meihua', icon: '🌸', title: '梅花易数', subtitle: 'Plum Blossom Oracle', desc: '万物皆可起卦，时间数字皆有玄机', accent: '#ec4899' },
    { id: 'bazi', icon: '🏛️', title: '八字命理', subtitle: 'Four Pillars of Destiny', desc: '四柱八字排盘，五行分析，十神论命', accent: '#10b981' },
    { id: 'fortune', icon: '🔮', title: '每日运势', subtitle: 'Daily Fortune', desc: '综合多种体系的今日运势速查', accent: '#06b6d4' },
    { id: 'numerology', icon: '🔢', title: '数字能量', subtitle: 'Numerology', desc: '生命灵数、幸运数字、数字与命运', accent: '#3b82f6' },
    { id: 'dream', icon: '💭', title: '解梦大全', subtitle: 'Dream Interpretation', desc: '周公解梦，探索梦境中的隐藏信息', accent: '#a78bfa' },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <div className="module-grid">
        {modules.map((m, i) => (
          <div
            key={m.id}
            className="module-card"
            style={{ '--card-accent': m.accent, animationDelay: `${i * 0.08}s`, animation: 'fadeIn 0.5s ease-out forwards', opacity: 0 }}
            onClick={() => onNavigate(m.id)}
          >
            <span className="card-icon">{m.icon}</span>
            <div className="card-title">{m.title}</div>
            <div className="card-subtitle">{m.subtitle}</div>
            <div className="card-desc">{m.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', padding: '20px 0 40px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
        <p>✦ 占卜仅供娱乐参考，人生掌握在自己手中 ✦</p>
      </div>
    </div>
  );
}

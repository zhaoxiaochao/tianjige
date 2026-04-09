import { useState, useMemo } from 'react';
import { hexagrams, meihuaByTime } from '../data/iching';
import { zodiacSigns } from '../data/zodiac';

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function FortunePage({ onNavigate }) {
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
  const seed = today.getFullYear() * 10000 + (today.getMonth()+1) * 100 + today.getDate();
  const rng = seededRandom(seed);

  const [selectedSign, setSelectedSign] = useState(null);

  const todayHex = useMemo(() => meihuaByTime(today), []);

  const generateFortune = (sign) => {
    const signSeed = seed + sign.name.charCodeAt(0);
    const r = seededRandom(signSeed);
    const aspects = [
      { name: '综合运势', icon: '⭐' },
      { name: '爱情运', icon: '💕' },
      { name: '事业运', icon: '💼' },
      { name: '财运', icon: '💰' },
      { name: '健康运', icon: '🏥' },
    ];

    return aspects.map(a => {
      const score = Math.floor(r() * 40 + 60); // 60-100
      const stars = Math.round(score / 20);
      return { ...a, score, stars };
    });
  };

  const luckyItems = useMemo(() => {
    const colors = ['红色','橙色','黄色','绿色','蓝色','紫色','白色','粉色','金色','银色'];
    const directions = ['东','南','西','北','东南','东北','西南','西北'];
    const numbers = Array.from({length:9},(_,i) => i+1);
    const activities = ['读书学习','运动锻炼','社交聚会','冥想静坐','整理房间','尝试新事物','与家人相处','创意工作','财务规划','亲近自然'];

    return {
      color: colors[Math.floor(rng() * colors.length)],
      direction: directions[Math.floor(rng() * directions.length)],
      number: numbers[Math.floor(rng() * numbers.length)],
      activity: activities[Math.floor(rng() * activities.length)],
    };
  }, []);

  const dayAdvice = useMemo(() => {
    const advices = [
      '今日宜静不宜动，沉下心来思考未来方向。',
      '贵人运旺，多与人交流可获得意外收获。',
      '适合开始新计划，万事开头正当时。',
      '注意言辞，说话三思，避免口舌是非。',
      '今日财运不错，可以关注理财方面的事务。',
      '感情方面有惊喜，对伴侣多一些表达。',
      '学习运佳，适合充电提升自己。',
      '工作中可能遇到挑战，但坚持就是胜利。',
      '出行顺利，适合短途旅行或户外活动。',
      '今日适合收尾工作，把未完成的事情处理好。',
      '创意灵感旺盛，适合艺术创作或头脑风暴。',
      '健康方面需要注意，早睡早起，多喝水。',
    ];
    return advices[Math.floor(rng() * advices.length)];
  }, []);

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => onNavigate('home')}>← 返回</button>
      <div className="page-header">
        <div className="page-icon">🔮</div>
        <h2>每日运势</h2>
        <p>{today.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</p>
      </div>

      <div style={{ maxWidth: 650, margin: '0 auto' }}>
        {/* Today's Hexagram */}
        <div className="panel" style={{ marginBottom: 20, textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 8 }}>今日卦象（梅花易数·时间起卦）</div>
          <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: 4 }}>
            {todayHex.hexagram.title}
          </div>
          <span className="badge badge-gold">{todayHex.hexagram.fortune}</span>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 10, lineHeight: 1.7 }}>
            {todayHex.hexagram.advice}
          </p>
        </div>

        {/* Lucky Items */}
        <div className="panel" style={{ marginBottom: 20 }}>
          <div style={{ fontSize: '1rem', fontFamily: 'var(--font-serif)', fontWeight: 600, textAlign: 'center', marginBottom: 16, color: 'var(--accent-purple-light)' }}>
            ✦ 今日宜忌 ✦
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: 14, textAlign: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>幸运颜色</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-gold)' }}>{luckyItems.color}</div>
            </div>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: 14, textAlign: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>幸运方位</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-gold)' }}>{luckyItems.direction}方</div>
            </div>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: 14, textAlign: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>幸运数字</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-gold)' }}>{luckyItems.number}</div>
            </div>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: 14, textAlign: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>宜做之事</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-gold)' }}>{luckyItems.activity}</div>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 14, lineHeight: 1.7 }}>
            💡 {dayAdvice}
          </p>
        </div>

        {/* Zodiac Fortune */}
        <div className="panel">
          <div style={{ fontSize: '1rem', fontFamily: 'var(--font-serif)', fontWeight: 600, textAlign: 'center', marginBottom: 16, color: 'var(--accent-purple-light)' }}>
            ✦ 星座今日运势 ✦
          </div>
          <div className="zodiac-wheel">
            {zodiacSigns.map(s => (
              <div
                key={s.id}
                className={`zodiac-item ${selectedSign?.id === s.id ? 'active' : ''}`}
                onClick={() => setSelectedSign(s)}
              >
                <div className="zodiac-icon">{s.icon}</div>
                <div className="zodiac-name" style={{ fontSize: '0.82rem' }}>{s.name}</div>
              </div>
            ))}
          </div>

          {selectedSign && (
            <div style={{ animation: 'fadeIn 0.3s ease-out', marginTop: 16, background: 'var(--bg-secondary)', borderRadius: 12, padding: 20 }}>
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: '2rem' }}>{selectedSign.icon}</span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600 }}>{selectedSign.name}</div>
              </div>
              <div style={{ display: 'grid', gap: 10 }}>
                {generateFortune(selectedSign).map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ width: 80, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{a.icon} {a.name}</span>
                    <div style={{ flex: 1, height: 6, background: 'var(--bg-primary)', borderRadius: 3 }}>
                      <div style={{
                        width: `${a.score}%`,
                        height: '100%',
                        background: a.score >= 85 ? 'var(--accent-gold)' : a.score >= 70 ? 'var(--accent-green)' : 'var(--accent-blue)',
                        borderRadius: 3,
                        transition: 'width 0.8s ease-out',
                      }} />
                    </div>
                    <span className="star-rating" style={{ width: 90, textAlign: 'right', fontSize: '0.85rem' }}>
                      {'★'.repeat(a.stars)}{'☆'.repeat(5 - a.stars)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

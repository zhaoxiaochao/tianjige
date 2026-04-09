import { useState } from 'react';
import { spreads, drawCards, majorArcana } from '../data/tarot';

function TarotCard({ card, position, delay = 0, revealed }) {
  const [flipped, setFlipped] = useState(false);

  if (!revealed && !flipped) {
    return (
      <div style={{ textAlign: 'center', animationDelay: `${delay}s`, animation: 'fadeIn 0.5s ease-out forwards', opacity: 0 }}>
        <div
          className="tarot-card-display"
          style={{ cursor: 'pointer', background: 'linear-gradient(145deg, #1a0a3e, #2a1a5e)' }}
          onClick={() => setFlipped(true)}
        >
          <div style={{ fontSize: '3rem' }}>🌟</div>
          <div style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', marginTop: 8 }}>点击翻牌</div>
        </div>
        {position && <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: 8 }}>{position}</div>}
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', animationDelay: `${delay}s`, animation: 'fadeIn 0.5s ease-out forwards', opacity: 0 }}>
      <div className={`tarot-card-display ${card.isReversed ? 'reversed' : ''}`}>
        <div className="card-face-icon">{card.icon}</div>
        <div className="card-face-name">
          {card.isReversed ? '逆位' : '正位'}<br />{card.name}
        </div>
      </div>
      {position && <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: 8 }}>{position}</div>}
    </div>
  );
}

export default function TarotPage({ onNavigate }) {
  const [selectedSpread, setSelectedSpread] = useState(null);
  const [question, setQuestion] = useState('');
  const [drawnCards, setDrawnCards] = useState(null);
  const [allRevealed, setAllRevealed] = useState(false);

  const handleDraw = () => {
    if (!selectedSpread) return;
    const cards = drawCards(selectedSpread.count);
    setDrawnCards(cards);
    setAllRevealed(false);
  };

  const reset = () => {
    setDrawnCards(null);
    setSelectedSpread(null);
    setQuestion('');
    setAllRevealed(false);
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => onNavigate('home')}>← 返回</button>

      <div className="page-header">
        <div className="page-icon">🃏</div>
        <h2>塔罗牌占卜</h2>
        <p>选择牌阵，心中默想问题，让塔罗指引方向</p>
      </div>

      {!drawnCards ? (
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="form-group">
            <label className="form-label">你的问题（可选）</label>
            <input
              className="form-input"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              placeholder="在心中默想你想问的问题..."
            />
          </div>

          <div className="form-group">
            <label className="form-label">选择牌阵</label>
            <div style={{ display: 'grid', gap: 12 }}>
              {spreads.map(s => (
                <div
                  key={s.id}
                  onClick={() => setSelectedSpread(s)}
                  style={{
                    padding: '16px 20px',
                    background: selectedSpread?.id === s.id ? 'rgba(139,92,246,0.15)' : 'var(--bg-secondary)',
                    border: `1px solid ${selectedSpread?.id === s.id ? 'var(--accent-purple)' : 'var(--border-color)'}`,
                    borderRadius: 12,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>{s.name} <span className="badge badge-purple">{s.count}张</span></div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{s.desc}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>
                    牌位：{s.positions.join(' → ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="btn btn-gold btn-block btn-lg"
            onClick={handleDraw}
            disabled={!selectedSpread}
            style={{ opacity: selectedSpread ? 1 : 0.5 }}
          >
            🔮 开始抽牌
          </button>
        </div>
      ) : (
        <div>
          {question && (
            <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 20, fontStyle: 'italic' }}>
              「{question}」
            </div>
          )}

          <div className="tarot-spread">
            {drawnCards.map((card, i) => (
              <TarotCard
                key={i}
                card={card}
                position={selectedSpread.positions[i]}
                delay={i * 0.2}
                revealed={allRevealed}
              />
            ))}
          </div>

          {!allRevealed && (
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <button className="btn btn-primary" onClick={() => setAllRevealed(true)}>
                ✨ 一键揭示所有牌
              </button>
            </div>
          )}

          {/* Interpretation */}
          <div className="result-panel" style={{ marginTop: 24 }}>
            <div className="result-title">✦ 牌面解读 ✦</div>
            {drawnCards.map((card, i) => (
              <div key={i} className="result-section">
                <h4>{selectedSpread.positions[i]}：{card.name}（{card.isReversed ? '逆位' : '正位'}）{card.en}</h4>
                <p>{card.isReversed ? card.reversed : card.upright}</p>
                <div style={{ marginTop: 6 }}>
                  {card.keywords.map((k, j) => (
                    <span key={j} className="badge badge-purple" style={{ marginRight: 6 }}>{k}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="result-section">
              <h4>综合指引</h4>
              <p style={{ lineHeight: 1.8 }}>
                {drawnCards.length === 1 ? (
                  `这张${drawnCards[0].name}（${drawnCards[0].isReversed ? '逆位' : '正位'}）提示你：${drawnCards[0].isReversed ? drawnCards[0].reversed : drawnCards[0].upright}。静心感受这张牌带给你的信息。`
                ) : drawnCards.length === 3 ? (
                  `过去的${drawnCards[0].name}影响着你的现在，当前${drawnCards[1].name}的能量正在作用，未来${drawnCards[2].name}指向一个${drawnCards[2].isReversed ? '需要反思' : '积极'}的方向。总体来看，宇宙提醒你关注内心的声音，顺应当下的能量流动。`
                ) : (
                  `综合${drawnCards.length}张牌的能量，主要的牌${drawnCards[0].name}奠定了基调。${drawnCards.filter(c => !c.isReversed).length > drawnCards.length / 2 ? '正位牌居多，整体能量偏向积极正面' : '逆位牌较多，提示需要反思和调整方向'}。信任你的直觉，让塔罗的智慧引导你前行。`
                )}
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <button className="btn btn-outline" onClick={reset}>🔄 重新占卜</button>
          </div>
        </div>
      )}
    </div>
  );
}

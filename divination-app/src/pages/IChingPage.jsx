import { useState } from 'react';
import { castHexagram, hexagrams, trigrams } from '../data/iching';

function HexagramLines({ lines }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, margin: '20px 0' }}>
      {lines.map((line, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className={`hexagram-line ${line.isMoving ? 'moving' : ''}`} title={line.label}>
            {line.isYang ? (
              <div className="yang" />
            ) : (
              <>
                <div className="yin" />
                <div className="yin" />
              </>
            )}
          </div>
          <span style={{ fontSize: '0.7rem', color: line.isMoving ? 'var(--accent-red)' : 'transparent', width: 24 }}>
            {line.isMoving ? '◯动' : ''}
          </span>
        </div>
      ))}
      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 4 }}>
        ↑ 上卦 / ↓ 下卦（从下往上读）
      </div>
    </div>
  );
}

export default function IChingPage({ onNavigate }) {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState(null);
  const [casting, setCasting] = useState(false);
  const [tosses, setTosses] = useState([]);

  const handleCast = () => {
    setCasting(true);
    setTosses([]);
    setResult(null);

    // Animate each toss
    const r = castHexagram();
    const displayLines = [...r.lines].reverse(); // bottom to top
    let i = 0;
    const interval = setInterval(() => {
      setTosses(prev => [...prev, displayLines[i]]);
      i++;
      if (i >= 6) {
        clearInterval(interval);
        setTimeout(() => {
          setResult(r);
          setCasting(false);
        }, 500);
      }
    }, 600);
  };

  const fortuneColor = (f) => {
    if (f.includes('大吉')) return 'var(--accent-gold)';
    if (f.includes('吉')) return 'var(--accent-green)';
    if (f.includes('凶')) return 'var(--accent-red)';
    return 'var(--text-secondary)';
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => onNavigate('home')}>← 返回</button>
      <div className="page-header">
        <div className="page-icon">☰</div>
        <h2>六爻占卜</h2>
        <p>虚拟铜钱摇卦，聆听周易六十四卦的古老智慧</p>
      </div>

      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div className="panel">
          <div className="form-group">
            <label className="form-label">心中默想你的问题</label>
            <input
              className="form-input"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              placeholder="诚心默念你想问的事..."
            />
          </div>

          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 16 }}>
              模拟三枚铜钱投掷六次，正面为阳（3），背面为阴（2）
            </p>

            {/* Show tosses as they happen */}
            {tosses.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                {tosses.map((t, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                    marginBottom: 8, animation: 'fadeIn 0.3s ease-out',
                  }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', width: 60, textAlign: 'right' }}>
                      第{i+1}爻
                    </span>
                    <div className="coins-row">
                      {t.coins.map((c, j) => (
                        <div key={j} className={`coin ${c === 3 ? 'coin-yang' : 'coin-yin'}`}>
                          {c === 3 ? '正' : '反'}
                        </div>
                      ))}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: t.isMoving ? 'var(--accent-red)' : 'var(--text-secondary)', width: 80 }}>
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <button
              className="btn btn-gold btn-lg"
              onClick={handleCast}
              disabled={casting}
              style={{ opacity: casting ? 0.6 : 1 }}
            >
              {casting ? '🎲 摇卦中...' : '🪙 开始摇卦'}
            </button>
          </div>
        </div>

        {result && (
          <div className="result-panel" style={{ animation: 'fadeIn 0.6s ease-out' }}>
            <div className="result-title">
              ✦ {result.hexagram.title} ✦
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <HexagramLines lines={result.lines} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  上{result.upper?.name}（{result.upper?.nature}） / 下{result.lower?.name}（{result.lower?.nature}）
                </span>
              </div>
              <span className="badge" style={{
                background: `${fortuneColor(result.hexagram.fortune)}22`,
                color: fortuneColor(result.hexagram.fortune),
                fontSize: '1rem', padding: '4px 16px',
              }}>
                {result.hexagram.fortune}
              </span>
            </div>

            <div className="result-section">
              <h4>卦辞</h4>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>{result.hexagram.judgment}</p>
            </div>

            <div className="result-section">
              <h4>卦义解读</h4>
              <p>{result.hexagram.meaning}</p>
            </div>

            <div className="result-section">
              <h4>行动建议</h4>
              <p>{result.hexagram.advice}</p>
            </div>

            {result.hasMoving && result.changedHex && (
              <div className="result-section" style={{ background: 'rgba(239,68,68,0.05)', padding: 16, borderRadius: 12, marginTop: 12 }}>
                <h4>🔄 变卦：{result.changedHex.title}</h4>
                <p style={{ marginBottom: 8 }}>{result.changedHex.meaning}</p>
                <p><strong>建议：</strong>{result.changedHex.advice}</p>
                <span className="badge" style={{
                  background: `${fortuneColor(result.changedHex.fortune)}22`,
                  color: fortuneColor(result.changedHex.fortune),
                  marginTop: 8,
                }}>
                  变卦 {result.changedHex.fortune}
                </span>
              </div>
            )}

            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <button className="btn btn-outline" onClick={() => { setResult(null); setTosses([]); }}>
                🔄 重新摇卦
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

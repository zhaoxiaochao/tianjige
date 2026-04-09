import { useState } from 'react';
import { meihuaByTime, meihuaByNumber, trigrams } from '../data/iching';

export default function MeihuaPage({ onNavigate }) {
  const [method, setMethod] = useState('time'); // time, number
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleTimeDiv = () => {
    setResult(meihuaByTime(new Date()));
  };

  const handleNumberDiv = () => {
    if (!num1 || !num2) return;
    setResult(meihuaByNumber(parseInt(num1), parseInt(num2)));
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
        <div className="page-icon">🌸</div>
        <h2>梅花易数</h2>
        <p>万物皆可起卦，以时间或数字感应天机</p>
      </div>

      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div className="nav-bar" style={{ justifyContent: 'center' }}>
          <button className={`nav-btn ${method === 'time' ? 'active' : ''}`} onClick={() => { setMethod('time'); setResult(null); }}>
            🕐 时间起卦
          </button>
          <button className={`nav-btn ${method === 'number' ? 'active' : ''}`} onClick={() => { setMethod('number'); setResult(null); }}>
            🔢 数字起卦
          </button>
        </div>

        <div className="panel">
          {method === 'time' ? (
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>
                以当前时间的年月日时数起卦，取天地自然之数
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: 20 }}>
                {new Date().toLocaleString('zh-CN')}
              </p>
              <button className="btn btn-gold btn-lg" onClick={handleTimeDiv}>
                🌸 此刻起卦
              </button>
            </div>
          ) : (
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 16, textAlign: 'center' }}>
                心中默想问题，随意报出两个数字
              </p>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">第一个数字（上卦）</label>
                  <input className="form-input" type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="随意输入" />
                </div>
                <div className="form-group">
                  <label className="form-label">第二个数字（下卦）</label>
                  <input className="form-input" type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="随意输入" />
                </div>
              </div>
              <button className="btn btn-gold btn-block" onClick={handleNumberDiv} disabled={!num1 || !num2}>
                🌸 数字起卦
              </button>
            </div>
          )}
        </div>

        {result && (
          <div className="result-panel" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="result-title">✦ {result.hexagram.title} ✦</div>

            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 4 }}>上卦（用卦）</div>
                  <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-purple-light)' }}>
                    ☰ {result.upper?.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {result.upper?.nature} · {result.upper?.element}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 4 }}>下卦（体卦）</div>
                  <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)' }}>
                    ☰ {result.lower?.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {result.lower?.nature} · {result.lower?.element}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 12 }}>
                <span className="badge badge-purple">动爻：第{result.movingLine}爻</span>
                <span className="badge badge-gold" style={{ marginLeft: 8 }}>{result.method}</span>
              </div>

              <span className="badge" style={{
                background: `${fortuneColor(result.hexagram.fortune)}22`,
                color: fortuneColor(result.hexagram.fortune),
                fontSize: '1rem', padding: '4px 16px',
              }}>
                {result.hexagram.fortune}
              </span>
            </div>

            {/* 体用分析 */}
            <div className="result-section">
              <h4>体用关系分析</h4>
              <p>
                体卦为{result.lower?.name}（{result.lower?.element}），用卦为{result.upper?.name}（{result.upper?.element}）。
                {(() => {
                  const generate = { '木':'火','火':'土','土':'金','金':'水','水':'木' };
                  const control = { '木':'土','土':'水','水':'火','火':'金','金':'木' };
                  const te = result.lower?.element;
                  const ye = result.upper?.element;
                  if (!te || !ye) return '';
                  if (te === ye) return '体用比和，事情平稳顺利。';
                  if (generate[te] === ye) return '体生用，有付出损耗之象，需谨慎。';
                  if (generate[ye] === te) return '用生体，大吉！外力帮助，事情顺遂。';
                  if (control[te] === ye) return '体克用，可得到所求，但需要付出努力。';
                  if (control[ye] === te) return '用克体，不利！有阻碍和压力，宜退守。';
                  return '';
                })()}
              </p>
            </div>

            <div className="result-section">
              <h4>卦辞</h4>
              <p style={{ fontFamily: 'var(--font-serif)' }}>{result.hexagram.judgment}</p>
            </div>

            <div className="result-section">
              <h4>解读</h4>
              <p>{result.hexagram.meaning}</p>
            </div>

            <div className="result-section">
              <h4>建议</h4>
              <p>{result.hexagram.advice}</p>
            </div>

            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <button className="btn btn-outline" onClick={() => setResult(null)}>🔄 重新起卦</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

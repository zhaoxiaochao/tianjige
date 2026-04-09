import { useState } from 'react';
import { zodiacSigns, moonSigns, getZodiacSign, estimateMoonSign, getCompatibility } from '../data/zodiac';

export default function ZodiacPage({ onNavigate }) {
  const [tab, setTab] = useState('lookup'); // lookup, detail, compatibility
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [selectedSign, setSelectedSign] = useState(null);
  const [result, setResult] = useState(null);
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [compatResult, setCompatResult] = useState(null);

  const handleLookup = () => {
    if (!birthMonth || !birthDay) return;
    const m = parseInt(birthMonth);
    const d = parseInt(birthDay);
    const sign = getZodiacSign(m, d);
    const moonSign = birthYear
      ? estimateMoonSign(parseInt(birthYear), m, d)
      : null;
    setResult({ sign, moonSign });
  };

  const handleCompat = () => {
    const s1 = zodiacSigns.find(s => s.name === sign1);
    const s2 = zodiacSigns.find(s => s.name === sign2);
    if (s1 && s2) setCompatResult(getCompatibility(s1, s2));
  };

  const tabs = [
    { id: 'lookup', label: '🔍 查询星座' },
    { id: 'detail', label: '⭐ 星座详情' },
    { id: 'compatibility', label: '💕 星座配对' },
  ];

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => onNavigate('home')}>← 返回</button>
      <div className="page-header">
        <div className="page-icon">⭐</div>
        <h2>星座运势</h2>
        <p>探索星辰的奥秘，了解你的太阳与月亮星座</p>
      </div>

      <div className="nav-bar">
        {tabs.map(t => (
          <button key={t.id} className={`nav-btn ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'lookup' && (
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <div className="panel">
            <div className="form-group">
              <label className="form-label">出生年份（用于月亮星座，可选）</label>
              <input className="form-input" type="number" value={birthYear} onChange={e => setBirthYear(e.target.value)} placeholder="如 1993" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">出生月份</label>
                <select className="form-select" value={birthMonth} onChange={e => setBirthMonth(e.target.value)}>
                  <option value="">选择月份</option>
                  {Array.from({length:12},(_,i) => <option key={i+1} value={i+1}>{i+1}月</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">出生日期</label>
                <select className="form-select" value={birthDay} onChange={e => setBirthDay(e.target.value)}>
                  <option value="">选择日期</option>
                  {Array.from({length:31},(_,i) => <option key={i+1} value={i+1}>{i+1}日</option>)}
                </select>
              </div>
            </div>
            <button className="btn btn-gold btn-block" onClick={handleLookup}>查询星座</button>
          </div>

          {result && (
            <div className="result-panel">
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: '3.5rem' }}>{result.sign.icon}</div>
                <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--accent-gold)' }}>
                  {result.sign.name}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{result.sign.en}</div>
              </div>

              <table className="info-table">
                <tbody>
                  <tr><td>太阳星座</td><td>{result.sign.icon} {result.sign.name}</td></tr>
                  {result.moonSign && (
                    <tr><td>月亮星座</td><td>🌙 {result.moonSign}座（估算）</td></tr>
                  )}
                  <tr><td>元素</td><td>{result.sign.element}</td></tr>
                  <tr><td>属性</td><td>{result.sign.quality}</td></tr>
                  <tr><td>守护星</td><td>{result.sign.ruler}</td></tr>
                  <tr><td>性格特质</td><td>{result.sign.traits}</td></tr>
                  <tr><td>爱情</td><td>{result.sign.love}</td></tr>
                  <tr><td>事业</td><td>{result.sign.career}</td></tr>
                  <tr><td>幸运数字</td><td>{result.sign.lucky.number}</td></tr>
                  <tr><td>幸运颜色</td><td>{result.sign.lucky.color}</td></tr>
                  <tr><td>幸运日</td><td>{result.sign.lucky.day}</td></tr>
                </tbody>
              </table>

              {result.moonSign && (
                <div className="result-section" style={{ marginTop: 16 }}>
                  <h4>🌙 月亮{result.moonSign}座解读</h4>
                  {(() => {
                    const ms = moonSigns.find(m => m.name === result.moonSign);
                    return ms ? (
                      <div>
                        <p><strong>情绪模式：</strong>{ms.emotion}</p>
                        <p><strong>内在需求：</strong>{ms.need}</p>
                      </div>
                    ) : null;
                  })()}
                  <p style={{ marginTop: 8, color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                    * 月亮星座为简化估算，精确结果需要出生时间和地点
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {tab === 'detail' && (
        <div>
          <div className="zodiac-wheel">
            {zodiacSigns.map(s => (
              <div
                key={s.id}
                className={`zodiac-item ${selectedSign?.id === s.id ? 'active' : ''}`}
                onClick={() => setSelectedSign(s)}
              >
                <div className="zodiac-icon">{s.icon}</div>
                <div className="zodiac-name">{s.name}</div>
                <div className="zodiac-date">{s.startMonth}/{s.startDay}-{s.endMonth}/{s.endDay}</div>
              </div>
            ))}
          </div>

          {selectedSign && (
            <div className="result-panel">
              <div className="result-title">{selectedSign.icon} {selectedSign.name} {selectedSign.en}</div>
              <table className="info-table">
                <tbody>
                  <tr><td>日期范围</td><td>{selectedSign.startMonth}月{selectedSign.startDay}日 - {selectedSign.endMonth}月{selectedSign.endDay}日</td></tr>
                  <tr><td>元素</td><td>{selectedSign.element}</td></tr>
                  <tr><td>属性</td><td>{selectedSign.quality}</td></tr>
                  <tr><td>守护星</td><td>{selectedSign.ruler}</td></tr>
                  <tr><td>性格</td><td>{selectedSign.traits}</td></tr>
                  <tr><td>爱情观</td><td>{selectedSign.love}</td></tr>
                  <tr><td>事业方向</td><td>{selectedSign.career}</td></tr>
                  <tr><td>幸运数字</td><td>{selectedSign.lucky.number}</td></tr>
                  <tr><td>幸运颜色</td><td>{selectedSign.lucky.color}</td></tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {tab === 'compatibility' && (
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <div className="panel">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">💙 星座一</label>
                <select className="form-select" value={sign1} onChange={e => setSign1(e.target.value)}>
                  <option value="">选择星座</option>
                  {zodiacSigns.map(s => <option key={s.id} value={s.name}>{s.icon} {s.name}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">❤️ 星座二</label>
                <select className="form-select" value={sign2} onChange={e => setSign2(e.target.value)}>
                  <option value="">选择星座</option>
                  {zodiacSigns.map(s => <option key={s.id} value={s.name}>{s.icon} {s.name}</option>)}
                </select>
              </div>
            </div>
            <button className="btn btn-gold btn-block" onClick={handleCompat}>查看配对</button>
          </div>

          {compatResult && (
            <div className="result-panel">
              <div className="result-title">💕 配对结果</div>
              <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 10 }}>
                  {zodiacSigns.find(s => s.name === sign1)?.icon} ❤️ {zodiacSigns.find(s => s.name === sign2)?.icon}
                </div>
                <div style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: 700 }}>
                  {compatResult.score}分
                </div>
                <div style={{ width: '100%', height: 8, background: 'var(--bg-secondary)', borderRadius: 4, marginTop: 12 }}>
                  <div style={{
                    width: `${compatResult.score}%`,
                    height: '100%',
                    background: compatResult.score >= 80 ? 'var(--accent-green)' : compatResult.score >= 60 ? 'var(--accent-orange)' : 'var(--accent-red)',
                    borderRadius: 4,
                    transition: 'width 1s ease-out',
                  }} />
                </div>
              </div>
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>{compatResult.desc}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

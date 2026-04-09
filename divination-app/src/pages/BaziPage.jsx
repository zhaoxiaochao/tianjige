import { useState } from 'react';
import { simpleBazi, wuxingInfo, ganWuxing, ganYinYang, zhiWuxing, zhiCangGan, shengXiao } from '../data/bazi';

function WuxingBar({ wxCount }) {
  const max = Math.max(...Object.values(wxCount), 1);
  return (
    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', margin: '16px 0' }}>
      {Object.entries(wxCount).map(([wx, count]) => (
        <div key={wx} style={{ textAlign: 'center', flex: 1 }}>
          <div style={{
            height: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
            <div style={{
              width: 36,
              height: `${(count / max) * 80}px`,
              background: wuxingInfo[wx].color,
              borderRadius: '4px 4px 0 0',
              minHeight: 4,
              transition: 'height 0.5s ease-out',
              opacity: 0.7,
            }} />
          </div>
          <div style={{ fontSize: '1.2rem', marginTop: 4 }}>{wuxingInfo[wx].icon}</div>
          <div style={{ fontSize: '0.85rem', color: wuxingInfo[wx].color, fontWeight: 600 }}>{wx}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{count}</div>
        </div>
      ))}
    </div>
  );
}

function PillarCard({ pillar }) {
  const ganColor = wuxingInfo[pillar.ganWuxing]?.color || 'var(--text-primary)';
  const zhiColor = wuxingInfo[pillar.zhiWuxing]?.color || 'var(--text-primary)';

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: 12,
      padding: 16,
      textAlign: 'center',
      flex: 1,
      minWidth: 100,
    }}>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 8 }}>{pillar.name}</div>
      <div style={{ fontSize: '0.75rem', color: 'var(--accent-purple-light)', marginBottom: 4 }}>
        {pillar.shiShen}
      </div>
      <div style={{
        fontSize: '1.8rem',
        fontFamily: 'var(--font-serif)',
        fontWeight: 700,
        color: ganColor,
        lineHeight: 1.3,
      }}>
        {pillar.gan}
      </div>
      <div style={{
        fontSize: '1.8rem',
        fontFamily: 'var(--font-serif)',
        fontWeight: 700,
        color: zhiColor,
        lineHeight: 1.3,
      }}>
        {pillar.zhi}
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6 }}>
        {pillar.ganWuxing}{pillar.ganYinYang} / {pillar.zhiWuxing}
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
        藏干：{pillar.cangGan.join(' ')}
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
        {pillar.changSheng}
      </div>
    </div>
  );
}

export default function BaziPage({ onNavigate }) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!year || !month || !day) return;
    const h = hour ? parseInt(hour) : 12;
    const r = simpleBazi(parseInt(year), parseInt(month), parseInt(day), h);
    setResult(r);
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => onNavigate('home')}>← 返回</button>
      <div className="page-header">
        <div className="page-icon">🏛️</div>
        <h2>八字命理</h2>
        <p>四柱八字排盘，五行分析，探索先天命格</p>
      </div>

      <div style={{ maxWidth: 650, margin: '0 auto' }}>
        <div className="panel">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">出生年（阳历）</label>
              <input className="form-input" type="number" value={year} onChange={e => setYear(e.target.value)} placeholder="如 1993" />
            </div>
            <div className="form-group">
              <label className="form-label">出生月</label>
              <select className="form-select" value={month} onChange={e => setMonth(e.target.value)}>
                <option value="">月</option>
                {Array.from({length:12},(_,i) => <option key={i+1} value={i+1}>{i+1}月</option>)}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">出生日</label>
              <select className="form-select" value={day} onChange={e => setDay(e.target.value)}>
                <option value="">日</option>
                {Array.from({length:31},(_,i) => <option key={i+1} value={i+1}>{i+1}日</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">出生时辰（24小时制，可选）</label>
              <select className="form-select" value={hour} onChange={e => setHour(e.target.value)}>
                <option value="">选择时辰</option>
                <option value="0">子时 (23:00-01:00)</option>
                <option value="2">丑时 (01:00-03:00)</option>
                <option value="4">寅时 (03:00-05:00)</option>
                <option value="6">卯时 (05:00-07:00)</option>
                <option value="8">辰时 (07:00-09:00)</option>
                <option value="10">巳时 (09:00-11:00)</option>
                <option value="12">午时 (11:00-13:00)</option>
                <option value="14">未时 (13:00-15:00)</option>
                <option value="16">申时 (15:00-17:00)</option>
                <option value="18">酉时 (17:00-19:00)</option>
                <option value="20">戌时 (19:00-21:00)</option>
                <option value="22">亥时 (21:00-23:00)</option>
              </select>
            </div>
          </div>
          <button className="btn btn-gold btn-block" onClick={handleCalculate} disabled={!year || !month || !day}>
            排盘分析
          </button>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 8, textAlign: 'center' }}>
            * 简化算法，精确排盘需考虑节气和真太阳时
          </p>
        </div>

        {result && (
          <div className="result-panel" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="result-title">
              ✦ 八字命盘 ✦
            </div>

            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <span className="badge badge-gold" style={{ fontSize: '0.9rem', padding: '4px 14px' }}>
                {result.shengxiao}年 · {result.dayYinYang}{result.dayWuxing} · {result.dayGan}日主
              </span>
            </div>

            {/* Four Pillars */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
              {result.pillars.map((p, i) => (
                <PillarCard key={i} pillar={p} />
              ))}
            </div>

            {/* Five Elements */}
            <div className="result-section">
              <h4>五行分布</h4>
              <WuxingBar wxCount={result.wxCount} />
              <p style={{ textAlign: 'center' }}>{result.summary}</p>
            </div>

            {/* Day Master Analysis */}
            <div className="result-section">
              <h4>日主分析</h4>
              <table className="info-table">
                <tbody>
                  <tr><td>日主</td><td style={{ color: wuxingInfo[result.dayWuxing]?.color }}>
                    {wuxingInfo[result.dayWuxing]?.icon} {result.dayGan}（{result.dayYinYang}{result.dayWuxing}）
                  </td></tr>
                  <tr><td>身强/身弱</td><td>
                    <span className={`badge ${result.isStrong ? 'badge-green' : 'badge-red'}`}>
                      {result.isStrong ? '偏旺' : '偏弱'}
                    </span>
                  </td></tr>
                  <tr><td>五行特征</td><td>{wuxingInfo[result.dayWuxing]?.trait}</td></tr>
                  <tr><td>对应方位</td><td>{wuxingInfo[result.dayWuxing]?.direction}方</td></tr>
                  <tr><td>对应季节</td><td>{wuxingInfo[result.dayWuxing]?.season}</td></tr>
                  <tr><td>对应脏腑</td><td>{wuxingInfo[result.dayWuxing]?.organ}</td></tr>
                </tbody>
              </table>
            </div>

            {/* Ten Gods */}
            <div className="result-section">
              <h4>十神配置</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {result.pillars.filter(p => p.shiShen !== '日主').map((p, i) => (
                  <span key={i} className="badge badge-purple">
                    {p.name} {p.gan}：{p.shiShen}
                  </span>
                ))}
              </div>
            </div>

            {/* Five Elements Relations */}
            <div className="result-section">
              <h4>五行生克图</h4>
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: '1rem', lineHeight: 2.2, color: 'var(--text-secondary)' }}>
                <span style={{ color: wuxingInfo['木'].color }}>🌳木</span> → <span style={{ color: wuxingInfo['火'].color }}>🔥火</span> → <span style={{ color: wuxingInfo['土'].color }}>🏔️土</span> → <span style={{ color: wuxingInfo['金'].color }}>⚔️金</span> → <span style={{ color: wuxingInfo['水'].color }}>💧水</span> → <span style={{ color: wuxingInfo['木'].color }}>🌳木</span>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>（相生：木生火，火生土，土生金，金生水，水生木）</div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <button className="btn btn-outline" onClick={() => setResult(null)}>🔄 重新排盘</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

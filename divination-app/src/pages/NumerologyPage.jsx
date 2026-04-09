import { useState } from 'react';

const lifePathMeanings = {
  1: { title: '领袖', icon: '👑', desc: '天生的领导者，独立自主，开创精神。你拥有强大的意志力和独特的创造力，适合开拓新领域。', strengths: '独立、创新、决断力、领导力', challenges: '固执、孤独、过于强势', career: '企业家、管理者、创新者', color: '红色', planet: '太阳' },
  2: { title: '调和者', icon: '🤝', desc: '天生的外交家，善于合作与调和。你敏感细腻，理解他人，是最好的倾听者和伙伴。', strengths: '合作、敏感、外交、耐心', challenges: '优柔寡断、过度依赖、敏感脆弱', career: '顾问、调解人、艺术家', color: '橙色', planet: '月亮' },
  3: { title: '表达者', icon: '🎨', desc: '天生的艺术家，充满创意和表达力。你乐观开朗，善于社交，用创造力照亮周围。', strengths: '创造力、表达力、乐观、社交', challenges: '肤浅、分散注意力、情绪化', career: '作家、演员、设计师', color: '黄色', planet: '木星' },
  4: { title: '建设者', icon: '🏗️', desc: '脚踏实地的建设者，注重秩序和稳定。你务实可靠，是任何团队的中流砥柱。', strengths: '稳定、务实、勤劳、组织力', challenges: '固守陈规、缺乏灵活、过度工作', career: '工程师、会计师、项目经理', color: '绿色', planet: '天王星' },
  5: { title: '自由者', icon: '🦅', desc: '热爱自由和变化的冒险家。你充满活力，渴望体验生活的各种可能性。', strengths: '适应力、多才多艺、冒险精神', challenges: '不安定、缺乏耐心、过度放纵', career: '旅行家、记者、销售', color: '蓝色', planet: '水星' },
  6: { title: '守护者', icon: '🛡️', desc: '充满爱心的守护者，重视家庭和责任。你追求和谐美好，是天生的照顾者。', strengths: '责任感、爱心、美感、和谐', challenges: '过度操心、控制欲、自我牺牲', career: '教师、医护、设计师', color: '靛色', planet: '金星' },
  7: { title: '探索者', icon: '🔬', desc: '深度思考的探索者，追求真理和智慧。你善于分析，对神秘事物充满好奇。', strengths: '智慧、分析力、直觉、研究', challenges: '孤僻、多疑、过度分析', career: '研究者、哲学家、心理学家', color: '紫色', planet: '海王星' },
  8: { title: '掌权者', icon: '💎', desc: '天生的权力掌握者，擅长物质世界的运作。你有强大的商业头脑和执行力。', strengths: '商业头脑、执行力、权威、效率', challenges: '功利、工作狂、控制欲', career: '企业高管、金融家、律师', color: '黑色', planet: '土星' },
  9: { title: '慈善家', icon: '🌍', desc: '胸怀天下的理想主义者，充满慈悲和智慧。你的使命是服务人类，追求更高的精神境界。', strengths: '慈悲、智慧、理想主义、包容', challenges: '不切实际、过度付出、情绪极端', career: '慈善家、艺术家、灵性导师', color: '金色', planet: '火星' },
  11: { title: '灵感大师', icon: '✨', desc: '稀有的大师数字！你拥有极强的直觉和灵性天赋，是天生的精神领袖和灵感源泉。', strengths: '灵感、直觉、领悟力、感召力', challenges: '神经紧张、理想过高、难以落地', career: '灵性导师、艺术家、发明家', color: '银色', planet: '冥王星' },
  22: { title: '建筑大师', icon: '🏛️', desc: '最强大的大师数字！你有将梦想变为现实的非凡能力，注定要做出伟大的成就。', strengths: '远见、实践力、建设力、影响力', challenges: '压力巨大、过度负担、完美主义', career: '建筑师、企业家、政治家', color: '白金色', planet: '冥王星' },
};

function calcLifePath(year, month, day) {
  const reduce = (n) => {
    while (n > 9 && n !== 11 && n !== 22) {
      n = String(n).split('').reduce((a, b) => a + parseInt(b), 0);
    }
    return n;
  };
  const y = reduce(year);
  const m = reduce(month);
  const d = reduce(day);
  return reduce(y + m + d);
}

function calcPersonalYear(year, month, day) {
  const currentYear = new Date().getFullYear();
  const reduce = (n) => {
    while (n > 9) n = String(n).split('').reduce((a, b) => a + parseInt(b), 0);
    return n;
  };
  return reduce(reduce(currentYear) + reduce(month) + reduce(day));
}

const personalYearMeanings = {
  1: '新的开始和机遇之年，播种未来。',
  2: '合作与耐心之年，培育关系。',
  3: '创造和表达之年，社交活跃。',
  4: '建设和努力之年，打好基础。',
  5: '变化和自由之年，拥抱改变。',
  6: '家庭和责任之年，爱与付出。',
  7: '内省和学习之年，寻找真理。',
  8: '收获和权力之年，物质丰盛。',
  9: '完成和放下之年，结束旧周期。',
};

export default function NumerologyPage({ onNavigate }) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [result, setResult] = useState(null);

  const handleCalc = () => {
    if (!year || !month || !day) return;
    const y = parseInt(year), m = parseInt(month), d = parseInt(day);
    const lifePath = calcLifePath(y, m, d);
    const personalYear = calcPersonalYear(y, m, d);
    const meaning = lifePathMeanings[lifePath] || lifePathMeanings[lifePath > 9 ? 9 : lifePath];
    setResult({ lifePath, personalYear, meaning });
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => onNavigate('home')}>← 返回</button>
      <div className="page-header">
        <div className="page-icon">🔢</div>
        <h2>数字能量 · 生命灵数</h2>
        <p>探索数字中隐藏的命运密码</p>
      </div>

      <div style={{ maxWidth: 550, margin: '0 auto' }}>
        <div className="panel">
          <div className="form-row-3">
            <div className="form-group">
              <label className="form-label">出生年</label>
              <input className="form-input" type="number" value={year} onChange={e => setYear(e.target.value)} placeholder="1993" />
            </div>
            <div className="form-group">
              <label className="form-label">出生月</label>
              <input className="form-input" type="number" value={month} onChange={e => setMonth(e.target.value)} placeholder="10" min="1" max="12" />
            </div>
            <div className="form-group">
              <label className="form-label">出生日</label>
              <input className="form-input" type="number" value={day} onChange={e => setDay(e.target.value)} placeholder="23" min="1" max="31" />
            </div>
          </div>
          <button className="btn btn-gold btn-block" onClick={handleCalc} disabled={!year || !month || !day}>
            计算生命灵数
          </button>
        </div>

        {result && (
          <div className="result-panel" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div style={{
                width: 100, height: 100, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-gold))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 12px', fontSize: '2.5rem', fontFamily: 'var(--font-serif)',
                fontWeight: 700, color: 'white',
                animation: 'pulseGlow 2s ease-in-out infinite',
              }}>
                {result.lifePath}
              </div>
              <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--accent-gold)' }}>
                {result.meaning.icon} {result.meaning.title}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                生命灵数 {result.lifePath}{result.lifePath >= 11 ? '（大师数字！）' : ''}
              </div>
            </div>

            <div className="result-section">
              <h4>人格解读</h4>
              <p>{result.meaning.desc}</p>
            </div>

            <div className="result-section">
              <h4>核心特质</h4>
              <table className="info-table">
                <tbody>
                  <tr><td>优势</td><td>{result.meaning.strengths}</td></tr>
                  <tr><td>挑战</td><td>{result.meaning.challenges}</td></tr>
                  <tr><td>适合职业</td><td>{result.meaning.career}</td></tr>
                  <tr><td>幸运颜色</td><td>{result.meaning.color}</td></tr>
                  <tr><td>守护星</td><td>{result.meaning.planet}</td></tr>
                </tbody>
              </table>
            </div>

            <div className="result-section" style={{ background: 'rgba(139,92,246,0.08)', padding: 16, borderRadius: 12 }}>
              <h4>📅 今年个人年数：{result.personalYear}</h4>
              <p>{personalYearMeanings[result.personalYear] || '一个特殊的能量年份。'}</p>
            </div>

            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <button className="btn btn-outline" onClick={() => setResult(null)}>🔄 重新计算</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

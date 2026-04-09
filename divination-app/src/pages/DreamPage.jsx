import { useState } from 'react';

const dreamDict = {
  '水': { icon: '💧', meaning: '水代表情感和潜意识。清水预示顺利，浑水代表困惑，洪水象征情绪失控。', fortune: '平', advice: '关注内心情感，理清思绪。' },
  '河': { icon: '🏞️', meaning: '河流代表生命的流动和时间的推移。过河意味着跨越困难。', fortune: '吉', advice: '勇敢面对变化，顺势而为。' },
  '海': { icon: '🌊', meaning: '大海象征广阔的潜意识和无限可能。平静的海是内心安宁，波涛汹涌则是情绪波动。', fortune: '平', advice: '拓宽视野，探索内心深处。' },
  '火': { icon: '🔥', meaning: '火象征激情、愤怒或转化。温暖的火是正能量，失控的火代表需要冷静。', fortune: '平', advice: '合理释放情绪，掌控内在力量。' },
  '飞': { icon: '🕊️', meaning: '飞翔代表自由、超越和对更高境界的追求。可能暗示你渴望摆脱某种束缚。', fortune: '吉', advice: '相信自己，勇敢追求理想。' },
  '掉落': { icon: '⬇️', meaning: '坠落感代表失控和不安全感。可能反映现实中的焦虑或对失败的恐惧。', fortune: '平', advice: '面对恐惧，建立安全感。' },
  '蛇': { icon: '🐍', meaning: '蛇象征智慧、转化和潜在的危险。也可能代表隐藏的敌人或被压抑的欲望。', fortune: '凶', advice: '提高警惕，审视身边的关系。' },
  '猫': { icon: '🐱', meaning: '猫代表独立、直觉和神秘。也与女性能量和优雅相关。', fortune: '吉', advice: '相信直觉，保持独立思考。' },
  '狗': { icon: '🐕', meaning: '狗象征忠诚、友谊和保护。梦见狗通常代表忠实的朋友或自身的忠诚品质。', fortune: '吉', advice: '珍惜身边忠诚的朋友。' },
  '鱼': { icon: '🐟', meaning: '鱼象征财富、丰收和好运。在中国文化中，鱼即"余"，年年有余。', fortune: '大吉', advice: '好运将至，把握机会。' },
  '龙': { icon: '🐉', meaning: '龙是最吉祥的梦象，代表权力、尊贵和巨大的好运。', fortune: '大吉', advice: '贵人相助，大事可成。' },
  '死': { icon: '💀', meaning: '梦见死亡并非不吉，而是代表结束与新生、转变与重生。旧的结束，新的开始。', fortune: '吉', advice: '放下过去，迎接新阶段。' },
  '钱': { icon: '💰', meaning: '梦见钱财反映对物质安全感的关注。捡钱代表意外收获，丢钱代表担心损失。', fortune: '平', advice: '理性看待财富，不因钱财焦虑。' },
  '考试': { icon: '📝', meaning: '考试梦反映对自我能力的焦虑和被评价的压力。常见于面临重要决定时。', fortune: '平', advice: '相信自己的准备，放松心态。' },
  '追赶': { icon: '🏃', meaning: '被追赶代表逃避某个问题或恐惧。追赶你的东西可能就是你需要面对的。', fortune: '平', advice: '停下来，面对你一直在逃避的事情。' },
  '房子': { icon: '🏠', meaning: '房子代表自我和内心世界。不同房间代表人格的不同方面。', fortune: '平', advice: '审视内心，整理自我。' },
  '花': { icon: '🌸', meaning: '花象征美好、爱情和生命力。盛开代表好运，凋谢代表失落。', fortune: '吉', advice: '珍惜美好时光，活在当下。' },
  '树': { icon: '🌳', meaning: '树代表生命力、成长和根基。大树象征稳固的人生根基。', fortune: '吉', advice: '扎好根基，稳步成长。' },
  '山': { icon: '🏔️', meaning: '山象征目标、挑战和障碍。登上山顶代表克服困难。', fortune: '平', advice: '坚持攀登，终会到达顶峰。' },
  '下雨': { icon: '🌧️', meaning: '雨代表净化、更新和情感释放。小雨是温柔的洗涤，暴雨是强烈的宣泄。', fortune: '吉', advice: '让情绪自然流动，雨后会有彩虹。' },
  '太阳': { icon: '☀️', meaning: '太阳代表希望、活力和真理。看见太阳是好兆头，代表光明即将到来。', fortune: '大吉', advice: '充满信心，好运降临。' },
  '月亮': { icon: '🌙', meaning: '月亮代表直觉、情感和女性能量。满月代表圆满，新月代表新开始。', fortune: '吉', advice: '倾听内心的声音，关注直觉。' },
  '星星': { icon: '⭐', meaning: '星星代表希望、指引和灵感。满天星辰是好运的象征。', fortune: '大吉', advice: '怀抱希望，宇宙在指引你。' },
  '婴儿': { icon: '👶', meaning: '婴儿象征新的开始、纯真和内在小孩。可能预示新项目或新关系。', fortune: '吉', advice: '准备迎接新的开始。' },
  '牙齿': { icon: '🦷', meaning: '掉牙是最常见的梦之一，代表对衰老/失控的恐惧，或生活中的重大转变。', fortune: '平', advice: '接受变化，这是成长的一部分。' },
  '飞机': { icon: '✈️', meaning: '飞机代表远大的目标和快速的进展。起飞是新征程，降落是完成任务。', fortune: '吉', advice: '志向高远，放手去飞。' },
  '车': { icon: '🚗', meaning: '车代表人生方向和控制力。自己开车代表掌控人生，被人载代表依赖他人。', fortune: '平', advice: '握紧方向盘，掌控自己的人生。' },
  '结婚': { icon: '💒', meaning: '婚礼代表承诺、结合和新阶段。可能暗示内心渴望深层的连接。', fortune: '吉', advice: '对重要的关系做出承诺。' },
  '迷路': { icon: '🧭', meaning: '迷路反映现实中的迷茫和方向缺失。你可能正在人生的十字路口。', fortune: '平', advice: '停下来思考，找到内心的指南针。' },
  '吃': { icon: '🍽️', meaning: '吃东西代表对知识/经验的渴望。吃得好代表心灵富足，吃不饱代表匮乏感。', fortune: '平', advice: '滋养身心，满足内在需求。' },
};

const categories = ['全部', '自然', '动物', '人物', '物品', '行为', '场景'];

export default function DreamPage({ onNavigate }) {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!keyword.trim()) {
      setResults(Object.entries(dreamDict).map(([k, v]) => ({ keyword: k, ...v })));
      setSearched(true);
      return;
    }
    const matches = Object.entries(dreamDict)
      .filter(([k, v]) => k.includes(keyword) || v.meaning.includes(keyword))
      .map(([k, v]) => ({ keyword: k, ...v }));
    setResults(matches);
    setSearched(true);
  };

  const fortuneColor = (f) => {
    if (f === '大吉') return 'var(--accent-gold)';
    if (f === '吉') return 'var(--accent-green)';
    if (f === '凶') return 'var(--accent-red)';
    return 'var(--text-secondary)';
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => onNavigate('home')}>← 返回</button>
      <div className="page-header">
        <div className="page-icon">💭</div>
        <h2>解梦大全</h2>
        <p>解读梦境中的隐藏信息，周公解梦智慧</p>
      </div>

      <div style={{ maxWidth: 650, margin: '0 auto' }}>
        <div className="panel">
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              className="form-input"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              placeholder="输入梦到的关键词，如：水、蛇、飞、考试..."
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              style={{ flex: 1 }}
            />
            <button className="btn btn-gold" onClick={handleSearch}>解梦</button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>热门：</span>
            {['水','蛇','飞','钱','鱼','龙','考试','死','花','太阳'].map(k => (
              <button
                key={k}
                onClick={() => {
                  const matches = Object.entries(dreamDict)
                    .filter(([key, v]) => key.includes(k) || v.meaning.includes(k))
                    .map(([key, v]) => ({ keyword: key, ...v }));
                  setKeyword(k);
                  setResults(matches);
                  setSearched(true);
                }}
                style={{
                  padding: '2px 10px', fontSize: '0.78rem', background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)', borderRadius: 12, color: 'var(--text-secondary)',
                  cursor: 'pointer', fontFamily: 'var(--font-sans)',
                }}
              >
                {dreamDict[k]?.icon} {k}
              </button>
            ))}
          </div>
        </div>

        {searched && (
          <div style={{ marginTop: 20 }}>
            {results.length === 0 ? (
              <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 40 }}>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>🔍</div>
                <p>未找到相关梦境解读，请尝试其他关键词</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: 12 }}>
                {results.map((r, i) => (
                  <div key={i} className="panel" style={{ animation: `fadeIn 0.3s ease-out ${i * 0.1}s forwards`, opacity: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <span style={{ fontSize: '1.8rem' }}>{r.icon}</span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600 }}>
                          梦见「{r.keyword}」
                        </div>
                        <span className="badge" style={{
                          background: `${fortuneColor(r.fortune)}22`,
                          color: fortuneColor(r.fortune),
                        }}>
                          {r.fortune}
                        </span>
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 8 }}>
                      {r.meaning}
                    </p>
                    <p style={{ color: 'var(--accent-purple-light)', fontSize: '0.85rem' }}>
                      💡 {r.advice}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {!searched && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '3rem', marginBottom: 12, animation: 'float 3s ease-in-out infinite' }}>💭</div>
            <p>输入你梦到的关键词</p>
            <p>或点击上方热门标签快速解梦</p>
          </div>
        )}
      </div>
    </div>
  );
}

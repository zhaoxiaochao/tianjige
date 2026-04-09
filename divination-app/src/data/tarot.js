// 22 Major Arcana + 56 Minor Arcana (simplified to key cards)
export const majorArcana = [
  { id: 0, name: '愚者', en: 'The Fool', icon: '🃏', upright: '新的开始、冒险、天真无邪、自由精神、无限可能', reversed: '鲁莽行事、犹豫不决、缺乏计划、不计后果', element: '风', keywords: ['开始','冒险','自由'] },
  { id: 1, name: '魔术师', en: 'The Magician', icon: '🎩', upright: '创造力、意志力、技能娴熟、新机遇、自信满满', reversed: '欺骗、操控、才能未发挥、缺乏方向', element: '风', keywords: ['创造','技能','意志'] },
  { id: 2, name: '女祭司', en: 'The High Priestess', icon: '🌙', upright: '直觉、潜意识、内在智慧、神秘、耐心等待', reversed: '忽视直觉、信息隐瞒、过度理性、内心不安', element: '水', keywords: ['直觉','智慧','神秘'] },
  { id: 3, name: '女皇', en: 'The Empress', icon: '👑', upright: '丰收、母性、富足、创造力旺盛、感官享受', reversed: '依赖他人、创造力受阻、过度溺爱、缺乏安全感', element: '地', keywords: ['丰收','母性','富足'] },
  { id: 4, name: '皇帝', en: 'The Emperor', icon: '🏛️', upright: '权威、领导力、结构、稳定、父性力量', reversed: '独裁、僵化、控制欲、权威受挑战', element: '火', keywords: ['权威','稳定','领导'] },
  { id: 5, name: '教皇', en: 'The Hierophant', icon: '⛪', upright: '传统、信仰、教导、精神指引、遵循规则', reversed: '打破常规、叛逆、不盲从、挑战传统', element: '地', keywords: ['传统','信仰','指引'] },
  { id: 6, name: '恋人', en: 'The Lovers', icon: '💑', upright: '爱情、选择、和谐、价值观、灵魂伴侣', reversed: '不和谐、价值冲突、错误选择、关系失衡', element: '风', keywords: ['爱情','选择','和谐'] },
  { id: 7, name: '战车', en: 'The Chariot', icon: '🏇', upright: '胜利、意志力、决心、前进、克服困难', reversed: '失控、方向迷失、缺乏动力、攻击性', element: '水', keywords: ['胜利','前进','决心'] },
  { id: 8, name: '力量', en: 'Strength', icon: '🦁', upright: '勇气、耐心、内在力量、温柔的力量、自我控制', reversed: '自我怀疑、缺乏信心、过度压抑、内心脆弱', element: '火', keywords: ['勇气','耐心','力量'] },
  { id: 9, name: '隐士', en: 'The Hermit', icon: '🏔️', upright: '内省、独处、寻求真理、智慧、精神探索', reversed: '孤独、逃避、固步自封、与世隔绝', element: '地', keywords: ['内省','智慧','独处'] },
  { id: 10, name: '命运之轮', en: 'Wheel of Fortune', icon: '☸️', upright: '转变、命运、机遇、好运、生命周期', reversed: '坏运、抗拒变化、失控、命运逆转', element: '火', keywords: ['转变','命运','机遇'] },
  { id: 11, name: '正义', en: 'Justice', icon: '⚖️', upright: '公正、真理、因果、法律、公平对待', reversed: '不公正、逃避责任、偏见、不诚实', element: '风', keywords: ['公正','因果','真理'] },
  { id: 12, name: '倒吊人', en: 'The Hanged Man', icon: '🙃', upright: '牺牲、等待、换角度思考、顿悟、放下执念', reversed: '拖延、无意义的牺牲、抗拒改变', element: '水', keywords: ['牺牲','顿悟','等待'] },
  { id: 13, name: '死神', en: 'Death', icon: '💀', upright: '结束、转化、新生、放下过去、深刻变革', reversed: '抗拒改变、停滞不前、害怕结束', element: '水', keywords: ['结束','转化','新生'] },
  { id: 14, name: '节制', en: 'Temperance', icon: '🏺', upright: '平衡、耐心、中庸之道、和谐、适度', reversed: '失衡、过度、缺乏耐心、冲突', element: '火', keywords: ['平衡','耐心','和谐'] },
  { id: 15, name: '恶魔', en: 'The Devil', icon: '😈', upright: '诱惑、执念、物欲、束缚、阴暗面', reversed: '释放、觉醒、摆脱束缚、重获自由', element: '地', keywords: ['诱惑','束缚','物欲'] },
  { id: 16, name: '塔', en: 'The Tower', icon: '🗼', upright: '突变、崩塌、觉醒、破而后立、真相揭露', reversed: '避免灾难、抗拒改变、恐惧变化', element: '火', keywords: ['突变','崩塌','觉醒'] },
  { id: 17, name: '星星', en: 'The Star', icon: '⭐', upright: '希望、灵感、宁静、信心、心想事成', reversed: '失去信心、绝望、缺乏灵感、迷失方向', element: '风', keywords: ['希望','灵感','信心'] },
  { id: 18, name: '月亮', en: 'The Moon', icon: '🌕', upright: '幻象、恐惧、潜意识、不确定、直觉', reversed: '走出恐惧、真相大白、恢复清明', element: '水', keywords: ['幻象','直觉','恐惧'] },
  { id: 19, name: '太阳', en: 'The Sun', icon: '☀️', upright: '快乐、成功、活力、光明、自信、温暖', reversed: '暂时的挫折、过度乐观、自负', element: '火', keywords: ['快乐','成功','光明'] },
  { id: 20, name: '审判', en: 'Judgement', icon: '📯', upright: '觉醒、重生、内心的召唤、审视过去、救赎', reversed: '自我怀疑、逃避审视、无法释怀', element: '火', keywords: ['觉醒','重生','审判'] },
  { id: 21, name: '世界', en: 'The World', icon: '🌍', upright: '完成、圆满、成就、整合、新阶段的开始', reversed: '未完成、缺乏结束感、延迟满足', element: '地', keywords: ['完成','圆满','成就'] },
];

const suits = [
  { name: '权杖', en: 'Wands', icon: '🪄', element: '火', theme: '行动、激情、创造力' },
  { name: '圣杯', en: 'Cups', icon: '🏆', element: '水', theme: '情感、关系、直觉' },
  { name: '宝剑', en: 'Swords', icon: '⚔️', element: '风', theme: '思维、沟通、冲突' },
  { name: '星币', en: 'Pentacles', icon: '🪙', element: '地', theme: '物质、金钱、健康' },
];

const numberMeanings = {
  1: { upright: '新的开始、潜力、机遇', reversed: '犹豫、错失机会' },
  2: { upright: '平衡、合作、选择', reversed: '失衡、犹豫不决' },
  3: { upright: '成长、团队、创造', reversed: '过度扩张、缺乏方向' },
  4: { upright: '稳定、休息、基础', reversed: '停滞、不安、懈怠' },
  5: { upright: '挑战、冲突、变化', reversed: '避免冲突、恢复和平' },
  6: { upright: '和谐、回忆、给予', reversed: '不平衡、执着过去' },
  7: { upright: '反思、评估、信念', reversed: '迷茫、缺乏信心' },
  8: { upright: '行动、速度、力量', reversed: '延迟、分散、停滞' },
  9: { upright: '完成在即、智慧、满足', reversed: '未完成、焦虑' },
  10: { upright: '圆满、结束、传承', reversed: '负担过重、抗拒结束' },
  11: { upright: '热情、冒险、探索新领域', reversed: '冲动、缺乏方向' },
  12: { upright: '魅力、热情、务实', reversed: '情绪化、不切实际' },
  13: { upright: '成熟、慷慨、领导力', reversed: '固执、专断' },
  14: { upright: '掌控、权威、远见', reversed: '控制欲、暴躁' },
};

const courtNames = ['侍从','骑士','王后','国王'];

export const minorArcana = suits.flatMap(suit =>
  Array.from({length: 14}, (_, i) => {
    const num = i + 1;
    const isCourtCard = num > 10;
    const courtIdx = num - 11;
    const name = isCourtCard
      ? `${suit.name}${courtNames[courtIdx]}`
      : num === 1 ? `${suit.name}王牌` : `${suit.name}${num}`;
    const m = numberMeanings[num] || numberMeanings[10];
    return {
      id: 22 + i + suits.indexOf(suit) * 14,
      name,
      en: `${isCourtCard ? courtNames[courtIdx] : (num === 1 ? 'Ace' : num)} of ${suit.en}`,
      icon: suit.icon,
      suit: suit.name,
      element: suit.element,
      upright: `${suit.theme}方面：${m.upright}`,
      reversed: `${suit.theme}方面：${m.reversed}`,
      keywords: [suit.theme.split('、')[0], ...(m.upright.split('、').slice(0,2))],
    };
  })
);

export const allCards = [...majorArcana, ...minorArcana];

export const spreads = [
  { id: 'single', name: '单牌占卜', count: 1, desc: '快速获得指引，适合简单问题', positions: ['指引'] },
  { id: 'three', name: '三牌阵', count: 3, desc: '过去、现在、未来的时间线分析', positions: ['过去','现在','未来'] },
  { id: 'cross', name: '十字牌阵', count: 5, desc: '全面分析问题的各个层面', positions: ['现状','挑战','过去','未来','建议'] },
  { id: 'love', name: '爱情三角阵', count: 3, desc: '分析感情关系', positions: ['你','对方','关系'] },
  { id: 'decision', name: '二选一阵', count: 5, desc: '帮助做出选择', positions: ['现状','选项A','选项B','A的结果','B的结果'] },
];

export function drawCards(count) {
  const deck = [...allCards].map(c => ({
    ...c,
    isReversed: Math.random() > 0.5,
  }));
  // Fisher-Yates shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck.slice(0, count);
}

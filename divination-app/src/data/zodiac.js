export const zodiacSigns = [
  { id: 'aries', name: '白羊座', icon: '♈', en: 'Aries', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, element: '火', quality: '开创', ruler: '火星', traits: '热情、勇敢、冲动、直率、充满行动力', love: '热烈而直接，喜欢追求刺激', career: '适合领导、创业、竞技类工作', lucky: { number: '1, 9', color: '红色', day: '周二' } },
  { id: 'taurus', name: '金牛座', icon: '♉', en: 'Taurus', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, element: '地', quality: '固定', ruler: '金星', traits: '稳重、务实、耐心、固执、享受美好事物', love: '忠诚专一，重视物质基础和安全感', career: '适合金融、艺术、农业、美食相关', lucky: { number: '2, 6', color: '绿色', day: '周五' } },
  { id: 'gemini', name: '双子座', icon: '♊', en: 'Gemini', startMonth: 5, startDay: 21, endMonth: 6, endDay: 21, element: '风', quality: '变动', ruler: '水星', traits: '机智、多变、好奇、善于沟通、思维敏捷', love: '需要精神交流，容易见异思迁', career: '适合传媒、写作、教育、销售', lucky: { number: '3, 5', color: '黄色', day: '周三' } },
  { id: 'cancer', name: '巨蟹座', icon: '♋', en: 'Cancer', startMonth: 6, startDay: 22, endMonth: 7, endDay: 22, element: '水', quality: '开创', ruler: '月亮', traits: '温柔、敏感、顾家、情绪化、直觉强', love: '渴望安全感，用心经营家庭', career: '适合餐饮、护理、教育、房产', lucky: { number: '2, 7', color: '银白色', day: '周一' } },
  { id: 'leo', name: '狮子座', icon: '♌', en: 'Leo', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, element: '火', quality: '固定', ruler: '太阳', traits: '自信、慷慨、热情、骄傲、富有领导力', love: '热烈忠诚，享受被崇拜的感觉', career: '适合娱乐、管理、表演、创意', lucky: { number: '1, 4', color: '金色', day: '周日' } },
  { id: 'virgo', name: '处女座', icon: '♍', en: 'Virgo', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, element: '地', quality: '变动', ruler: '水星', traits: '细致、完美主义、勤劳、挑剔、善分析', love: '含蓄内敛，用行动表达爱意', career: '适合医疗、编辑、会计、技术分析', lucky: { number: '5, 6', color: '灰色', day: '周三' } },
  { id: 'libra', name: '天秤座', icon: '♎', en: 'Libra', startMonth: 9, startDay: 23, endMonth: 10, endDay: 23, element: '风', quality: '开创', ruler: '金星', traits: '优雅、公正、犹豫、追求和谐、社交能力强', love: '浪漫优雅，追求平等和谐的关系', career: '适合法律、外交、设计、公关', lucky: { number: '6, 9', color: '粉色', day: '周五' } },
  { id: 'scorpio', name: '天蝎座', icon: '♏', en: 'Scorpio', startMonth: 10, startDay: 24, endMonth: 11, endDay: 22, element: '水', quality: '固定', ruler: '冥王星', traits: '深邃、神秘、执着、敏锐、控制欲强', love: '专一深情但占有欲强，爱恨分明', career: '适合侦探、心理、研究、金融', lucky: { number: '0, 4', color: '暗红色', day: '周二' } },
  { id: 'sagittarius', name: '射手座', icon: '♐', en: 'Sagittarius', startMonth: 11, startDay: 23, endMonth: 12, endDay: 21, element: '火', quality: '变动', ruler: '木星', traits: '乐观、自由、爱冒险、直率、哲学思维', love: '热爱自由，不喜被束缚，享受恋爱的快乐', career: '适合旅游、教育、哲学、出版', lucky: { number: '3, 7', color: '紫色', day: '周四' } },
  { id: 'capricorn', name: '摩羯座', icon: '♑', en: 'Capricorn', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, element: '地', quality: '开创', ruler: '土星', traits: '务实、坚韧、有野心、严谨、责任感强', love: '慢热但专一，重视长久稳定的关系', career: '适合管理、政府、工程、金融', lucky: { number: '4, 8', color: '黑色', day: '周六' } },
  { id: 'aquarius', name: '水瓶座', icon: '♒', en: 'Aquarius', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, element: '风', quality: '固定', ruler: '天王星', traits: '独立、创新、博爱、叛逆、思想前卫', love: '需要空间和精神自由，友谊先于爱情', career: '适合科技、社会工作、发明、航空', lucky: { number: '4, 8', color: '蓝色', day: '周六' } },
  { id: 'pisces', name: '双鱼座', icon: '♓', en: 'Pisces', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, element: '水', quality: '变动', ruler: '海王星', traits: '浪漫、敏感、富有同情心、梦幻、直觉强', love: '浪漫多情，容易陷入理想化的爱情', career: '适合艺术、音乐、灵性工作、慈善', lucky: { number: '7, 12', color: '海蓝色', day: '周四' } },
];

export const moonSigns = [
  { name: '白羊', emotion: '情绪直接外放，来得快去得快', need: '需要即刻的情感回应和行动自由' },
  { name: '金牛', emotion: '情绪稳定持久，不轻易表达', need: '需要物质安全感和稳定的情感环境' },
  { name: '双子', emotion: '情绪多变善变，善于言语表达', need: '需要精神刺激和社交互动' },
  { name: '巨蟹', emotion: '情绪敏感细腻，容易受外界影响', need: '需要家庭温暖和情感安全' },
  { name: '狮子', emotion: '情绪热烈饱满，需要被关注', need: '需要被欣赏和爱的表达' },
  { name: '处女', emotion: '情绪内敛克制，容易焦虑', need: '需要秩序感和被需要的感觉' },
  { name: '天秤', emotion: '追求情绪平衡，回避冲突', need: '需要和谐的关系和美的环境' },
  { name: '天蝎', emotion: '情绪深邃强烈，不轻易表露', need: '需要深层的情感连接和信任' },
  { name: '射手', emotion: '情绪乐观向上，向往自由', need: '需要精神探索和成长空间' },
  { name: '摩羯', emotion: '情绪压抑含蓄，责任感驱动', need: '需要成就感和社会认可' },
  { name: '水瓶', emotion: '情绪疏离理性，独立超然', need: '需要个人空间和思想自由' },
  { name: '双鱼', emotion: '情绪柔软感性，容易共情', need: '需要灵性满足和情感融合' },
];

// Simplified moon sign estimation based on birth year and month
// (Accurate moon sign requires precise calculation with ephemeris data)
export function estimateMoonSign(year, month, day) {
  // Moon cycles ~29.5 days, moves through zodiac in ~27.3 days
  // This is a simplified estimation - for accuracy, use an ephemeris
  const baseDate = new Date(2000, 0, 6); // Known new moon in Capricorn
  const targetDate = new Date(year, month - 1, day);
  const daysDiff = (targetDate - baseDate) / (1000 * 60 * 60 * 24);
  const moonCycleDays = 27.321661;
  const moonPosition = ((daysDiff % moonCycleDays) + moonCycleDays) % moonCycleDays;
  const signIndex = Math.floor(moonPosition / (moonCycleDays / 12));
  const signs = ['摩羯','水瓶','双鱼','白羊','金牛','双子','巨蟹','狮子','处女','天秤','天蝎','射手'];
  return signs[signIndex % 12];
}

export function getZodiacSign(month, day) {
  const sign = zodiacSigns.find(s => {
    if (s.startMonth < s.endMonth) {
      return (month === s.startMonth && day >= s.startDay) || (month === s.endMonth && day <= s.endDay);
    }
    // Capricorn spans year boundary
    return (month === s.startMonth && day >= s.startDay) || (month === s.endMonth && day <= s.endDay);
  });
  return sign || zodiacSigns[9]; // default Capricorn
}

const compatibilityMatrix = {
  fire: { fire: 85, earth: 50, wind: 90, water: 40 },
  earth: { fire: 50, earth: 80, wind: 55, water: 85 },
  wind: { fire: 90, earth: 55, wind: 80, water: 45 },
  water: { fire: 40, earth: 85, wind: 45, water: 75 },
};

const elementMap = { '火': 'fire', '地': 'earth', '风': 'wind', '水': 'water' };

export function getCompatibility(sign1, sign2) {
  const e1 = elementMap[sign1.element];
  const e2 = elementMap[sign2.element];
  const score = compatibilityMatrix[e1][e2];
  let desc;
  if (score >= 85) desc = '天造地设的组合，自然而然地互相吸引';
  else if (score >= 75) desc = '相处融洽，彼此理解对方的需求';
  else if (score >= 55) desc = '需要磨合但有互补的潜力';
  else desc = '性格差异较大，需要更多包容和理解';
  return { score, desc };
}

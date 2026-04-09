// 天干
export const tianGan = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
// 地支
export const diZhi = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
// 生肖
export const shengXiao = ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];

// 天干五行
export const ganWuxing = { '甲':'木','乙':'木','丙':'火','丁':'火','戊':'土','己':'土','庚':'金','辛':'金','壬':'水','癸':'水' };
// 天干阴阳
export const ganYinYang = { '甲':'阳','乙':'阴','丙':'阳','丁':'阴','戊':'阳','己':'阴','庚':'阳','辛':'阴','壬':'阳','癸':'阴' };
// 地支五行
export const zhiWuxing = { '子':'水','丑':'土','寅':'木','卯':'木','辰':'土','巳':'火','午':'火','未':'土','申':'金','酉':'金','戌':'土','亥':'水' };

// 地支藏干
export const zhiCangGan = {
  '子': ['癸'], '丑': ['己','癸','辛'], '寅': ['甲','丙','戊'], '卯': ['乙'],
  '辰': ['戊','乙','癸'], '巳': ['丙','庚','戊'], '午': ['丁','己'], '未': ['己','丁','乙'],
  '申': ['庚','壬','戊'], '酉': ['辛'], '戌': ['戊','辛','丁'], '亥': ['壬','甲'],
};

// 十神
const shiShenMap = {
  '同阳同': '比肩', '同阴同': '比肩',
  '同阳异': '劫财', '同阴异': '劫财',
  '生阳同': '偏印', '生阴同': '偏印',
  '生阳异': '正印', '生阴异': '正印',
  '克阳同': '七杀', '克阴同': '七杀',
  '克阳异': '正官', '克阴异': '正官',
  '泄阳同': '食神', '泄阴同': '食神',
  '泄阳异': '伤官', '泄阴异': '伤官',
  '财阳同': '偏财', '财阴同': '偏财',
  '财阳异': '正财', '财阴异': '正财',
};

const wuxingRelation = (dayWx, otherWx) => {
  const cycle = ['木','火','土','金','水'];
  const di = cycle.indexOf(dayWx);
  const oi = cycle.indexOf(otherWx);
  if (di === oi) return '同';
  if (cycle[(di + 1) % 5] === otherWx) return '泄'; // I generate
  if (cycle[(di + 2) % 5] === otherWx) return '财'; // I control
  if (cycle[(di + 3) % 5] === otherWx) return '克'; // Controls me
  if (cycle[(di + 4) % 5] === otherWx) return '生'; // Generates me
  return '同';
};

export function getShiShen(dayGan, otherGan) {
  const dayWx = ganWuxing[dayGan];
  const otherWx = ganWuxing[otherGan];
  const dayYy = ganYinYang[dayGan];
  const otherYy = ganYinYang[otherGan];
  const rel = wuxingRelation(dayWx, otherWx);
  const sameYy = dayYy === otherYy ? '同' : '异';
  return shiShenMap[`${rel}${dayYy}${sameYy}`] || rel;
}

// 十二长生
const changShengOrder = ['长生','沐浴','冠带','临官','帝旺','衰','病','死','墓','绝','胎','养'];
const yangGanStart = { '甲': 1, '丙': 4, '戊': 4, '庚': 7, '壬': 10 }; // 寅巳巳申亥(index in diZhi)
const yinGanStart = { '乙': 5, '丁': 8, '己': 8, '辛': 11, '癸': 2 }; // 午酉酉子卯

export function getChangSheng(dayGan, zhi) {
  const zhiIdx = diZhi.indexOf(zhi);
  const isYang = ganYinYang[dayGan] === '阳';
  const startIdx = isYang ? (yangGanStart[dayGan] ?? 0) : (yinGanStart[dayGan] ?? 0);
  let diff;
  if (isYang) {
    diff = (zhiIdx - startIdx + 12) % 12;
  } else {
    diff = (startIdx - zhiIdx + 12) % 12;
  }
  return changShengOrder[diff];
}

// Simplified BaZi calculation (for demo purposes)
// Real calculation requires lunar calendar library
export function simpleBazi(year, month, day, hour) {
  // Year pillar
  const yearGanIdx = (year - 4) % 10;
  const yearZhiIdx = (year - 4) % 12;

  // Month pillar (simplified - based on solar terms approximation)
  const monthZhiIdx = (month + 1) % 12; // Approximation: month 1 = 寅
  // Month gan from year gan
  const monthGanBase = (yearGanIdx % 5) * 2;
  const monthGanIdx = (monthGanBase + month - 1 + 2) % 10;

  // Day pillar (simplified algorithm)
  const baseDate = new Date(1900, 0, 31); // Known: 1900-01-31 = 甲子日
  const targetDate = new Date(year, month - 1, day);
  const daysDiff = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
  const dayGanIdx = ((daysDiff % 10) + 10) % 10;
  const dayZhiIdx = ((daysDiff % 12) + 12) % 12;

  // Hour pillar
  const hourZhiIdx = Math.floor(((hour + 1) % 24) / 2);
  const hourGanBase = (dayGanIdx % 5) * 2;
  const hourGanIdx = (hourGanBase + hourZhiIdx) % 10;

  const pillars = [
    { name: '年柱', gan: tianGan[yearGanIdx], zhi: diZhi[yearZhiIdx] },
    { name: '月柱', gan: tianGan[monthGanIdx], zhi: diZhi[monthZhiIdx] },
    { name: '日柱', gan: tianGan[dayGanIdx], zhi: diZhi[dayZhiIdx] },
    { name: '时柱', gan: tianGan[hourGanIdx], zhi: diZhi[hourZhiIdx] },
  ];

  const dayGan = pillars[2].gan;
  const dayWx = ganWuxing[dayGan];

  // Analyze
  const analysis = pillars.map(p => ({
    ...p,
    ganWuxing: ganWuxing[p.gan],
    zhiWuxing: zhiWuxing[p.zhi],
    ganYinYang: ganYinYang[p.gan],
    shiShen: p.name === '日柱' ? '日主' : getShiShen(dayGan, p.gan),
    cangGan: zhiCangGan[p.zhi],
    changSheng: getChangSheng(dayGan, p.zhi),
  }));

  // Count five elements
  const wxCount = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 };
  pillars.forEach(p => {
    wxCount[ganWuxing[p.gan]]++;
    wxCount[zhiWuxing[p.zhi]]++;
  });

  // Day master strength (very simplified)
  const helpCount = wxCount[dayWx] + wxCount[
    { '木':'水', '火':'木', '土':'火', '金':'土', '水':'金' }[dayWx]
  ];
  const drainCount = Object.values(wxCount).reduce((a,b) => a+b, 0) - helpCount;
  const isStrong = helpCount >= drainCount;

  // Shengxiao
  const shengxiao = shengXiao[yearZhiIdx];

  return {
    pillars: analysis,
    dayGan,
    dayWuxing: dayWx,
    dayYinYang: ganYinYang[dayGan],
    wxCount,
    isStrong,
    shengxiao,
    summary: `日主${dayGan}${dayWx}（${ganYinYang[dayGan]}${dayWx}），${isStrong ? '身旺' : '身弱'}。五行分布：${Object.entries(wxCount).map(([k,v]) => `${k}${v}`).join(' ')}`,
  };
}

// 五行相生相克
export const wuxingRelations = {
  generate: { '木':'火', '火':'土', '土':'金', '金':'水', '水':'木' },
  control: { '木':'土', '土':'水', '水':'火', '火':'金', '金':'木' },
};

// 五行属性
export const wuxingInfo = {
  '木': { color: '#22c55e', icon: '🌳', season: '春', direction: '东', organ: '肝/胆', trait: '仁/生长' },
  '火': { color: '#ef4444', icon: '🔥', season: '夏', direction: '南', organ: '心/小肠', trait: '礼/光明' },
  '土': { color: '#f59e0b', icon: '🏔️', season: '四季末', direction: '中', organ: '脾/胃', trait: '信/承载' },
  '金': { color: '#e2e8f0', icon: '⚔️', season: '秋', direction: '西', organ: '肺/大肠', trait: '义/收敛' },
  '水': { color: '#3b82f6', icon: '💧', season: '冬', direction: '北', organ: '肾/膀胱', trait: '智/润下' },
};

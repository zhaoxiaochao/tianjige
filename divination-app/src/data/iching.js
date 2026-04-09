// 八卦 (Trigrams)
export const trigrams = [
  { name: '乾', pinyin: 'qián', binary: '111', element: '金', nature: '天', direction: '西北', family: '父', body: '头', animal: '马', trait: '刚健', season: '秋末冬初' },
  { name: '兑', pinyin: 'duì', binary: '110', element: '金', nature: '泽', direction: '西', family: '少女', body: '口', animal: '羊', trait: '喜悦', season: '秋' },
  { name: '离', pinyin: 'lí', binary: '101', element: '火', nature: '火', direction: '南', family: '中女', body: '目', animal: '雉', trait: '光明', season: '夏' },
  { name: '震', pinyin: 'zhèn', binary: '100', element: '木', nature: '雷', direction: '东', family: '长男', body: '足', animal: '龙', trait: '震动', season: '春' },
  { name: '巽', pinyin: 'xùn', binary: '011', element: '木', nature: '风', direction: '东南', family: '长女', body: '股', animal: '鸡', trait: '柔顺', season: '春末夏初' },
  { name: '坎', pinyin: 'kǎn', binary: '010', element: '水', nature: '水', direction: '北', family: '中男', body: '耳', animal: '猪', trait: '险陷', season: '冬' },
  { name: '艮', pinyin: 'gèn', binary: '001', element: '土', nature: '山', direction: '东北', family: '少男', body: '手', animal: '狗', trait: '静止', season: '冬末春初' },
  { name: '坤', pinyin: 'kūn', binary: '000', element: '土', nature: '地', direction: '西南', family: '母', body: '腹', animal: '牛', trait: '柔顺', season: '夏末秋初' },
];

// 64 hexagrams
export const hexagrams = [
  { num: 1, name: '乾', title: '乾为天', upper: '乾', lower: '乾', binary: '111111', fortune: '大吉', judgment: '元亨利贞。天行健，君子以自强不息。', meaning: '纯阳至健，万物创始。事业蒸蒸日上，宜积极进取，但需谨防盛极而衰。', advice: '刚健中正，自强不息。大有作为之时。' },
  { num: 2, name: '坤', title: '坤为地', upper: '坤', lower: '坤', binary: '000000', fortune: '大吉', judgment: '元亨，利牝马之贞。地势坤，君子以厚德载物。', meaning: '纯阴至顺，万物化育。宜柔顺配合，不宜强出头，以德服人。', advice: '厚德载物，顺势而行。配合他人可成大事。' },
  { num: 3, name: '屯', title: '水雷屯', upper: '坎', lower: '震', binary: '010100', fortune: '吉', judgment: '元亨利贞，勿用有攸往，利建侯。', meaning: '万物初生，如草木破土。创业维艰但前景光明，需要坚忍。', advice: '筚路蓝缕，以启山林。不急躁，稳步前行。' },
  { num: 4, name: '蒙', title: '山水蒙', upper: '艮', lower: '坎', binary: '001010', fortune: '平', judgment: '亨。匪我求童蒙，童蒙求我。', meaning: '蒙昧初开，需要教导。虚心学习，不耻下问。', advice: '虚心求教，循序渐进。学习之时。' },
  { num: 5, name: '需', title: '水天需', upper: '坎', lower: '乾', binary: '010111', fortune: '吉', judgment: '有孚，光亨贞吉，利涉大川。', meaning: '等待时机，饮食宴乐。时机未到不宜妄动，耐心等候。', advice: '蓄势待发，等待时机。不急不躁自有好运。' },
  { num: 6, name: '讼', title: '天水讼', upper: '乾', lower: '坎', binary: '111010', fortune: '凶', judgment: '有孚窒惕，中吉，终凶。利见大人。', meaning: '争讼不宁，宜和不宜争。退一步海阔天空。', advice: '和为贵，退让为上。避免正面冲突。' },
  { num: 7, name: '师', title: '地水师', upper: '坤', lower: '坎', binary: '000010', fortune: '平', judgment: '贞丈人吉，无咎。', meaning: '兵者国之大事，需正义之师。做事需要正当理由和周密计划。', advice: '师出有名，纪律严明。团队合作之时。' },
  { num: 8, name: '比', title: '水地比', upper: '坎', lower: '坤', binary: '010000', fortune: '吉', judgment: '吉。原筮元永贞，无咎。', meaning: '亲近辅助，团结合作。广结善缘，寻找志同道合之人。', advice: '亲近贤人，团结协作。人际关系是关键。' },
  { num: 9, name: '小畜', title: '风天小畜', upper: '巽', lower: '乾', binary: '011111', fortune: '小吉', judgment: '亨，密云不雨，自我西郊。', meaning: '小有积蓄，尚未成大器。力量不足以成大事，先做好小事。', advice: '积小成大，循序渐进。先打好基础。' },
  { num: 10, name: '履', title: '天泽履', upper: '乾', lower: '兑', binary: '111110', fortune: '平', judgment: '履虎尾，不咥人。亨。', meaning: '如履薄冰，谨慎前行。危中有安，小心翼翼方可化险为夷。', advice: '谨慎行事，知进退。礼节为先。' },
  { num: 11, name: '泰', title: '地天泰', upper: '坤', lower: '乾', binary: '000111', fortune: '大吉', judgment: '小往大来，吉，亨。', meaning: '天地交泰，万物通达。否极泰来，好运将至。', advice: '万事亨通，大有可为。把握好运。' },
  { num: 12, name: '否', title: '天地否', upper: '乾', lower: '坤', binary: '111000', fortune: '凶', judgment: '否之匪人，不利君子贞。大往小来。', meaning: '天地不交，闭塞不通。诸事不顺，宜守不宜攻。', advice: '韬光养晦，静待时机。逆境中保存实力。' },
  { num: 13, name: '同人', title: '天火同人', upper: '乾', lower: '离', binary: '111101', fortune: '吉', judgment: '同人于野，亨，利涉大川。', meaning: '志同道合，同心协力。广泛团结，共同奋斗。', advice: '团结一心，大事可成。与人合作之时。' },
  { num: 14, name: '大有', title: '火天大有', upper: '离', lower: '乾', binary: '101111', fortune: '大吉', judgment: '元亨。', meaning: '大有收获，光明正大。丰收之象，但需居安思危。', advice: '收获满满，保持谦逊。分享成果。' },
  { num: 15, name: '谦', title: '地山谦', upper: '坤', lower: '艮', binary: '000001', fortune: '大吉', judgment: '亨，君子有终。', meaning: '谦虚是唯一全吉之卦。谦受益，满招损。', advice: '谦虚谨慎，万事亨通。最吉祥的态度。' },
  { num: 16, name: '豫', title: '雷地豫', upper: '震', lower: '坤', binary: '100000', fortune: '吉', judgment: '利建侯行师。', meaning: '欢乐愉悦，顺势而为。时机成熟，可以大举行动。', advice: '顺势而行，享受当下。行动之时。' },
  { num: 17, name: '随', title: '泽雷随', upper: '兑', lower: '震', binary: '110100', fortune: '吉', judgment: '元亨利贞，无咎。', meaning: '随机应变，顺应时势。随遇而安，灵活变通。', advice: '顺势而为，灵活应变。不执着于固有模式。' },
  { num: 18, name: '蛊', title: '山风蛊', upper: '艮', lower: '巽', binary: '001011', fortune: '平', judgment: '元亨，利涉大川。先甲三日，后甲三日。', meaning: '积弊已深，需要整治。拨乱反正，除旧布新。', advice: '正视问题，大刀阔斧改革。' },
  { num: 19, name: '临', title: '地泽临', upper: '坤', lower: '兑', binary: '000110', fortune: '大吉', judgment: '元亨利贞。至于八月有凶。', meaning: '居高临下，大展宏图。好时机但不可大意。', advice: '大好机会，积极进取。注意时限。' },
  { num: 20, name: '观', title: '风地观', upper: '巽', lower: '坤', binary: '011000', fortune: '平', judgment: '盥而不荐，有孚颙若。', meaning: '观察思考，审时度势。先看清楚再行动。', advice: '仔细观察，深入思考。不要急于行动。' },
  { num: 21, name: '噬嗑', title: '火雷噬嗑', upper: '离', lower: '震', binary: '101100', fortune: '平', judgment: '亨，利用狱。', meaning: '除恶务尽，公正执法。清除障碍方可前进。', advice: '果断清除障碍，不留隐患。' },
  { num: 22, name: '贲', title: '山火贲', upper: '艮', lower: '离', binary: '001101', fortune: '小吉', judgment: '亨，小利有攸往。', meaning: '文饰装点，注重外表。小事可成，大事不宜。', advice: '注重形象和包装，但不可华而不实。' },
  { num: 23, name: '剥', title: '山地剥', upper: '艮', lower: '坤', binary: '001000', fortune: '凶', judgment: '不利有攸往。', meaning: '剥落衰败，不宜妄动。形势不利，以守为上。', advice: '韬光养晦，坚守等待。不宜有大动作。' },
  { num: 24, name: '复', title: '地雷复', upper: '坤', lower: '震', binary: '000100', fortune: '吉', judgment: '亨。出入无疾，朋来无咎。', meaning: '一阳来复，否极泰来。转机出现，希望重燃。', advice: '把握转机，重新开始。春天来了。' },
  { num: 25, name: '无妄', title: '天雷无妄', upper: '乾', lower: '震', binary: '111100', fortune: '平', judgment: '元亨利贞。其匪正有眚。', meaning: '无妄之灾，意外之事。顺其自然，不妄为。', advice: '正道而行，不妄想妄为。' },
  { num: 26, name: '大畜', title: '山天大畜', upper: '艮', lower: '乾', binary: '001111', fortune: '大吉', judgment: '利贞，不家食吉，利涉大川。', meaning: '大有积蓄，厚积薄发。实力充足，可以大展拳脚。', advice: '厚积薄发，实力充足。出击之时。' },
  { num: 27, name: '颐', title: '山雷颐', upper: '艮', lower: '震', binary: '001100', fortune: '平', judgment: '贞吉。观颐，自求口实。', meaning: '修养身心，注意饮食。注重内在修养和健康。', advice: '注重养生，慎言节食。自力更生。' },
  { num: 28, name: '大过', title: '泽风大过', upper: '兑', lower: '巽', binary: '110011', fortune: '凶', judgment: '栋桡，利有攸往，亨。', meaning: '力不从心，负担过重。形势严峻需当机立断。', advice: '当断则断，减轻负担。非常之时用非常之法。' },
  { num: 29, name: '坎', title: '坎为水', upper: '坎', lower: '坎', binary: '010010', fortune: '凶', judgment: '习坎，有孚，维心亨。', meaning: '重重险阻，如临深渊。处境艰难但保持信心。', advice: '诚信待人，谨慎行事。困难中坚持信念。' },
  { num: 30, name: '离', title: '离为火', upper: '离', lower: '离', binary: '101101', fortune: '吉', judgment: '利贞，亨。畜牝牛吉。', meaning: '光明附丽，文明昌盛。依附正道，前途光明。', advice: '依附正确的方向，发挥光明。' },
  { num: 31, name: '咸', title: '泽山咸', upper: '兑', lower: '艮', binary: '110001', fortune: '吉', judgment: '亨，利贞，取女吉。', meaning: '感应交流，心心相印。姻缘和合，感情顺利。', advice: '真诚感应，感情运佳。适合谈恋爱。' },
  { num: 32, name: '恒', title: '雷风恒', upper: '震', lower: '巽', binary: '100011', fortune: '吉', judgment: '亨，无咎，利贞，利有攸往。', meaning: '恒久不变，持之以恒。坚持不懈必有所成。', advice: '贵在坚持，不可半途而废。' },
  { num: 33, name: '遁', title: '天山遁', upper: '乾', lower: '艮', binary: '111001', fortune: '平', judgment: '亨，小利贞。', meaning: '退避三舍，明哲保身。此时退让胜于硬撑。', advice: '适时退让，保存实力。以退为进。' },
  { num: 34, name: '大壮', title: '雷天大壮', upper: '震', lower: '乾', binary: '100111', fortune: '吉', judgment: '利贞。', meaning: '阳气壮盛，力量充沛。势不可挡但需守正。', advice: '气势正盛，但不可恃强凌弱。' },
  { num: 35, name: '晋', title: '火地晋', upper: '离', lower: '坤', binary: '101000', fortune: '吉', judgment: '康侯用锡马蕃庶，昼日三接。', meaning: '日出地上，光明进步。升迁进步之象。', advice: '步步高升，前途光明。抓住上升机会。' },
  { num: 36, name: '明夷', title: '地火明夷', upper: '坤', lower: '离', binary: '000101', fortune: '凶', judgment: '利艰贞。', meaning: '光明受伤，韬光养晦。怀才不遇，需要隐忍。', advice: '韬光养晦，保护自己。暂时的黑暗。' },
  { num: 37, name: '家人', title: '风火家人', upper: '巽', lower: '离', binary: '011101', fortune: '吉', judgment: '利女贞。', meaning: '治家之道，和睦兴旺。家庭和睦是一切的基础。', advice: '先齐家后治国。家庭和谐最重要。' },
  { num: 38, name: '睽', title: '火泽睽', upper: '离', lower: '兑', binary: '101110', fortune: '平', judgment: '小事吉。', meaning: '乖违相背，求同存异。意见不合但可调和。', advice: '求同存异，小事可为。不宜追求大目标。' },
  { num: 39, name: '蹇', title: '水山蹇', upper: '坎', lower: '艮', binary: '010001', fortune: '凶', judgment: '利西南，不利东北。利见大人，贞吉。', meaning: '前路艰难，进退两难。寻求帮助，不要独撑。', advice: '知难而退或寻求帮助。不宜独自硬闯。' },
  { num: 40, name: '解', title: '雷水解', upper: '震', lower: '坎', binary: '100010', fortune: '吉', judgment: '利西南，无所往其来复吉。', meaning: '困难解除，雨过天晴。危机化解，宜速了结。', advice: '及时解决问题，不要拖延。好运来了。' },
  { num: 41, name: '损', title: '山泽损', upper: '艮', lower: '兑', binary: '001110', fortune: '平', judgment: '有孚，元吉，无咎，可贞，利有攸往。', meaning: '减损自己，增益他人。先付出才有回报。', advice: '适当牺牲短期利益，换取长远发展。' },
  { num: 42, name: '益', title: '风雷益', upper: '巽', lower: '震', binary: '011100', fortune: '大吉', judgment: '利有攸往，利涉大川。', meaning: '大有增益，利人利己。投资、合作、行善之时。', advice: '大好时机，积极行动。利人利己。' },
  { num: 43, name: '夬', title: '泽天夬', upper: '兑', lower: '乾', binary: '110111', fortune: '吉', judgment: '扬于王庭，孚号有厉。告自邑。', meaning: '果断决定，当机立断。不可犹豫，快刀斩乱麻。', advice: '下定决心，果断行动。犹豫则失。' },
  { num: 44, name: '姤', title: '天风姤', upper: '乾', lower: '巽', binary: '111011', fortune: '平', judgment: '女壮，勿用取女。', meaning: '邂逅相遇，防范小人。偶然之事需提防。', advice: '谨防诱惑，不贪小便宜。' },
  { num: 45, name: '萃', title: '泽地萃', upper: '兑', lower: '坤', binary: '110000', fortune: '吉', judgment: '亨，王假有庙。利见大人，亨，利贞。', meaning: '聚集凝聚，群英荟萃。人才汇聚，合作之时。', advice: '团结力量，聚集资源。集体的力量。' },
  { num: 46, name: '升', title: '地风升', upper: '坤', lower: '巽', binary: '000011', fortune: '大吉', judgment: '元亨，用见大人，勿恤。南征吉。', meaning: '步步上升，积极进取。从下往上稳步提升。', advice: '持续上升，抓住机遇。积极向上。' },
  { num: 47, name: '困', title: '泽水困', upper: '兑', lower: '坎', binary: '110010', fortune: '凶', judgment: '亨。贞大人吉，无咎。有言不信。', meaning: '困境重重，但不失志。逆境中保持信念。', advice: '困难时保持乐观和正直。终会脱困。' },
  { num: 48, name: '井', title: '水风井', upper: '坎', lower: '巽', binary: '010011', fortune: '平', judgment: '改邑不改井，无丧无得。', meaning: '井养万民，取之不竭。做好本职，服务他人。', advice: '脚踏实地，本分做事。稳定中求发展。' },
  { num: 49, name: '革', title: '泽火革', upper: '兑', lower: '离', binary: '110101', fortune: '吉', judgment: '己日乃孚。元亨，利贞。悔亡。', meaning: '变革创新，除旧布新。时机成熟可以大胆改变。', advice: '勇于变革，推陈出新。变则通。' },
  { num: 50, name: '鼎', title: '火风鼎', upper: '离', lower: '巽', binary: '101011', fortune: '大吉', judgment: '元吉，亨。', meaning: '鼎新之象，大器晚成。新的格局建立，前途光明。', advice: '开创新局面，建立新秩序。大有作为。' },
  { num: 51, name: '震', title: '震为雷', upper: '震', lower: '震', binary: '100100', fortune: '平', judgment: '亨。震来虩虩，笑言哑哑。', meaning: '雷声震动，惊而后安。突如其来的变化，但最终平安。', advice: '临变不惊，处变不乱。暴风雨后是彩虹。' },
  { num: 52, name: '艮', title: '艮为山', upper: '艮', lower: '艮', binary: '001001', fortune: '平', judgment: '艮其背，不获其身。行其庭，不见其人。', meaning: '止于至善，静以修身。该停则停，修身养性。', advice: '适可而止，静心修养。不宜妄动。' },
  { num: 53, name: '渐', title: '风山渐', upper: '巽', lower: '艮', binary: '011001', fortune: '吉', judgment: '女归吉，利贞。', meaning: '循序渐进，水到渠成。不急不躁，按部就班。', advice: '循序渐进，一步一个脚印。' },
  { num: 54, name: '归妹', title: '雷泽归妹', upper: '震', lower: '兑', binary: '100110', fortune: '凶', judgment: '征凶，无攸利。', meaning: '名不正言不顺，事多波折。做事不要越位。', advice: '安守本分，不宜冒进。谨慎行事。' },
  { num: 55, name: '丰', title: '雷火丰', upper: '震', lower: '离', binary: '100101', fortune: '大吉', judgment: '亨，王假之。勿忧，宜日中。', meaning: '丰盛盈满，光明正大。事业鼎盛时期。', advice: '把握鼎盛时机，但居安思危。' },
  { num: 56, name: '旅', title: '火山旅', upper: '离', lower: '艮', binary: '101001', fortune: '平', judgment: '小亨，旅贞吉。', meaning: '在外漂泊，小心谨慎。出行或在外发展需小心。', advice: '在外低调谨慎，不宜冒险。小事可为。' },
  { num: 57, name: '巽', title: '巽为风', upper: '巽', lower: '巽', binary: '011011', fortune: '小吉', judgment: '小亨，利有攸往，利见大人。', meaning: '柔顺谦逊，随风而入。以柔克刚，深入渗透。', advice: '谦虚柔顺，潜移默化地推进。' },
  { num: 58, name: '兑', title: '兑为泽', upper: '兑', lower: '兑', binary: '110110', fortune: '吉', judgment: '亨，利贞。', meaning: '喜悦和乐，以诚待人。人际关系融洽，心情愉快。', advice: '以真诚和喜悦待人，人缘极佳。' },
  { num: 59, name: '涣', title: '风水涣', upper: '巽', lower: '坎', binary: '011010', fortune: '平', judgment: '亨，王假有庙。利涉大川，利贞。', meaning: '涣散后再聚，化解隔阂。先散后聚，打破僵局。', advice: '打破隔阂，重新凝聚力量。' },
  { num: 60, name: '节', title: '水泽节', upper: '坎', lower: '兑', binary: '010110', fortune: '平', judgment: '亨，苦节不可贞。', meaning: '节制适度，过犹不及。凡事有度，不可过分。', advice: '适度节制，不过分也不松懈。' },
  { num: 61, name: '中孚', title: '风泽中孚', upper: '巽', lower: '兑', binary: '011110', fortune: '大吉', judgment: '豚鱼吉，利涉大川，利贞。', meaning: '诚信感化，以诚动人。发自内心的真诚最有力量。', advice: '以诚待人，诚信是最大的力量。' },
  { num: 62, name: '小过', title: '雷山小过', upper: '震', lower: '艮', binary: '100001', fortune: '平', judgment: '亨，利贞。可小事，不可大事。', meaning: '小事可为，大事不宜。做好分内之事，不好高骛远。', advice: '踏实做好小事，不宜追求大目标。' },
  { num: 63, name: '既济', title: '水火既济', upper: '坎', lower: '离', binary: '010101', fortune: '吉', judgment: '亨，小利贞。初吉终乱。', meaning: '大功告成，万事已成。功成但需防后患。', advice: '成功之际更需谨慎，防止盛极而衰。' },
  { num: 64, name: '未济', title: '火水未济', upper: '离', lower: '坎', binary: '101010', fortune: '平', judgment: '亨，小狐汔济，濡其尾，无攸利。', meaning: '尚未完成，仍需努力。差最后一步，坚持到底。', advice: '坚持不懈，胜利就在前方。不要放弃。' },
];

// Coin toss for 六爻
export function tossCoin() {
  // 3 coins: heads=3, tails=2
  // Sum: 6=old yin(moving), 7=young yang, 8=young yin, 9=old yang(moving)
  const coins = [0,0,0].map(() => Math.random() > 0.5 ? 3 : 2);
  const sum = coins.reduce((a,b) => a+b, 0);
  return {
    coins,
    sum,
    isYang: sum === 7 || sum === 9,
    isMoving: sum === 6 || sum === 9,
    label: sum === 6 ? '老阴 ⚋◯' : sum === 7 ? '少阳 ⚊' : sum === 8 ? '少阴 ⚋' : '老阳 ⚊◯',
  };
}

export function castHexagram() {
  const lines = Array.from({length: 6}, () => tossCoin());
  const binary = lines.map(l => l.isYang ? '1' : '0').reverse().join('');
  const lowerBin = binary.slice(3);
  const upperBin = binary.slice(0, 3);
  const lower = trigrams.find(t => t.binary === lowerBin);
  const upper = trigrams.find(t => t.binary === upperBin);
  const hex = hexagrams.find(h => h.binary === binary) || hexagrams[0];

  // Changed hexagram (if any moving lines)
  const hasMoving = lines.some(l => l.isMoving);
  let changedHex = null;
  if (hasMoving) {
    const changedBinary = lines.map(l => {
      if (l.isMoving) return l.isYang ? '0' : '1';
      return l.isYang ? '1' : '0';
    }).reverse().join('');
    changedHex = hexagrams.find(h => h.binary === changedBinary) || null;
  }

  return { lines: lines.reverse(), binary, upper, lower, hexagram: hex, changedHex, hasMoving };
}

// 梅花易数 - time-based
export function meihuaByTime(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  // Upper trigram from (year + month + day) % 8
  const upperNum = (year + month + day) % 8 || 8;
  // Lower trigram from (year + month + day + hour) % 8
  const lowerNum = (year + month + day + hour) % 8 || 8;
  // Moving line from (year + month + day + hour) % 6
  const movingLine = (year + month + day + hour) % 6 || 6;

  const trigramOrder = ['坤','乾','兑','离','震','巽','坎','艮']; // 先天八卦数序
  const upper = trigrams.find(t => t.name === trigramOrder[upperNum - 1]);
  const lower = trigrams.find(t => t.name === trigramOrder[lowerNum - 1]);
  const binary = (upper?.binary || '111') + (lower?.binary || '000');
  const hex = hexagrams.find(h => h.binary === binary) || hexagrams[0];

  return { upper, lower, hexagram: hex, movingLine, method: '时间起卦' };
}

// 梅花易数 - number-based
export function meihuaByNumber(num1, num2) {
  const trigramOrder = ['坤','乾','兑','离','震','巽','坎','艮'];
  const upperIdx = (num1 % 8) || 8;
  const lowerIdx = (num2 % 8) || 8;
  const movingLine = ((num1 + num2) % 6) || 6;

  const upper = trigrams.find(t => t.name === trigramOrder[upperIdx - 1]);
  const lower = trigrams.find(t => t.name === trigramOrder[lowerIdx - 1]);
  const binary = (upper?.binary || '111') + (lower?.binary || '000');
  const hex = hexagrams.find(h => h.binary === binary) || hexagrams[0];

  return { upper, lower, hexagram: hex, movingLine, method: '数字起卦' };
}

# 天机阁 - 东西方占卜·命理·星象应用

<div align="center">

![天机阁](https://img.shields.io/badge/天机阁-东西方占卜命理星象-blueviolet)
![React](https://img.shields.io/badge/React-19.2.4-blue)
![Vite](https://img.shields.io/badge/Vite-8.0.1-ffd700)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

## 📖 简介

天机阁是一款融合东西方神秘学智慧的占卜应用，汇集了塔罗牌、星座运势、六爻占卜、梅花易数、八字命理、解梦、数字能量、每日运势等多种占卜方式。应用采用现代化的React技术栈开发，提供流畅优雅的用户体验。

## ✨ 功能特色

### 🔮 塔罗牌占卜 (Tarot Reading)
- 78张完整塔罗牌（22张大阿卡纳 + 56张小阿卡纳）
- 多种牌阵选择（单牌、三牌、凯尔特十字等）
- 正位/逆位解读
- 动画翻牌效果
- 关键词解析与综合指引

### ⭐ 星座运势 (Astrology)
- 十二星座详细资料
- 太阳/月亮星座查询
- 星座配对分析
- 每日/每周/每月运势
- 星座元素与守护星信息

### ☰ 六爻占卜 (I Ching / Six Lines)
- 模拟三枚铜钱摇卦
- 六十四卦完整数据
- 动爻识别与变卦分析
- 卦辞、爻辞详解
- 吉凶判断与行动建议

### 🌸 梅花易数 (Plum Blossom Oracle)
- 万物皆可起卦
- 时间起卦、数字起卦
- 体用关系分析
- 五行生克判断
- 卦象解读与建议

### 🏛️ 八字命理 (Four Pillars of Destiny)
- 四柱八字排盘
- 天干地支详解
- 五行强弱分析
- 十神论命
- 大运流年

### 💭 解梦大全 (Dream Interpretation)
- 周公解梦经典释义
- 分类梦境解析
- 梦境象征意义
- 吉凶预测

### 🔢 数字能量 (Numerology)
- 生命灵数计算
- 幸运数字查询
- 数字与命运关系
- 数字磁场分析

### 🔮 每日运势 (Daily Fortune)
- 综合多种体系
- 今日运势速查
- 幸运颜色/数字/方位
- 宜忌事项

## 🛠️ 技术栈

- **前端框架**: React 19.2.4
- **构建工具**: Vite 8.0.1
- **图标库**: Lucide React
- **样式**: CSS3 (CSS Variables)
- **字体**: Noto Serif SC, Noto Sans SC

## 📦 安装与运行

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装步骤

```bash
# 克隆项目
git clone https://github.com/zhaoxiaochao/tianjige.git

# 进入项目目录
cd tianjige/divination-app

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 🎨 界面设计

### 设计理念
- **神秘优雅**: 采用深色主题，紫色与金色为主色调
- **中西融合**: 融合东方古典美学与西方神秘学元素
- **响应式设计**: 完美适配桌面端与移动端
- **流畅动画**: 精心设计的过渡动画与交互效果

### 视觉特色
- 渐变色彩与光晕效果
- 卡片式模块布局
- 优雅的字体排版
- 直观的图标系统

## 📁 项目结构

```
divination-app/
├── public/              # 静态资源
├── src/
│   ├── components/      # 公共组件
│   ├── data/           # 数据文件
│   │   ├── tarot.js    # 塔罗牌数据
│   │   └── iching.js   # 易经数据
│   ├── pages/          # 页面组件
│   │   ├── Home.jsx    # 首页
│   │   ├── TarotPage.jsx
│   │   ├── ZodiacPage.jsx
│   │   ├── IChingPage.jsx
│   │   ├── MeihuaPage.jsx
│   │   ├── BaziPage.jsx
│   │   ├── DreamPage.jsx
│   │   ├── NumerologyPage.jsx
│   │   └── FortunePage.jsx
│   ├── App.jsx         # 主应用组件
│   ├── App.css         # 应用样式
│   ├── index.css       # 全局样式
│   └── main.jsx        # 入口文件
├── index.html          # HTML模板
├── package.json        # 项目配置
├── vite.config.js      # Vite配置
└── README.md           # 项目说明
```

## 🎯 使用指南

1. **选择占卜方式**: 在首页选择你感兴趣的占卜类型
2. **输入问题**: 在心中默想你想问的问题
3. **开始占卜**: 点击相应按钮开始占卜流程
4. **查看结果**: 系统会为你生成详细的解读
5. **重新占卜**: 可以随时重新进行占卜

## ⚠️ 免责声明

> ✦ 占卜仅供娱乐参考，人生掌握在自己手中 ✦

本应用提供的所有占卜内容仅供娱乐和参考，不构成任何实际建议。请理性对待占卜结果，不要将其作为人生重大决策的依据。

## 🌟 未来规划

- [ ] 添加更多牌阵和占卜方式
- [ ] 支持占卜历史记录
- [ ] 添加用户个人资料
- [ ] 支持分享占卜结果
- [ ] 添加更多语言支持
- [ ] 优化移动端体验
- [ ] 添加音效和背景音乐

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 👨‍💻 作者

**天机阁开发团队**

## 🔗 相关链接

- [GitHub仓库](https://github.com/zhaoxiaochao/tianjige)

---

<div align="center">

**愿神秘的智慧指引你前行** 🌟

</div>
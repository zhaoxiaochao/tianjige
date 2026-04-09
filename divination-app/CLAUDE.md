# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

天机阁 (Tianji House) — an East-West divination, numerology, and astrology web app built with React 19 + Vite.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173) with HMR
npm run build     # Production build to dist/
npm run lint      # ESLint (flat config, ESLint 9+)
npm run preview   # Preview production build
```

## Architecture

**Routing:** Manual client-side routing via `useState` in `App.jsx` — no React Router. Pages receive an `onNavigate` callback prop. The page lookup is a plain object mapping string keys to components.

**State management:** Local React hooks only (useState). No global state, no Context API.

**Data layer:** All divination data is static, exported from `/src/data/` modules (tarot.js, zodiac.js, iching.js, bazi.js). No backend API. Divination results use random generation (shuffling, random selection).

**Styling:** Custom CSS with CSS variables in `index.css` — no CSS framework. Dark theme with gold/purple accents. Fonts: Noto Serif SC & Noto Sans SC (loaded from Google Fonts). Max-width 1200px container, CSS Grid for card layouts.

**Pages:** Each feature is a self-contained page component in `/src/pages/`. Data files in `/src/data/` export both raw data and calculation functions (e.g., `getZodiacSign()`, `castHexagram()`, `drawCards()`).

## Conventions

- Language: JSX (not TypeScript), ES modules
- ESLint allows unused vars matching `^[A-Z_]` pattern
- UI language is Chinese (zh-CN)
- No test framework is configured

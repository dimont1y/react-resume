# 💼 Resume App — Лабораторна робота №4 (React + TypeScript + Vite)

Резюме-додаток створений у межах курсу **Web-програмування** (НУЛП, КБ-307).

## 🚀 Деплой

- **Vercel (React App):** [lab-2-webprogramming.vercel.app](https://lab-2-webprogramming.vercel.app)

## 🛠 Технології

- **React 19** + **TypeScript**
- **Vite** — збірник
- **TailwindCSS v4**

## ✨ Функціонал (Лаб. №4)

| Функція | Опис |
|---|---|
| 📦 LocalStorage | Збереження системної інформації у Footer |
| 🌐 Fetch API | Динамічне завантаження відгуків (JSONPlaceholder) |
| 📬 Modal Form | Форма зворотного зв'язку (з'являється через 60 сек) |
| 🌗 Theme Switcher | Перемикач Day/Night теми |

## 📁 Структура проєкту

```
lab_2_react--/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Summary.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Interests.jsx
│   │   ├── Reviews.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── App.tsx
│   └── main.tsx
├── vercel.json
└── package.json
```

## 🏃 Запуск локально

```bash
cd lab_2_react--
npm install
npm run dev
```

## 📦 Збірка для продакшену

```bash
npm run build
```

---

> Автор: Горбач Д. В., КБ-307 | Лабораторна робота №4–5, 2025

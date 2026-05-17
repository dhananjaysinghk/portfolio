# Dhananjay Singh Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. It emphasizes clean UI, fast performance, and a polished developer brand.

## 🚀 Features

- Responsive layout optimized for desktop and mobile
- Dark theme with cyan accent styling
- About, Services, Projects, Experience, Testimonials, and Contact sections
- Built with the Next.js app router and Tailwind CSS utilities
- Fast, accessible UI with modern React and TypeScript

## 🛠️ Tech Stack

- **Next.js 16.2.6** - Production-ready React framework
- **React 19.2.6** - Modern React capabilities
- **TypeScript 6.0.3** - Static typing for safety
- **Tailwind CSS 4.3.0** - Utility-first styling
- **PostCSS 8.5.14** + **Autoprefixer 10.5.0** - CSS tooling for compatibility

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run start` - Start the production server
- `npm run lint` - Run Next.js lint checks

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Application layout and metadata
│   └── page.tsx             # Portfolio landing page
├── next-env.d.ts            # Next.js TypeScript declarations
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies and scripts
├── package-lock.json        # Locked npm dependency tree
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Customization

### Edit content
- Update `app/page.tsx` to change the hero, About, Services, Experience, Projects, Testimonials, and Contact sections.
- Adjust the `services`, `experience`, `projects`, and `testimonials` arrays in `app/page.tsx` to add your own case studies.

### Edit styling
- Change Tailwind utility classes directly in `app/page.tsx`.
- Update global styling in `app/globals.css` if needed.

## 📞 Contact

- Email: `hello@dhananjaysingh.dev`

---

Built with ❤️ using Next.js and Tailwind CSS.
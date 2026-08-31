# Portfolio - Vishal Masule

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcasing skills, projects, certifications, and professional experience.

## 🎯 Features

- ⚡ **Fast & Optimized** - Built with Vite for lightning-fast development and production builds
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🎥 **Video Content** - Hero section with video background
- 📜 **Certifications** - Display AWS, Google, Oracle, and G-TEC certifications
- 💼 **Work Experience** - Showcase internships and professional roles
- 🏆 **Skills** - Technical and soft skills sections
- 📧 **Contact Form** - EmailJS integration for direct contact
- 🔍 **SEO Optimized** - Built with best practices for search engines
- 🌙 **Performance** - Code splitting, lazy loading, and optimized assets

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **AOS** - Animate on scroll library
- **EmailJS** - Email service integration

### Build & Deployment
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **AWS Amplify** - Hosting and deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** v16+ ([download](https://nodejs.org/))
- **npm** v8+ (comes with Node.js)
- **Git** ([download](https://git-scm.com/))

## 📦 Project Structure

```
Portfolio-Vishal-masule-/
├── src/
│   ├── assets/              # Images, videos, and media files
│   │   ├── about/           # Technology logos
│   │   └── hero video/      # Hero section video
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Internships.jsx
│   │   ├── Leadership.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── TechnicalSkills.jsx
│   │   └── ... more components
│   ├── data/                # Static data and configurations
│   │   └── portfolioData.js # Portfolio content data
│   ├── Workexperiece/       # Work experience details
│   ├── Certifications/      # Certification files and assets
│   ├── App.jsx              # Main App component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
│   ├── favicon.svg
│   ├── icons.svg
│   ├── Resume.pdf
│   └── certifications/      # Certification images and PDFs
├── dist/                    # Production build (generated)
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── index.html               # HTML entry point
└── README.md                # This file
```

## ⚙️ Configuration

### Vite Configuration (`vite.config.js`)

The configuration uses proper `manualChunks` function format (Vite 8+ compatible):

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendors'
            if (id.includes('framer-motion')) return 'animation'
            return 'vendors'
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'aos']
  }
})
```

### Tailwind CSS Configuration

Configured for modern utility-first approach with custom theme extensions.

## 🌐 AWS Amplify Deployment

### Prerequisites
- AWS account with Amplify access
- GitHub repository connected to Amplify

### Deployment Steps

1. **Connect GitHub Repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Select GitHub and authorize
   - Choose the repository and branch

2. **Configure Build Settings**
   - Build command: `npm ci && npm run build`
   - Start command: `npm start`
   - Output directory: `dist`

3. **Deploy**
   - Amplify automatically builds on every push
   - Watch the build logs for any errors
   - Access your live site via the Amplify URL


---

**Last Updated:** August 31, 2026  
**Maintainer:** Vishal Masule  
**Repository:** [Portfolio-Vishal-masule-](https://github.com/Vishal648-pixel/Portfolio-Vishal-masule-)
**LIVE LINK -** https://www.vishal99.online/


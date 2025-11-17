# Domenico Portfolio - Project Instructions

## Project Overview

This is a personal portfolio website for Domenico Falena, a Frontend Developer with expertise in React, Angular, and modern web technologies. The portfolio showcases professional experience, technical skills, projects, and provides contact information.

## Purpose

- Display professional background and experience in the automotive and digital payments sectors
- Showcase technical skills and tech stack proficiency
- Present projects and contributions
- Provide an accessible way for recruiters and collaborators to connect

## Technology Stack

### Core Technologies
- **React 19.2.0** - Latest stable version with modern rendering API (`createRoot`)
- **React DOM 19.2.0** - React rendering library
- **React Router DOM 7.9.6** - Client-side routing and navigation
- **JavaScript (ES6+)** - Modern JavaScript features

### UI/UX Libraries
- **Material-UI (MUI) 7.3.5** - Comprehensive React component library
- **Emotion 11.14.x** - CSS-in-JS styling solution
  - @emotion/react
  - @emotion/styled
- **Framer Motion 12.23.24** - Animation and motion library
- **React Icons 4.12.0** - Icon library (pinned to v4 for icon compatibility)
- **React Slick 0.31.0** - Carousel/slider component
- **Slick Carousel 1.8.1** - Carousel CSS/assets

### Development Tools
- **React Scripts 5.0.1** - Build tooling and development server
- **Web Vitals 2.1.3** - Performance metrics

### Testing Libraries
- **@testing-library/react 16.3.0** - React testing utilities
- **@testing-library/jest-dom 5.16.1** - Custom Jest matchers
- **@testing-library/user-event 14.6.1** - User interaction simulation

### Additional Libraries
- **FontAwesome** - Additional icon support
  - @fortawesome/fontawesome-svg-core 1.2.36
  - @fortawesome/free-solid-svg-icons 5.15.4
- **Typewriter Effect 2.22.0** - Typing animation effect

### Deployment
- **gh-pages 6.3.0** - GitHub Pages deployment utility

## Project Structure

```
domenico-portfolio/
├── public/
│   ├── index.html           # HTML template
│   ├── favicon.png          # Site favicon
│   └── manifest.json        # PWA manifest
├── src/
│   ├── components/          # React components
│   │   ├── About/          # About section component
│   │   ├── Carousel/       # Image carousel
│   │   ├── Contact/        # Contact form
│   │   ├── Footer/         # Site footer
│   │   ├── Header/         # Navigation header
│   │   ├── PageContent/    # Landing page content
│   │   ├── Projects/       # Projects showcase
│   │   ├── Stack/          # Tech stack display
│   │   └── Welcome/        # Welcome section
│   ├── utils/              # Utility components
│   │   ├── Card.js         # Reusable card component
│   │   └── FadeInWhenVisible.js  # Scroll animations
│   ├── assets/             # Images and media files
│   ├── App.js              # Main application component
│   ├── App.module.css      # Main app styles
│   ├── index.js            # Entry point (uses createRoot)
│   ├── index.css           # Global styles
│   ├── reportWebVitals.js  # Performance monitoring
│   └── setupTests.js       # Test configuration
├── package.json            # Dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── README.md               # Project documentation
├── instructions.md         # This file
└── .gitignore             # Git ignore rules
```

## Setup and Installation

### Prerequisites
- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)
- Git

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mimmofalena/domenico-portfolio.git
   cd domenico-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
   
   Note: `--legacy-peer-deps` is required due to React 19 peer dependency conflicts with some packages.

3. **Start development server**:
   ```bash
   npm start
   ```
   
   The site will be available at `http://localhost:3000/domenico-portfolio`

## Available Scripts

### `npm start`
Runs the development server with hot-reload enabled.
- URL: `http://localhost:3000/domenico-portfolio`
- Automatically opens in your default browser
- Changes are reflected immediately

### `npm run build`
Creates an optimized production build:
- Output directory: `build/`
- Minified and optimized for performance
- Includes hashed filenames for cache busting
- Ready for deployment

### `npm run deploy`
Deploys the application to GitHub Pages:
- Runs `npm run build` automatically (via predeploy script)
- Publishes to GitHub Pages
- Updates the live site at `https://mimmofalena.github.io/domenico-portfolio/`

### `npm test`
Launches the test runner in interactive watch mode.
- Currently, no tests are implemented
- Test infrastructure is available via React Testing Library

## Development Guidelines

### Code Style
- Use functional React components with hooks
- Prefer CSS Modules for component-specific styling
- Use Emotion for dynamic/theme-based styling
- Follow React best practices and hooks rules

### Component Organization
- One component per file
- Co-locate component styles (ComponentName.module.css)
- Use meaningful, descriptive names
- Keep components focused and reusable

### Routing
The application uses React Router with the following routes:
- `/domenico-portfolio/` - Landing page
- `/domenico-portfolio/about` - About section
- `/domenico-portfolio/projects` - Projects showcase
- `/domenico-portfolio/stack` - Tech stack details
- `*` - 404 Not Found page

### Animations
- Framer Motion is used for page transitions and scroll animations
- `FadeInWhenVisible` utility component handles scroll-triggered animations
- Staggered animations for list items using delay props

## Deployment

### GitHub Pages Setup
The site is configured to deploy to GitHub Pages with a custom homepage path.

**Configuration** (in package.json):
```json
{
  "homepage": "https://mimmofalena.github.io/domenico-portfolio/"
}
```

**Deploy process**:
1. Commit all changes
2. Run `npm run deploy`
3. Wait for deployment to complete
4. Visit `https://mimmofalena.github.io/domenico-portfolio/`

## Security Considerations

### Dependency Management
- Regular updates via `npm audit` and `npm update`
- Use of npm `overrides` to patch vulnerable nested dependencies:
  - nth-check: ^2.1.1 (ReDoS vulnerability)
  - postcss: ^8.4.31 (parsing vulnerability)
  - glob: ^11.0.0 (command injection)
  - svgo: ^3.0.0 (DOM clobbering)

### Known Moderate Vulnerabilities
Two moderate vulnerabilities in webpack-dev-server (development-only):
- These only affect development mode, not production builds
- Attack vector requires developers to access malicious sites during development
- Cannot be fixed without breaking react-scripts compatibility

## Performance Optimization

### Build Optimizations
- Code splitting at route level
- Minification and tree-shaking
- Asset optimization (images, fonts)
- Gzip compression

### Runtime Optimizations
- Lazy loading of route components
- Optimized re-renders with React.memo where needed
- Efficient state management

## Browser Support

Based on browserslist configuration:

**Production**:
- > 0.2% market share
- Not dead browsers
- Not Opera Mini

**Development**:
- Latest Chrome
- Latest Firefox
- Latest Safari

## React 19 Migration Notes

This project has been upgraded from React 17 to React 19. Key changes:

1. **Rendering API**: Changed from `ReactDOM.render` to `ReactDOM.createRoot`
   ```javascript
   // Before (React 17)
   ReactDOM.render(<App />, document.getElementById('root'));
   
   // After (React 19)
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(<App />);
   ```

2. **Dependencies Updated**: All React ecosystem dependencies updated for compatibility
3. **Breaking Changes Addressed**: No application code changes required beyond the rendering API

## Troubleshooting

### Development Server Won't Start
- Ensure all dependencies are installed: `npm install --legacy-peer-deps`
- Check Node.js version (14+)
- Clear cache: `npm cache clean --force`

### Build Fails
- Remove `node_modules` and `package-lock.json`
- Reinstall: `npm install --legacy-peer-deps`
- Check for disk space

### Icons Not Displaying
- Ensure react-icons version is 4.12.0 (v5 removed required icons)
- If updated accidentally, downgrade: `npm install react-icons@4.12.0 --legacy-peer-deps`

## Future Enhancements

Potential areas for improvement:
- Add unit and integration tests
- Implement CI/CD pipeline
- Add blog section for technical articles
- Enhance SEO with meta tags and structured data
- Add dark mode toggle
- Implement analytics tracking
- Add more interactive project demonstrations

## Contact Information

For questions or contributions, contact through:
- Portfolio website contact form
- GitHub: [@Mimmofalena](https://github.com/Mimmofalena)

## Changelog

### Version 0.1.0 (Current)
- Initial portfolio website
- React 19 upgrade
- Security vulnerability fixes (38 → 2)
- Modern React patterns and best practices
- Responsive design
- GitHub Pages deployment

---

Last updated: November 2025

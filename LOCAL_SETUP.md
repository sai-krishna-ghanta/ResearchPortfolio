# Local Development Setup

## Quick Start Options

### Option 1: Development Environment (Recommended)

**Windows:**
```bash
# Double-click start-local.bat
# OR run in command prompt:
npm install
npm run dev
```

**Mac/Linux:**
```bash
# Run in terminal:
./start-local.sh
# OR manually:
npm install
npm run dev
```

Your portfolio will be available at `http://localhost:5000`

### Option 2: Static HTML File

Double-click `portfolio-local.html` to open in your browser. This version works offline but doesn't reflect code changes.

## Making Changes

The development environment watches for file changes and automatically updates the website. Edit these files to customize your portfolio:

### Content Updates

**Home Page Bio & Info:**
- Edit: `client/src/components/home-section.tsx`
- Update your bio, research interests, and recent updates

**Publications:**
- Edit: `client/src/components/publications-section.tsx`
- Add/remove journal and conference papers

**Research Projects:**
- Edit: `client/src/components/research-section.tsx`
- Update featured research descriptions

**Resume/CV:**
- Edit: `client/src/components/resume-section.tsx`
- Modify education, experience, skills, awards

**Updates Archive:**
- Edit: `client/src/components/updates-section.tsx`
- Add new milestones and achievements

**Contact Information:**
- Edit: `client/src/components/contact-section.tsx`
- Update email, office location, social links

### Navigation & Layout

**Header/Navigation:**
- Edit: `client/src/components/header.tsx`
- Modify navigation items or site title

**Overall Styling:**
- Edit: `client/src/index.css`
- Customize colors and themes

## File Structure

```
portfolio/
├── client/src/components/    # All page components
├── client/src/pages/         # Main page router
├── server/                   # Backend (minimal changes needed)
├── portfolio-local.html      # Standalone version
├── start-local.bat          # Windows launcher
├── start-local.sh           # Mac/Linux launcher
└── package.json             # Dependencies
```

## Troubleshooting

**Port Already in Use:**
If you see "port 5000 already in use", either:
- Stop other applications using port 5000
- Or the website is already running at `http://localhost:5000`

**Dependencies Issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Changes Not Showing:**
- Check the terminal for errors
- Refresh your browser
- Ensure you're editing the correct files in `client/src/components/`

## Production Deployment

When ready to deploy online:
1. Push your code to GitHub
2. Connect to Vercel, Netlify, or similar hosting service
3. Deploy directly from your repository

Your portfolio is now ready for local development and easy content updates!
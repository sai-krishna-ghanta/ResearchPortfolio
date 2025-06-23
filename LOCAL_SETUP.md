# Local Development Setup - Django Portfolio

## Quick Start Options

### Option 1: Django Development Environment (Recommended)

**Windows:**
```bash
# Double-click start-local.bat
# OR run in command prompt:
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

**Mac/Linux:**
```bash
# Run in terminal:
./start-local.sh
# OR manually:
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

Your portfolio will be available at `http://localhost:8000`

### Option 2: Static HTML File

Double-click `portfolio-local.html` to open in your browser. This version works offline but doesn't reflect code changes.

## Making Changes

Django automatically reloads when you make changes to Python files or templates. Edit these files to customize your portfolio:

### Content Updates

**Home Page Bio & Info:**
- Edit: `portfolio/templates/portfolio/home.html`
- Update your bio, research interests, and recent updates in the template

**Publications:**
- Edit: `portfolio/views.py` - modify the `journals` and `conferences` lists in the `publications` function
- Template: `portfolio/templates/portfolio/publications.html`

**Research Projects:**
- Edit: `portfolio/views.py` - modify the `research_projects` list in the `research` function
- Template: `portfolio/templates/portfolio/research.html`

**Resume/CV:**
- Edit: `portfolio/templates/portfolio/resume.html`
- Modify education, experience, skills, awards directly in the template

**Updates Archive:**
- Edit: `portfolio/views.py` - modify the `updates_list` in the `updates` function
- Template: `portfolio/templates/portfolio/updates.html`

**Contact Information:**
- Edit: `portfolio/templates/portfolio/contact.html`
- Update email, office location, social links

### Navigation & Layout

**Header/Navigation:**
- Edit: `portfolio/templates/portfolio/base.html`
- Modify navigation items or site title

**Overall Styling:**
- Edit: `static/css/style.css`
- Customize colors, fonts, and layout

**Interactive Features:**
- Edit: `static/js/main.js`
- Add or modify JavaScript functionality

## File Structure

```
portfolio/
├── portfolio/                # Django app
│   ├── templates/portfolio/  # HTML templates
│   ├── views.py             # Data and logic
│   └── urls.py              # URL routing
├── static/                  # Static files
│   ├── css/style.css        # Styling
│   ├── js/main.js          # JavaScript
│   └── images/             # Images
├── portfolio_site/          # Django project settings
├── manage.py               # Django management
├── start-local.bat         # Windows launcher
├── start-local.sh          # Mac/Linux launcher
└── portfolio-local.html    # Standalone version
```

## Troubleshooting

**Port Already in Use:**
If you see "port 8000 already in use", either:
- Stop other applications using port 8000
- Or the website is already running at `http://localhost:8000`
- Use a different port: `python manage.py runserver 0.0.0.0:8001`

**Django Errors:**
```bash
# Check for migration issues
python manage.py makemigrations
python manage.py migrate

# Clear cache if needed
python manage.py collectstatic --clear
```

**Changes Not Showing:**
- Check the terminal for Django errors
- Refresh your browser (Ctrl+F5 for hard refresh)
- Ensure you're editing the correct files in `portfolio/templates/` or `portfolio/views.py`

**Static Files Not Loading:**
```bash
python manage.py collectstatic
```

## Adding New Content

### New Research Project:
1. Open `portfolio/views.py`
2. Add new project to `research_projects` list in `research` function
3. Include title, authors, venue, year, description

### New Publication:
1. Open `portfolio/views.py`
2. Add to `journals` or `conferences` list in `publications` function
3. Include title, authors, venue, year

### New Update:
1. Open `portfolio/views.py`
2. Add to `updates_list` in `updates` function
3. Include date, type, title

## Production Deployment

When ready to deploy online:
1. Set `DEBUG = False` in `portfolio_site/settings.py`
2. Configure `ALLOWED_HOSTS` with your domain
3. Set up static file serving for production
4. Deploy to platforms like Heroku, PythonAnywhere, or DigitalOcean

Your Django portfolio is now ready for local development and easy content updates!
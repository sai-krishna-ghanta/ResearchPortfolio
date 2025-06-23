# Ghanta Sai Krishna - Django Portfolio Website

A professional portfolio website built with Django, showcasing research in Artificial Intelligence, Multi-Robot Systems, and Computer Vision.

## 🚀 Quick Start - Local Development

### Django Application
```bash
# Run migrations
python manage.py migrate

# Start the Django development server
python manage.py runserver 0.0.0.0:8000
```
The website will be available at `http://localhost:8000`

### Quick Launch Scripts
- **Windows**: Double-click `start-local.bat`
- **Mac/Linux**: Run `./start-local.sh`

### Alternative Static Version
Open `portfolio-local.html` directly in your browser for a standalone version.

## 📁 Project Structure

```
├── portfolio/              # Django application
│   ├── templates/          # HTML templates
│   ├── views.py           # View functions
│   └── urls.py            # URL routing
├── portfolio_site/        # Django project settings
├── static/                # CSS, JavaScript, images
│   ├── css/               # Stylesheet files
│   ├── js/                # JavaScript files
│   └── images/            # Static images
├── manage.py              # Django management script
└── portfolio-local.html   # Standalone local version
```

## 🛠 Making Changes

1. **Edit Templates**: Modify files in `portfolio/templates/portfolio/`
2. **Update Content**: Change data in `portfolio/views.py`
3. **Styling**: Edit `static/css/style.css`
4. **JavaScript**: Modify `static/js/main.js`
5. **Hot Reload**: Django automatically reloads on changes

## 📱 Sections

- **Home**: Bio, education, research interests, recent updates
- **Research**: Featured research projects with detailed descriptions
- **Publications**: Journals and conference papers organized by type
- **Updates**: Academic milestones and achievements timeline
- **Resume**: Education, experience, skills, awards
- **Contact**: Professional links and contact information

## 🎨 Customization

### Adding New Research Projects
Edit the `research_projects` list in `portfolio/views.py` research function

### Updating Publications
Modify the `journals` and `conferences` lists in `portfolio/views.py` publications function

### Adding Updates
Edit the `updates_list` in `portfolio/views.py` updates function

### Changing Styles
Modify `static/css/style.css` for custom styling

## 📦 Technologies

- Django 5.2.3
- Python 3.11
- HTML5 & CSS3
- Vanilla JavaScript
- Responsive Design

## 🔗 Links

- [Google Scholar](https://scholar.google.com/citations?user=lrK_Y8AAAAAJ&hl=en)
- [GitHub](https://github.com/sai-krishna-ghanta/)
- [LinkedIn](https://www.linkedin.com/in/sai-krishna-ghanta-320ab0211/)

---

© 2024 Ghanta Sai Krishna. All rights reserved.
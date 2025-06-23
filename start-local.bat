@echo off
echo Starting Ghanta Sai Krishna Django Portfolio Website...
echo.
echo Running Django migrations...
python manage.py migrate
echo.
echo Starting Django development server...
echo Website will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
python manage.py runserver 0.0.0.0:8000
pause
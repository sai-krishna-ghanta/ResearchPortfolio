#!/usr/bin/env python
import subprocess
import sys
import os

def main():
    print("Starting Django Portfolio Website...")
    print("=" * 50)
    
    # Run Django development server
    try:
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_site.settings')
        subprocess.run([
            sys.executable, 'manage.py', 'runserver', '0.0.0.0:8000'
        ], check=True)
    except KeyboardInterrupt:
        print("\nServer stopped by user.")
    except subprocess.CalledProcessError as e:
        print(f"Error starting Django server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
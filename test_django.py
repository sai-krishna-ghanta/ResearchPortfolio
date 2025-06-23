#!/usr/bin/env python
import os
import sys
import django
from django.test.utils import get_runner
from django.conf import settings

if __name__ == "__main__":
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_site.settings')
    django.setup()
    
    # Simple test to check if URLs are working
    from django.test import Client
    client = Client()
    
    print("Testing Django Portfolio...")
    print("=" * 40)
    
    # Test all pages
    pages = [
        ('/', 'Home'),
        ('/research/', 'Research'),
        ('/publications/', 'Publications'),
        ('/updates/', 'Updates'),
        ('/resume/', 'Resume'),
        ('/contact/', 'Contact')
    ]
    
    for url, name in pages:
        try:
            response = client.get(url)
            status = "✓ PASS" if response.status_code == 200 else f"✗ FAIL ({response.status_code})"
            print(f"{name:12} {url:15} {status}")
        except Exception as e:
            print(f"{name:12} {url:15} ✗ ERROR: {str(e)}")
    
    print("=" * 40)
    print("Django portfolio test complete!")
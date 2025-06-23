from django.shortcuts import render

def home(request):
    return render(request, 'portfolio/home.html')

def research(request):
    research_projects = [
        {
            'title': 'SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems',
            'authors': 'Ghanta Sai Krishna, and Ramviyas Parasuraman',
            'venue': 'arXiv preprint arXiv:2411.02524 (2024), submitted to IEEE IROS 2025',
            'year': '2024',
            'description': 'Developed an online 3D spatial exploration framework for multi-robot systems utilizing situational awareness and dynamic filter to mitigate ghosting trail effect in 3D reconstructions.'
        },
        {
            'title': 'MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments',
            'authors': 'Ghanta Sai Krishna, and Ramviyas Parasuraman',
            'venue': 'submitted to IEEE IROS 2025',
            'year': '2024',
            'description': 'Introduced a distributed multi-robot relative localization approach leveraging uncertainty-aware Gaussian Processes and Wi-Fi RSSI signals for robust, efficient pose estimation in GPS-denied environments.'
        },
        {
            'title': '3DS-SLAM: A 3D Object Detection based Semantic SLAM towards Dynamic Indoor Environments',
            'authors': 'Ghanta Sai Krishna, Kundrapu Supriya, and Sabur Baidya',
            'venue': 'arXiv preprint arXiv:2310.06385 (2023), submitted to IEEE IROS 2025',
            'year': '2023',
            'description': 'Developed real-time 3D Object Detection in Visual SLAM with RGB-D and LiDAR sensors for dynamic indoor environments.'
        }
    ]
    return render(request, 'portfolio/research.html', {'research_projects': research_projects})

def publications(request):
    journals = [
        {
            'title': 'SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems',
            'authors': 'Ghanta Sai Krishna, and Ramviyas Parasuraman',
            'venue': 'arXiv preprint arXiv:2411.02524 (2024), submitted to IEEE IROS 2025',
            'year': '2024'
        }
    ]
    conferences = [
        {
            'title': 'MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization',
            'authors': 'Ghanta Sai Krishna, and Ramviyas Parasuraman',
            'venue': 'submitted to IEEE IROS 2025',
            'year': '2024'
        },
        {
            'title': '3DS-SLAM: A 3D Object Detection based Semantic SLAM towards Dynamic Indoor Environments',
            'authors': 'Ghanta Sai Krishna, Kundrapu Supriya, and Sabur Baidya',
            'venue': 'arXiv preprint arXiv:2310.06385 (2023)',
            'year': '2023'
        }
    ]
    return render(request, 'portfolio/publications.html', {'journals': journals, 'conferences': conferences})

def updates(request):
    updates_list = [
        {'date': 'Nov 2024', 'type': 'Publication', 'title': 'SPACE Framework Paper Submitted to IROS 2025'},
        {'date': 'Aug 2024', 'type': 'Education', 'title': 'Started PhD Journey at University of Georgia'},
        {'date': 'Jun 2024', 'type': 'Experience', 'title': 'Completed Research Internship at Louisville Automation'},
        {'date': 'Mar 2024', 'type': 'Recognition', 'title': 'Appointed as IEEE Technical Reviewer'},
        {'date': 'Oct 2023', 'type': 'Publication', 'title': '3DS-SLAM paper published on arXiv'},
        {'date': 'May 2023', 'type': 'Education', 'title': 'Graduated with BTech in Data Science & AI'},
        {'date': 'Jan 2023', 'type': 'Experience', 'title': 'Started internship at Samsung R&D Institute'},
        {'date': 'Sep 2022', 'type': 'Recognition', 'title': 'Dean\'s List for Academic Excellence'},
    ]
    return render(request, 'portfolio/updates.html', {'updates': updates_list})

def resume(request):
    return render(request, 'portfolio/resume.html')

def contact(request):
    return render(request, 'portfolio/contact.html')

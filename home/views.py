from django.shortcuts import render, get_object_or_404
from .models import Experience, General_info, Project, Jobs

def BASE(request):
    
    return render(request, 'base.html')

def home(request):
    projects = Project.objects
    general_info = General_info.objects.all()
    jobs = Jobs.objects.all().order_by('-from_date')
    # exp = Experience.objects.all()
    inpage_links = {
        "home": "home",
        "project": "project",
        "resume": "resume",
        "contact": "contact",
    }

    return render(request, 'home/home.html', 
    {
        'projects': projects,
        'general_info': general_info,
        'jobs': jobs,
        'inpage_links': inpage_links,
    })

def detail(request, project_id):
    project_details = get_object_or_404(Project, pk = project_id)
    return render(request, 'home/details.html', {
        'project': project_details
    })
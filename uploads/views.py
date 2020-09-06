from django.shortcuts import render, HttpResponse

def upload_list(request):
    return render(request, 'upload_list.html')

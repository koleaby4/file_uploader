from django.shortcuts import render, HttpResponse, redirect, reverse
from .models import Upload


def upload_list(request):
    context = {"uploads" : Upload.objects.all()}
    return render(request, 'upload_list.html', context)

def upload_detail(request, id):
    upload = Upload.objects.get(id=id)
    context = {"upload": upload}
    return render(request, 'upload_detail.html', context)

def new_upload(request):
    if request.method == "POST":
        uploaded_file = request.FILES["file_obj"]
        password = request.POST.get("password")

        Upload(file=uploaded_file, password=password).save()
        return redirect('/uploads')

    else:
        return render(request, 'new_upload.html')

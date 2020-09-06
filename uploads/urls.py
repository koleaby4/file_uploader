from django.urls import path
from .views import upload_list, new_upload, upload_detail

urlpatterns = [
    path('', upload_list, name="home"),
    path('uploads/', upload_list, name="uploads"),
    path('uploads/new', new_upload, name="new_upload"),
    path('uploads/<slug:id>', upload_detail, name="upload_detail"),
]

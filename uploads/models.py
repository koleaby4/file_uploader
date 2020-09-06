from django.db import models
from uuid import uuid4

class Upload(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    file = models.FileField(max_length=70)
    password = models.CharField(max_length = 70)

    def __str__(self):
        return self.file.name

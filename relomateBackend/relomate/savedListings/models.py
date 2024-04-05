from django.db import models

# Create your models here.

class SavedListing(models.Model):
    mainImage = models.CharField(max_length=200)
    personalNote = models.TextField(editable=True)
    date_created = models.DateTimeField(auto_now=True)


    def __str__(self):
        return (f"SavedListing{self.date_created}")
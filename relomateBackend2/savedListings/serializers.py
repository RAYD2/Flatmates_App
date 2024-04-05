
from rest_framework.serializers import ModelSerializer
from .models import SavedListing

class SavedListingSerializer(ModelSerializer):
    class Meta:
        model = SavedListing
        fields =('id','mainImage','personalNote','date_created')
        



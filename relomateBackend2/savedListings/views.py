from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import SavedListing
from .serializers import SavedListingSerializer

@api_view(['GET'])
def saved_listing_list(request):
    saved_listings = SavedListing.objects.all()
    serializer = SavedListingSerializer(saved_listings, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def add_saved_listing(request):
    if request.method == 'POST':
        main_image = request.data.get('mainImage')
        personal_note = request.data.get('personalNote')

        saved_listing = SavedListing.objects.create(
            mainImage=main_image,
            personalNote=personal_note
        )

        serializer = SavedListingSerializer(saved_listing)
        return JsonResponse(serializer.data, status=201)

    return JsonResponse({'error': 'Invalid request method.'}, status=400)

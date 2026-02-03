from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def predict_disease(request):
    return Response({
        "disease": "Tomato Leaf Mold",
        "fertilizer": "Copper-based fungicide",
        "prevention": "Avoid overhead irrigation"
    })

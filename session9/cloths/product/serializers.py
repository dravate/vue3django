from rest_framework.serializers import ModelSerializer

from .models import Product 

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ["id", "name", "price", "description", "product_image", "created_at"]


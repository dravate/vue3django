from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100, null=True)
    price = models.DecimalField(max_digits=9, decimal_places=2, default="5")
    description = models.TextField(max_length=200, null=True)
    product_image = models.ImageField(default='', upload_to='product_images/')
    created_at = models.DateTimeField(auto_now_add=True , null=True)
   
    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.name 

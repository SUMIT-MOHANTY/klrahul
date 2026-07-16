from django.db import models


class Book(models.Model):
    STATUS_CHOICES = [
        ('available', 'Available'),
        ('borrowed', 'Borrowed'),
        ('maintenance', 'Maintenance'),
    ]

    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    isbn = models.CharField(max_length=13, unique=True)
    publisher = models.CharField(max_length=100)
    publication_date = models.DateField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES,
                            default='available')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} by {self.author}"

    class Meta:
        ordering = ['title']

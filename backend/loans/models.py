from django.db import models
from django.conf import settings
from books.models import Book


class Loan(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('returned', 'Returned'),
        ('overdue', 'Overdue'),
    ]

    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                           on_delete=models.CASCADE)
    loan_date = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
    return_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES,
                            default='active')
    fine_amount = models.DecimalField(max_digits=10, decimal_places=2,
                                    default=0.00)

    class Meta:
        ordering = ['-loan_date']

    def __str__(self):
        return f"{self.book.title} - {self.user.username}"

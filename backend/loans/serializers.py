from rest_framework import serializers
from .models import Loan
from books.serializers import BookSerializer
from users.serializers import UserSerializer


class LoanSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    book = BookSerializer(read_only=True)

    class Meta:
        model = Loan
        fields = ['id', 'user', 'book',
                  'loan_date', 'return_date', 'is_returned']


class LoanCreateSerializer(serializers.ModelSerializer):

    book_id = serializers.IntegerField()
    user_id = serializers.IntegerField()

    class Meta:
        model = Loan
        fields = ['book_id', 'user_id', 'due_date']

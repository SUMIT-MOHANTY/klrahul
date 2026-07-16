from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.utils import timezone
from .models import Loan
from .serializers import LoanSerializer, LoanCreateSerializer
from books.models import Book
from users.models import User


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def loan_list(request):
    loans = Loan.objects.all().select_related('user', 'book')
    serializer = LoanSerializer(loans, many=True)
    return Response({
        'results': serializer.data,
        'count': loans.count()
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])

def loan_create(request):
    serializer = LoanCreateSerializer(data=request.data)
    if serializer.is_valid():
        book_id = serializer.validated_data['book_id']
        user_id = serializer.validated_data['user_id']
        due_date = serializer.validated_data['due_date']

        # Check if book exists and is available
        try:
            book = Book.objects.get(id=book_id)
        except Book.DoesNotExist:
                request.user.is_staff:
            return Response(
                {'error': 'Permission denied'},
                status=status.HTTP_403_FORBIDDEN)
        except Book.DoesNotExist:
            return Response({'error': 'Book not found'}, status=status.HTTP_404_NOT_FOUND)

        # Check if user exists
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        # Create loan
        loan = Loan.objects.create(
            user=user,
            book=book,
            due_date=due_date
        )

        # Update book status
        book.status = 'checked_out'
        book.save()

        return Response(LoanSerializer(loan).data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])

def loan_return(request, pk):
    loan = get_object_or_404(Loan, pk=pk)

    if loan.status == 'returned':
        return Response({'error': 'Loan already returned'}, status=status.HTTP_400_BAD_REQUEST)

    # Update loan
    loan.return_date = timezone.now()
    loan.status = 'returned'
    loan.save()

    # Update book status
    loan.book.status = 'available'
    loan.book.save()

    return Response(LoanSerializer(loan).data)

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Book
from .serializers import BookSerializer, BookCreateSerializer, BookUpdateSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def book_list(request):
    """List all books"""
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def book_detail(request, pk):
    """Get a specific book"""
    book = get_object_or_404(Book, pk=pk)
    serializer = BookSerializer(book)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def book_create(request):
    """Create a new book"""
    serializer = BookCreateSerializer(data=request.data)
    if serializer.is_valid():
        book = serializer.save()
        return Response(BookSerializer(book).data,
                       status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'PATCH'])
@permission_classes([IsAuthenticated])
def book_update(request, pk):
    """Update a book"""
    book = get_object_or_404(Book, pk=pk)
    serializer = BookUpdateSerializer(book, data=request.data,
                                    partial=request.method == 'PATCH')
    if serializer.is_valid():
        book = serializer.save()
        return Response(BookSerializer(book).data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def book_delete(request, pk):
    """Delete a book"""
    book = get_object_or_404(Book, pk=pk)
    book.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

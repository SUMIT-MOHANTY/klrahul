from django.contrib import admin
from .models import Book

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'isbn', 'available_copies', 'created_at')
    list_filter = ('author', 'created_at')
    search_fields = ('title', 'author', 'isbn')
    readonly_fields = ('created_at',)
    ordering = ('title',)

    fieldsets = (
        (None, {
            'fields': ('title', 'author', 'isbn', 'description')
        }),
        ('Inventory', {
            'fields': ('total_copies', 'available_copies')
        }),
        ('Timestamps', {
            'fields': ('created_at',),
            'classes': ('collapse',)
        }),
    )

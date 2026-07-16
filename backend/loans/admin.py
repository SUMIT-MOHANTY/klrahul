from django.contrib import admin
from .models import Loan

@admin.register(Loan)
class LoanAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'book', 'loan_date', 'due_date', 'return_date', 'status')
    list_filter = ('status', 'loan_date', 'due_date')
    search_fields = ('user__username', 'book__title')
    readonly_fields = ('loan_date',)
    ordering = ('-loan_date',)

    fieldsets = (
        (None, {
            'fields': ('user', 'book')
        }),
        ('Loan Details', {
            'fields': ('loan_date', 'due_date', 'return_date', 'status')
        }),
    )

    def get_readonly_fields(self, request, obj=None):
        if obj:  # editing an existing object
            return self.readonly_fields + ('user', 'book')
        return self.readonly_fields

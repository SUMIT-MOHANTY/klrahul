from django.contrib import admin
from .models import AuditLog

@admin.register(AuditLog)
class AuditLogAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'action', 'timestamp')
    list_filter = ('action', 'timestamp')
    readonly_fields = ('user', 'action', 'timestamp')
    search_fields = ('user__username', 'action')
    ordering = ('-timestamp',)

    def has_add_permission(self, request):
        # Audit logs should not be manually created
        return False

    def has_change_permission(self, request, obj=None):
        # Audit logs should not be modified
        return False

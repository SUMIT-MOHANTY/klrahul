from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def audit_list(request):
    return Response({'audit_logs': []})

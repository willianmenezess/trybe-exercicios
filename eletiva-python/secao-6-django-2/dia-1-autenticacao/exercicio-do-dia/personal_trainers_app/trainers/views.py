# trainers/views.py

from rest_framework import viewsets
from .models import Client
from .serializers import ClientSerializer
from .permissions import IsOwner


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [IsOwner]

    def get_queryset(self):
        current_user = self.request.user
        if current_user.is_superuser:
            return Client.objects.all()
        else:
            return Client.objects.filter(
                workout_plan__personal_trainer=current_user)

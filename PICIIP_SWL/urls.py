"""
URL configuration for PICIIP_SWL project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views 
from PICIIP_SWL import settings, views
from PICIIP_SWL.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='home'),
    path('argon_index', argon_index, name='argon_index'),
    path('plot_map', plot_map, name='plot_map'),
    path('plost_request_list', plost_request_list, name='plost_request_list'),
    path('get_user_plot_requests', get_user_plot_requests, name='get_user_plot_requests'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('mark_as_read/', mark_as_read, name='mark_as_read'),
    path('reject_plot/', reject_plot, name='reject_plot'),
    path('submit-form/', submit_form, name='submit_form'),
    path('signup/', views.SignUpView.as_view(), name='signup'),
    path('password/change/', change_password, name='password_change'),
    path('accounts/logout/', auth_views.LogoutView.as_view(next_page='/accounts/login/?next=/'), name='logout'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

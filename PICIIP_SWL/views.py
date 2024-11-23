import os
from django.conf import settings
import json
from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.db.models import Sum, Count

from django.contrib.auth import update_session_auth_hash
from django.urls import reverse_lazy
from django.views import generic
from django import forms
from django.contrib.auth.models import User

from PICIIP_SWL.models import *
from PICIIP_SWL.utils import *


@login_required(login_url="/accounts/login/")
def index(request):
    residential = get_table_area_count(Residential)
    commercial = get_table_area_count(Commercial)
    industry = get_table_area_count(Industry)
    education = get_table_area_count(Education)
    health = get_table_area_count(Health)
    public_building = get_table_area_count(PublicBuilding)
    religious_building = get_table_area_count(ReligiousBuilding)
    housing_schemes = get_table_area_count(ApprovedHousingSchemes)
    parks = get_table_area_count(ParksAndPlayground)
    settlements = get_table_area_count(Settlements)
    brick_kiln = get_table_area_count(BrickKiln)
    graveyard = get_table_area_count(Graveyard)
 # Calculate unread count
    unread_count = PlotRequests.objects.filter(is_read__isnull=True).count()  # Ensure this line is included

    residential_area = Residential.objects.aggregate(Sum('area'))
    commercial_area = Commercial.objects.aggregate(Sum('area'))
    industry_area = Industry.objects.aggregate(Sum('area'))
    area_sum = json.dumps({
        'residential_area': residential_area['area__sum'],
        'commercial_area': commercial_area['area__sum'],
        'industry_area': industry_area['area__sum']
    }, cls=DecimalEncoder)
    plot_requests = list(
        PlotRequests.objects.filter(seen_status=False).order_by('-submitted_at').all())
    building_age_count = list(Residential.objects.values('building_a').annotate(count=Count('building_a')).all())
    building_height_count = list(Residential.objects.values('b_height').annotate(count=Count('b_height')).all())
    res_landuse_area_sum = list(Residential.objects.values('lu_upd').annotate(area=Sum('area')).all())
    com_landuse_area_sum = list(Commercial.objects.values('lu_upd').annotate(area=Sum('area')).all())
    ind_landuse_area_sum = list(Industry.objects.values('lu_upd').annotate(area=Sum('area')).all())
    lu_area_sum = json.dumps({
        'residential_area': res_landuse_area_sum,
        'commercial_area': com_landuse_area_sum,
        'industry_area': ind_landuse_area_sum,
        'building_age_count': building_age_count,
        'building_height_count': building_height_count,
    }, cls=DecimalEncoder)

    return render(request, 'ar_index.html',
                  {'area_sum': area_sum, 'lu_area_sum': lu_area_sum, 'plot_requests': plot_requests,'unread_count': unread_count,
                   'residential': residential, 'commercial': commercial, 'industry': industry, 'education': education,
                   'health': health, 'public_building': public_building, 'religious_building': religious_building,
                   'housing_schemes': housing_schemes, 'parks': parks, 'settlements': settlements,
                   'brick_kiln': brick_kiln, 'graveyard': graveyard})


def argon_index(request):
    return render(request, "ar_index.html")


@login_required(login_url="/accounts/login/")
def plot_map(request):
    return render(request, "plot_request.html", {})


@login_required(login_url="/accounts/login/")
def plost_request_list(request):
    return render(request, "RequestsList.html", {})


def submit_form(request):
    user = request.user.username
    if request.method == 'POST':
        name = request.POST.get('name')
        Email = request.POST.get('Email')
        cnic = request.POST.get('cnic')
        contact_no = request.POST.get('contact_no')
        kml_file = request.FILES.get('kmlFile')
        landuseType = request.POST.get('landuseType')
        kmlArea = request.POST.get('kmlArea')
        SubZone = request.POST.get('SubZone')
        abuttingRoad = request.POST.get('abuttingRoad')
        revenueDocument = request.FILES.get('revenueDocument')
        cnic_path = request.FILES.get('cnicFile')
        existingSituation = request.POST.get('existingSituation')
        
        # Validate that all fields are provided
        if not name  or not cnic or not contact_no or not kml_file:
            return JsonResponse({'error': 'All mandatory fields are required.'}, status=400)
        
    # Create the user's directories inside MEDIA_ROOT
    revenue_document_directory = os.path.join(settings.MEDIA_ROOT, 'Revenue_Documents', user)
    os.makedirs(revenue_document_directory, exist_ok=True)

    cnic_directory = os.path.join(settings.MEDIA_ROOT, 'CNIC', user)
    os.makedirs(cnic_directory, exist_ok=True)

    # Handle file paths
    revenueDocument_name = revenueDocument.name if revenueDocument else None
    revenueDocument_path = os.path.join('Revenue_Documents', user, revenueDocument_name) if revenueDocument else None

    cnic_file_name = cnic_path.name if cnic_path else None
    cnic_path_full = os.path.join('CNIC', user, cnic_file_name) if cnic_path else None

    # Save the files to disk
    if revenueDocument:
        with open(os.path.join(settings.MEDIA_ROOT, revenueDocument_path), 'wb+') as destination:
            for chunk in revenueDocument.chunks():
                destination.write(chunk)

    if cnic_path:
        with open(os.path.join(settings.MEDIA_ROOT, cnic_path_full), 'wb+') as destination:
            for chunk in cnic_path.chunks():
                destination.write(chunk)

      # Replace backslashes with forward slashes for paths to store in the database
    relative_revenue_document_path = os.path.join('media', revenueDocument_path).replace('\\', '/') if revenueDocument else None
    relative_cnic_document_path = os.path.join('media', cnic_path_full).replace('\\', '/') if cnic_path else None

    # Save the data to the database
    form_data = PlotRequests(
            name=name,
            Email=Email,
            cnic=cnic,
            contact_no=contact_no,
            kml_path=kml_file,
            submitted_by=user,
            seen_status=False,
            landuse_type=landuseType,
            kmlArea=kmlArea,
            SubZone=SubZone,
            abuttingRoad=abuttingRoad,
            revenue_document_path=relative_revenue_document_path,
            cnic_path=relative_cnic_document_path,
            existingsituation=existingSituation
        )
    form_data.save()
    return JsonResponse({'success': 'Data submitted successfully!'})
    return JsonResponse({'error': 'Invalid request method.'}, status=405)


@login_required
def get_user_plot_requests(request):
    user = request.user.username

    # Retrieve plot requests based on user type
    if request.user.is_superuser:
        plot_requests = PlotRequests.objects.all()  # Get all requests for superuser
    else:
        plot_requests = PlotRequests.objects.filter(submitted_by=user)  # Filter by submitted_by for regular users

    # Count unread plot requests (is_read is None or False)
    unread_count = plot_requests.filter(is_read__isnull=True).count()

    # Convert plot requests to list with selected fields
    data = list(plot_requests.values(
        'id', 'name', 'Email', 'cnic', 'contact_no', 'landuse_type',
        'submitted_at', 'kml_path', 'kmlArea', 'request_status',
        'SubZone', 'abuttingRoad','existingsituation','revenue_document_path','cnic_path'
    ))

    # Return data and unread count in JSON response
    return JsonResponse({'data': data, 'unread_count': unread_count})


class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def __init__(self, *args, **kwargs):
        super(CustomUserCreationForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({'class': 'form-control form-control-lg'})
        self.fields['email'].widget.attrs.update({'class': 'form-control form-control-lg'})
        self.fields['password1'].widget.attrs.update({'class': 'form-control form-control-lg'})
        self.fields['password2'].widget.attrs.update({'class': 'form-control form-control-lg'})

    def clean_username(self):
        username = self.cleaned_data.get("username")
        return username

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords do not match.")
        return password2

class SignUpView(generic.CreateView):
    form_class = CustomUserCreationForm  
    success_url = reverse_lazy('login')  # Redirect after successful signup
    template_name = 'registration/ar_signup.html'

class CustomPasswordChangeForm(PasswordChangeForm):
    def __init__(self, *args, **kwargs):
        super(CustomPasswordChangeForm, self).__init__(*args, **kwargs)
        # Customize field attributes (e.g., add custom classes)
        self.fields['old_password'].widget.attrs.update({'class': 'form-control form-control-lg'})
        self.fields['new_password1'].widget.attrs.update({'class': 'form-control form-control-lg'})
        self.fields['new_password2'].widget.attrs.update({'class': 'form-control form-control-lg'})


@login_required
def change_password(request):
    if request.method == 'POST':
        form = CustomPasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            # This is necessary to keep the user logged in after password change
            update_session_auth_hash(request, user)
            return redirect('login')  # Redirect to a success page
    else:
        form = CustomPasswordChangeForm(request.user)
    return render(request, 'registration/ar_change_password.html', {'form': form})

def mark_as_read(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        plot_id = data.get('id')
        try:
            plot = PlotRequests.objects.get(id=plot_id)
            plot.is_read = True  # Update the is_read field
            plot.save()
            return JsonResponse({'status': 'success'})
        except PlotRequests.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Plot request not found'}, status=404)
    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)

def reject_plot(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        plot_id = data.get('id')
        try:
            plot = PlotRequests.objects.get(id=plot_id)
            plot.request_status = 'Rejected'  # Update the status field to "Rejected"
            plot.save()
            return JsonResponse({'status': 'success', 'message': 'Plot request rejected successfully.'})
        except PlotRequests.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Plot request not found'}, status=404)
    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)

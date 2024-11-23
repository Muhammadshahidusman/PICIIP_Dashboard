import json
from decimal import Decimal, ROUND_DOWN
from django.db.models import F, Sum  # F for field lookups and Sum for aggregation
from django.contrib.gis.db import models  # GeoDjango model fields like PolygonField
from django.contrib.gis.db.models.functions import Area, Transform  # For calculating area
from django.db import models

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)  # Convert Decimal to float
        return super(DecimalEncoder, self).default(obj)


def get_table_area_count(table_obj):
    table_name = table_obj._meta.db_table
    land_parcel_count = table_obj.objects.count()
      # Annotate land parcels with area in acres
    land_parcels = table_obj.objects.annotate(
        area_acres=Area(Transform('geom', 3857)) / 4046.85642  # Convert area to acres directly
    )
    
    # Calculate total area in acres
    total_area_acres = land_parcels.aggregate(Sum('area_acres'))['area_acres__sum']
    # Convert total_area_acres to Decimal if it's not None
    total_area_acres = Decimal(total_area_acres) if total_area_acres is not None else Decimal(0)
    
    action_log_sums = ActionLog.objects.filter(
        action_table__iexact=table_name  # Case-insensitive comparison between action_table and table_name
    ).aggregate(
        total_increment_decrement=Sum('increament_decrement'),
        total_area_in_acre=Sum('area_in_acre')
    )

    # Get the sums from the aggregation
    total_increment_decrement = action_log_sums['total_increment_decrement'] or 0
    total_area_in_acre = action_log_sums['total_area_in_acre'] or 0
       # Round total_area_in_acre to 4 decimal places
    total_area_in_acre = Decimal(total_area_in_acre)
    # Add total area in acres from action logs
    if total_increment_decrement > 0:
     total_area_acres += total_area_in_acre
    else:
     total_area_acres -= total_area_in_acre
    return {"count": land_parcel_count+total_increment_decrement, "area": round(total_area_acres, 2)}

class ActionLog(models.Model):
    action_table = models.CharField(max_length=255)
    increament_decrement = models.IntegerField()
    area_in_acre = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'action_logs'

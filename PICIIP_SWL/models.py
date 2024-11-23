from django.contrib.gis.db import models


class Agriculture(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agriculture'


class AgricultureZone(models.Model):
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agriculture_zone'


class Amenities(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'amenities'


class BrownField(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'brown_field'


class BuiltupArea(models.Model):
    oid_field = models.FloatField(db_column='oid_', blank=True, null=True)  # Field renamed because it ended with '_'.
    name = models.CharField(max_length=254, blank=True, null=True)
    folderpath = models.CharField(max_length=254, blank=True, null=True)
    symbolid = models.FloatField(blank=True, null=True)
    altmode = models.FloatField(blank=True, null=True)
    base = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    clamped = models.FloatField(blank=True, null=True)
    extruded = models.FloatField(blank=True, null=True)
    snippet = models.CharField(max_length=254, blank=True, null=True)
    popupinfo = models.CharField(max_length=254, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_le_1 = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'builtup_area'


class BusTerminal(models.Model):
    zones = models.CharField(max_length=50, blank=True, null=True)
    area_acres = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    area_clip = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bus_terminal'


class CattleMarket(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cattle_market'


class CentralBusinessDistrict(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'central_business_district'


class Commercial(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'commercial'


class Contonement(models.Model):
    name = models.CharField(max_length=254, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'contonement'


class DeclaredCommercialRoads(models.Model):
    name = models.CharField(max_length=254, blank=True, null=True)
    proposal = models.CharField(max_length=50, blank=True, null=True)
    extent = models.CharField(max_length=50, blank=True, null=True)
    location = models.CharField(max_length=50, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'declared_commercial_roads'


class DisposalStation(models.Model):
    oid_field = models.FloatField(db_column='oid_', blank=True, null=True)  # Field renamed because it ended with '_'.
    name = models.CharField(max_length=254, blank=True, null=True)
    area_upd = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'disposal_station'


class DistrictBoundary(models.Model):
    area_ac_field = models.DecimalField(db_column='area_ac_', max_digits=65535, decimal_places=65535, blank=True,
                                        null=True)  # Field renamed because it ended with '_'.
    district = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'district_boundary'


class Education(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education'


class EducationalNeighbourhood(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'educational_neighbourhood'


class ExpresswayHighway(models.Model):
    highway = models.CharField(max_length=80, blank=True, null=True)
    name = models.CharField(max_length=82, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'expressway_highway'


class FarmHousingZone(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'farm_housing_zone'


class FruitVegetableMarket(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fruit_vegetable_market'


class Graveyard(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'graveyard'


class GreenBuffer(models.Model):
    lu = models.CharField(max_length=50, blank=True, null=True)
    buff_dist = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    area_arc = models.IntegerField(blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'green_buffer'


class Health(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health'


class HealthNeighbourhood(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health_neighbourhood'


class Industry(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry'


class InstitutionalZone(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'institutional_zone'


class IntercityCorridor(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'intercity_corridor'


class McBoundary2013(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    type = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mc_boundary_2013'


class McBoundary2019(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    type = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mc_boundary_2019'


class MixUse(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mix_use'


class NotifiedLand(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'notified_land'


class OpenSpace(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'open_space'


class Orchard(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'orchard'


class ParkingShed(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    area_upd = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'parking_shed'


class ParksAndPlayground(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'parks_and_playground'


class PrimaryRoad(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'primary_road'


class PrimaryRoads(models.Model):
    objectid_1 = models.FloatField(blank=True, null=True)
    fid_primar = models.FloatField(blank=True, null=True)
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_le_1 = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'primary_roads'


class ProposedRingRoad(models.Model):
    lu = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'proposed_ring_road'


class PublicBuilding(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'public_building'


class RailwayLine(models.Model):
    
    name = models.CharField(max_length=48, blank=True, null=True)
    type = models.CharField(max_length=16, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'railway_line'


class RecreationalZone(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'recreational_zone'


class RehabilitatedParks(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    area_upd = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'rehabilitated_parks'


class ReligiousBuilding(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'religious_building'


class Residential(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'residential'


class ResidentialZones(models.Model):
    


    name = models.CharField(max_length=50, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'residential_zones'


class RingRoad(models.Model):
    
    lu = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ring_road'


class SecondaryRoad(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'secondary_road'


class SecondaryRoads(models.Model):
    
    objectid_1 = models.FloatField(blank=True, null=True)
    fid_second = models.FloatField(blank=True, null=True)

    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_le_1 = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'secondary_roads'


class SegregationPlant(models.Model):
    

    name = models.CharField(max_length=50, blank=True, null=True)
    area_upd = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'segregation_plant'


class Settlements(models.Model):
    
    name = models.CharField(max_length=254, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'settlements'


class SpecialEconomicZone(models.Model):
    


    name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'special_economic_zone'


class StateLand(models.Model):
    
    lp_sheet = models.CharField(max_length=51, blank=True, null=True)
    sec_code = models.CharField(max_length=16, blank=True, null=True)
    moza = models.CharField(max_length=45, blank=True, null=True)
    station = models.CharField(max_length=50, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'state_land'


class StructurePlanRoad(models.Model):
    

    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'structure_plan_road'


class TehsilBoundary(models.Model):
    
    area_ac_field = models.DecimalField(db_column='area_ac_', max_digits=65535, decimal_places=65535, blank=True,
                                        null=True)  # Field renamed because it ended with '_'.
    tehsil_nam = models.CharField(max_length=50, blank=True, null=True)
    district = models.CharField(max_length=50, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tehsil_boundary'


class Tertiary(models.Model):
    

    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tertiary'


class TertiaryRoads(models.Model):
    
    objectid_1 = models.FloatField(blank=True, null=True)
    fid_tertia = models.FloatField(blank=True, null=True)

    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_le_1 = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tertiary_roads'


class UsGaz(models.Model):
    seq = models.IntegerField(blank=True, null=True)
    word = models.TextField(blank=True, null=True)
    stdword = models.TextField(blank=True, null=True)
    token = models.IntegerField(blank=True, null=True)
    is_custom = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'us_gaz'


class UsLex(models.Model):
    seq = models.IntegerField(blank=True, null=True)
    word = models.TextField(blank=True, null=True)
    stdword = models.TextField(blank=True, null=True)
    token = models.IntegerField(blank=True, null=True)
    is_custom = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'us_lex'


class UsRules(models.Model):
    rule = models.TextField(blank=True, null=True)
    is_custom = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'us_rules'


class Vacant(models.Model):
    

    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vacant'


class VeterinaryHospital(models.Model):
    


    name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'veterinary_hospital'


class WastewaterTreatmentPlant(models.Model):
    

    name = models.CharField(max_length=50, blank=True, null=True)
    area_upd = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'wastewater_treatment_plant'


class Waterbody(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    main_class = models.CharField(max_length=50, blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'waterbody'


class PlotRequests(models.Model):
    STATUS_CHOICES = [
        ('In Process', 'In Process'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    ]

    name = models.CharField(max_length=250, blank=True, null=True)
    address = models.CharField(max_length=500, blank=True, null=True)
    contact_no = models.CharField(max_length=50, blank=True, null=True)
    cnic = models.CharField(max_length=18, blank=True, null=True)
    landuse_type = models.CharField(max_length=250, blank=True, null=True)
    kmlArea = models.CharField(max_length=250, blank=True, null=True, db_column='kml_area')
    kml_path = models.FileField(blank=True, null=True)
    map_document = models.FileField(blank=True, null=True)
    submitted_at = models.DateField(blank=True, null=True, auto_now_add=True)
    submitted_by = models.CharField(max_length=100, blank=True, null=True)
    seen_status = models.BooleanField(blank=True, null=True)
    request_status = models.CharField(max_length=50, blank=True, null=True, choices=STATUS_CHOICES, default="In Process")
    Email = models.CharField(max_length=50, blank=True, null=True, db_column='Email')
    abuttingRoad = models.CharField(max_length=250, blank=True, null=True)
    SubZone = models.CharField(max_length=150, blank=True, null=True)
    is_read = models.BooleanField(default=False)  # Corrected indentation
    revenue_document_path = models.CharField(max_length=500, blank=True, null=True)
    cnic_path = models.CharField(max_length=500, blank=True, null=True)
    existingsituation = models.CharField(max_length=150, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'plot_requests'


class ApprovedHousingSchemes(models.Model):
    hs_name = models.CharField(max_length=50, blank=True, null=True)
    area_arc = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'approved_housing_schemes'


class BrickKiln(models.Model):
    name = models.CharField(max_length=150, blank=True, null=True)
    building_a = models.CharField(max_length=50, blank=True, null=True)
    b_height = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    row = models.CharField(max_length=50, blank=True, null=True)
    area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lu_upd = models.CharField(max_length=50, blank=True, null=True)
    geom = models.GeometryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'brick_kiln'



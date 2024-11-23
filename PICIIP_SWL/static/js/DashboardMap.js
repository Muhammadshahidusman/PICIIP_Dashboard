let DashboardMap = function () {
    let me = this;
    me.mapDiv = 'mapDiv';
    me.map = null;
    me.districtLayer = null;
    me.tehsilLayer = null;
    me.mc2013Layer = null;
    me.mc2019Layer = null;
    me.stateLandLayer = null;
    me.cantonementLayer = null;
    me.railwayLineLayer = null;
    me.expressHighwayLayer = null;
    me.primaryRoadsLayer = null;
    me.secondaryRoadsLayer = null;
    me.tertiaryRoadsLayer = null;
    me.educationalNeighbourLayer = null;
    me.existingRingRoadLayer = null;
    me.approvedHSLayer = null;
    me.existingSettlementsLayer = null;
    me.establishedBuiltupLayer = null;
    me.commercialLayer = null;
    me.areaUnderDevelopmentLayer = null;
    me.educationalLayer = null;
    me.graveyardLayer = null;
    me.healthLayer = null;
    me.industryLayer = null;
    me.brickilnLayer = null;
    me.parksLayer = null;
    me.publicBuildingLayer = null;
    me.religiousLayer = null;
    me.waterBodiesLayer = null;
    me.vacantLayer = null;
    me.segregationPlantLayer = null;
    me.busTerminalLayer = null;
    me.wasteWaterLayer = null;
    me.waterTreatmentPlantLayer = null;
    me.parkingShedLayer = null;
    me.rehebParksLayer = null;
    me.disposalStaionLayer = null;
    me.proposedRingRLayer = null;
    me.structurePlanLayer = null;
    me.residentialZonesLayer = null;
    me.educaitonalNeighbourhoodLayer = null;
    me.healthNeighbourhoodLayer = null;
    me.commercialRoadLayer = null;
    me.intercityCorridorLayer = null;
    me.centralBusinessDLayer = null;
    me.institutionalZonesLayer = null;
    me.veterinaryHospitalLayer = null;
    me.specialEconomicZoneLayer = null;
    me.farmHouseZoneLayer = null;
    me.agroIndustryZoneLayer = null;
    me.cattleMarketLayer = null;
    me.fruitVegMarketLayer = null;
    me.recreationalZoneLayer = null;
    me.agriZoneLayer = null;
    me.greenBufferLayer = null;
    me.declaredCommercialRoadLayer = null;
    me.residentialLayer = null;
    me.illegatHSLayer = null;
    me.katchiAbadiLayer = null;
    me.mixedUseLayer = null;
    me.poiLayer = null;
    me.googleMaps = null;
    me.googleHybrid = null;
    me.osmLayer = null;
    me.currentBasemap = null;
    me.drawnGeoJsonLayer = null;
    me.osmWatercolor = null;
    me.osmTransportMap = null;
    me.osmCycleMap = null;
    me.osmTopoMap = null;
    me.osmHumanitarian = null;

    me.adminGroup = {};
    me.adminGroupContainer = null;
    me.adminGroupDiv = $("#divAdminLayers");

    me.notifiedAreaGroup = {};
    me.notifiedAreaGroupContainer = null;
    me.notifiedAreaGroupDiv = $("#divNotifiedAreaLayers");

    me.existingLanduseGroup = {};
    me.existingLanduseGroupContainer = null;
    me.existingLanduseGroupDiv = $("#divExLULayers");

    me.PICIIPProposalsGroup = {};
    me.PICIIPProposalsGroupContainer = null;
    me.PICIIPProposalsGroupDiv = $("#divPPLayers");

    // Assuming me is your context object
me.proposedZonesGroup = {};
me.proposedZonesGroupContainer = null;
me.proposedZonesGroupDiv = $("#divPZLayers");

    me.residentialGroup = {};
    me.residentialGroupContainer = null;
    me.residentialGroupDiv = $("#divResidentialLayers");

    me.commercialGroup = {};
    me.commercialGroupContainer = null;
    me.commercialGroupDiv = $("#divCommLayers");

    me.otherLanduseGroup = {};
    me.otherLanduseGroupContainer = null;
    me.otherLanduseGroupDiv = $("#divOLLayers");

    me.miscLanduseGroup = {};
    me.miscLanduseGroupContainer = null;
    me.miscLanduseGroupDiv = $("#divMisLayers");
// Function to toggle all layers in the existingLanduseGroup
me.toggleAllLayers = function() {
    // Extract the layers from existingLanduseGroup
    const layers = Object.values(me.existingLanduseGroup._layers).map(item => item.layer); // Get the actual layer instances

    // Check if the checkbox is checked
    const isChecked = document.getElementById('toggleAllLayers').checked;

    // Toggle each layer based on the checkbox state
    layers.forEach(layer => {
        if (isChecked) {
            if (!me.map.hasLayer(layer)) {
                me.map.addLayer(layer); // Add layer if checkbox is checked and layer is not already added
            }
        } else {
            if (me.map.hasLayer(layer)) {
                me.map.removeLayer(layer); // Remove layer if checkbox is unchecked and layer is currently added
            }
        }
    });
};

// Event listener for the master toggle checkbox
document.getElementById('toggleAllLayers').addEventListener('change', function() {
    me.toggleAllLayers(); // Call the function to toggle layers when checkbox state changes
});
me.toggleproposalLayers = function() {
    // Extract the layers from existingLanduseGroup
    const layers = Object.values(me.PICIIPProposalsGroup._layers).map(item => item.layer); // Get the actual layer instances

    // Check if the checkbox is checked
    const isChecked = document.getElementById('toggleproposalLayers').checked;

    // Toggle each layer based on the checkbox state
    layers.forEach(layer => {
        if (isChecked) {
            if (!me.map.hasLayer(layer)) {
                me.map.addLayer(layer); // Add layer if checkbox is checked and layer is not already added
            }
        } else {
            if (me.map.hasLayer(layer)) {
                me.map.removeLayer(layer); // Remove layer if checkbox is unchecked and layer is currently added
            }
        }
    });
};

// Event listener for the master toggle checkbox
document.getElementById('toggleproposalLayers').addEventListener('change', function() {
    me.toggleproposalLayers(); // Call the function to toggle layers when checkbox state changes
});
me.toggleproposalALLLayers = function() {
    // Combine all layers into a single array
    const allLayers = [
        ...Object.values(me.proposedZonesGroup._layers).map(item => item.layer),
        ...Object.values(me.residentialGroup._layers).map(item => item.layer),
        ...Object.values(me.commercialGroup._layers).map(item => item.layer),
        ...Object.values(me.otherLanduseGroup._layers).map(item => item.layer),
        ...Object.values(me.miscLanduseGroup._layers).map(item => item.layer)
    ];

    // Check if the checkbox is checked
    const isChecked = document.getElementById('toggleproposalALLLayers').checked;

    // Toggle each layer based on the checkbox state
    allLayers.forEach(layer => {
        if (isChecked) {
            if (!me.map.hasLayer(layer)) {
                me.map.addLayer(layer); // Add layer if checkbox is checked and layer is not already added
            }
        } else {
            if (me.map.hasLayer(layer)) {
                me.map.removeLayer(layer); // Remove layer if checkbox is unchecked and layer is currently added
            }
        }
    });
};

// Event listener for the master toggle checkbox
document.getElementById('toggleproposalALLLayers').addEventListener('change', function() {
    me.toggleproposalALLLayers(); // Call the function to toggle layers when checkbox state changes
});

    me.initMap = function () {

        // Initialize the map
        me.map = L.map(me.mapDiv).setView([30.67, 73.1], 12);
        me.drawnGeoJsonLayer = L.geoJSON().addTo(me.map);

        // Add a base layer
        me.googleMaps = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
            attribution: '&COPY: PICIIP SDSS SAHIWAL'
        });

        me.googleHybrid = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
            attribution: '&COPY: PICIIP SDSS SAHIWAL'
        });
        me.osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&COPY: PICIIP SDSS SAHIWAL'
        });
        me.osmWatercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
            attribution: '&copy; PICIIP SDSS SAHIWAL'
        });
        me.osmHumanitarian = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; PICIIP SDSS SAHIWAL'
        });

        me.osmTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; PICIIP SDSS SAHIWAL'
        });

        me.osmCycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=YOUR_API_KEY', {
            attribution: '&copy; PICIIP SDSS SAHIWAL'
        });

        me.osmTransportMap = L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=YOUR_API_KEY', {
            attribution: '&copy; PICIIP SDSS SAHIWAL'
        });

        me.basemapsGroup = {
            "osm": me.osmLayer,
            "googleMap": me.googleMaps,
            "googleHybrid": me.googleHybrid,
            "osmTopoMap": me.osmTopoMap,
            "osmCycleMap": me.osmCycleMap,
            "osmTransportMap": me.osmTransportMap,
            "osmWatercolor": me.osmWatercolor,
            "osmHumanitarian": me.osmHumanitarian,
        };
        me.currentBasemap = me.basemapsGroup["osm"].addTo(me.map);
       
         // Array to hold all layers for toggling
    me.allLayers = [];

    // Function to add layers to the allLayers array
    me.addLayer = function(layer) {
        if (layer) {
            me.allLayers.push(layer);
        }
    };
        //Admin boundaries layers and their group
        me.districtLayer = me.getGeoserverLayer('ss:district_boundary', true);
        me.tehsilLayer = me.getGeoserverLayer('ss:tehsil_boundary', true);
        me.mc2019Layer = me.getGeoserverLayer('mc_boundary_2019', true);
        me.mc2013Layer = me.getGeoserverLayer('ss:mc_boundary_2013', true);


        me.adminGroup[me.layerNameWithLegend("District Boundary", "ss:district_boundary")] = me.districtLayer;
        me.adminGroup[me.layerNameWithLegend("Tehsil Boundary", "ss:tehsil_boundary")] = me.tehsilLayer;
        me.adminGroup[me.layerNameWithLegend("MC Sahiwal (2013)", "ss:mc_boundary_2013")] = me.mc2013Layer;
        me.adminGroup[me.layerNameWithLegend("MC Sahiwal (2019)", "mc_boundary_2019")] = me.mc2019Layer;

        me.adminGroup = me.getLayerGroup(me.adminGroup);
        me.adminGroupContainer = me.adminGroup.getContainer();
        me.adminGroupDiv.append(me.adminGroupContainer);
        me.alignLayerGroupItemsToLeft(me.adminGroupContainer);


        // Admin boundaries layers and their group
        me.stateLandLayer = me.getGeoserverLayer('ss:state_land', false);
        me.cantonementLayer = me.getGeoserverLayer('ss:contonement', false);

        me.notifiedAreaGroup[me.layerNameWithLegend("State Land", "ss:state_land")] = me.stateLandLayer;
        me.notifiedAreaGroup[me.layerNameWithLegend("Cantonment", "ss:contonement")] = me.cantonementLayer;

        me.notifiedAreaGroup = me.getLayerGroup(me.notifiedAreaGroup);
        me.notifiedAreaGroupContainer = me.notifiedAreaGroup.getContainer();
        me.notifiedAreaGroupDiv.append(me.notifiedAreaGroupContainer);
        me.alignLayerGroupItemsToLeft(me.notifiedAreaGroupContainer);

        me.railwayLineLayer = me.getGeoserverLayer('ss:railway_line', false);
        me.expressHighwayLayer = me.getGeoserverLayer('ss:expressway_highway', false);
        me.primaryRoadsLayer = me.getGeoserverLayer('ss:primary_roads', false);
        me.secondaryRoadsLayer = me.getGeoserverLayer('ss:secondary_roads', false);
        me.tertiaryRoadsLayer = me.getGeoserverLayer('ss:tertiary_roads', false);
        me.existingRingRoadLayer = me.getGeoserverLayer('ss:ring_road', false);
        me.residentialLayer = me.getGeoserverLayer('ss:residential', false);
        me.existingSettlementsLayer = me.getGeoserverLayer('ss:settlements', false);
        // me.establishedBuiltupLayer = me.getGeoserverLayer('ss:state_land', false);
        me.commercialLayer = me.getGeoserverLayer('ss:commercial', false);
        me.educationalLayer = me.getGeoserverLayer('ss:education', false);
        me.graveyardLayer = me.getGeoserverLayer('ss:graveyard', false);
        me.healthLayer = me.getGeoserverLayer('ss:health', false);
        me.industryLayer = me.getGeoserverLayer('ss:industry', false);
        me.brickilnLayer = me.getGeoserverLayer('ss:brick_kiln', false);
        me.parksLayer = me.getGeoserverLayer('ss:parks', false);
        me.publicBuildingLayer = me.getGeoserverLayer('ss:public_building', false);
        me.religiousLayer = me.getGeoserverLayer('ss:religious_building', false);
        me.waterBodiesLayer = me.getGeoserverLayer('ss:water_bodies', false);
        me.waterTreatmentPlantLayer = me.getGeoserverLayer('ss:wastewater_treatment_plant', false);
        me.vacantLayer = me.getGeoserverLayer('ss:vacant', false);
        me.segregationPlantLayer = me.getGeoserverLayer('ss:segregation_plant', false);
        me.areaUnderDevelopmentLayer = me.getGeoserverLayer('ss:area_under_development', false);
        me.approvedHSLayer = me.getGeoserverLayer('ss:approved_housing_schemes', false);

        me.existingLanduseGroup[me.layerNameWithLegend("Railway Line", "ss:railway_line")] = me.railwayLineLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Express/Highway", "ss:expressway_highway")] = me.expressHighwayLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Primary Roads", "ss:primary_roads")] = me.primaryRoadsLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Secondary Roads", "ss:secondary_roads")] = me.secondaryRoadsLayer;

        me.stateLandLayer = me.getGeoserverLayer('ss:state_land', false);
        me.cantonementLayer = me.getGeoserverLayer('ss:cantonement', false);
        me.railwayLineLayer = me.getGeoserverLayer('ss:railway_line', false);
        me.expressHighwayLayer = me.getGeoserverLayer('ss:expressway_highway', false);
        me.addLayer(me.stateLandLayer);
        me.addLayer(me.cantonementLayer);
        me.addLayer(me.railwayLineLayer);
        me.addLayer(me.expressHighwayLayer);



        me.existingLanduseGroup[me.layerNameWithLegend("Tertiary Roads", "ss:tertiary_roads")] = me.tertiaryRoadsLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Existing Ring Road", "ss:ring_road")] = me.existingRingRoadLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Approved Housing Schemes", "ss:approved_housing_schemes")] = me.approvedHSLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Settlements", "ss:settlements")] = me.existingSettlementsLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Residential", "ss:residential")] = me.residentialLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Commercial", "ss:commercial")] = me.commercialLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Educational", "ss:education")] = me.educationalLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Graveyard", "ss:graveyard")] = me.graveyardLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Health", "ss:health")] = me.healthLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Industry", "ss:industry")] = me.industryLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Brick Kiln", "ss:brick_kiln")] = me.brickilnLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Parks", "ss:parks")] = me.parksLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Public Building", "ss:public_building")] = me.publicBuildingLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Religious Building", "ss:religious_building")] = me.religiousLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Water Bodies", "ss:water_bodies")] = me.waterBodiesLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Area Under Development", "ss:area_under_development")] = me.areaUnderDevelopmentLayer;
        me.existingLanduseGroup[me.layerNameWithLegend("Segregation Plant (STD)", "ss:segregation_plant")] = me.segregationPlantLayer;
        //me.existingLanduseGroup["Vacant"] = me.vacantLayer;

        me.existingLanduseGroup = me.getLayerGroup(me.existingLanduseGroup);
        me.existingLanduseGroupContainer = me.existingLanduseGroup.getContainer();
        me.existingLanduseGroupDiv.append(me.existingLanduseGroupContainer);
        me.alignLayerGroupItemsToLeft(me.existingLanduseGroupContainer);


        me.busTerminalLayer = me.getGeoserverLayer('ss:bus_terminal', false);
        me.waterTreatmentPlantLayer = me.getGeoserverLayer('ss:wastewater_treatment_plant', false);
        me.parkingShedLayer = me.getGeoserverLayer('ss:parking_shed', false);
        me.rehebParksLayer = me.getGeoserverLayer('ss:rehabilitated_parks', false);
        me.disposalStaionLayerr = me.getGeoserverLayer('ss:disposal_station', false);

        me.PICIIPProposalsGroup[me.layerNameWithLegend("Proposed Bus Terminal", "ss:bus_terminal")] = me.busTerminalLayer;
        me.PICIIPProposalsGroup[me.layerNameWithLegend("Wastewater Treatment Plant", "ss:wastewater_treatment_plant")] = me.waterTreatmentPlantLayer;
        me.PICIIPProposalsGroup[me.layerNameWithLegend("Parking Shed", "ss:parking_shed")] = me.parkingShedLayer;
        me.PICIIPProposalsGroup[me.layerNameWithLegend("Rehabilitated Parks", "ss:rehabilitated_parks")] = me.rehebParksLayer;
        me.PICIIPProposalsGroup[me.layerNameWithLegend("Disposal Station", "ss:disposal_station")] = me.disposalStaionLayerr;

        me.PICIIPProposalsGroup = me.getLayerGroup(me.PICIIPProposalsGroup);
        me.PICIIPProposalsGroupContainer = me.PICIIPProposalsGroup.getContainer();
        me.PICIIPProposalsGroupDiv.append(me.PICIIPProposalsGroupContainer);
        me.alignLayerGroupItemsToLeft(me.PICIIPProposalsGroupContainer);


        me.proposedRingRLayer = me.getGeoserverLayer('ss:proposed_ring_road', false);
        me.structurePlanLayer = me.getGeoserverLayer('ss:structure_plan_road', false);

        me.proposedZonesGroup[me.layerNameWithLegend("Proposed Ring Road", "ss:proposed_ring_road")] = me.proposedRingRLayer;
        me.proposedZonesGroup[me.layerNameWithLegend("Structure Plan Road", "ss:structure_plan_road")] = me.structurePlanLayer;

        me.proposedZonesGroup = me.getLayerGroup(me.proposedZonesGroup);
        me.proposedZonesGroupContainer = me.proposedZonesGroup.getContainer();
        me.proposedZonesGroupDiv.append(me.proposedZonesGroupContainer);
        me.alignLayerGroupItemsToLeft(me.proposedZonesGroupContainer);

        me.residentialZonesLayer = me.getGeoserverLayer('ss:residential_zones', false);
        me.educationalNeighbourLayer = me.getGeoserverLayer('ss:educational_neighbourhood', false);
        me.healthNeighbourhoodLayer = me.getGeoserverLayer('ss:health_neighbourhood', false);

        me.residentialGroup[me.layerNameWithLegend("Residential Zones", "ss:residential_zones")] = me.residentialZonesLayer;
        me.residentialGroup[me.layerNameWithLegend("Educational Neighbourhood", "ss:educational_neighbourhood")] = me.educationalNeighbourLayer;
        me.residentialGroup[me.layerNameWithLegend("Health Neighbourhood", "ss:health_neighbourhood")] = me.healthNeighbourhoodLayer;

        me.residentialGroup = me.getLayerGroup(me.residentialGroup);
        me.residentialGroupContainer = me.residentialGroup.getContainer();
        me.residentialGroupDiv.append(me.residentialGroupContainer);
        me.alignLayerGroupItemsToLeft(me.residentialGroupContainer);

        me.declaredCommercialRoadLayer = me.getGeoserverLayer('ss:declared_commercial_roads', false);
        me.intercityCorridorLayer = me.getGeoserverLayer('ss:intercity_corridor', false);
        me.centralBusinessDLayer = me.getGeoserverLayer('ss:central_business_district', false);
        me.institutionalZonesLayer = me.getGeoserverLayer('ss:institutional_zone', false);
        me.veterinaryHospitalLayer = me.getGeoserverLayer('ss:veterinary_hospital', false);
        me.specialEconomicZoneLayer = me.getGeoserverLayer('ss:special_economic_zone', false);

        me.commercialGroup[me.layerNameWithLegend("Declared Commercial/List A Roads", "ss:declared_commercial_roads")] = me.declaredCommercialRoadLayer;
        me.commercialGroup[me.layerNameWithLegend("Intercity Corridor", "ss:intercity_corridor")] = me.intercityCorridorLayer;
        me.commercialGroup[me.layerNameWithLegend("Central Business District", "ss:central_business_district")] = me.centralBusinessDLayer;
        me.commercialGroup[me.layerNameWithLegend("Institutional Zones", "ss:institutional_zone")] = me.institutionalZonesLayer;
        me.commercialGroup[me.layerNameWithLegend("Veterinary Hospital", "ss:veterinary_hospital")] = me.veterinaryHospitalLayer;
        me.commercialGroup[me.layerNameWithLegend("Special Economic Zone", "ss:special_economic_zone")] = me.specialEconomicZoneLayer;

        me.commercialGroup = me.getLayerGroup(me.commercialGroup);
        me.commercialGroupContainer = me.commercialGroup.getContainer();
        me.commercialGroupDiv.append(me.commercialGroupContainer);
        me.alignLayerGroupItemsToLeft(me.commercialGroupContainer);


        me.farmHouseZoneLayer = me.getGeoserverLayer('ss:farm_housing_zone', false);
        me.agroIndustryZoneLayer = me.getGeoserverLayer('ss:agro_industry_zone', false);
        me.cattleMarketLayer = me.getGeoserverLayer('ss:cattle_market', false);
        me.fruitVegMarketLayer = me.getGeoserverLayer('ss:fruit_vegetable_market', false);
        me.recreationalZoneLayer = me.getGeoserverLayer('ss:recreational_zone', false);
        me.agriZoneLayer = me.getGeoserverLayer('ss:agriculture_zone_new', false);
        me.greenBufferLayer = me.getGeoserverLayer('ss:green_buffer', false);

        me.otherLanduseGroup[me.layerNameWithLegend('Farmhouse Zone', "ss:farm_housing_zone")] = me.farmHouseZoneLayer;
        me.otherLanduseGroup[me.layerNameWithLegend('Agro Industry Zone', "ss:agro_industry_zone")] = me.agroIndustryZoneLayer;
        me.otherLanduseGroup[me.layerNameWithLegend('Cattle Market', "ss:cattle_market")] = me.cattleMarketLayer;
        me.otherLanduseGroup[me.layerNameWithLegend('Fruit & Vegetable Market', "ss:fruit_vegetable_market")] = me.fruitVegMarketLayer;
        me.otherLanduseGroup[me.layerNameWithLegend('Recreational Zone', "ss:recreational_zone")] = me.recreationalZoneLayer;
        me.otherLanduseGroup[me.layerNameWithLegend('Agriculture Zone', "ss:agriculture_zone_new")] = me.agriZoneLayer;
        me.otherLanduseGroup[me.layerNameWithLegend('Green Buffer', "ss:green_buffer")] = me.greenBufferLayer;

        me.otherLanduseGroup = me.getLayerGroup(me.otherLanduseGroup);
        me.otherLanduseGroupContainer = me.otherLanduseGroup.getContainer();
        me.otherLanduseGroupDiv.append(me.otherLanduseGroupContainer);
        me.alignLayerGroupItemsToLeft(me.otherLanduseGroupContainer);

        me.illegatHSLayer = me.getGeoserverLayer('ss:illegal_underprocess_housing_scheme', false);
        me.katchiAbadiLayer = me.getGeoserverLayer('ss:katchi_abadis', false);
        me.mixedUseLayer = me.getGeoserverLayer('ss:notified_land', false);
        me.poiLayer = me.getGeoserverLayer('ss:poi', false);

        me.miscLanduseGroup[me.layerNameWithLegend('Illegal Under Process HS', "ss:illegal_underprocess_housing_scheme")] = me.illegatHSLayer;
        me.miscLanduseGroup[me.layerNameWithLegend('Katchi Abadis', "ss:katchi_abadis")] = me.katchiAbadiLayer;
        me.miscLanduseGroup[me.layerNameWithLegend('Mixed Use', "ss:notified_land")] = me.mixedUseLayer;
        me.miscLanduseGroup[me.layerNameWithLegend('POI', "ss:poi")] = me.poiLayer;

        me.miscLanduseGroup = me.getLayerGroup(me.miscLanduseGroup);
        me.miscLanduseGroupContainer = me.miscLanduseGroup.getContainer();
        me.miscLanduseGroupDiv.append(me.miscLanduseGroupContainer);
        me.alignLayerGroupItemsToLeft(me.miscLanduseGroupContainer);

        me.map.on('click', me.onMapClick);

        var drawnItems = new L.FeatureGroup();
        me.map.addLayer(drawnItems);
        var drawControl = new L.Control.Draw({
            draw: {
                polyline: false,
                rectangle: false,
                circle: false,
                marker: false,
                circlemarker: false,
                polygon: {
                    allowIntersection: false,
                    showArea: true
                }
            },
            edit: {
                featureGroup: drawnItems
            },
            position: 'topright'
        });
        me.map.addControl(drawControl);

        me.map.on(L.Draw.Event.DRAWSTART, function (e) {
            me.map.off('click', me.onMapClick);
        });
        me.map.on(L.Draw.Event.DRAWSTOP, function (e) {
            me.map.on('click', me.onMapClick);
        });
        me.map.on(L.Draw.Event.EDITSTART, function (e) {
            me.map.off('click', me.onMapClick);
        });
        me.map.on(L.Draw.Event.EDITSTOP, function (e) {
            me.map.on('click', me.onMapClick);
        });
        me.map.on(L.Draw.Event.CREATED, function (e) {
            var type = e.layerType;
            var layer = e.layer;
            drawnPolygon = layer.toGeoJSON();
            var latlngs = layer.getLatLngs()[0];
            var areaSqMeters = L.GeometryUtil.geodesicArea(latlngs);
         //"SqFt:" + areaSqFeet.toFixed(2) + ", 
            if (type === 'polygon') {
                if (is_superuser === 'False') {

                    areaSqFeet = areaSqMeters * 10.7639;
                    areaMarla = areaSqFeet / 272;
                    areaCanals = areaMarla / 20;
                    areaAcres = areaCanals / 8;

                    //if (areaCanals < 10) {
                        drawnItems.addLayer(layer);
                        me.convertToKML(layer);
                        let areaAll = "SqMtr:" + areaSqMeters.toFixed(2) + ", Marla:" + areaMarla.toFixed(2) + ", Kanals:" + areaCanals.toFixed(2) + ", Acres:" + areaAcres.toFixed(2);
                        $("#kmlArea").val(areaAll);
                        $("#plotRequestModal").modal("show");
                  //  } else {
                      //  alert("Maximum 10 Kanals area allowed.\nArea:" + areaCanals + " Kanals, Not eligible.");
                   // }
                } 
                else if (is_superuser === 'True') { // Check if the user is an administrator
                    var selectedLayers = me.getWMSLayers();
                    if (selectedLayers.length > 0) {
                        var lastLayer = selectedLayers[selectedLayers.length - 1]; // Get the last layer
                        var latlng = latlngs[0];
                        var url = me.getFeatureInfoUrl(lastLayer, latlng);
                        
                        // Perform AJAX request to fetch GetFeatureInfo
                        $.ajax({
                            url: url,
                            success: function (data) {
                                if (data && data.features && data.features.length > 0) {
                                    // Process features
                                    var layerName = lastLayer.wmsParams.layers;
                                    if (layerName) {
                                        layerName = layerName.toUpperCase().split(":");
                                        if (layerName.length > 1) {
                                            layerName = layerName[1];
            
                                            // Get additional layer information (e.g., object ID)
                                            var objectId = data.features[0].properties.objectid; // Assuming object_id is in properties
            
                                            // Call function to show modal with existing land use
                                            checkExistingLandUse(layer,layerName,objectId);
                                        }
                                    }
                                }
                            },
                            error: function (xhr, status, error) {
                                console.error("Error fetching layer info:", error);
                            }
                        });
                    }
                 
                }else {
                    drawnItems.addLayer(layer);
                }
            }
        });
    }
    function checkExistingLandUse(layer,layerName,ObjectId) {
        var geojson = JSON.stringify({ geojson: layer.toGeoJSON() });
        
        $.ajax({
            url: 'http://116.0.52.20/api/landuse/CheckLanduseType',
            method: 'POST',
            data: geojson, // Send as a stringified JSON
            contentType: 'application/json',
            success: function(response) {
                if(response!=null)
                {
                    
                showLandUseModal(response.Category, layer,layerName,ObjectId);
            } else {
                alert('The drawn boundary is outside of the recognized land use areas: Residential, Commercial, Agriculture, and Industrial.');
            }
            },
            error: function(err) {
                console.error('Error fetching existing land use:', err);
            }
        });
    }
    function showLandUseModal(existingLandUse, layer,layerName,ObjectId) {
        // Populate the dropdown with existing land use
        var trimmedLandUse = existingLandUse.trim();
        $('#landuseTypeedit').val(trimmedLandUse); // Set the existing land use as the selected value
        $('#layerName').val(layerName);
        $('#objectId').val(ObjectId);
        // Show the modal
        $('#landUseModal').modal('show');
    
        // Handle the form submission to update the land use
        $('#updateLandUseButton').off('click').on('click', function() {
            var selectedLandUse = $('#landuseTypeedit').val();
            var newSubZone = $('#subzone').val();
            var newSubZoneText = $('#subzone option:selected').text();
            var parcelAction = $('#parcelAction').val();

            updateLandUse(layer, selectedLandUse,trimmedLandUse,layerName,ObjectId,newSubZone,parcelAction,newSubZoneText);
        });
    }
    function updateLandUse(layer, newLandUse,ExistingLandUseType,layerName,ObjectId,newSubZoneTable,parcelAction,newSubZoneColoum) {
        $.ajax({
            url: 'http://116.0.52.20/api/landuse/update_land_use',
            method: 'POST',
            data: JSON.stringify({ 
                Geometry: JSON.stringify(layer.toGeoJSON()), // Match C# model property name
                LandUseType: newLandUse,
                ExistingLandUseType:ExistingLandUseType,
                layerName:layerName,
                ObjectId:ObjectId,
                newSubZoneTable:newSubZoneTable,
                parcelAction:parcelAction,
                newSubZoneColoum:newSubZoneColoum
            }),
            contentType: 'application/json',
            success: function(response) {
                if (response.success) {
                    alert('Land use updated successfully!');
                    $('#landUseModal').modal('hide');
                } else {
                    alert('Failed to update land use: ' + response.message);
                }
            },
            error: function(err) {
                console.error('Error updating land use:', err);
            }
        });
    }
    me.onMapClick = function (e) {
        $('#accordionContainer').empty();

        var selectedLayer = me.getWMSLayers();
        if (selectedLayer.length > 0) {

            $('#featureInfoTabs').empty();
            $('#featureInfoContent').empty();
            selectedLayer.forEach(function (layer, index) {
                var url = me.getFeatureInfoUrl(layer, e.latlng);
                // Perform AJAX request to fetch GetFeatureInfo
                $.ajax({
                    url: url,
                    success: function (data) {
                        if (data && data.features && data.features.length > 0) {
                            // Create a tab and corresponding content
                            var layerName = layer.wmsParams.layers;
                            if (layerName) {
                                layerName = layerName.toUpperCase().split(":");
                                if (layerName.length > 1) {
                                    layerName = layerName[1].replace("_", " ");
                                } else {
                                    layerName = layerName[0].replace("_", " ");
                                }
                            }
                            var tabId = 'layer-' + index;
                            // Add tab
                            $('#featureInfoTabs').append(
                                `<li class="nav-item">
                                      <a class="nav-link ${index === 0 ? 'active' : ''}" id="${tabId}-tab" data-bs-toggle="tab" href="#${tabId}" role="tab">${layerName}</a>
                                    </li>`
                            );

                            // Add tab content
                            var attributesTable = me.createAttributesTable(data.features[0].properties);
                            me.drawGeometryOnMap(data.features[0].geometry);
                            $('#featureInfoContent').append(
                                `<div class="tab-pane fade ${index === 0 ? 'show active' : ''}" id="${tabId}" role="tabpanel">${attributesTable}</div>`
                            );
                        }
                    }
                });
            });

            // Open the modal after fetching the feature info
            var featureInfoModal = new bootstrap.Modal(document.getElementById('featureInfoModal'));
            featureInfoModal.show();

        } else {
            alert("No feature found");
        }
    }

    me.getWMSLayers = function () {
        const wmsLayers = [];
        me.map.eachLayer(function (layer) {
            if (layer instanceof L.TileLayer.WMS) {
                wmsLayers.push(layer);
            }
        });
        return wmsLayers;
    }

    me.createAttributesTable = function (properties) {
        var table = '<table class="table table-striped">';
        for (var key in properties) {
            if (properties.hasOwnProperty(key)) {
                table += `<tr><th>${key.toUpperCase().replaceAll("_", " ")}</th><td>${properties[key]}</td></tr>`;
            }
        }
        table += '</table>';
        return table;
    }

    me.getFeatureInfo = function (latlng, layerUrl, layerName, e) {
        me.drawnGeoJsonLayer.clearLayers();
        var point = me.map.latLngToContainerPoint(latlng, me.map.getZoom());
        var size = me.map.getSize();
        var bounds = me.map.getBounds();

        var BBOX = me.map.getBounds().toBBoxString();
        var WIDTH = me.map.getSize().x;
        var HEIGHT = me.map.getSize().y;
        var X = me.map.layerPointToContainerPoint(e.layerPoint).x;
        var Y = me.map.layerPointToContainerPoint(e.layerPoint).y;

        var url = layerUrl +
            L.Util.getParamString({
                request: 'GetFeatureInfo',
                service: 'WMS',
                srs: 'EPSG:4326',
                styles: '',
                transparent: true,
                version: '1.1.1',
                format: 'image/png',
                bbox: BBOX,
                height: HEIGHT,
                width: WIDTH,
                layers: layerName,
                query_layers: layerName,
                info_format: 'application/json',
                x: Math.floor(X),
                y: Math.floor(Y)
            }, layerUrl);

        $.ajax({
            url: url,
            success: function (data) {
                if (data.features && data.features.length > 0) {
                    me.drawGeometryOnMap(data.features[0].geometry);
                    me.getFeatureInfoTable(data.features);
                } else {
                    console.log(data);
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    me.getFeatureInfoUrl = function (layer, latlng) {
        var point = me.map.latLngToContainerPoint(latlng, me.map.getZoom()),
            size = me.map.getSize(),
            bounds = me.map.getBounds(),
            crs = me.map.options.crs;

        var sw = crs.project(bounds.getSouthWest());
        var ne = crs.project(bounds.getNorthEast());

        var url = layer._url + L.Util.getParamString({
            service: 'WMS',
            version: '1.1.1',
            request: 'GetFeatureInfo',
            layers: layer.wmsParams.layers,
            query_layers: layer.wmsParams.layers,
            styles: '',
            bbox: sw.x + ',' + sw.y + ',' + ne.x + ',' + ne.y,
            width: size.x,
            height: size.y,
            srs: 'EPSG:3857',
            info_format: 'application/json',
            x: Math.floor(point.x),
            y: Math.floor(point.y)
        }, layer._url);

        return url;
    }

    me.checkContainment = function (polygon, layer) {

        var bbox = L.geoJSON(polygon).getBounds().toBBoxString();
        let isInside = false;
        var wmsUrl = 'http://116.0.52.20:8080/geoserver/ss/wms' +
            '?service=WMS&version=1.3.0&request=GetFeatureInfo' +
            '&layers=' + layer.wmsParams.layers +
            '&bbox=' + bbox +
            '&width=1000&height=1000' +
            '&query_layers=' + layer.wmsParams.layers +
            '&info_format=application/json' +
            '&srs=EPSG:4326' +
            '&i=50&j=50';

        fetch(wmsUrl)
            .then(response => response.json())
            .then(data => {
                if (data.features && data.features.length > 0) {
                    if (me.isPolygonContained(polygon, data.features)) {
                        alert('Polygon is accepted.');
                        isInside = true;
                        //me.map.addLayer(layer);
                    } else {
                        alert('Polygon is outside the layer. Please draw again.');
                    }
                } else {
                    alert('No feature found under the drawn polygon. Please draw again.');
                }
            })
            .catch(error => {
                console.error('Error fetching WMS feature info:', error);
            });
        return isInside;
    }
    me.isPolygonContained = function (polygon, features) {
        var turfPolygon = turf.polygon(polygon.geometry.coordinates);

        for (var i = 0; i < features.length; i++) {
            var wmsFeature = features[i];
            var wmsPolygon = turf.polygon(wmsFeature.geometry.coordinates);

            if (turf.booleanContains(wmsPolygon, turfPolygon)) {
                return true;
            }
        }
        return false;
    }


    me.alignLayerGroupItemsToLeft = function (layerGroup) {
        layerGroup.classList.remove('leaflet-control');
        layerGroup.classList.add('bg-white');
        layerGroup.classList.add('text-black');
        layerGroup.classList.add('rounded');
        layerGroup.style.height = "100%";
        var leafletElements = layerGroup.querySelectorAll('.leaflet-control-layers label, .leaflet-control-layers-group label');
        leafletElements.forEach(function (el) {
            el.style.textAlign = 'left';   // Align text to the left
            el.style.display = 'block';    // Ensure the elements are treated as block-level elements
            el.style.justifyContent = 'flex-start';
            el.style.marginBottom = 0;  // Align flex items to the start (for any flex elements)
            el.style.marginTop = 0;  // Align flex items to the start (for any flex elements)
        });
    }

    me.getLayerGroup = function (lyrGroup) {
        let layersGroup = L.control.layers(null, lyrGroup, {
            collapsed: false,
            position: 'topleft',
            sortLayers: false
        }).addTo(me.map);
        return layersGroup;
    }

    me.layerNameWithLegend = function (layerAlias, geoserverLayerName) {
        let legendUrl = "http://116.0.52.20:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=" + geoserverLayerName;
        return (layerAlias + " <img src='" + legendUrl + "' alt='Layer Legend'/>");
    }

    me.getBaseMapGroup = function (lyrGroup) {
        let layersGroup = L.control.layers(lyrGroup, null, {
            collapsed: false,
            // position: 'topleft',
            // sortLayers: false
        }).addTo(me.map);
        return layersGroup;
    }

    me.getGeoserverLayer = function (layerName, add = false) {
        let layer = null;
        if (add) {
            layer = L.tileLayer.wms('http://116.0.52.20:8080/geoserver/ss/wms', {
                layers: layerName,
                format: 'image/png',
                transparent: true,
                attribution: 'Map data &copy; PICIIP'
            }).addTo(me.map);
        } else {
            layer = L.tileLayer.wms('http://116.0.52.20:8080/geoserver/ss/wms', {
                layers: layerName,
                format: 'image/png',
                transparent: true,
                attribution: 'Map data &copy; PICIIP'
            });
        }
        return layer
    }

    me.getRandomInt = function () {
        min = Math.ceil(1000); // Round up to ensure min is inclusive
        max = Math.floor(10000); // Round down to ensure max is inclusive
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    me.getCurrentDate = function () {
        const today = new Date();

        // Extract year, month, and day
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');

        // Format the date as 'YYYY-MM-DD'
        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }

    me.getLanduseTypeLayer = function (landuseType) {
        let landuseLayer = null;
        switch (landuseType) {
            case "Residential Zone":
                landuseLayer = me.residentialZonesLayer;
                break;
            case "Commercial Zone":
                landuseLayer = me.commercialLayer;
                break;
            case "Agriculture Zone":
                landuseLayer = me.agriZoneLayer;
                break;
            case "Industrial Zone":
                landuseLayer = me.industryLayer;
                break;
            default:
                landuseLayer = null;
        }
        return landuseLayer;
    }

    me.kmlLayer = null;
    $('#kmlFile').on('change', function (event) {
        var file = event.target.files[0]; // Get the selected file
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (me.kmlLayer) {
                    me.map.removeLayer(me.kmlLayer);
                }
                var kmlData = e.target.result;
                me.kmlLayer = omnivore.kml.parse(kmlData); // Parse the KML data using omnivore
                me.kmlLayer.addTo(me.map); // Add KML layer to the map "SqFt:" + areaSqFeet.toFixed(2) + ", 
                me.map.fitBounds(me.kmlLayer.getBounds());
                let layer = me.kmlLayer.toGeoJSON();
                let feature = layer['features'][0];
               // Check if the feature has geometry
               if (feature.geometry && feature.geometry.coordinates) {
                let stopFetching = false; // Flag to control address fetching
                if (feature.geometry && feature.geometry.coordinates) {
                    let stopFetching = false; // Flag to control address fetching
                
                    // Handle different geometry types
                    if (feature.geometry.type === 'Polygon') {
                        // For polygons, iterate over the outer ring
                        let coords = feature.geometry.coordinates[0];
                        
                        coords.forEach(coord => {
                            if (stopFetching) return; // Stop further calls if flag is set
                
                            let lat = coord[1]; // Latitude
                            let lng = coord[0]; // Longitude
                
                            fetchAddress(lat, lng, (result) => {
                                if (result === -1) {
                                    stopFetching = true; // Set flag to stop further fetching
                                } else if (result) {
                                    console.log(`Fetched address: ${result}`); // Handle the fetched address
                                }
                            });
                        });
                    } else if (feature.geometry.type === 'MultiPolygon') {
                        // For multipolygons, iterate over each polygon and its outer ring
                        feature.geometry.coordinates.forEach(polygon => {
                            if (stopFetching) return; // Stop if flag is set
                
                            polygon[0].forEach(coord => {
                                if (stopFetching) return;
                
                                let lat = coord[1]; // Latitude
                                let lng = coord[0]; // Longitude
                
                                fetchAddress(lat, lng, (result) => {
                                    if (result === -1) {
                                        stopFetching = true; // Set flag to stop further fetching
                                    } else if (result) {
                                        console.log(`Fetched address: ${result}`); // Handle the fetched address
                                    }
                                });
                            });
                        });
                    } else {
                        console.warn('Unsupported geometry type:', feature.geometry.type);
                    }
                }
                
            }
            
                var areaSqMeters = turf.area(feature);

                if (is_superuser === 'False') {

                    areaSqFeet = areaSqMeters * 10.7639;
                    areaMarla = areaSqFeet / 272;
                    areaCanals = areaMarla / 20;
                    areaAcres = areaCanals / 8;

                   // if (areaCanals < 10) {
                        let areaAll = "SqMtr:" + areaSqMeters.toFixed(2) + ", Marla:" + areaMarla.toFixed(2) + ", Kanals:" + areaCanals.toFixed(2) + ", Acres:" + areaAcres.toFixed(2);
                        $("#kmlArea").val(areaAll);
                   // } else {
                    //    alert("Maximum 10 Kanals area allowed.\nArea:" + areaCanals + " Kanals, Not eligible.");
                   // }
                }

            };
            reader.readAsText(file); // Read the KML file as text
        } else {
            console.log(file);
        }
    });
   
    function fetchAddress(lat, lng, callback) {
        var apiKey = 'a0faeda8ac87442e9bc062baa12921f2'; // Replace with your actual API key
        var url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data.features && data.features.length > 0) {
                    var address = data.features[0].properties.formatted;
                    var district = data.features[0].properties.city || data.features[0].properties.state; // Adjust based on the API response structure
    
                    // Check if the district contains 'Sahiwal' (case insensitive)
                    if (district && !district.toLowerCase().includes('sahiwal')) {
                        if (!window.alertShown) { // Check if alert has already been shown
                            alert("You cannot apply because your location is outside Sahiwal district.");
                            window.alertShown = true; // Set flag to prevent multiple alerts
                        }
                        $('#kmlFile').val('');
                        $('#kmlArea').val(''); 
                        callback(-1); // Call the callback with -1 to indicate an error
                        return;
                    }
    
                    // If the district contains 'Sahiwal', return the address through the callback
                    callback(address); // Call the callback with the address
                } else {
                    console.error('No address found for coordinates:', lat, lng);
                    callback(null); // Call the callback with null if address not found
                }
            })
            .catch(error => {
                $("#loader").hide();
                console.error('Error fetching address:', error);
                callback(null); // Call the callback with null on error
            });
    } 
    window.plotpdfClick = function (plotData) {
         // Make an AJAX call to mark the request as read
    fetch('/mark_as_read/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': me.getCookie('csrftoken')  // Set the CSRF token in the headers
        },
        body: JSON.stringify({ id: plotData.id })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Successfully marked as read
            console.log('Plot request marked as read');
        } else {
            console.error('Error marking plot request:', data.message);
        }
    })
    .catch(error => console.error('Error:', error));
        var buttonType = "printReport";
    
        if (plotData) {
            me.rowData = plotData; // Set the plot data as rowData
    
            // Get the KML path and prepare the URL
            var kmlUrl = me.rowData.kml_path;  // Assuming 'kml_path' is the URL or path to the KML file
            kmlUrl = '/media/' + kmlUrl;
    
            // Remove the previous KML layer if it exists
            if (me.kmlLayer) {
                me.map.removeLayer(me.kmlLayer);
            }
    
            // Load the KML file onto the map
            fetch(kmlUrl)
                .then(res => res.text())
                .then(kmlText => {
                    me.kmlLayer = omnivore.kml.parse(kmlText); // Parse the KML data using omnivore
                    me.kmlLayer.addTo(me.map); // Add KML layer to the map
                    me.map.fitBounds(me.kmlLayer.getBounds());
                    
                    // Continue with the rest of the plotpdfClick process
                    if (buttonType === "printReport") {
                        let layerGeojson = me.kmlLayer.toGeoJSON();
                        if (layerGeojson) {
                            let strLayerGeoJson = JSON.stringify(layerGeojson);
                            $('#requestListModal').modal('hide');
                            $('#loader').show();
    
                            // Prepare data for the API call
                            var jsonData = {
                                "ApplicantName": me.rowData["name"],
                                "ApplicantCNIC": me.rowData["cnic"],
                                "ApplicationId": me.rowData["id"],
                                "ContactDetails": me.rowData["contact_no"],
                                "SiteArea": me.rowData["kmlArea"],
                                "DecisionAuthority": "MC Sahiwal",
                                "ProposedSite": me.rowData["address"],
                                "AppliedLandUse": me.rowData["landuse_type"],
                                "DevelopmentZone": me.rowData["landuse_type"],
                                "ApplicationStatus": me.rowData["request_status"],
                                "ApplicationDate": me.rowData["submitted_at"],
                                "Email": me.rowData["Email"],
                                "SubZone": me.rowData["SubZone"],
                                "AbutingRoad": me.rowData["abuttingRoad"],
                                "DecisionDate": me.getCurrentDate(),
                                "LanduseSearch": [
                                    {
                                        "Category": me.rowData["landuse_type"],
                                        "SearchText": me.rowData["SubZone"]
                                    }
                                ],
                                "GeoJson": strLayerGeoJson
                            };
    
                            var jsonString = JSON.stringify(jsonData);
                            $.ajax({
                                url: 'http://116.0.52.20/api/pdfreport/generate',
                                type: 'POST',
                                data: jsonString,
                                contentType: 'application/json',
                                xhrFields: {
                                    responseType: 'blob' // Important for binary data
                                },
                                success: function (response) {
                                    $('#loader').hide();
                                    var link = document.createElement('a');
                                    var url = window.URL.createObjectURL(response);
                                    link.href = url;
                                    link.download = 'file.pdf';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                    window.URL.revokeObjectURL(url);
                                },
                                error: function (xhr, status, error) {
                                    $('#loader').hide();
                                    alert('Error occurred. Please contact system administrator.');
                                    console.error('Error:', error);
                                }
                            });
                        }
                    }
                })
                .catch(error => {
                    $('#message').html('<p style="color:red;">Failed to load KML file: ' + error.message + '</p>');
                });
        } else {
            alert("Please select a plot.");
        }
    }
    
    
    $('#dataForm').on('submit', function (event) {
        event.preventDefault();
        const csrftoken = me.getCookie('csrftoken');
        if ($('#landuseType').val() === '-1' || !$('#name').val() || !$('#cnic').val() || !$('#contact_no').val() 
            || !$('#kmlFile').val() || !$('#SubZone').val() || $('#abuttingRoad').val() === '-1') {
            alert('Please fill out all mandatory fields...');
            return;
        }
         // Check if the selected abutting road is 'Other' and update it with custom road value
         //|| !$('#Email').val()
    if ($('#abuttingRoad option:selected').text() === 'Other') {
        $('#abuttingRoad option:selected').text($('#customRoad').val());
    }
    var value1=$('#abuttingRoad option:selected').text();
    var kmlArea=$('#kmlArea').val();
    $('#kmlArea').val(kmlArea);
    // Check if kmlArea is valid
    if (!kmlArea || kmlArea.trim() === '') {
        alert('Please attach a valid KML file. You can download a sample from the download table.');
        return;
    }
        // let landuseLayer = me.getLanduseTypeLayer($('#landuseType').val());
        // let isInside = me.checkContainment(drawnPolygon, landuseLayer);
        // if(!isInside){
        //     alert("Either you didn't draw plot or your plot is outside");
        //     return;
        // }

        var formData = new FormData(this);
        $.ajax({
            url: '/submit-form/',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken); // Include the CSRF token
            },
            success: function (response) {
                if (response.success) {
                    // Show an alert message
                    alert('Your request has been submitted successfully.');
                    $('#response-message').html('<p style="color: green;">' + response.success + '</p>');
                     // Reset the form fields
                $('#dataForm')[0].reset();
                $('#abuttingRoad').val('-1'); 
                $('#landuseType').val('-1');
                    // Close the modal
                 $('#plotRequestModal').modal('hide');
                 location.reload();
                } else {
                    $('#response-message').html('<p style="color: red;">' + response.error + '</p>');
                }
            
            },
            error: function (xhr, status, error) {
                $('#response-message').html('<p style="color: red;">An error occurred: ' + error + '</p>');
            }
        });
    });

    me.getCookie = function (name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    me.switchBasemap = function (basemapId) {
        me.map.removeLayer(me.currentBasemap);
        me.currentBasemap = me.basemapsGroup[basemapId].addTo(me.map);
    }

    $('#osm').click(function () {
        me.switchBasemap('osm');
    });

    $('#googleMap').click(function () {
        me.switchBasemap('googleMap');
    });

    $('#googleHybrid').click(function () {
        me.switchBasemap('googleHybrid');
    });

    $('#osmTopoMap').click(function () {
        me.switchBasemap('osmTopoMap');
    });

    $('#osmCycleMap').click(function () {
        me.switchBasemap('osmCycleMap');
    });

    $('#osmTransportMap').click(function () {
        me.switchBasemap('osmTransportMap');
    });

    $('#osmWatercolor').click(function () {
        me.switchBasemap('osmWatercolor');
    });

    $('#osmHumanitarian').click(function () {
        me.switchBasemap('osmHumanitarian');
    });

    me.initDataGrid = function () {
        var kmlLayer;  // To store the KML layer
        // Fetch plot request data from the server (replace with your actual Django URL for fetching data)
        var source = {
            datatype: "json",
            datafields: [
                {name: 'id', type: 'int'},
                {name: 'name', type: 'string'},
                {name: 'Email', type: 'string'},
                {name: 'cnic', type: 'string'},
                {name: 'contact_no', type: 'string'},
                {name: 'landuse_type', type: 'string'},
                {name: 'submitted_at', type: 'date'},
                {name: 'kmlArea', type: 'string'},
                {name: 'kml_path', type: 'string'},
                {name: 'request_status', type: 'string'},
                {name: 'SubZone', type: 'string'},
                {name: 'abuttingRoad', type: 'string'},
                {name: 'existingsituation', type: 'string'},
                {name: 'revenue_document_path', type: 'string'},
                {name: 'cnic_path', type: 'string'}
            ],
            url: plotRequestURL,
            root: 'data',
            sortcolumn: 'id',           // Sort by ID column
            sortdirection: 'desc' 
        };

        var dataAdapter = new $.jqx.dataAdapter(source);

       // Initialize jqxGrid
$("#jqxGrid").jqxGrid({
    width: '100%',
    height: '350px',
    sortable: true,
    selectionmode: 'singlerow',
    filterable: true,
    filtermode: 'excel',
    editable: false,
    columnsresize: true,
    autoshowfiltericon: true,
    enabletooltips: true,
    showtoolbar: true,
    altRows: true,
    source: dataAdapter,
    columns: [
        { text: 'ID', datafield: 'id', width: 50, cellclassname: applyRowClass },
        { text: 'Name', datafield: 'name', width: 150, cellclassname: applyRowClass },
        { text: 'Email', datafield: 'Email', width: 150, cellclassname: applyRowClass },
        { text: 'CNIC', datafield: 'cnic', width: 150, cellclassname: applyRowClass },
        { text: 'Contact No', datafield: 'contact_no', width: 150, cellclassname: applyRowClass },
        { text: 'Land Use Type', datafield: 'landuse_type', width: 150, cellclassname: applyRowClass },
        { text: 'Sub Land Use', datafield: 'SubZone', width: 150, cellclassname: applyRowClass },
        { text: 'Abutting Road', datafield: 'abuttingRoad', width: 150, cellclassname: applyRowClass },
        { text: 'Upload Date', datafield: 'submitted_at', width: 150, cellsformat: 'dd-MM-yyyy', cellclassname: applyRowClass },
        { text: 'Area', datafield: 'kmlArea', width: 200, cellclassname: applyRowClass },
        { text: 'Status', datafield: 'request_status', width: 200, cellclassname: applyRowClass },
        { text: 'Site Situation', datafield: 'existingsituation', width: 150, cellclassname: applyRowClass },
        {
            text: 'Revenue File',
            datafield: 'revenue_document_path',
            width: 150,
            cellclassname: applyRowClass,
            cellsrenderer: function (row, columnfield, value) {
                return value ? `<a href="${value}" target="_blank" download>Download Revenue File</a>` : 'No File';
            }
        },
        {
            text: 'CNIC File',
            datafield: 'cnic_path',
            width: 150,
            cellclassname: applyRowClass,
            cellsrenderer: function (row, columnfield, value) {
                return value ? `<a href="${value}" target="_blank" download>Download CNIC File</a>` : 'No File';
            }
        }
    ],
    rendertoolbar: function (toolbar) {
        me.tableToolbar(toolbar);
    }
});

// Handle row selection
$("#jqxGrid").on('rowselect', function (event) {
    // Get the selected row index
    var rowIndex = event.args.rowindex;

    // Remove the selected-row class from all rows
    $("#jqxGrid").find('tr').removeClass('selected-row');

    // Add the selected-row class to the clicked row
    $("#jqxGrid").find(`tr[data-rowindex='${rowIndex}']`).addClass('selected-row');
});

// Handle row unselection (optional)
$("#jqxGrid").on('rowunselect', function (event) {
    // Get the unselected row index
    var rowIndex = event.args.rowindex;

    // Remove the selected-row class from the unselected row
    $("#jqxGrid").find(`tr[data-rowindex='${rowIndex}']`).removeClass('selected-row');
});
        
        function applyRowClass(row, column, value, data) {
            // Check the request_status and apply class based on it
            if (data.request_status === 'Approved') {
                return 'approved-row';
            } else if (data.request_status === 'Rejected') {
                return 'rejected-row';
            }
            return ''; // No class for other statuses
        }
        
        me.tableToolbar = function (toolbar) {
            try {
                var btnPrint = {
                    id: "btnPrint",
                    btnclass: "btn btn-floating btn-success",
                    info: "Print report",
                    spanclass: 'fas fa-print',
                    onClickFn: "plotButtonClick",
                    args: JSON.stringify({ type: "printReport" })
                };
        
                var buttons = [btnPrint];
        
                if (is_superuser === 'True') {
                    var btnApprove = {
                        id: "btnApprove",
                        btnclass: "btn btn-floating btn-primary",
                        info: "Approve",
                        spanclass: 'fas fa-check',
                        onClickFn: "plotButtonClick",
                        args: JSON.stringify({ type: "approve" })
                    };
        
                    var btnReject = {
                        id: "btnReject",
                        btnclass: "btn btn-floating btn-danger",
                        info: "Reject",
                        spanclass: 'fas fa-times',
                        onClickFn: "ActionBtnClick",
                        args: JSON.stringify({ type: "reject" })
                    };
        
                    buttons.push(btnApprove, btnReject);
                }
        
                var container = $("<div></div>");
                for (var i = 0; i < buttons.length; i++) {
                    var btn = $("<button class='" + buttons[i].btnclass + "' title='" + buttons[i].info + "' id='" + buttons[i].id + "' info='" + buttons[i].info + "' onClickFn='" + buttons[i].onClickFn + "' args='" + buttons[i].args + "'>" +
                        "<i id='span" + buttons[i].id + "' class='" + buttons[i].spanclass + "' info='" + buttons[i].info + "'></i></button>");
                    container.append(btn);
        
                    btn.click(function () {
                        try {
                            var target = $(this).attr("onClickFn");
                            var args = JSON.parse($(this).attr("args"));
                            me[target](args);
                        } catch (err) {
                            console.error("Error handling button click:", err.stack);
                        }
                    });
                }
                toolbar.append(container);
            } catch (err) {
                console.error("Error initializing toolbar:", err.stack);
            }
        };
        
        me.ActionBtnClick = function (args) {
            var buttonType = args.type;
            var confirmMessage =  "Are you sure you want to reject this request?";
            
        if (!confirm(confirmMessage)) {
            // If the user clicks "Cancel," exit the function
            return;
        }
            if (me.rowData) {  // Ensure row data is set
                var plotId = me.rowData.id;  // Access the selected row's ID
             if (buttonType === "reject") {
                    fetch('/reject_plot/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRFToken': me.getCookie('csrftoken')
                        },
                        body: JSON.stringify({ id: plotId })
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            alert('Plot request rejected successfully');
                            location.reload();
                        } else {
                            console.error('Error rejecting plot request:', data.message);
                        }
                    })
                    .catch(error => console.error('Error:', error));
                }
            } else {
                console.error("No row selected");
            }
        };
        
        me.plotButtonClick = function (args) {
            var buttonType = args.type;
            if (me.rowData) {
                if (buttonType === "printReport" || buttonType === "approve") {
                     // Show confirmation message
            var confirmMessage = buttonType === "approve" 
            ? "Are you sure you want to approve this request?" 
            : "Are you sure you want to print this report?";
            
        if (!confirm(confirmMessage)) {
            // If the user clicks "Cancel," exit the function
            return;
        }
                    var plotId = me.rowData.id; 
                    let layerGeojson = me.kmlLayer.toGeoJSON();
                    if (layerGeojson) {
                        let strLayerGeoJson = JSON.stringify(layerGeojson);
                        console.log(strLayerGeoJson.toString());
                        $('#requestListModal').modal('hide');
                        $('#loader').show();
        
                        // Shared JSON data for both requests
                        var jsonData = {
                            "plotId":plotId,
                            "ApplicantName": me.rowData["name"],
                            "ApplicantCNIC": me.rowData["cnic"],
                            "ApplicationId": me.rowData["id"],
                            "ContactDetails": me.rowData["contact_no"],
                            "SiteArea": me.rowData["kmlArea"],
                            "DecisionAuthority": "MC Sahiwal",
                            "ProposedSite": me.rowData["address"],
                            "AppliedLandUse": me.rowData["landuse_type"],
                            "DevelopmentZone": me.rowData["landuse_type"],
                            "ApplicationStatus": me.rowData["request_status"],
                            "ApplicationDate": me.rowData["submitted_at"],
                            "Email": me.rowData["Email"],
                            "existingsituation": me.rowData["existingsituation"],
                            "calltype": buttonType,
                            "SubZone": me.rowData["SubZone"],
                            "AbutingRoad": me.rowData["abuttingRoad"],
                            "DecisionDate": me.getCurrentDate(),
                            "LanduseSearch": [
                                {
                                    "Category": me.rowData["landuse_type"],
                                    "SearchText": me.rowData["SubZone"],
                                }
                            ],
                            "GeoJson": strLayerGeoJson
                        };
        
                        // Determine which function to call based on button type
                        if (buttonType === "approve") {
                            sendApprovalRequest(jsonData);
                        } else {
                            sendPrintReportRequest(jsonData);
                        }
                    }
                }
            } else {
                alert("Please select a row first.");
            }
        };
        
        // Function to send request for approval
        function sendApprovalRequest(jsonData) {
            $.ajax({
                url: 'http://116.0.52.20/api/pdfreport/approveReport',
                type: 'POST',
                data: JSON.stringify(jsonData),
                contentType: 'application/json',
                success: function (response) {
                    $('#loader').hide(); // Hide loader after response
                    alert(response.message); // Show message from response
                    location.reload(); // Reload the page
                },
                error: function (xhr, status, error) {
                    $('#loader').hide(); // Hide loader on error
                    alert('An error occurred please contact with system administrator'); // Show error message
                }
            });
        }
        
        // Function to send request for PDF print
        function sendPrintReportRequest(jsonData) {
            $.ajax({
                url: 'http://116.0.52.20/api/pdfreport/generate',
                type: 'POST',
                data: JSON.stringify(jsonData),
                contentType: 'application/json',
                xhrFields: {
                    responseType: 'blob' // Expect Blob response for PDF
                },
                success: function (response) {
                    $('#loader').hide(); // Hide loader after response
        
                    // Handle PDF download
                    var link = document.createElement('a');
                    var url = window.URL.createObjectURL(response); // Create URL for Blob
                    link.href = url;
                    link.download = 'file.pdf'; // Set default file name for PDF
                    document.body.appendChild(link); // Append link to body
                    link.click(); // Trigger download
                    document.body.removeChild(link); // Remove link from document
                    window.URL.revokeObjectURL(url); // Release Blob URL
                    location.reload(); // Reload page
                },
                error: function (xhr, status, error) {
                    $('#loader').hide(); // Hide loader on error
                    alert('An error occurred: ' + xhr.responseText); // Show error message
                }
            });
        }
        

        me.rowData = null;
        me.kmlLayer = null;
        // Handle row click event to load the respective KML file on the map
        $('#jqxGrid').on('rowselect', function (event) {
            me.rowData = event.args.row;
            var kmlUrl = me.rowData.kml_path;  // Assuming the 'kml_file' is the URL or path to the KML file
            kmlUrl = '/media/' + kmlUrl;

            if (me.kmlLayer) {
                me.map.removeLayer(me.kmlLayer);  // Remove the previous KML layer if it exists
            }

            // Load the KML file onto the map
            fetch(kmlUrl)
                .then(res => res.text())
                .then(kmlText => {
                    me.kmlLayer = omnivore.kml.parse(kmlText); // Parse the KML data using omnivore
                    me.kmlLayer.addTo(me.map); // Add KML layer to the map
                    me.map.fitBounds(me.kmlLayer.getBounds());
                })
                .catch(error => {
                    $('#message').html('<p style="color:red;">Failed to load KML file: ' + error.message + '</p>');
                });
        });

    }

    me.createFeatureInfoTable = function (row) {
        var table = $('<table class="table table-sm table-hover table-bordered border-success" style="width:100%;overflow:auto;"></table>');
        var tHead = $('<thead class="bg-gradient-success"></thead>');
        var hRow = $("<tr></tr>");
        var hName = $("<td class='text-white' style='width: 40%;'><b>Field Name</b></td>");
        var hValue = $("<td class='text-white' style='width: 60%;'><b>Field Value</b></td>");
        hRow.append(hName);
        hRow.append(hValue);
        tHead.append(hRow);
        table.append(tHead);
        var tBodyElem = $('<tbody  style="width: 100%;"></tbody>');
        for (var key in row) {
            var keyValue = row[key];
            if (keyValue) {
                keyValue = (keyValue) ? keyValue : "";
                var bRow = $("<tr></tr>");
                var rName = "";
                var rValue = "";
                if (key === "geometry" || key === "Extent" || key === "extent" || key === "geom" || key === "objectid" || key === "shape_leng" || key === "shape_area") {
                } else {
                    rName = $("<td class='text-black-50' style='width: 30%;'><b>" + key.toUpperCase().replaceAll("_", " ") + "</b></td>");
                    rValue = $("<td class='text-success' style='width: 70%;'>" + keyValue + "</td>");
                }
                bRow.append(rName);
                bRow.append(rValue);
                tBodyElem.append(bRow);
            }
        }
        table.append(tBodyElem);
        return table;
    };

    me.getFeatureInfoTable = function (selectedFeatures) {
        if (selectedFeatures.length > 0) {
            var featureInfoModal = $("#featureModalBody");
            var feature = selectedFeatures[0].properties;
            var featureTable = me.createFeatureInfoTable(feature);
            featureInfoModal.empty();
            featureInfoModal.append(featureTable);
            $("#featureDetailModal").modal("show");
        }
    };

    me.drawGeometryOnMap = function (geometry) {
        L.geoJSON(geometry).addTo(me.drawnGeoJsonLayer);
    }

    // Function to convert Leaflet layer to KML and attach to file field
    me.convertToKML = function (layer) {
        // Create a GeoJSON feature collection
        var geojson = layer.toGeoJSON();

        // Convert GeoJSON to KML using togeojson library
        var geojsonFeature = {
            type: "FeatureCollection",
            features: [geojson]
        };

        var kml = tokml(geojsonFeature);

        // Convert KML string to Blob for file input
        var blob = new Blob([kml], {type: 'application/vnd.google-earth.kml+xml'});
        var file = new File([blob], 'polygon.kml', {type: 'application/vnd.google-earth.kml+xml'});

        // Attach KML Blob to the file input field
        var kmlInput = document.getElementById('kmlFile');
        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        kmlInput.files = dataTransfer.files;
    }

}
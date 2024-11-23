let MapVM = function () {
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
    me.educationalLayer = null;
    me.graveyardLayer = null;
    me.healthLayer = null;
    me.industryLayer = null;
    me.brickilnLayer = null;
    me.parksLayer = null;
    me.publicBuildingLayer = null;
    me.religiousLayer = null;
    me.waterBodiesLayer = null;
    me.areaUDLayer = null;
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
    me.googleMaps = null;
    me.googleHybrid = null;
    me.osmLayer = null;


    // Layer Groups
    me.basemapsGroup = {};
    me.basemapsContainer = null;
    me.basemapsGroupDiv = document.getElementById("divBasemaps");


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

    me.initMap = function () {

        // Initialize the map
        me.map = L.map(me.mapDiv).setView([30.60, 72.8], 10);  // Lahore, Pakistan coordinates

        // Add a base layer
        me.googleMaps = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
            attribution: '&copy; Google Maps'
        }).addTo(me.map);

        // me.googleHybrid = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
        //     attribution: '&copy; Google Maps'
        // });
        // me.osmLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
        //     attribution: '&copy; Google Maps'
        // });
        //
        // me.basemapsGroup = {
        //     "Google Maps": me.googleMaps,
        //     "Google Hybrid": me.googleHybrid,
        //     "Open Street Map": me.osmLayer,
        // };
        //
        // me.baseMapsController = L.control.layers(me.basemapsGroup, null, {
        //     collapsed: false,
        //     position: 'topleft'
        // }).addTo(me.map);
        // me.baseMapsControllerContainer = me.baseMapsController.getContainer();
        // me.basemapsGroupDiv.append(me.baseMapsControllerContainer);
        //
        //
        // me.basemapsGroup = me.getBaseMapGroup(me.basemapsGroup);
        // me.basemapsGroupContainer = me.basemapsGroup.getContainer();
        // me.basemapsGroupDiv.append(me.basemapsGroupContainer);

        // me.alignLayerGroupItemsToLeft(me.basemapsGroupContainer);

        // me.googleMaps.on('add', function () {
        //     me.bringOverlaysToFrontAll();
        // });
        // me.googleHybrid.on('add', function () {
        //     me.bringOverlaysToFrontAll();
        // });
        // me.osmLayer.on('add', function () {
        //     me.bringOverlaysToFrontAll();
        // });


        //Admin boundaries layers and their group
        me.districtLayer = me.getGeoserverLayer('ss:district_boundary', true);
        me.tehsilLayer = me.getGeoserverLayer('ss:tehsil_boundary', false);
        me.mc2019Layer = me.getGeoserverLayer('mc_boundary_2019', true);
        me.mc2013Layer = me.getGeoserverLayer('ss:mc_boundary_2013', false);


        me.adminGroup["District Boundary"] = me.districtLayer;
        me.adminGroup["Tehsil Boundary"] = me.tehsilLayer;
        me.adminGroup["MC/TM 2019"] = me.mc2019Layer;
        me.adminGroup["MC 2013"] = me.mc2013Layer;

        me.adminGroup = me.getLayerGroup(me.adminGroup);
        me.adminGroupContainer = me.adminGroup.getContainer();
        me.adminGroupDiv.append(me.adminGroupContainer);
        me.alignLayerGroupItemsToLeft(me.adminGroupContainer);


        // Admin boundaries layers and their group
        me.stateLandLayer = me.getGeoserverLayer('ss:state_land', false);
        me.cantonementLayer = me.getGeoserverLayer('ss:contonement', false);

        me.notifiedAreaGroup["State Land"] = me.stateLandLayer;
        me.notifiedAreaGroup["Cantonment"] = me.cantonementLayer;

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
        // me.brickilnLayer = me.getGeoserverLayer('ss:state_land', false);
        me.parksLayer = me.getGeoserverLayer('ss:parks_and_playground', false);
        me.publicBuildingLayer = me.getGeoserverLayer('ss:public_building', false);
        me.religiousLayer = me.getGeoserverLayer('ss:religious_building', false);
        me.waterBodiesLayer = me.getGeoserverLayer('ss:waterbody', false);
        me.waterTreatmentPlantLayer = me.getGeoserverLayer('ss:wastewater_treatment_plant', false);
        me.areaUDLayer = me.getGeoserverLayer('ss:vacant', false);
        me.segregationPlantLayer = me.getGeoserverLayer('ss:segregation_plant', false);

        me.existingLanduseGroup["Railway Line"] = me.railwayLineLayer;
        me.existingLanduseGroup["Express/Highway"] = me.expressHighwayLayer;
        me.existingLanduseGroup["Primary Roads"] = me.primaryRoadsLayer;
        me.existingLanduseGroup["Secondary Roads"] = me.secondaryRoadsLayer;
        me.existingLanduseGroup["Tertiary Roads"] = me.tertiaryRoadsLayer;
        me.existingLanduseGroup["Existing Ring Road"] = me.existingRingRoadLayer;
        me.existingLanduseGroup["Residential"] = me.residentialLayer;
        me.existingLanduseGroup["Vacant"] = me.areaUDLayer;
        me.existingLanduseGroup["Settlements"] = me.existingSettlementsLayer;
        me.existingLanduseGroup["Commercial"] = me.commercialLayer;
        me.existingLanduseGroup["Educational"] = me.educationalLayer;
        me.existingLanduseGroup["Graveyard"] = me.graveyardLayer;
        me.existingLanduseGroup["Health"] = me.healthLayer;
        me.existingLanduseGroup["Industry"] = me.industryLayer;
        me.existingLanduseGroup["Parks"] = me.parksLayer;
        me.existingLanduseGroup["Public Building"] = me.publicBuildingLayer;
        me.existingLanduseGroup["Religious"] = me.religiousLayer;
        me.existingLanduseGroup["Water Bodies"] = me.waterBodiesLayer;
        me.existingLanduseGroup["Water Treatment"] = me.waterTreatmentPlantLayer;
        me.existingLanduseGroup["Segregation Plant"] = me.segregationPlantLayer;

        me.existingLanduseGroup = me.getLayerGroup(me.existingLanduseGroup);
        me.existingLanduseGroupContainer = me.existingLanduseGroup.getContainer();
        me.existingLanduseGroupDiv.append(me.existingLanduseGroupContainer);
        me.alignLayerGroupItemsToLeft(me.existingLanduseGroupContainer);


        me.busTerminalLayer = me.getGeoserverLayer('ss:bus_terminal', false);
        me.waterTreatmentPlantLayer = me.getGeoserverLayer('ss:wastewater_treatment_plant', false);
        me.parkingShedLayer = me.getGeoserverLayer('ss:parking_shed', false);
        me.rehebParksLayer = me.getGeoserverLayer('ss:rehabilitated_parks', false);
        me.disposalStaionLayerr = me.getGeoserverLayer('ss:disposal_station', false);

        me.PICIIPProposalsGroup["Bus Terminal"] = me.busTerminalLayer;
        me.PICIIPProposalsGroup["Water Water Treatment"] = me.waterTreatmentPlantLayer;
        me.PICIIPProposalsGroup["Parking Shed"] = me.parkingShedLayer;
        me.PICIIPProposalsGroup["Rehabilitated Parks"] = me.rehebParksLayer;
        me.PICIIPProposalsGroup["Disposal Station"] = me.disposalStaionLayerr;

        me.PICIIPProposalsGroup = me.getLayerGroup(me.PICIIPProposalsGroup);
        me.PICIIPProposalsGroupContainer = me.PICIIPProposalsGroup.getContainer();
        me.PICIIPProposalsGroupDiv.append(me.PICIIPProposalsGroupContainer);
        me.alignLayerGroupItemsToLeft(me.PICIIPProposalsGroupContainer);


        me.proposedRingRLayer = me.getGeoserverLayer('ss:proposed_ring_road', false);
        me.structurePlanLayer = me.getGeoserverLayer('ss:structure_plan_road', false);

        me.proposedZonesGroup["Proposed Ring Road"] = me.proposedRingRLayer;
        me.proposedZonesGroup["Structure Plan Road"] = me.structurePlanLayer;

        me.proposedZonesGroup = me.getLayerGroup(me.proposedZonesGroup);
        me.proposedZonesGroupContainer = me.proposedZonesGroup.getContainer();
        me.proposedZonesGroupDiv.append(me.proposedZonesGroupContainer);
        me.alignLayerGroupItemsToLeft(me.proposedZonesGroupContainer);


        me.residentialZonesLayer = me.getGeoserverLayer('ss:residential_zones', false);
        me.educationalNeighbourLayer = me.getGeoserverLayer('ss:educational_neighbourhood', false);
        me.healthNeighbourhoodLayer = me.getGeoserverLayer('ss:health_neighbourhood', false);

        me.residentialGroup["Residential Zones"] = me.residentialZonesLayer;
        me.residentialGroup["Educational Neighbour"] = me.educationalNeighbourLayer;
        me.residentialGroup["Health Neighbour"] = me.healthNeighbourhoodLayer;

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

        me.commercialGroup["Declared Commercial Roads"] = me.declaredCommercialRoadLayer;
        me.commercialGroup["Intercity Corridor"] = me.intercityCorridorLayer;
        me.commercialGroup["Central Business District"] = me.centralBusinessDLayer;
        me.commercialGroup["Institutional Zones"] = me.institutionalZonesLayer;
        me.commercialGroup["Veterinary Hospital"] = me.veterinaryHospitalLayer;
        me.commercialGroup["Special Economic Zone"] = me.specialEconomicZoneLayer;

        me.commercialGroup = me.getLayerGroup(me.commercialGroup);
        me.commercialGroupContainer = me.commercialGroup.getContainer();
        me.commercialGroupDiv.append(me.commercialGroupContainer);
        me.alignLayerGroupItemsToLeft(me.commercialGroupContainer);


        me.farmHouseZoneLayer = me.getGeoserverLayer('ss:farm_housing_zone', false);
        me.agroIndustryZoneLayer = me.getGeoserverLayer('ss:agriculture_zone', false);
        me.cattleMarketLayer = me.getGeoserverLayer('ss:cattle_market', false);
        me.fruitVegMarketLayer = me.getGeoserverLayer('ss:fruit_vegetable_market', false);
        me.recreationalZoneLayer = me.getGeoserverLayer('ss:recreational_zone', false);
        me.agriZoneLayer = me.getGeoserverLayer('ss:agriculture', false);
        me.greenBufferLayer = me.getGeoserverLayer('ss:green_buffer\t', false);

        me.otherLanduseGroup['Farmhouse Zone'] = me.farmHouseZoneLayer;
        me.otherLanduseGroup['Agro Industry Zone'] = me.agroIndustryZoneLayer;
        me.otherLanduseGroup['Cattle Market'] = me.cattleMarketLayer;
        me.otherLanduseGroup['Fruit & Veg Market'] = me.fruitVegMarketLayer;
        me.otherLanduseGroup['Recreational Zone'] = me.recreationalZoneLayer;
        me.otherLanduseGroup['Agriculture Zone'] = me.agriZoneLayer;
        me.otherLanduseGroup['Green Buffer'] = me.greenBufferLayer;

        me.otherLanduseGroup = me.getLayerGroup(me.otherLanduseGroup);
        me.otherLanduseGroupContainer = me.otherLanduseGroup.getContainer();
        me.otherLanduseGroupDiv.append(me.otherLanduseGroupContainer);
        me.alignLayerGroupItemsToLeft(me.otherLanduseGroupContainer);
    }

    me.alignLayerGroupItemsToLeft = function (layerGroup) {
        layerGroup.classList.remove('leaflet-control');
        layerGroup.classList.add('bg-secondary');
        layerGroup.classList.add('text-white');
        layerGroup.classList.add('rounded');
        var leafletElements = layerGroup.querySelectorAll('.leaflet-control-layers label, .leaflet-control-layers-group label');
        leafletElements.forEach(function (el) {
            el.style.textAlign = 'left';   // Align text to the left
            el.style.display = 'block';    // Ensure the elements are treated as block-level elements
            el.style.justifyContent = 'flex-start';  // Align flex items to the start (for any flex elements)
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
            layer = L.tileLayer.wms('http://172.105.113.116:8080/geoserver/ss/wms', {
                layers: layerName,
                format: 'image/png',
                transparent: true,
                attribution: 'Map data &copy; PICIIP'
            }).addTo(me.map);
        } else {
            layer = L.tileLayer.wms('http://172.105.113.116:8080/geoserver/ss/wms', {
                layers: layerName,
                format: 'image/png',
                transparent: true,
                attribution: 'Map data &copy; PICIIP'
            });
        }
        return layer
    }

    me.bringOverlaysToFront = function (layerGroup) {
        layerGroup.forEach(function (layer) {
            layer.bringToFront();
        });
    }
    me.bringOverlaysToFrontAll = function () {
        me.bringOverlaysToFront(me.adminGroup);
    }


}
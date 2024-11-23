let PlotMapVM = function () {
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
    me.vacantLayer = null;

    // Layer Groups
    me.mapLayersGroup = {};
    me.mapLayersGroupContainer = null;
    me.mapLayersGroupDiv = $("#divMapLayers");


    me.initMap = function () {

        // Initialize the map
        me.map = L.map(me.mapDiv).setView([30.60, 72.8], 10);  // Lahore, Pakistan coordinates

        // Add a base layer
        var baseLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
            attribution: '&copy; Google Maps'
        }).addTo(me.map);

        //Admin boundaries layers and their group
        me.districtLayer = me.getGeoserverLayer('ss:district_boundary', true);
        me.tehsilLayer = me.getGeoserverLayer('ss:tehsil_boundary', false);
        me.mc2019Layer = me.getGeoserverLayer('mc_boundary_2019', true);
        me.mc2013Layer = me.getGeoserverLayer('ss:mc_boundary_2013', false);
        me.stateLandLayer = me.getGeoserverLayer('ss:state_land', false);
        me.cantonementLayer = me.getGeoserverLayer('ss:contonement', false);
        me.railwayLineLayer = me.getGeoserverLayer('ss:railway_line', false);
        me.expressHighwayLayer = me.getGeoserverLayer('ss:expressway_highway', false);
        me.primaryRoadsLayer = me.getGeoserverLayer('ss:primary_roads', false);
        me.secondaryRoadsLayer = me.getGeoserverLayer('ss:secondary_roads', false);
        me.tertiaryRoadsLayer = me.getGeoserverLayer('ss:tertiary_roads', false);
        me.existingRingRoadLayer = me.getGeoserverLayer('ss:ring_road', false);
        me.residentialLayer = me.getGeoserverLayer('ss:residential', false);
        me.existingSettlementsLayer = me.getGeoserverLayer('ss:settlements', false);
        me.commercialLayer = me.getGeoserverLayer('ss:commercial', false);
        me.educationalLayer = me.getGeoserverLayer('ss:education', false);
        me.graveyardLayer = me.getGeoserverLayer('ss:graveyard', false);
        me.healthLayer = me.getGeoserverLayer('ss:health', false);
        me.industryLayer = me.getGeoserverLayer('ss:industry', false);
        me.parksLayer = me.getGeoserverLayer('ss:parks_and_playground', false);
        me.publicBuildingLayer = me.getGeoserverLayer('ss:public_building', false);
        me.religiousLayer = me.getGeoserverLayer('ss:religious_building', false);
        me.waterBodiesLayer = me.getGeoserverLayer('ss:waterbody', false);
        me.waterTreatmentPlantLayer = me.getGeoserverLayer('ss:wastewater_treatment_plant', false);
        me.segregationPlantLayer = me.getGeoserverLayer('ss:segregation_plant', false);
        me.busTerminalLayer = me.getGeoserverLayer('ss:bus_terminal', false);
        me.waterTreatmentPlantLayer = me.getGeoserverLayer('ss:wastewater_treatment_plant', false);
        me.parkingShedLayer = me.getGeoserverLayer('ss:parking_shed', false);
        me.rehebParksLayer = me.getGeoserverLayer('ss:rehabilitated_parks', false);
        me.disposalStaionLayerr = me.getGeoserverLayer('ss:disposal_station', false);
        me.proposedRingRLayer = me.getGeoserverLayer('ss:proposed_ring_road', false);
        me.structurePlanLayer = me.getGeoserverLayer('ss:structure_plan_road', false);
        me.residentialZonesLayer = me.getGeoserverLayer('ss:residential_zones', false);
        me.educationalNeighbourLayer = me.getGeoserverLayer('ss:educational_neighbourhood', false);
        me.healthNeighbourhoodLayer = me.getGeoserverLayer('ss:health_neighbourhood', false);
        me.declaredCommercialRoadLayer = me.getGeoserverLayer('ss:declared_commercial_roads', false);
        me.intercityCorridorLayer = me.getGeoserverLayer('ss:intercity_corridor', false);
        me.centralBusinessDLayer = me.getGeoserverLayer('ss:central_business_district', false);
        me.institutionalZonesLayer = me.getGeoserverLayer('ss:institutional_zone', false);
        me.veterinaryHospitalLayer = me.getGeoserverLayer('ss:veterinary_hospital', false);
        me.specialEconomicZoneLayer = me.getGeoserverLayer('ss:special_economic_zone', false);
        me.farmHouseZoneLayer = me.getGeoserverLayer('ss:farm_housing_zone', false);
        me.agroIndustryZoneLayer = me.getGeoserverLayer('ss:agriculture_zone', false);
        me.cattleMarketLayer = me.getGeoserverLayer('ss:cattle_market', false);
        me.fruitVegMarketLayer = me.getGeoserverLayer('ss:fruit_vegetable_market', false);
        me.recreationalZoneLayer = me.getGeoserverLayer('ss:recreational_zone', false);
        me.agriZoneLayer = me.getGeoserverLayer('ss:agriculture', false);
        me.greenBufferLayer = me.getGeoserverLayer('ss:green_buffer', false);
        me.vacantLayer = me.getGeoserverLayer('ss:vacant', false);

        me.mapLayersGroup["District Boundary"] = me.districtLayer;
        me.mapLayersGroup["Tehsil Boundary"] = me.tehsilLayer;
        me.mapLayersGroup["MC/TM 2019"] = me.mc2019Layer;
        me.mapLayersGroup["MC 2013"] = me.mc2013Layer;
        // me.mapLayersGroup["State Land"] = me.stateLandLayer;
        // me.mapLayersGroup["Cantonment"] = me.cantonementLayer;
        me.mapLayersGroup["Railway Line"] = me.railwayLineLayer;
        me.mapLayersGroup["Express/Highway"] = me.expressHighwayLayer;
        me.mapLayersGroup["Primary Roads"] = me.primaryRoadsLayer;
        me.mapLayersGroup["Secondary Roads"] = me.secondaryRoadsLayer;
        // me.mapLayersGroup["Tertiary Roads"] = me.tertiaryRoadsLayer;
        me.mapLayersGroup["Existing Ring Road"] = me.existingRingRoadLayer;
        me.mapLayersGroup["Residential"] = me.residentialLayer;
        me.mapLayersGroup["Vacant"] = me.vacantLayer;
        me.mapLayersGroup["Commercial"] = me.commercialLayer;
        me.mapLayersGroup["Educational"] = me.educationalLayer;
        // me.mapLayersGroup["Graveyard"] = me.graveyardLayer;
        me.mapLayersGroup["Health"] = me.healthLayer;
        me.mapLayersGroup["Industry"] = me.industryLayer;
        me.mapLayersGroup["Parks"] = me.parksLayer;
        me.mapLayersGroup["Public Building"] = me.publicBuildingLayer;
        // me.mapLayersGroup["Religious"] = me.religiousLayer;
        me.mapLayersGroup["Water Bodies"] = me.waterBodiesLayer;
        me.mapLayersGroup["Water Treatment"] = me.waterTreatmentPlantLayer;
        // me.mapLayersGroup["Segregation Plant"] = me.segregationPlantLayer;
        me.mapLayersGroup["Bus Terminal"] = me.busTerminalLayer;
        me.mapLayersGroup["Water Water Treatment"] = me.waterTreatmentPlantLayer;
        // me.mapLayersGroup["Parking Shed"] = me.parkingShedLayer;
        me.mapLayersGroup["Rehabilitated Parks"] = me.rehebParksLayer;
        me.mapLayersGroup["Disposal Station"] = me.disposalStaionLayerr;
        me.mapLayersGroup["Proposed Ring Road"] = me.proposedRingRLayer;
        me.mapLayersGroup["Structure Plan Road"] = me.structurePlanLayer;
        me.mapLayersGroup["Residential Zones"] = me.residentialZonesLayer;
        me.mapLayersGroup["Educational Neighbour"] = me.educationalNeighbourLayer;
        me.mapLayersGroup["Health Neighbour"] = me.healthNeighbourhoodLayer;
        me.mapLayersGroup["Declared Commercial Roads"] = me.declaredCommercialRoadLayer;
        me.mapLayersGroup["Intercity Corridor"] = me.intercityCorridorLayer;
        me.mapLayersGroup["Central Business District"] = me.centralBusinessDLayer;
        me.mapLayersGroup["Institutional Zone"] = me.institutionalZonesLayer;
        me.mapLayersGroup["Veterinary Hospital"] = me.veterinaryHospitalLayer;
        me.mapLayersGroup["Special Economic Zone"] = me.specialEconomicZoneLayer;
        me.mapLayersGroup['Farmhouse Zone'] = me.farmHouseZoneLayer;
        me.mapLayersGroup['Agro Industry Zone'] = me.agroIndustryZoneLayer;
        me.mapLayersGroup['Cattle Market'] = me.cattleMarketLayer;
        me.mapLayersGroup['Fruit & Veg Market'] = me.fruitVegMarketLayer;
        me.mapLayersGroup['Recreational Zone'] = me.recreationalZoneLayer;
        me.mapLayersGroup['Agriculture Zone'] = me.agriZoneLayer;
        // me.mapLayersGroup['Green Buffer'] = me.greenBufferLayer;


        me.mapLayersGroup = me.getLayerGroup(me.mapLayersGroup);
        me.mapLayersGroupContainer = me.mapLayersGroup.getContainer();
        me.mapLayersGroupDiv.append(me.mapLayersGroupContainer);
        me.alignLayerGroupItemsToLeft(me.mapLayersGroupContainer);

    }

    me.alignLayerGroupItemsToLeft = function (layerGroup) {
        layerGroup.classList.remove('leaflet-control');
        layerGroup.classList.add('bg-secondary');
        layerGroup.classList.add('text-white');
        layerGroup.classList.add('rounded');
        // layerGroup.classList.add('m-0');
        // layerGroup.classList.add('p-0');
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

    $('#floatingSelect').change(function () {
        let selectId = $(this).find("option:selected").val();
        let layerName = $(this).find("option:selected").text();
        if (selectId === "-1") {
            alert("Please select a zone.");
        } else {
            // alert(layerName);
            // let layer = me.mapLayersGroup._layers[parseInt(selectId)]["layer"];
            // me.zoomToLayer(layer);
        }

    });


    // Function to zoom to the GeoJSON layer
    me.zoomToLayer = function (layer) {
        var bounds = layer.getBounds(); // Get the bounds of the layer
        me.map.fitBounds(bounds); // Zoom and fit to the layer bounds
    }

    me.getLayerByName = function (group, layerName) {
        var foundLayer = null;
        group.eachLayer(function (layer) {
            if (layer.name === layerName) {
                foundLayer = layer;
            }
        });
        return foundLayer;
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
                me.kmlLayer.addTo(me.map); // Add KML layer to the map
                me.map.fitBounds(me.kmlLayer.getBounds());
            };
            reader.readAsText(file); // Read the KML file as text
        } else {
            console.log(file);
        }
    });


    $('#dataForm').on('submit', function (event) {

        event.preventDefault();
        const csrftoken = me.getCookie('csrftoken');
        // Validate if all fields are filled
        if ($('#landuseType').val() === '-1' || !$('#name').val() || !$('#address').val() || !$('#cnic').val() || !$('#contact_no').val() || !$('#kmlFile').val()) {
            alert('Please fill out all fields.');
            return;
        }
        var formData = new FormData(this); // Gather form data including the KML file

        // Set the page cursor to wait
        $('#spinner').addClass('show');

        $.ajax({
            url: '/submit-form/',  // Django URL to handle the form submission
            type: 'POST',
            data: formData,
            processData: false,   // Required for file uploads
            contentType: false,   // Required for file uploads
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken); // Include the CSRF token
            },
            success: function (response) {
                $('#spinner').removeClass('show');
                if (response.success) {
                    // Display success message
                    $('#response-message').html('<p style="color: green;">' + response.success + '</p>');
                } else {
                    // Display error message
                    $('#response-message').html('<p style="color: red;">' + response.error + '</p>');
                }
            },
            error: function (xhr, status, error) {
                $('#spinner').removeClass('show');
                // Display error message
                $('#response-message').html('<p style="color: red;">An error occurred: ' + error + '</p>');
            }
        });

        // Capture the map
        // me.captureMap().then(function (mapBlob) {
        //
        // }).catch(function (error) {
        //     $('#spinner').removeClass('show');
        //     console.error('Error capturing map:', error);
        //     $('body').css('cursor', 'default');
        //     $('#response-message').html('<p style="color: red;">Failed to capture map.</p>');
        // });
    });


    // Function to get the CSRF token from the cookie
    me.getCookie = function (name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


    me.initDataGrid = function () {
        var kmlLayer;  // To store the KML layer
        // Fetch plot request data from the server (replace with your actual Django URL for fetching data)
        var source = {
            datatype: "json",
            datafields: [
                {name: 'id', type: 'int'},
                {name: 'name', type: 'string'},
                {name: 'address', type: 'string'},
                {name: 'cnic', type: 'string'},
                {name: 'contact_no', type: 'string'},
                {name: 'landuse_type', type: 'string'},
                {name: 'submitted_at', type: 'date'},
                {name: 'kml_path', type: 'string'},
                {name: 'request_status', type: 'string'}
            ],
            url: plotRequestURL,  // Django URL to fetch user's plot requests
            root: 'data'
        };

        var dataAdapter = new $.jqx.dataAdapter(source);

        // Initialize jqxGrid
        $("#jqxGrid").jqxGrid({
            width: '100%',
            //autoheight: true,
            height: '100%',
            source: dataAdapter,
            columns: [
                {text: 'ID', datafield: 'id', width: 50},
                {text: 'Name', datafield: 'name', width: 150},
                {text: 'Address', datafield: 'address', width: 200},
                {text: 'CNIC', datafield: 'cnic', width: 150},
                {text: 'Contact No', datafield: 'contact_no', width: 150},
                {text: 'Land Use Type', datafield: 'landuse_type', width: 150},
                {text: 'Upload Date', datafield: 'submitted_at', width: 150, cellsformat: 'dd-MM-yyyy'},
                {text: 'KML File', datafield: 'kml_path', width: 200},
                {text: 'Status', datafield: 'request_status', width: 200}
            ]
        });

        // Handle row click event to load the respective KML file on the map
        $('#jqxGrid').on('rowselect', function (event) {
            var rowData = event.args.row;
            var kmlUrl = rowData.kml_path;  // Assuming the 'kml_file' is the URL or path to the KML file
            kmlUrl = '/media/' + kmlUrl;

            if (kmlLayer) {
                me.map.removeLayer(kmlLayer);  // Remove the previous KML layer if it exists
            }

            // Load the KML file onto the map
            fetch(kmlUrl)
                .then(res => res.text())
                .then(kmlText => {
                    kmlLayer = omnivore.kml.parse(kmlText); // Parse the KML data using omnivore
                    kmlLayer.addTo(me.map); // Add KML layer to the map
                    me.map.fitBounds(kmlLayer.getBounds());
                })
                .catch(error => {
                    $('#message').html('<p style="color:red;">Failed to load KML file: ' + error.message + '</p>');
                });
        });

    }


}
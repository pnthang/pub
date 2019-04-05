var baseUrl = "https://gis1test.usask.ca/spatial/rest/services/sw";
var centerX = -106.5656627;
var centerY = 52.1788693;
var initZoom = 14;
var maxZoom = 18;
var minZoom = 14;
var baseMapInit = "satellite";
var zoomPosition = "bottom-right";
var scalebarPosition ="bottom-left";
var legendPosition = "bottom-right";
var screenBreakPoint = "xsmall";


var urlCityLimit = baseUrl + "/Citylimit/MapServer";      
var urlNortheastSwaleBoundary = baseUrl + "/Meewasin_Northeast_Swale_FINALBOUNDARY/MapServer";
var urlNeighborhoods = baseUrl + "/Neighborhoods/MapServer";
var urlNeighborhoodsNoDev =baseUrl + "/Neighborhoods_NoDev/MapServer";
    
// Major road
var urlRangeRoad3050 = baseUrl + "/Range_road_3050/MapServer";
var urlFreewayPotentialDevelopment = baseUrl + "/Digitized_SaskatoonFreeway_April2018_PotentialFutureDevelopment/MapServer";
var NoNewNeighborhoodRoads = baseUrl + "/No_New_neighborhood_roads/MapServer";
var urlNorthCommuterParkwayOpened =baseUrl + "/NorthCommuterParkway_Opened/MapServer";
            
//Development
var urlUniversityHeights = baseUrl + "/UniversityHeights/MapServer";	
var urlAspenGeneral = baseUrl + "/aspen_general/MapServer";		
var urlNoWetland = baseUrl + "/No_wetland/MapServer";
        
//Wetlands
var urlDecreasedWetland50 = baseUrl + "/Decreased_wetland/MapServer";
var urlIncreasesWetland50 = baseUrl + "/Increases_Wetlands/MapServer";
var urlNoChangeWetlands = baseUrl + "/Wetlands/MapServer";

//Trails
var urlTrailsPotentialDevelopment = baseUrl + "/NES_conceptMP_Trails_UsedforPlanningforPotentialDevelopment/MapServer";
var urlManyNewTrails = baseUrl + "/Many_new_trails/MapServer";	
var urlNoNewTrails = baseUrl + "/No_new_trails/MapServer";
var urlSomeNewTrails =baseUrl + "/Some_new_trails/MapServer";
    
// Buffer
var urlBuffer20 = baseUrl + "/buffer20m/MapServer";	
var urlBuffer60 = baseUrl + "/buffer60m/MapServer";	

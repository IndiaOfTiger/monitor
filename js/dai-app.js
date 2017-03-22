/*$(
    
    function initialize() {

      // Create an array of styles.
      var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#008f80"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#008f80"},{"saturation":"0"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#008f80"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#008f80"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#004841"},{"saturation":"0"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#00c5ff"},{"saturation":"-44"},{"lightness":"-4"}]}];
      // Create a new StyledMapType object, passing it the array of styles,
      // as well as the name to be displayed on the map type control.
      var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

      // Create a map object, and include the MapTypeId to add
      // to the map type control.
      var mapOptions = {
        zoom: 17,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        center: new google.maps.LatLng(24.7867109,120.9972336),
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      };
      var map = new google.maps.Map(document.getElementById('Location-map'),
        mapOptions);

      //Associate the styled map with the MapTypeId and set it to display.
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
    }
);*/

$(
        function initMap() {
            map = new google.maps.Map(document.getElementById('Location-map'), {
            center: {lat: 24.78660548112614, lng: 120.9988971054554},
            zoom: 20});
        }
);


$(function(){
        /*function initMap() {
            map = new google.maps.Map(document.getElementById('Location-map'), {
            center: {lat: 24.78660548112614, lng: 120.9988971054554},
            zoom: 20});
        }*/
        //initMap();
        var markers = [];
        var MonitorLalo = [];
        //alert("hhh");
        
        /*function hh(){
            alert('5 seconds!');
            var t=setTimeout(hh,5000);
        }
        hh();*/
        //var t=setTimeout(hh,5000);

        function iot_app(){
            
        }
    
        var position1 = new google.maps.LatLng(24.786598175790296 , 120.9988796710968);
        var position2 = new google.maps.LatLng(24.786666358908327, 120.99893599748611);
        MonitorLalo.push(position1);
        MonitorLalo.push(position2);
        var MonitorList = ['position1','position2'/*,'positionC','positionD',*/];
    
        var flightPlanCoordinates1 = [
            {lat:24.786486160586442, lng:120.9992042183876},
            {lat: 24.786598175790296, lng: 120.9988796710968},
            {lat: 24.786621309352384, lng: 120.99919348955154},
            {lat:24.786486160586442, lng:120.9992042183876}
        ];
        var monitor_area1 = new google.maps.Polyline({
            path: flightPlanCoordinates1,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        monitor_area1.setMap(map);
        
        
        var flightPlanCoordinates2 = [
            {lat:24.786758893080023, lng:120.99870532751083},
            {lat: 24.786666358908327, lng: 120.99893599748611},
            {lat: 24.786623479575442, lng: 120.99870264530182},
            {lat:24.786758893080023, lng:120.99870532751083}
        ];
        var monitor_area2 = new google.maps.Polyline({
            path: flightPlanCoordinates2,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        monitor_area2.setMap(map);
        
        
        var monitor1 = new google.maps.Marker({
            position: position1,
            //title: "point A",
            label: "1",
            map: map
        }); 
        
        var monitor2 = new google.maps.Marker({
            position: position2,
            //title: "point A",
            label: "2",
            map: map
        });
        
        
        function setMapOnAll(map) {
          for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
          }
        }
        function clearMarkers() {
          setMapOnAll(null);
        }
        function deleteMarkers() {
          clearMarkers();
        }
        
        var rad = function(x) {
            return x * Math.PI / 180;
        };

        var getDistance = function(p1, p2) {
            var R = 6378137; // Earth’s mean radius in meter
            var dLat = rad(p2.lat() - p1.lat());
            var dLong = rad(p2.lng() - p1.lng());
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d; // returns the distance in meter
        };
        
        
        
        function getMonitor(lalo){
            var distances = [];
            var index = 0;
            var min = getDistance(lalo,MonitorLalo[0]);
            for(var i = 1; i < MonitorLalo.length;i++)
            {
                var Dis = getDistance(lalo,MonitorLalo[i]);
                if(min > Dis)
                {
                    min = Dis;
                    index = i;
                }
                distances.push(Dis);
            }
            return MonitorList[index];
        }
//(24.78659087045399, 120.99891185760498) !
//(24.786611568905705, 120.99890649318695)
//(24.786640790243446, 120.99890649318695)
//(24.786665141352962, 120.99889576435089) !

//(24.78670897333807, 120.99889978766441)
//(24.786666358908327, 120.99889576435089) !
//(24.786640790243446, 120.99891051650047)
//(24.786616439129147, 120.99890783429146)

//(24.786589652897888, 120.998914539814)  !
//(24.786551908653134, 120.99889978766441)
//(24.78650929416945, 120.9988971054554)
//(24.78645450409747, 120.99893599748611)
        var SOSpath = [
            {lat:24.78659087045399, lng:120.99891185760498},
            {lat:24.786611568905705, lng:120.99890649318695},
            {lat:24.786640790243446, lng:120.99890649318695},
            {lat:24.786665141352962, lng:120.99889576435089},
            
            {lat:24.78670897333807, lng:120.99889978766441},
            {lat:24.786666358908327, lng:120.99889576435089},
            {lat:24.786640790243446, lng:120.99891051650047},
            {lat:24.786616439129147, lng:120.99890783429146},
            
            {lat:24.786589652897888, lng:120.998914539814},
            {lat:24.786551908653134, lng:120.99889978766441},
            {lat:24.78650929416945, lng:120.9988971054554},
            {lat:24.78645450409747, lng:120.99893599748611}
        ];
        
        function MonitorDisplay(boo)
        {
            if(boo)
            {
                $('#vedio').attr('src', 'https://www.youtube.com/embed/W5FRUM-AK9k');
                //&autoplay=1
            }
            else if(boo)
            {
                $('#vedio').attr('src', 'https://www.youtube.com/embed/xecEV4dSAXE');
                //&autoplay=1
            }
             else
            {
                $('#vedio').attr('src', '');
            }
        }
        
        var i=0;
        function Display()
        {
            deleteMarkers();
             var SOS = new google.maps.Marker({
                position: SOSpath[i],
                //title: "point A",
                label: "SOS",
                map: map
            });
             markers.push(SOS);
             var temp = new google.maps.LatLng(SOSpath[i]);
             console.log(temp);
             console.log(monitor_area1);
             //alert(temp);
              
             /*var isWithinPolygon_1 = google.maps.geometry.poly.containsLocation(temp, monitor_area1);
             var isWithinPolygon_2 = google.maps.geometry.poly.containsLocation(temp, monitor_area2);
             MonitorDisplay(isWithinPolygon_1);
             MonitorDisplay(isWithinPolygon_2);*/
             
             i++;
             if(i==SOSpath.length)
             {
                 i = 0;
             }
             
             setTimeout(Display,3000);
        }
        
        //for(var i = 0; i < SOSpath.length;i++)
        //{
            //var isWithinPolygon_2 = google.maps.geometry.poly.containsLocation(SOSpath[3], monitor_area2);
        Display();
        //}
        
        google.maps.event.addListener(map,"click", function(event){
            console.log(event.latLng);
           
            var str = "lalala";//prompt('sure?','toilet');
            //alert(event.latLng);
            var isWithinPolygon1 = google.maps.geometry.poly.containsLocation(event.latLng, monitor_area1);
            var isWithinPolygon2 = google.maps.geometry.poly.containsLocation(event.latLng, monitor_area2);
            //alert(isWithinPolygon);
            if(str)
            {
                 deleteMarkers();
                var infowindow = new google.maps.InfoWindow(
                {
                   content: str
                });
                var marker_Click = new google.maps.Marker({
                    map: map,
                    position:event.latLng,
                    content: str
                }); 
                marker_Click.addListener('click', function() {
                               infowindow.open(map, marker_Click);
                });
                markers.push(marker_Click);
                var Monitor = getMonitor(event.latLng);
                if(isWithinPolygon1)
                {
                    $('#vedio').attr('src', 'https://www.youtube.com/embed/W5FRUM-AK9k');
                    //&autoplay=1
                }
                else if(isWithinPolygon2)
                {
                    $('#vedio').attr('src', 'https://www.youtube.com/embed/xecEV4dSAXE');
                    //&autoplay=1
                }
                else
                {
                    $('#vedio').attr('src', '');
                }
                
                //alert(Monitor);
            }                   
        });
        
    var profile = {
        'dm_name': 'FindDog',
        'odf_list': [],
        'idf_list': [],
        'origin_odf_list': [],
        'origin_idf_list': [],
        'is_sim': false,
        'df_list':[],
    }
    var ida = {
        'iot_app': iot_app,
    }; // How iot device receive data (format)
    dai(profile,ida);
       
        
});

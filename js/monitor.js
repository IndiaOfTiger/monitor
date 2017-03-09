$(
    function initMap() {
        map = new google.maps.Map(document.getElementById('Location-map'), {
        center: {lat: 24.7867056, lng: 120.9959000},
        zoom: 15});
    }
    /*function initMap() {
             
        //new google.maps.LatLng(24.7867059, 120.9989300)
        var positionA = new google.maps.LatLng(24.7856059, 121.0010000);
        var positionB = new google.maps.LatLng(24.7855056, 121.0053000);
        var positionC = new google.maps.LatLng(24.7879159, 120.9989300);
        var positionD = new google.maps.LatLng(24.7819156, 121.0033500);
        var myOptions = {
            zoom: 16,
            center: positionA
        }; 
        map = new google.maps.Map(document.getElementById('Location-map'), myOptions);
        // Instantiate a directions service.
                        
        monitorA = new google.maps.Marker({
            position: positionA,
            //title: "point A",
            label: "A",
            map: map
        });
        monitorB = new google.maps.Marker({
            position: positionB,
            //title: "point B",
            label: "B",
            map: map
        });
        monitorC = new google.maps.Marker({
            position: positionC,
            //title: "point A",
            label: "C",
            map: map
        });
        monitorD = new google.maps.Marker({
            position: positionD,
            //title: "point B",
            label: "D",
            map: map
        });
        
        
        

    }*/
  
);

$(function () {
    var pinColor = "ffffff";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
            new google.maps.Size(21, 34),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));
        var markers = [];
        var MonitorLalo = [];
        var MonitorList = ['positionA','positionB','positionC','positionD',]
        
        var positionA = new google.maps.LatLng(24.7856059, 121.0010000);
        var positionB = new google.maps.LatLng(24.7855056, 121.0053000);
        var positionC = new google.maps.LatLng(24.7879159, 120.9989300);
        var positionD = new google.maps.LatLng(24.7819156, 121.0033500);
        MonitorLalo.push(positionA);
        MonitorLalo.push(positionB);
        MonitorLalo.push(positionC);
        MonitorLalo.push(positionD);
        
        
        /*var myOptions = {
            zoom: 16,
            center: positionA
        }; 
        map = new google.maps.Map(document.getElementById('Location-map'), myOptions);*/
        // Instantiate a directions service.
                        
        monitorA = new google.maps.Marker({
            position: positionA,
            //title: "point A",
            label: "A",
            map: map
        });
        monitorB = new google.maps.Marker({
            position: positionB,
            //title: "point B",
            label: "B",
            map: map
        });
        monitorC = new google.maps.Marker({
            position: positionC,
            //title: "point A",
            label: "C",
            map: map
        });
        monitorD = new google.maps.Marker({
            position: positionD,
            //title: "point B",
            label: "D",
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

        
        google.maps.event.addListener(map,"click", function(event){
           
            var str = prompt('sure?','toilet');
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
                if(Monitor == "positionA")
                {
                    $('#vedio').attr('src', 'https://www.youtube.com/embed/W5FRUM-AK9k');
                    //&autoplay=1
                }
                else if(Monitor == "positionB")
                {
                    $('#vedio').attr('src', 'https://www.youtube.com/embed/xecEV4dSAXE');
                    //&autoplay=1
                }
                else if(Monitor == "positionC")
                {
                    $('#vedio').attr('src', 'https://www.youtube.com/embed/89l-0Ti_MQQ');
                    //&autoplay=1
                }
                else if(Monitor == "positionD")
                {
                    $('#vedio').attr('src', 'https://www.youtube.com/embed/h3kZlI5nNqI');
                    //&autoplay=1
                }
                alert(Monitor);
            }                   
        });
        
       

});
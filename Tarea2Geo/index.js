
var mymap = L.map("mapid").setView(
  [21.152364203854884, -101.71115227036523],
  16
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);


  var countMap = 0;

  const mapCoords = new Map();
  function addTolstMarker(e){
    countMap += 1;
    mapCoords.set(countMap,e.latlng);
            
    for (let [key, value] of mapCoords) {
       
        //console.log(value);
        L.marker(value).bindPopup("the geolocation is "+ value.toString()).openPopup().addTo(mymap);
       
      }
           
  }
  mymap.on("click", addTolstMarker);

  var latlngs = Array();
  var lineRed;

  function addLineaRed(e){
    //mymap.removeLayer(lineRed);
    while (latlngs.length) { 
      latlngs.pop(); 
      console.log("erase");
    }
    countMap -= 1;
    latlngs.push(mapCoords.get(countMap-1));
    latlngs.push(e.latlng);
    lineRed = L.polyline(latlngs,{color:'red'}).addTo(mymap);
    map.removeLayer(L);
  }

  mymap.on("dblclick", addLineaRed);
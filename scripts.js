var guadalajara = [20.659698, -103.349609];
var puertoVallarta = [20.620391, -105.230498];

var map = L.map('map').setView(guadalajara, 5);
map.zoomControl.setPosition('bottomright');

var locations = [
  { name: 'Guadalajara', coords: [20.659698, -103.349609] },
  { name: 'Puerto Vallarta', coords: [20.620391, -105.230498] },
  { name: 'Mazatlan', coords: [23.24989440891471, -106.41146299121868] },
  { name: 'La Paz', coords: [24.143692002027965, -110.31388544341759] },
  { name: 'Los Cabos', coords: [22.89108580758504, -109.91703371974549] },
  { name: 'Tijuana', coords: [32.51613868377487, -117.03878933766367] },
  { name: 'Rosarito', coords: [32.365385206295095, -117.06089289109117] },
  { name: 'Ensenada', coords: [31.864764079894424, -116.59930026931683] },
  { name: 'Puebla', coords: [19.04155045506119, -98.2057891028894] },
  { name: 'Veracruz', coords: [19.172268034079888, -96.13615083149062] },
  { name: 'Tuxtla', coords: [16.750423821121277, -93.09877183468363] },
  { name: 'Tapachula', coords: [14.903716607138259, -92.26697879698075] },
  { name: 'Comitan', coords: [16.230236448780897, -92.11646057422794] },
  { name: 'Capulalpam', coords: [17.30435345941862, -96.44735256132944] },
  { name: 'Mazunte', coords: [15.66795210290462, -96.55505923975662] },
  { name: 'Huautla de Jiménez', coords: [18.130555552559162, -96.8426044266374] },
  { name: 'San Pedro y San Pablo Teposcolula', coords: [17.510560825691172, -97.48898290843367] },
  { name: 'Mitla', coords: [16.921368210768367, -96.39890879784434] },
  { name: 'Monte Alban', coords: [17.043861821315534, -96.76780790361023] },
  { name: 'Puerto Escondido', coords: [15.872369306654525, -97.07746772210392] },
  { name: 'Hierve el Agua', coords: [16.86576602936036, -96.27542714625638] },
  { name: 'Arbol del Tule', coords: [17.046691522962593, -96.63577857879356] },
  { name: 'Tabasco', coords: [18.351526859616385, -92.45582643873105] },
  { name: 'Campeche', coords: [19.83184978757237, -90.53829724709938] },
  { name: 'Merida', coords: [20.969749950529856, -89.58486677167775] },
  { name: 'Cancún', coords: [21.16275581795178, -86.84658511176347] },
  { name: 'Playa del Carmen', coords: [20.629039018129525, -87.07684970214719] },
  { name: 'Chetumal', coords: [18.499693065453705, -88.29688308952134] },
  { name: 'Queretaro', coords: [20.58512747582145, -100.39133786039962] },
  { name: 'León', coords: [21.12297996893813, -101.67640947597731] },
  { name: 'San Luis Potosí', coords: [22.162269979311255, -100.99110196668701] },
  { name: 'Chihuahua', coords: [28.635910880027733, -106.0714974007772] },
  { name: 'Sierra Tarahumara', coords: [27.000989692478196, -107.24639656957096] },
  { name: 'Ciudad Juárez', coords: [31.68867212402103, -106.42155903089791] }
];

var markers = locations.map(function(location) {
  var marker = L.marker(location.coords).addTo(map);
  marker.bindPopup('<b>' + location.name + '</b>');
  marker.on('click', function() {
    map.flyTo(location.coords, 12, { duration: 5 });
  });
  return marker;
});

var mazatlanCoords = locations[2].coords;
var laPazCoords = locations[3].coords;
var losCabosCoords = locations[4].coords;
var tijuanaCoords = locations[5].coords;
var rosaritoCoords = locations[6].coords;
var ensenadaCoords = locations[7].coords;
var pueblaCoords = locations[8].coords;
var veracruzCoords = locations[9].coords;
var tuxtlaCoords = locations[10].coords;
var tapachulaCoords = locations[11].coords;
var comitanCoords = locations[12].coords;
var capulalpamCoords = locations[13].coords;
var mazunteCoords = locations[14].coords;
var huautlaCoords = locations[15].coords;
var sanpedroCoords = locations[16].coords;
var mitlaCoords = locations[17].coords;
var montealbanCoords = locations[18].coords;
var puertoEscondidoCoords = locations[19].coords;
var hierveElAguaCoords = locations[20].coords;
var arbolTuleCoords = locations[21].coords;
var tabascoCoords = locations[22].coords;
var campecheCoords = locations[23].coords;
var meridaCoords = locations[24].coords;
var cancunCoords = locations[25].coords;
var playaCarmenCoords = locations[26].coords;
var chetumalCoords = locations[27].coords;
var queretaroCoords = locations[28].coords;
var leonCoords = locations[29].coords;
var sanluisCoords = locations[30].coords;
var chihuahuaCoords = locations[31].coords;
var sierraTarahumaraCoords = locations[32].coords;
var cdJuarezCoords = locations[33].coords;

var desc = document.querySelector('.desc');



// Custom icons
// Custom icons - Hotels
var cityExpressIcon = L.icon({
    iconUrl: 'https://www.cityexpress.com/themes/city_express/images/icons/iconos-brand/cityExpress_marca.svg',
    iconSize: [60, 20],
    iconAnchor: [30, 0],
    popupAnchor: [0, 0],
});
var gldjHotels = [
    L.marker([20.65184813503287, -103.39780217347808], {
    icon: cityExpressIcon,
    }).addTo(map).bindPopup(
        "<strong>City Express Plus Guadalajara Expo</strong<br><br><small><a href='#'>Ver Google maps</a></small>"
    ),
    L.marker([20.698743885550034, -103.37374982560286], {
    icon: cityExpressIcon,
    }).addTo(map).bindPopup(
        "<strong>City Express Plus Providencia</strong<br><br><small><a href='#'>Ver Google maps</a></small>"
    ),
    L.marker([20.588854354880834, -103.44509511340588], {
    icon: cityExpressIcon,
    }).addTo(map).bindPopup(
        "<strong>City Express Plus Palomar</strong<br><br><small><a href='#'>Ver Google maps</a></small>"
    ),
    L.marker([20.565365486264902, -103.30996843625024], {
    icon: cityExpressIcon,
    }).addTo(map).bindPopup(
        "<strong>City Express Guadalajara Aeropuerto</strong<br><br><small><a href='#'>Ver Google maps</a></small>"
    )];
 // https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

function createMarkers(data) {
  const markers = [];
  data.forEach(item => {
    const { lat, lng, name, className, url } = item;
    const marker = L.marker([lat, lng], { icon: cityExpressIcon })
      .addTo(map)
      .bindPopup(
        `<strong class='${className}'>${name}</strong><br><br><small><a href='${url}'>Ver Google maps</a></small>`
      );
    markers.push(marker);
  });
  return markers;
}

const pvHotels = createMarkers([
  { lat: 20.65388807175917, lng: -105.23968788697148, name: 'City Express Plus Puerto Vallarta', className: 'pvHotel', url: 'https://www.google.com/maps/@20.65388807175917,-105.23968788697148,14z' }
]);
const mzHotels = createMarkers([
  { lat: 23.246601023180634, lng: -106.43846403633331, name: 'City Express Mazatlán', className: 'mzHotel', url: 'https://www.google.com/maps/@23.246601023180634,-106.43846403633331,14z' }
]);
const pazHotels = createMarkers([
  { lat: 24.186121392895867, lng: -110.30139600191731, name: 'City Express La Paz', className: 'mzHotel', url: 'https://www.google.com/maps/@24.186121392895867, -110.30139600191731,14z' }
]);
const caboHotels = createMarkers([
  { lat: 22.901135598911257, lng: -109.89454739586598, name: 'City Express Suites Los Cabos', className: 'pazHotel', url: 'https://www.google.com/maps/@22.901135598911257, -109.89454739586598,14z' },
  { lat: 22.901505763671747, lng: -109.89432139030941, name: 'City Express Plus Los Cabos', className: 'pazHotel2', url: 'https://www.google.com/maps/@22.901505763671747, -109.89432139030941,14z' }
]);


// Custom icons - Attractions
var attractionIcon = L.icon({
    iconUrl: 'attraction.svg',
    iconSize: [30, 40],
    iconAnchor: [15, 0],
    popupAnchor: [0, 0],
});

var routeGPattractions = [
    L.marker([20.775904515628298, -103.6957452390951], {
    icon: attractionIcon,
    }).addTo(map).bindPopup(
        '<strong>El Arenal</strong "Pueblo de Amigos" "Guajes y vasijas"<br><br><small><a href="#">Ver Google maps</a></small>'
    ),
    L.marker([20.881714632811093, -103.83244933751666], {
    icon: attractionIcon,
    }).addTo(map).bindPopup(
        '<strong>Tequila, Jalisco</strong> Capital del Tequila<br><br><small><a href="#">Ver Google maps</a></small>'
    ),
    L.marker([21.039890985391764, -104.34442836688054], {
    icon: attractionIcon,
    }).addTo(map).bindPopup(
        '<strong>Los Toriles</strong> Zona Arquelógica de Ixtlán del Río<br><br><small><a href="#">Ver Google maps</a></small>'
    ),
    L.marker([21.035322466334293, -104.41587400364405], {
    icon: attractionIcon,
    }).addTo(map).bindPopup(
        '<strong>Mexpan</strong>, Muebles de madera y canastos<br><br><small><a href="#">Ver Google maps</a></small>'
    ),
    L.marker([21.10393389110987, -104.43694204806405], {
    icon: attractionIcon,
    }).addTo(map).bindPopup(
        '<strong>Jala</strong><br><br><small><a href="#">Ver Google maps</a></small>'
    ),
    L.marker([21.168564265270515, -105.22662172147001], {
    icon: attractionIcon,
    }).addTo(map).bindPopup(
        '<strong>Chacala</strong>, Hermosa playa de arena fina<br><br><small><a href="#">Ver Google maps</a></small>'
    ),
    L.marker([21.025983111426136, -105.2693774497321], {
    icon: attractionIcon,
    }).addTo(map).bindPopup(
        '<strong>Rincón de Guayabitos</strong>, Playa "Coco Loco"<br><br><small><a href="#">Ver Google maps</a></small>'
    ),
    L.marker([20.510520429388233, -105.3800499597082], {
    icon: attractionIcon,
    }).addTo(map).bindPopup(
        '<strong>Las Caletas</strong>, Cabo Corrientes<br><br><small><a href="#">Ver Google maps</a></small>'
    )
];


function bindRouteInfo(route, routeInfoClass) {
  const routeInfo = document.querySelector(`.${routeInfoClass}`);

  route.on('mouseover', function (e) {
    routeInfo.style.display = 'block';
    routeInfo.style.left = e.originalEvent.clientX + 'px';
    routeInfo.style.top = e.originalEvent.clientY + 'px';
  });

  route.on('mouseout', function () {
    routeInfo.style.display = 'none';
  });

  route.on('click', function () {
    map.fitBounds(route.getBounds());
    desc.style.display = 'none';
    document.querySelector(`.${route.options.className}.route-detail`).style.display = 'block';
  });
}

function bindPlaceLink(placeLink, route) {
  placeLink.addEventListener('click', function () {
    map.fitBounds(route.getBounds());
    desc.style.display = 'none';
    document.querySelector(`.${route.options.className}.route-detail`).style.display = 'block';
  });
}

var routeGP = L.polyline([guadalajara, puertoVallarta], {
  color: 'purple',
  weight: '6',
  className: 'routeGP'
}).addTo(map);
bindRouteInfo(routeGP, 'routeGP.route-info');
bindPlaceLink(document.querySelector('.routeGP.place-link'), routeGP);

var routeMPC = L.polyline([mazatlanCoords, laPazCoords, losCabosCoords], {
  color: 'orange',
  weight: '6',
  className: 'routeMPC'
}).addTo(map);
bindRouteInfo(routeMPC, 'routeMPC.route-info');
bindPlaceLink(document.querySelector('.routeMPC.place-link'), routeMPC);

var routeTRE = L.polyline([tijuanaCoords, rosaritoCoords, ensenadaCoords], {
  color: 'green',
  weight: '6',
  className: 'routeTRE'
}).addTo(map);
bindRouteInfo(routeTRE, 'routeTRE.route-info');
bindPlaceLink(document.querySelector('.routeTRE.place-link'), routeTRE);

var routePV = L.polyline([pueblaCoords, veracruzCoords], {
  color: 'cyan',
  weight: '6',
  className: 'routePV'
}).addTo(map);
bindRouteInfo(routePV, 'routePV.route-info');
bindPlaceLink(document.querySelector('.routePV.place-link'), routePV);

var routeTTC = L.polyline([tuxtlaCoords, tapachulaCoords, comitanCoords], {
  color: 'brown',
  weight: '6',
  className: 'routeTTC'
}).addTo(map);
bindRouteInfo(routeTTC, 'routeTTC.route-info');
bindPlaceLink(document.querySelector('.routeTTC.place-link'), routeTTC);

var routeOAX = L.polyline([capulalpamCoords, mazunteCoords, huautlaCoords, sanpedroCoords, mitlaCoords, montealbanCoords, puertoEscondidoCoords, hierveElAguaCoords, arbolTuleCoords], {
  color: '#D0BB00',
  weight: '6',
  className: 'routeOAX'
}).addTo(map);
bindRouteInfo(routeOAX, 'routeOAX.route-info');
bindPlaceLink(document.querySelector('.routeOAX.place-link'), routeOAX);

var routeTCM = L.polyline([tabascoCoords, campecheCoords, meridaCoords], {
  color: '#DD0BFF',
  weight: '6',
  className: 'routeTCM'
}).addTo(map);
bindRouteInfo(routeTCM, 'routeTCM.route-info');
bindPlaceLink(document.querySelector('.routeTCM.place-link'), routeTCM);

var routeCPC = L.polyline([cancunCoords, playaCarmenCoords, chetumalCoords], {
  color: '#00C092',
  weight: '6',
  className: 'routeCPC'
}).addTo(map);
bindRouteInfo(routeCPC, 'routeCPC.route-info');
bindPlaceLink(document.querySelector('.routeCPC.place-link'), routeCPC);

var routeQLS = L.polyline([queretaroCoords, leonCoords, sanluisCoords], {
  color: '#96FF43',
  weight: '6',
  className: 'routeQLS'
}).addTo(map);
bindRouteInfo(routeQLS, 'routeQLS.route-info');
bindPlaceLink(document.querySelector('.routeQLS.place-link'), routeQLS);

var routeCSC = L.polyline([chihuahuaCoords, sierraTarahumaraCoords, cdJuarezCoords], {
  color: '#E72525',
  weight: '6',
  className: 'routeCSC'
}).addTo(map);
bindRouteInfo(routeCSC, 'routeCSC.route-info');
bindPlaceLink(document.querySelector('.routeCSC.place-link'), routeCSC);



// Go to the place if clicked in the route detail box
var pvHotel = document.querySelector(".pvHotel");
pvHotel.addEventListener("click", function(event) {
    event.preventDefault();
    map.flyTo(pvHotels[0].getLatLng(), 18),{
        duration: 10,
    };
});

// Close detail route div
document.querySelectorAll('.route-close').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.route-detail').forEach(function (el) {
      el.style.display = 'none';
    });
    desc.style.display = 'block';
    map.setView(guadalajara, 6);
  });
});



// Hide and show markers until certain zoom
var markersToShow = routeGPattractions.concat(gldjHotels, pvHotels, mzHotels, pazHotels, caboHotels);

function updateMarkers() {
  var zoomLevel = map.getZoom();
  if (zoomLevel >= 9) {
    markersToShow.forEach(function (marker) {
      map.addLayer(marker);
    });
  } else {
    markersToShow.forEach(function (marker) {
      map.removeLayer(marker);
    });
  }
}

updateMarkers();

map.on('zoomend', function () {
  updateMarkers();
});

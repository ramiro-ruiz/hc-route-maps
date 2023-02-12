var guadalajara = [20.659698, -103.349609];
var puertoVallarta = [20.620391, -105.230498];
var map = L.map('map').setView(guadalajara, 6);
map.zoomControl.setPosition('bottomright');
var guadalajaraMarker = L.marker(guadalajara).addTo(map);
guadalajaraMarker.bindPopup("<b>Guadalajara</b>");
var puertoVallartaMarker = L.marker(puertoVallarta).addTo(map);
puertoVallartaMarker.bindPopup("<b>Puerto Vallarta</b>");
var closeBtn = document.querySelector('.route-close');


// Zoom to marker when clicked
guadalajaraMarker.on('click', function () {
    map.flyTo(guadalajara, 12),{
        duration: 100,
    };
});
puertoVallartaMarker.on('click', function () {
    map.flyTo(puertoVallarta, 12),{
        duration: 100,
    };
});


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

var pvHotels = [L.marker([20.65388807175917, -105.23968788697148], {
    icon: cityExpressIcon,
    }).addTo(map).bindPopup(
        "<strong class='pvHotel'>City Express Plus Puerto Vallarta</strong<br><br><small><a href='#'>Ver Google maps</a></small>"
    )];

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


// Show the route lines and styles
var routeGP = L.polyline([guadalajara, puertoVallarta], {
    color: 'purple',
    weight: '6'
}).addTo(map);

// Show the route info div when the route line is hovered over
routeGP.on('mouseover', function () {
    document.querySelector('.routeGP-info').style.display = 'block';
});

// Hide the route info div when the route line is no longer hovered over
routeGP.on('mouseout', function () {
    document.querySelector('.routeGP-info').style.display = 'none';
});

// Zoom in and show the route info div when the route line is clicked
routeGP.on('click', function () {
    map.fitBounds(routeGP.getBounds());
    document.querySelector('.routeGP.route-detail').style.display = 'block';
    gldjHotels.forEach(function (marker) {
        marker.setOpacity(1);
    });
    pvHotels.forEach(function (marker) {
        marker.setOpacity(1);
    });
    routeGPattractions.forEach(function (marker) {
        marker.setOpacity(1);
    });
    document.body.appendChild(containerDiv);
});

// Go to the place if clicked in the route detail box
var pvHotel = document.querySelector(".pvHotel");
pvHotel.addEventListener("click", function(event) {
    event.preventDefault();
    map.flyTo(pvHotels[0].getLatLng(), 18),{
        duration: 10,
    };
});

// Close detail route div
document.querySelector('.route-close').addEventListener('click', function () {
    document.querySelector('.route-detail').style.display = 'none';
});


// Hide markers by default until certain zoom
var markersToShow = routeGPattractions.concat(gldjHotels, pvHotels);
markersToShow.forEach(function (marker) {
    map.removeLayer(marker);
});


// Show markers if 11 or closer in zoom
map.on('zoomend', function () {
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
});

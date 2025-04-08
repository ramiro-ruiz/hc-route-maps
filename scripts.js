/**
 * HC Route Maps - Interactive Map Application
 *
 * This file contains the JavaScript code for an interactive map application
 * that displays hotels, attractions, and routes across Mexico.
 */

// =============================================
// CONFIGURATION AND CONSTANTS
// =============================================

// Map configuration
const MAP_CONFIG = {
  defaultCenter: [20.659698, -103.349609], // Guadalajara
  defaultZoom: 5,
  minZoomForMarkers: 8,
  tileLayerUrl:
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
  tileLayerAttribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

// Icon configurations
const ICON_CONFIGS = {
  cityExpress: {
    iconUrl: "logos/city-express.svg",
    iconSize: [70, 30],
    iconAnchor: [40, 0],
    popupAnchor: [0, 0],
  },
  cityCentro: {
    iconUrl: "logos/city-centro.svg",
    iconSize: [130, 30],
    iconAnchor: [60, 0],
    popupAnchor: [0, 0],
  },
  cityJunior: {
    iconUrl: "logos/city-junior.svg",
    iconSize: [70, 30],
    iconAnchor: [40, 0],
    popupAnchor: [0, 0],
  },
  cityPlus: {
    iconUrl: "logos/city-plus.svg",
    iconSize: [50, 50],
    iconAnchor: [20, 0],
    popupAnchor: [0, 0],
  },
  hotssonLeon: {
    iconUrl: "logos/hs-hotsson-leon.svg",
    iconSize: [50, 50],
    iconAnchor: [20, 0],
    popupAnchor: [0, 0],
  },
  hotssonQueretaro: {
    iconUrl: "logos/hs-hotsson-queretaro.svg",
    iconSize: [50, 50],
    iconAnchor: [20, 0],
    popupAnchor: [0, 0],
  },
  citySuites: {
    iconUrl: "logos/city-suites.svg",
    iconSize: [100, 40],
    iconAnchor: [50, 0],
    popupAnchor: [0, 0],
  },
  attraction: {
    iconUrl: "attraction.svg",
    iconSize: [30, 40],
    iconAnchor: [15, 0],
    popupAnchor: [0, 0],
  },
};

// =============================================
// DATA
// =============================================

// Main cities and locations
const locations = [
  { name: "Guadalajara", coords: [20.659698, -103.349609] },
  { name: "Puerto Vallarta", coords: [20.620391, -105.230498] },
  { name: "Mazatlan", coords: [23.24989440891471, -106.41146299121868] },
  { name: "La Paz", coords: [24.143692002027965, -110.31388544341759] },
  { name: "Los Cabos", coords: [22.89108580758504, -109.91703371974549] },
  { name: "Tijuana", coords: [32.51613868377487, -117.03878933766367] },
  { name: "Rosarito", coords: [32.365385206295095, -117.06089289109117] },
  { name: "Ensenada", coords: [31.864764079894424, -116.59930026931683] },
  { name: "Puebla", coords: [19.04155045506119, -98.2057891028894] },
  { name: "Ciudad de México", coords: [19.42945264121571, -99.12985889784106] },
  { name: "Oaxaca", coords: [16.775584601305965, -96.65042949483184] },
  { name: "Veracruz", coords: [19.172268034079888, -96.13615083149062] },
  { name: "Tuxtla", coords: [16.750423821121277, -93.09877183468363] },
  { name: "Tapachula", coords: [14.903716607138259, -92.26697879698075] },
  { name: "Comitan", coords: [16.230236448780897, -92.11646057422794] },
  { name: "Capulalpam", coords: [17.30435345941862, -96.44735256132944] },
  { name: "Mazunte", coords: [15.66795210290462, -96.55505923975662] },
  {
    name: "Huautla de Jiménez",
    coords: [18.130555552559162, -96.8426044266374],
  },
  {
    name: "San Pedro y San Pablo Teposcolula",
    coords: [17.510560825691172, -97.48898290843367],
  },
  { name: "Mitla", coords: [16.921368210768367, -96.39890879784434] },
  { name: "Monte Alban", coords: [17.043861821315534, -96.76780790361023] },
  {
    name: "Puerto Escondido",
    coords: [15.872369306654525, -97.07746772210392],
  },
  { name: "Hierve el Agua", coords: [16.86576602936036, -96.27542714625638] },
  { name: "Arbol del Tule", coords: [17.046691522962593, -96.63577857879356] },
  { name: "Tabasco", coords: [18.351526859616385, -92.45582643873105] },
  { name: "Campeche", coords: [19.83184978757237, -90.53829724709938] },
  { name: "Merida", coords: [20.969749950529856, -89.58486677167775] },
  { name: "Cancún", coords: [21.16275581795178, -86.84658511176347] },
  {
    name: "Playa del Carmen",
    coords: [20.629039018129525, -87.07684970214719],
  },
  { name: "Chetumal", coords: [18.499693065453705, -88.29688308952134] },
  { name: "Queretaro", coords: [20.58512747582145, -100.39133786039962] },
  { name: "León", coords: [21.12297996893813, -101.67640947597731] },
  {
    name: "San Luis Potosí",
    coords: [22.162269979311255, -100.99110196668701],
  },
  { name: "Chihuahua", coords: [28.635910880027733, -106.0714974007772] },
  {
    name: "Sierra Tarahumara",
    coords: [27.000989692478196, -107.24639656957096],
  },
  { name: "Ciudad Juárez", coords: [31.68867212402103, -106.42155903089791] },
  { name: "Salina Cruz", coords: [16.184463, -95.196032] },
];

// Attraction locations
const attractionLocations = [
  {
    class: ".place-a0",
    name: "Costa del Sol Jalisco",
    coords: [20.685036427607514, -105.03568628739964],
  },
  {
    class: ".place-a1",
    name: 'El Arenal "Pueblo de Amigos" "Guajes y vasijas"',
    coords: [20.777227962970148, -103.69523043183752],
  },
  {
    class: ".place-a2",
    name: "Amatitlan tierra de los Amates",
    coords: [20.83673327985156, -103.73178861441657],
  },
  {
    class: ".place-a3",
    name: "Tequila Capital del Tequila",
    coords: [20.881732256524472, -103.8326889652464],
    imgURL: ["imgs/places/tequila.jpg"],
  },
  {
    class: ".place-a4",
    name: "Magdalena Minas de piedra",
    coords: [20.99307143678248, -104.02149078664917],
  },
  {
    class: ".place-a5",
    name: "Ixtlan del Rio Zona arqueológica Los Toriles",
    coords: [21.04000736823083, -104.34390341316588],
    imgURL: ["imgs/places/ixtlan.jpg"],
  },
  {
    class: ".place-a6",
    name: "Mexpan muebles de madera y canastos",
    coords: [21.035325134488712, -104.41585640098917],
  },
  {
    class: ".place-a7",
    name: "Jala",
    coords: [21.105794599946726, -104.4362956211041],
  },
  {
    class: ".place-a8",
    name: "Chacala Hermosa playa de arena fina",
    coords: [21.168684324761625, -105.22687923103578],
    imgURL: ["imgs/places/chacala.jpg"],
  },
  {
    class: ".place-a9",
    name: 'Rincón de Guayabitos Playa "coco loco"',
    coords: [21.025314339823375, -105.26262437433739],
    imgURL: ["imgs/places/coco-loco.jpg"],
  },
  {
    class: ".place-a10",
    name: "Las Caletas",
    coords: [20.505588975918606, -105.38002765495182],
  },
  {
    class: ".place-a11",
    name: "Observatorio",
    coords: [23.189126208925043, -106.4259917161002],
  },
  {
    class: ".place-a12",
    name: "Isla Venados",
    coords: [23.23431853307027, -106.46646762196812],
    imgURL: ["imgs/places/Isla-Venados.jpg"],
  },
  {
    class: ".place-a13",
    name: "El Faro",
    coords: [23.18120138205908, -106.42473045102071],
    imgURL: ["imgs/places/El-Faro.jpg"],
  },
  {
    class: ".place-a14",
    name: "Ferry a La Paz",
    coords: [23.187240458554154, -106.4206109149075],
    imgURL: ["imgs/places/Ferry-La-Paz.jpg"],
  },
  {
    class: ".place-a15",
    name: "El Centenario",
    coords: [24.100943787626214, -110.41062847084854],
  },
  {
    class: ".place-a16",
    name: "Isla del Espriritu Santo",
    coords: [24.467819901751394, -110.34127566083616],
    imgURL: ["imgs/places/Isla-Espiritu-Santo.jpg"],
  },
  {
    class: ".place-a17",
    name: "Los Cabos",
    coords: [22.890055006177494, -109.91686276860645],
    imgURL: ["imgs/places/Los-Cabos.jpg"],
  },
  {
    class: ".place-a18",
    name: "La Ventana",
    coords: [24.046540806918706, -109.99362945571679],
  },
  {
    class: ".place-a19",
    name: 'Sierra de la Laguna "Los Barriles"',
    coords: [23.69551950009106, -109.6503657527342],
  },
  {
    class: ".place-a20",
    name: "El Triunfo",
    coords: [23.802902768997686, -110.10848333496992],
    imgURL: ["imgs/places/El-Triunfo.jpg"],
  },
  {
    class: ".place-a21",
    name: "Plaza Fiesta",
    coords: [32.52809856210235, -117.02082040396367],
  },
  {
    class: ".place-a22",
    name: "Playas de Tijuana",
    coords: [32.52429485549768, -117.13673245298978],
  },
  {
    class: ".place-a23",
    name: "Centro Cultural",
    coords: [32.5305079769086, -117.02286702023656],
    imgURL: ["imgs/places/Centro-Cultural-Tijuana.jpg"],
  },
  {
    class: ".place-a24",
    name: "Playas de Rosarito",
    coords: [32.29141838514872, -117.03444533635755],
    imgURL: ["imgs/places/Rosarito.jpg"],
  },
  {
    class: ".place-a25",
    name: "Cantina Hussongs",
    coords: [31.865137424432817, -116.62803201333357],
    imgURL: ["imgs/places/Cantina-Hussongs-Ensenada.jpg"],
  },
  {
    class: ".place-a26",
    name: "Plaza Santo Tomás",
    coords: [31.868290178828047, -116.62242219190618],
  },
  {
    class: ".place-a27",
    name: "La Bufadora",
    coords: [31.724126747193427, -116.72246486831257],
    imgURL: ["imgs/places/La-Bufadora-Ensenada.jpg"],
  },
  {
    class: ".place-a28",
    name: "Valle de Guadalupe",
    coords: [32.0964853198933, -116.5734369091653],
    imgURL: ["imgs/places/Valle-de-Guadalupe.jpg"],
  },
  {
    class: ".place-a29",
    name: "Cholula",
    coords: [19.07294175804219, -98.31791746717782],
    imgURL: ["imgs/places/Cholula.jpg"],
  },
  {
    class: ".place-a30",
    name: "Atlixco",
    coords: [18.91415376592388, -98.43085705277792],
  },
  {
    class: ".place-a31",
    name: "Chignahuapan",
    coords: [19.838941350503664, -98.03211015798597],
    imgURL: ["imgs/places/Chignahuapan.jpg"],
  },
  {
    class: ".place-a32",
    name: "Cuetzalan",
    coords: [20.017794892216674, -97.52352347573823],
    imgURL: ["imgs/places/Cuetzalan.jpg"],
  },
  {
    class: ".place-a33",
    name: "Huachinango",
    coords: [20.175693209360926, -98.06713400970881],
  },
  {
    class: ".place-a34",
    name: "Xicotepec",
    coords: [20.279046629379362, -97.96462922939796],
    imgURL: ["imgs/places/Xicotepec.jpg"],
  },
  {
    class: ".place-a35",
    name: "Zacatlán de las Manzanas",
    coords: [19.935650505678204, -97.96309960364557],
    imgURL: ["imgs/places/Zacat-de-las-Manzanas.jpg"],
  },
  {
    class: ".place-a36",
    name: "Orizaba",
    coords: [18.850315414302216, -97.10088698413807],
  },
  {
    class: ".place-a37",
    name: "Coscomatepec",
    coords: [19.06865731819889, -97.04644842905391],
  },
  {
    class: ".place-a38",
    name: "Papantla",
    coords: [20.457193046603976, -97.3137248780907],
    imgURL: ["imgs/places/PAPANTLA.jpg"],
  },
  {
    class: ".place-a39",
    name: "Zozocolco",
    coords: [20.140252186876985, -97.57464705095258],
  },
  {
    class: ".place-a40",
    name: "San Cristobal de las Casas",
    coords: [16.7358434931746, -92.63693155483203],
    imgURL: ["imgs/places/SAN-CRISTOBAL-DE-LAS-CASAS.jpg"],
  },
  {
    class: ".place-a41",
    name: "Chiapa de Corzo",
    coords: [16.702873576102537, -93.00885441862661],
    imgURL: ["imgs/places/CHIAPA-DE-CORZO.jpg"],
  },
  {
    class: ".place-a42",
    name: "Cañon del Sumidero",
    coords: [16.84797617719708, -93.11074622308573],
    imgURL: ["imgs/places/CANON-DEL-SUMIDERO.jpg"],
  },
  {
    class: ".place-a43",
    name: "Los Ruiseñores",
    coords: [14.893841888677931, -92.28495459455225],
  },
  {
    class: ".place-a44",
    name: "El Consuelo",
    coords: [14.903065689661092, -92.23908215360565],
  },
  {
    class: ".place-a45",
    name: "Capulalpam",
    coords: [17.30435345941862, -96.44735256132944],
    imgURL: ["imgs/places/CAPULALPAM.jpg"],
  },
  {
    class: ".place-a46",
    name: "Mazunte",
    coords: [15.66795210290462, -96.55505923975662],
    imgURL: ["imgs/places/Mazunte.jpg"],
  },
  {
    class: ".place-a47",
    name: "Huautla de Jiménez",
    coords: [18.130555552559162, -96.8426044266374],
    imgURL: ["imgs/places/Huautla-de-Jimenez.jpg"],
  },
  {
    class: ".place-a48",
    name: "San Pedro y San Pablo Teposcolula",
    coords: [17.510560825691172, -97.48898290843367],
    imgURL: ["imgs/places/San-Pedro-y-San-Pablo-Teposcolula.jpg"],
  },
  {
    class: ".place-a49",
    name: "Mitla",
    coords: [16.921368210768367, -96.39890879784434],
    imgURL: ["imgs/places/Mitla.jpg"],
  },
  {
    class: ".place-a50",
    name: "Monte Alban",
    coords: [17.043861821315534, -96.76780790361023],
    imgURL: ["imgs/places/Monte-Alban.jpg"],
  },
  {
    class: ".place-a51",
    name: "Puerto Escondido",
    coords: [15.872369306654525, -97.07746772210392],
    imgURL: ["imgs/places/Puerto-Escondido.jpg"],
  },
  {
    class: ".place-a52",
    name: "Hierve el Agua",
    coords: [16.86576602936036, -96.27542714625638],
    imgURL: ["imgs/places/Hierve-el-Agua.jpg"],
  },
  {
    class: ".place-a53",
    name: "Arbol del Tule",
    coords: [17.046691522962593, -96.63577857879356],
    imgURL: ["imgs/places/Arbol-del-Tule.jpg"],
  },
  {
    class: ".place-a55",
    name: "Tapijulapa",
    coords: [17.462181970253898, -92.77818663189181],
    imgURL: ["imgs/places/Tapijulapa.jpg"],
  },
  {
    class: ".place-a56",
    name: "Cascadas de Villa Luz",
    coords: [17.44615991760416, -92.76357683645827],
  },
  {
    class: ".place-a57",
    name: "Jardín de Dios",
    coords: [17.474979691173907, -92.81074989412978],
  },
  {
    class: ".place-a58",
    name: "Cañon del Usumacinta",
    coords: [17.424267255272298, -91.49130217323],
    imgURL: ["imgs/places/Canon-Usumacinta.jpg"],
  },
  {
    class: ".place-a59",
    name: "Los Fuertes y Puerta de Tierra",
    coords: [19.84158939123812, -90.53540328164395],
    imgURL: ["imgs/places/LosFuertes-y-Puerta-Tierra.jpg"],
  },
  {
    class: ".place-a60",
    name: "Palizada",
    coords: [18.254853525309954, -92.09124468330849],
  },
  {
    class: ".place-a61",
    name: "Edzna",
    coords: [19.599067927931856, -90.22879521399068],
    imgURL: ["imgs/places/Edzna.jpg"],
  },
  {
    class: ".place-a62",
    name: "CalaKmul",
    coords: [18.858508491897553, -89.51579970243135],
    imgURL: ["imgs/places/CalaKmul.jpg"],
  },
  {
    class: ".place-a63",
    name: "Parque Nacional Sierra Nevada",
    coords: [8.441038708429948, -70.9067341654192],
    imgURL: ["imgs/places/Parque-Nacional-Sierra-Nevada.jpg"],
  },
  {
    class: ".place-a64",
    name: "Paseo Montejo",
    coords: [20.984027597578336, -89.61736613268172],
    imgURL: ["imgs/places/Paseo-Montejo.jpg"],
  },
  {
    class: ".place-a65",
    name: "Plaza Grande",
    coords: [20.96719686131585, -89.6244172982237],
    imgURL: ["imgs/places/Plaza-Grande.jpg"],
  },
  {
    class: ".place-a66",
    name: "Valladolid",
    coords: [20.689559288588654, -88.20310787401658],
  },
  {
    class: ".place-a67",
    name: "Izamal",
    coords: [20.929685592776753, -89.02298870225142],
    imgURL: ["imgs/places/Izamal.jpg"],
  },
  {
    class: ".place-a68",
    name: "Sisal",
    coords: [21.166879249403724, -90.02429526657582],
    imgURL: ["imgs/places/Sisal.jpg"],
  },
  {
    class: ".place-a69",
    name: "Maní",
    coords: [20.393260423150124, -89.39186809269883],
  },
  {
    class: ".place-a70",
    name: "Chichén Itzá",
    coords: [20.68461216746037, -88.56685871429802],
    imgURL: ["imgs/places/Chichenitza.jpg"],
  },
  {
    class: ".place-a71",
    name: "Laguna Nichupté",
    coords: [21.08005559737725, -86.77535078021013],
    imgURL: ["imgs/places/Laguna-Nichupt.jpg"],
  },
  {
    class: ".place-a72",
    name: "Tulum",
    coords: [20.211632782710186, -87.46561052306656],
    imgURL: ["imgs/places/Tulum.jpg"],
  },
  {
    class: ".place-a73",
    name: "Cenote Dos Ojos",
    coords: [20.32554714129354, -87.38933784744816],
    imgURL: ["imgs/places/Cenote-Dos-Ojos.jpg"],
  },
  {
    class: ".place-a74",
    name: "Cobá",
    coords: [20.49174687629001, -87.73387955532455],
    imgURL: ["imgs/places/Coba.jpg"],
  },
  {
    class: ".place-a75",
    name: "Holbox",
    coords: [21.52198191087448, -87.37991103301376],
  },
  {
    class: ".place-a76",
    name: "Rio Lagartos",
    coords: [21.595741854052715, -88.15894608004756],
  },
  {
    class: ".place-a77",
    name: "Cozumel",
    coords: [20.506885056041405, -86.94563346648346],
    imgURL: ["imgs/places/Cozumel.jpg"],
  },
  {
    class: ".place-a78",
    name: "Bacalar",
    coords: [18.678594288569396, -88.39278812977716],
    imgURL: ["imgs/places/Bacalar.jpg"],
  },
  {
    class: ".place-a79",
    name: "Peña de Bernal",
    coords: [20.748835541099833, -99.94539240232118],
    imgURL: ["imgs/places/Pena-Bernal.jpg"],
  },
  {
    class: ".place-a80",
    name: "Tequisquiapan",
    coords: [20.519516709668327, -99.88625025834868],
    imgURL: ["imgs/places/Tequisquiapan.jpg"],
  },
  {
    class: ".place-a81",
    name: "Jalpan de Serra",
    coords: [21.218965168649706, -99.47177390770415],
    imgURL: ["imgs/places/Jalpan-Serra.jpg"],
  },
  {
    class: ".place-a82",
    name: "Cadereyta",
    coords: [20.693625727224443, -99.82881621316761],
    imgURL: ["imgs/places/Cadereyta.jpg"],
  },
  {
    class: ".place-a83",
    name: "Amealco",
    coords: [20.186489866213037, -100.14698733109809],
    imgURL: ["imgs/places/Amealco.jpg"],
  },
  {
    class: ".place-a84",
    name: "Celaya",
    coords: [20.529179331182846, -100.81409992720484],
    imgURL: ["imgs/places/Celaya.jpg"],
  },
  {
    class: ".place-a85",
    name: "Irapuato",
    coords: [20.67877858640074, -101.35244685656177],
    imgURL: ["imgs/places/Irapuato.jpg"],
  },
  {
    class: ".place-a86",
    name: "Silao",
    coords: [20.952697628446764, -101.42895316121921],
    imgURL: ["imgs/places/Silao.jpg"],
  },
  {
    class: ".place-a87",
    name: "Salamanca",
    coords: [20.57420707195768, -101.19516368233086],
    imgURL: ["imgs/places/Salamanca.jpg"],
  },
  {
    class: ".place-a88",
    name: "Real de Catorce",
    coords: [23.689483045548275, -100.88540679122438],
    imgURL: ["imgs/places/Real-Catorce.jpg"],
  },
  {
    class: ".place-a89",
    name: "Aquismón",
    coords: [21.625120716734237, -99.01907281419217],
    imgURL: ["imgs/places/Aquismon.jpg"],
  },
  {
    class: ".place-a90",
    name: "Xilitla",
    coords: [21.384054217937337, -98.99210582618147],
    imgURL: ["imgs/places/Xilitla.jpg"],
  },
  {
    class: ".place-a91",
    name: "Santa Maria del Rio",
    coords: [21.8033018963162, -100.73441656418329],
  },
  {
    class: ".place-a92",
    name: "Creel",
    coords: [27.750391282090213, -107.63663954512481],
    imgURL: ["imgs/places/Creel.jpg"],
  },
  {
    class: ".place-a93",
    name: "Casas Grandes",
    coords: [31.551584504343406, -107.49492103868525],
    imgURL: ["imgs/places/Casas-Grandes.jpg"],
  },
  {
    class: ".place-a94",
    name: "Batopilas",
    coords: [27.030430419341755, -107.73619336226045],
    imgURL: ["imgs/places/Batopilas.jpg"],
  },
  {
    class: ".place-a95",
    name: "Sierra Tarahumara",
    coords: [27.022740161736035, -107.20323399608391],
    imgURL: ["imgs/places/Sierra-Tarahumara.jpg"],
  },
  {
    class: ".place-a96",
    name: "La Rodadora	",
    coords: [31.69009133817407, -106.42774623356502],
  },
  {
    class: ".place-a97",
    name: "Dunas de Samalayuca",
    coords: [31.34315592018881, -106.41968196284488],
    imgURL: ["imgs/places/Dunas-Samalayuca.jpg"],
  },
];

// Hotel locations
const hotelLocations = [
  {
    class: ".place-h0",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus Guadalajara Expo",
    coords: [20.65195856855506, -103.39705115596848],
    imageUrls: [
      "imgs/hotels/cep-gdl-expo-1.jpg",
      "imgs/hotels/cep-gdl-expo-2.jpg",
      "imgs/hotels/cep-gdl-expo-3.jpg",
      "imgs/hotels/cep-gdl-expo-4.jpg",
    ],
  },
  {
    class: ".place-h1",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus Providencia",
    address:
      "Av. Las Américas 1520, Country Club, Guadalajara, Jalisco, México. C.P. 44610",
    coords: [20.698773994535614, -103.37340650385191],
    imageUrls: [
      "imgs/hotels/cep-gdl-prov-1.jpg",
      "imgs/hotels/cep-gdl-prov-2.jpg",
      "imgs/hotels/cep-gdl-prov-3.jpg",
      "imgs/hotels/cep-gdl-prov-4.jpg",
      "imgs/hotels/cep-gdl-prov-5.jpg",
      "imgs/hotels/cep-gdl-prov-6.jpg",
    ],
  },
  {
    class: ".place-h2",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus Palomar",
    address:
      "Av. Adolfo López Mateos Sur No. 1450, Col. Las Villas, Tlajomulco de Zuñiga, Guadalajara, Jalisco, México. C.P. 45643",
    coords: [20.588784049984586, -103.44408660385436],
    imageUrls: [
      "imgs/hotels/cep-gdl-palomar-1.jpg",
      "imgs/hotels/cep-gdl-palomar-2.jpg",
      "imgs/hotels/cep-gdl-palomar-3.jpg",
      "imgs/hotels/cep-gdl-palomar-4.jpg",
    ],
  },
  {
    class: ".place-h3",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Guadalajara Aeropuerto",
    address:
      "Carretera Guadalajara a Chapala No. 7610, Col. Guadalupe Montenegro Del. Las Pintitas El Salto Jalisco, Guadalajara, Jalisco, México. C.P. 45693",
    coords: [20.565285125094793, -103.31036540329697],
    imageUrls: [
      "imgs/hotels/ce-gdl-aepto-1.jpg",
      "imgs/hotels/ce-gdl-aepto-2.jpg",
      "imgs/hotels/ce-gdl-aepto-3.jpg",
      "imgs/hotels/ce-gdl-aepto-4.jpg",
    ],
  },
  {
    class: ".place-h4",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus Puerto Vallarta",
    address:
      "Blvd. Francisco Medina Ascencio No. 2860, Zona Hotelera Norte, Puerto Vallarta, Jalisco, México. C.P. 48333",
    coords: [20.654018544662325, -105.23938750117863],
    imageUrls: [
      "imgs/hotels/cp-pto-vta-1.jpg",
      "imgs/hotels/cp-pto-vta-2.jpg",
      "imgs/hotels/cp-pto-vta-3.jpg",
      "imgs/hotels/cp-pto-vta-4.jpg",
      "imgs/hotels/cp-pto-vta-5.jpg",
      "imgs/hotels/cp-pto-vta-6.jpg",
    ],
  },
  {
    class: ".place-h5",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus Mazatlán",
    coords: [23.273493, -106.453708],
    imageUrls: [
      "imgs/hotels/CPMZT-1.jpg",
      "imgs/hotels/CPMZT-2.jpg",
      "imgs/hotels/CPMZT-3.jpg",
      "imgs/hotels/CPMZT-4.jpg",
      "imgs/hotels/CPMZT-5.jpg",
    ],
  },
  // {
  //   class: ".place-h6",
  //   icon: ICON_CONFIGS.cityExpress,
  //   name: "City Express Mazatlán",
  //   address:
  //     "Av. Del Toreo No. 91, Fracc. El Toreo, Mazatlán, Sinaloa, México. C.P. 82120",
  //   coords: [23.246601023180634, -106.43846403633331],
  //   imageUrls: [
  //     "imgs/hotels/CEMZT-1.jpg",
  //     "imgs/hotels/CEMZT-2.jpg",
  //     "imgs/hotels/CEMZT-3.jpg",
  //     "imgs/hotels/CEMZT-4.jpg",
  //   ],
  // },
  {
    class: ".place-h7",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express La Paz",
    address:
      "Paseo Álvaro Obregón Km. 2.5, Col. Marina Palmira, Baja California, Baja California, México. C.P. 23010",
    coords: [24.186121392895867, -110.30139600191731],
    imageUrls: [
      "imgs/hotels/CEPAZ-1.jpg",
      "imgs/hotels/CEPAZ-2.jpg",
      "imgs/hotels/CEPAZ-3.jpg",
      "imgs/hotels/CEPAZ-4.jpg",
      "imgs/hotels/CEPAZ-5.jpg",
    ],
  },
  {
    class: ".place-h8",
    icon: ICON_CONFIGS.citySuites,
    name: "City Express Suites Los Cabos",
    address:
      "Carretera Transpeninsular Km 3 No.100 Corredor Turístico de Cabo San Lucas - San José del Cabo, El Tezal, Cabos San Lucas, Baja California Sur, México. C.P. 23454",
    coords: [22.901135598911257, -109.89454739586598],
    imageUrls: [
      "imgs/hotels/CSCSL-1.jpg",
      "imgs/hotels/CSCSL-2.jpg",
      "imgs/hotels/CSCSL-3.jpg",
      "imgs/hotels/CSCSL-4.jpg",
      "imgs/hotels/CSCSL-5.jpg",
    ],
  },
  {
    class: ".place-h9",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus Los Cabos",
    address:
      "Carretera Transpeninsular Km 3 No.100 Corredor Turístico de Cabo San Lucas - San José del Cabo, Fraccionamiento El Tezal, Cabos San Lucas, Baja California Sur, México. C.P. 23454",
    coords: [22.901505763671747, -109.89432139030941],
    imageUrls: ["imgs/hotels/CPCSL-1.jpg", "imgs/hotels/CPCSL-2.jpg"],
  },
  {
    class: ".place-h10",
    icon: ICON_CONFIGS.citySuites,
    name: "City Express Suites Tijuana Rio",
    address:
      "Blvd. General Rodolfo Sánchez Taboada No.9589 Int. A, Col. Marrón, Tijuana, Baja California, México. C.P. 22015",
    coords: [32.52387645660811, -117.02111564574426],
    imageUrls: [
      "imgs/hotels/CSTIR-1.jpg",
      "imgs/hotels/CSTIR-2.jpg",
      "imgs/hotels/CSTIR-3.jpg",
      "imgs/hotels/CSTIR-4.jpg",
      "imgs/hotels/CSTIR-5.jpg",
    ],
  },
  {
    class: ".place-h11",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus Tijuana",
    address:
      "Blvd. Agua Caliente 9985, Col. Calete de la Delegación Zona Centro, Tijuana, Baja California, México. C.P. 22044",
    coords: [32.51851404996508, -117.01700797654065],
    imageUrls: [
      "imgs/hotels/CPTIJ-1.jpg",
      "imgs/hotels/CPTIJ-2.jpg",
      "imgs/hotels/CPTIJ-3.jpg",
      "imgs/hotels/CPTIJ-4.jpg",
      "imgs/hotels/CPTIJ-5.jpg",
      "imgs/hotels/CPTIJ-6.jpg",
      "imgs/hotels/CPTIJ-7.jpg",
    ],
  },
  {
    class: ".place-h12",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Tijuana Insurgentes",
    address: "Av de los Insurgentes 5950, El Lago, 22210 Tijuana, B.C.",
    coords: [32.49490130570151, -116.92987813810277],
    imageUrls: [
      "imgs/hotels/CETII-1.jpg",
      "imgs/hotels/CETII-2.jpg",
      "imgs/hotels/CETII-3.jpg",
    ],
  },
  {
    class: ".place-h13",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Tijuana Otay",
    address:
      "General Lázaro Cárdenas Número 16002 A Prolongación sección Universidad Prolongación sección, Universidad, 22416 Tijuana, B.C.",
    coords: [32.53063898500523, -116.95563944399981],
    imageUrls: [
      "imgs/hotels/CETIO-1.jpg",
      "imgs/hotels/CETIO-2.jpg",
      "imgs/hotels/CETIO-3.jpg",
      "imgs/hotels/CETIO-4.jpg",
      "imgs/hotels/CETIO-5.jpg",
    ],
  },
  {
    class: ".place-h14",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Tijuana Rio",
    address: "Dr. Atl 2282, Zona Urbana Rio Tijuana, 22010 Tijuana, B.C.",
    coords: [32.52472850349082, -117.01369199981993],
    imageUrls: [
      "imgs/hotels/CETIR-1.jpg",
      "imgs/hotels/CETIR-2.jpg",
      "imgs/hotels/CETIR-3.jpg",
    ],
  },
  {
    class: ".place-h15",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Rosarito",
    address:
      "Carretera libre Tijuana - Ensenada 362, Reforma, 22710 Rosarito, B.C.",
    coords: [32.37550528692477, -117.06020424770938],
    imageUrls: [
      "imgs/hotels/CEROS-1.jpg",
      "imgs/hotels/CEROS-2.jpg",
      "imgs/hotels/CEROS-3.jpg",
      "imgs/hotels/CEROS-4.jpg",
    ],
  },
  {
    class: ".place-h16",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus Ensenada",
    address:
      "Carretera Tijuana-Ensenada km 104 S/N El Sauzal, 22760 Ensenada, B.C.",
    coords: [31.88066834761152, -116.68331143608602],
    imageUrls: [
      "imgs/hotels/CEENS-1.jpg",
      "imgs/hotels/CEENS-2.jpg",
      "imgs/hotels/CEENS-3.jpg",
      "imgs/hotels/CEENS-4.jpg",
      "imgs/hotels/CEENS-5.jpg",
    ],
  },
  {
    class: ".place-h17",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Ensenada",
    address:
      "Boulevard Costero B1-A2, Manzana 29, Carlos Pacheco, 22890 Ensenada, B.C.",
    coords: [31.851089917798554, -116.59607306840464],
    imageUrls: [
      "imgs/hotels/CPENS-1.jpg",
      "imgs/hotels/CPENS-2.jpg",
      "imgs/hotels/CPENS-3.jpg",
      "imgs/hotels/CPENS-4.jpg",
      "imgs/hotels/CPENS-5.jpg",
      "imgs/hotels/CPENS-6.jpg",
    ],
  },
  {
    class: ".place-h18",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Puebla Centro",
    address:
      "Calle 10 Norte No. 1406, Col. El Alto, Puebla, Puebla, México, C.P. 72000",
    coords: [19.04624752457034, -98.1890636475404],
    imageUrls: [
      "imgs/hotels/CEPC-1.jpg",
      "imgs/hotels/CEPC-2.jpg",
      "imgs/hotels/CEPC-3.jpg",
      "imgs/hotels/CEPC-4.jpg",
      "imgs/hotels/CEPC-5.jpg",
    ],
  },
  {
    class: ".place-h19",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Puebla Finsa",
    address: "Lateral Sur Autopista Mexico Puebla km 117, 11000 Puebla, México",
    coords: [19.11262798467519, -98.2493071480656],
    imageUrls: ["imgs/hotels/CEPF-1.jpg", "imgs/hotels/CEPF-2.jpg"],
  },
  {
    class: ".place-h20",
    icon: ICON_CONFIGS.cityJunior,
    name: "City Express Junior Puebla Finsa",
    address:
      "Calle Guerrero No. 117 Perteneciente a la Junta Auxiliar, Sanctorum, 72730 Puebla, México",
    coords: [19.112072836241687, -98.25036077399636],
  },
  {
    class: ".place-h21",
    icon: ICON_CONFIGS.cityJunior,
    name: "City Express Junior Puebla Angelópolis",
    address:
      "Cto Juan Pablo II 1743, Reserva Territorial Atlixcáyotl, La Noria, 72410 Puebla, México",
    coords: [19.038445238667865, -98.22303787044719],
  },
  {
    class: ".place-h22",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Veracruz",
    address: "Blvd. Manuel Ávila Camacho 2374, Costa de Oro, 94299 Veracruz",
    coords: [19.160470025580455, -96.1001392615565],
    imageUrls: [
      "imgs/hotels/CEV-1.jpg",
      "imgs/hotels/CEV-2.jpg",
      "imgs/hotels/CEV-3.jpg",
      "imgs/hotels/CEV-4.jpg",
      "imgs/hotels/CEV-5.jpg",
    ],
  },
  {
    class: ".place-h23",
    icon: ICON_CONFIGS.cityJunior,
    name: "City Express Junior Veracruz Aeropuerto",
    address:
      "Calzada Manuel de Jesús Clouthier 6241 Valente Díaz, Calzada Manuel de Jesús Clouthier 6241, Valente Díaz, 91725 Veracruz",
    coords: [19.16094004878582, -96.20119055547339],
    imageUrls: [
      "imgs/hotels/CEJVER-1.jpg",
      "imgs/hotels/CEJVER-2.jpg",
      "imgs/hotels/CEJVER-3.jpg",
    ],
  },
  {
    class: ".place-h24",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Xalapa",
    address:
      "Blvrd Cristobal Colon 391, Jardines de las Animas, 91190 Xalapa-Enríquez, Veracruz",
    coords: [19.51539761163402, -96.87719050335063],
    imageUrls: [
      "imgs/hotels/CEXAL-1.jpg",
      "imgs/hotels/CEXAL-2.jpg",
      "imgs/hotels/CEXAL-3.jpg",
      "imgs/hotels/CEXAL-4.jpg",
      "imgs/hotels/CEXAL-5.jpg",
    ],
  },
  {
    class: ".place-h25",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Tuxtla Gutiérrez",
    address:
      "Libramiento Sur-Poniente No. 2950, Col. Santa Elena, Tuxtla Gutiérrez, Chiapas, México. C.P. 29060 Tel.: 961 617 0090",
    coords: [16.748481862732863, -93.14322071557028],
    imageUrls: [
      "imgs/hotels/CE-TUX-1.jpg",
      "imgs/hotels/CE-TUX-2.jpg",
      "imgs/hotels/CE-TUX-3.jpg",
      "imgs/hotels/CE-TUX-4.jpg",
    ],
  },
  {
    class: ".place-h26",
    icon: ICON_CONFIGS.cityJunior,
    name: "City Express Junior Tuxtla Gutiérrez Poliforum",
    address:
      "Blvd. Salomon González Blanco No. 4350, Col. Patria Nueva, Tuxtla Gutiérrez, Chiapas, México. C.P. 29045 Tel.: 961 617 3250",
    coords: [16.750540753636834, -93.07474994440628],
    imageUrls: [
      "imgs/hotels/CJ-TUX-1.jpg",
      "imgs/hotels/CJ-TUX-2.jpg",
      "imgs/hotels/CJ-TUX-3.jpg",
    ],
  },
  {
    class: ".place-h27",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Tapachula",
    address:
      "Calzada de Guadalupe 236, Vallejo, Gustavo A. Madero, Ciudad de México, México. C.P. 07870 Tel.: 55 8851 8140",
    coords: [14.874709838385394, -92.28576122804074],
    imageUrls: [
      "imgs/hotels/CE-TAP-1.jpg",
      "imgs/hotels/CE-TAP-2.jpg",
      "imgs/hotels/CE-TAP-3.jpg",
      "imgs/hotels/CE-TAP-4.jpg",
      "imgs/hotels/CE-TAP-5.jpg",
      "imgs/hotels/CE-TAP-6.jpg",
      "imgs/hotels/CE-TAP-7.jpg",
    ],
  },
  {
    class: ".place-h28",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Comitán",
    address:
      "Blvd. De las Federaciones Km. 1260 No. 4023, Barrio de Chichimá Acapetahua, Comitán de Domínguez, Chiapas, México. C.P. 30039 Tel.: 963 632 9930",
    coords: [16.21514771128128, -92.1151258512979],
    imageUrls: [
      "imgs/hotels/CE-COM-1.jpg",
      "imgs/hotels/CE-COM-2.jpg",
      "imgs/hotels/CE-COM-3.jpg",
      "imgs/hotels/CE-COM-4.jpg",
    ],
  },
  {
    class: ".place-h29",
    icon: ICON_CONFIGS.cityCentro,
    name: "City Centro Oaxaca",
    address:
      "Aldama No. 410, Barrio de Jalatlaco, Oaxaca de Juárez, Oaxaca, México. C.P. 68080 Tel.: 951 502 2270",
    coords: [17.068016534020916, -96.71515539836818],
    imageUrls: [
      "imgs/hotels/CCOAX-1.jpg",
      "imgs/hotels/CCOAX-2.jpg",
      "imgs/hotels/CCOAX-3.jpg",
      "imgs/hotels/CCOAX-4.jpg",
      "imgs/hotels/CCOAX-5.jpg",
      "imgs/hotels/CCOAX-6.jpg",
      "imgs/hotels/CCOAX-7.jpg",
      "imgs/hotels/CCOAX-8.jpg",
    ],
  },
  {
    class: ".place-h30",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Oaxaca",
    address:
      "Calzada Niños Heroes de Chapultepec No. 300, Col. Centro, Oaxaca de Juárez, Oaxaca, México. C.P. 68000 Tel.: 951 502 3500",
    coords: [17.072674389687954, -96.72502454572613],
    imageUrls: [
      "imgs/hotels/CEOAX-1.jpg",
      "imgs/hotels/CEOAX-2.jpg",
      "imgs/hotels/CEOAX-3.jpg",
      "imgs/hotels/CEOAX-4.jpg",
    ],
  },
  {
    class: ".place-h31",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Villahermosa",
    address:
      "Av. Adolfo Ruiz Cortinez Poniente 1803-A, Col. Atasta, Villahermosa, Tabasco, México. C.P. 86100 Tel.: 993 310 9310",
    coords: [17.989214774901686, -92.94830190338104],
    imageUrls: [
      "imgs/hotels/CEVSA-1.jpg",
      "imgs/hotels/CEVSA-2.jpg",
      "imgs/hotels/CEVSA-3.jpg",
    ],
  },
  {
    class: ".place-h32",
    icon: ICON_CONFIGS.cityJunior,
    name: "City Express Junior Villahermosa",
    address:
      "Avenida Adolfo Ruiz Cortines No.2103, Atasta de Serra, Villahermosa, Tabasco, México. C.P. 86100 Tel.: 993 310 4351",
    coords: [17.989120140634046, -92.94810145972744],
    imageUrls: [
      "imgs/hotels/CJVSA-1.jpg",
      "imgs/hotels/CJVSA-2.jpg",
      "imgs/hotels/CJVSA-3.jpg",
      "imgs/hotels/CJVSA-4.jpg",
    ],
  },
  {
    class: ".place-h33",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Campeche",
    address:
      "Av. Adolfo Ruiz Cortinez No. 12, Sector Fundadores, Área Ah-Kim-Pech, San Francisco de Campeche, Campeche, México. C.P. 24028 Tel.: 981 127 3760",
    coords: [19.849694928919313, -90.53339583270623],
    imageUrls: [
      "imgs/hotels/CE-CAMP-1.jpg",
      "imgs/hotels/CE-CAMP-2.jpg",
      "imgs/hotels/CE-CAMP-3.jpg",
      "imgs/hotels/CE-CAMP-4.jpg",
    ],
  },
  {
    class: ".place-h34",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus Mérida",
    address:
      "Calle 60 No. 346 , Centro, Mérida, Yucatán, México. C.P. 97000 Tel.: 999 690 1380",
    coords: [20.98380059388506, -89.61904717500967],
    imageUrls: [
      "imgs/hotels/CP-MER-1.jpg",
      "imgs/hotels/CP-MER-2.jpg",
      "imgs/hotels/CP-MER-3.jpg",
      "imgs/hotels/CP-MER-4.jpg",
      "imgs/hotels/CP-MER-5.jpg",
      "imgs/hotels/CP-MER-6.jpg",
      "imgs/hotels/CP-MER-7.jpg",
      "imgs/hotels/CP-MER-8.jpg",
    ],
  },
  {
    class: ".place-h35",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Mérida",
    address:
      "Av. Prolongación Paseo de Montejo No. 332, Col. Benito Juárez Norte, Mérida, Yucatán, México. C.P. 97119 Tel.: 999 930 3230",
    coords: [21.020670579039912, -89.61886560744146],
    imageUrls: [
      "imgs/hotels/CE-MER-1.jpg",
      "imgs/hotels/CE-MER-2.jpg",
      "imgs/hotels/CE-MER-3.jpg",
      "imgs/hotels/CE-MER-4.jpg",
    ],
  },
  {
    class: ".place-h36",
    icon: ICON_CONFIGS.cityJunior,
    name: "City Express Junior Mérida Altabrisa",
    address:
      "Calle 4 Periférico, entre calles 7 y 9C, Santa Rita Cholul, Mérida, Yucatán, México. C.P. 97130 Tel.: 999 913 0100",
    coords: [21.028237329791782, -89.57163977448214],
    imageUrls: [
      "imgs/hotels/CJ-MER-1.jpg",
      "imgs/hotels/CJ-MER-2.jpg",
      "imgs/hotels/CJ-MER-3.jpg",
      "imgs/hotels/CJ-MER-4.jpg",
    ],
  },
  {
    class: ".place-h37",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus Cancún Aeropuerto Riviera",
    address:
      "Carr. Federal Cancun-Puerto Morelos SM-47 M-01 L-1-22 U.P.E. UC-05, Cancún, Quintana Roo, México. C.P. 77506 Tel.: 998 872 8710",
    coords: [20.98901692933984, -86.86326529670939],
    imageUrls: [
      "imgs/hotels/CPCHC-1.jpg",
      "imgs/hotels/CPCHC-2.jpg",
      "imgs/hotels/CPCHC-3.jpg",
      "imgs/hotels/CPCHC-4.jpg",
    ],
  },
  {
    class: ".place-h38",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express By Marriott Cancún",
    address:
      "Av. Nichupté Supermanzana 8, Manzana 1 Lote 4, Col. Centro, Cancún, Quintana Roo, México. C.P. 77500 Tel.: 998 881 1930",
    coords: [21.15061281164727, -86.82237648163172],
    imageUrls: [
      "imgs/hotels/CECUN-1.jpg",
      "imgs/hotels/CECUN-2.jpg",
      "imgs/hotels/CECUN-3.jpg",
    ],
  },
  {
    class: ".place-h39",
    icon: ICON_CONFIGS.cityJunior,
    name: "City Express Junior Cancún",
    address:
      "Av. Tulum Supermanzana 8, Manzana 1 Lote 3-01, Col. Centro, Cancún, Quintana Roo, México. C.P. 77500 Tel.: 998 193 3890",
    coords: [21.143589337088304, -86.82255077871051],
    imageUrls: [
      "imgs/hotels/CJCUN-1.jpg",
      "imgs/hotels/CJCUN-2.jpg",
      "imgs/hotels/CJCUN-3.jpg",
      "imgs/hotels/CJCUN-4.jpg",
    ],
  },
  {
    class: ".place-h40",
    icon: ICON_CONFIGS.citySuites,
    name: "City Express Suites Playa del Carmen",
    address:
      "Av. Balamkanche Mza. 30 Lt 4, Playacar Fase II, Playa del Carmen, Quintana Roo, México. C.P. 77710 Tel.: 984 206 3488",
    coords: [20.98862867101274, -86.8586411293809],
    imageUrls: [
      "imgs/hotels/CSPDC-1.jpg",
      "imgs/hotels/CSPDC-2.jpg",
      "imgs/hotels/CSPDC-3.jpg",
      "imgs/hotels/CSPDC-4.jpg",
      "imgs/hotels/CSPDC-5.jpg",
      "imgs/hotels/CSPDC-6.jpg",
    ],
  },
  {
    class: ".place-h41",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Playa del Carmen",
    address:
      "Av. Balamkanche Lt 4 Mza 30 Playacar Fase II, Fraccionamiento Playa Fase II, Solidaridad, Quintana Roo, México. C.P. 77710 Tel.: 984 206 3930",
    coords: [20.62420388700023, -87.08835762390181],
    imageUrls: [
      "imgs/hotels/CEPDC-1.jpg",
      "imgs/hotels/CEPDC-2.jpg",
      "imgs/hotels/CEPDC-3.jpg",
    ],
  },
  {
    class: ".place-h41-1",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Chetumal",
    address:
      "Av. Insurgentes Km 5.025, Col. Emancipación de México, Chetumal, Quintana Roo, México. C.P. 77084 Tel.: 983 835 1980",
    coords: [18.521701654377868, -88.3241786634215],
    imageUrls: [
      "imgs/hotels/CECTM-1.jpg",
      "imgs/hotels/CECTM-2.jpg",
      "imgs/hotels/CECTM-3.jpg",
    ],
  },
  {
    class: ".place-h42",
    icon: ICON_CONFIGS.citySuites,
    name: "City Express Suites Querétaro",
    address:
      "Av. 5 de Febrero No. 9852, Fracc. Industrial Benito Juárez Zona Jurica, Santiago de Querétaro, Querétaro, México. C.P. 76120 Tel.: 442 103 1700",
    coords: [20.653790047026078, -100.4322079191971],
    imageUrls: [
      "imgs/hotels/CSQRO-1.jpg",
      "imgs/hotels/CSQRO-2.jpg",
      "imgs/hotels/CSQRO-3.jpg",
      "imgs/hotels/CSQRO-4.jpg",
    ],
  },
  {
    class: ".place-h43",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Querétaro",
    address:
      "Lateral Autopista México - Querétaro No. 2103, Col. Estrella, Santiago de Querétaro, Querétaro, México. C.P. 76030 Tel.: 442 251 9900",
    coords: [20.577899844867108, -100.38530201802467],
    imageUrls: [
      "imgs/hotels/CEQRO-1.jpg",
      "imgs/hotels/CEQRO-2.jpg",
      "imgs/hotels/CEQRO-3.jpg",
      "imgs/hotels/CEQRO-4.jpg",
      "imgs/hotels/CEQRO-5.jpg",
    ],
  },
  {
    class: ".place-h44",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Querétaro Juríca",
    address:
      "Av. 5 de Febrero No. 9200-A, Col. Parque Industrial Benito Juárez Fracc. Jurica, Querétaro Jurica, Querétaro, México. C.P. 76100 Tel.: 442 103 3900",
    coords: [20.649337298660154, -100.43184446522952],
    imageUrls: [
      "imgs/hotels/CEQRJ-1.jpg",
      "imgs/hotels/CEQRJ-2.jpg",
      "imgs/hotels/CEQRJ-3.jpg",
      "imgs/hotels/CEQRJ-4.jpg",
      "imgs/hotels/CEQRJ-5.jpg",
      "imgs/hotels/CEQRJ-6.jpg",
      "imgs/hotels/CEQRJ-7.jpg",
    ],
  },
  {
    class: ".place-h45",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus León Centro de Convenciones",
    address:
      "Blvd. Adolfo López Mateos Ote. No. 2003, Col. Las Bugambilias, León, Guanajuato, México. C.P. 37270 Tel.: 477 645 0179",
    coords: [21.11675497950489, -101.65510684617068],
    imageUrls: [
      "imgs/hotels/CPLEO-1.jpg",
      "imgs/hotels/CPLEO-2.jpg",
      "imgs/hotels/CPLEO-3.jpg",
      "imgs/hotels/CPLEO-4.jpg",
      "imgs/hotels/CPLEO-5.jpg",
    ],
  },
  {
    class: ".place-h46",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express León",
    address:
      "Blvd. Adolfo López Mateos Ote. No. 3002, Fracc. San Isidro de Jerez, León, Guanajuato, México. C.P. 37530 Tel.: 477 710 5900",
    coords: [21.09945798776053, -101.62885496313424],
    imageUrls: [
      "imgs/hotels/CELEO-1.jpg",
      "imgs/hotels/CELEO-2.jpg",
      "imgs/hotels/CELEO-3.jpg",
      "imgs/hotels/CELEO-4.jpg",
      "imgs/hotels/CELEO-5.jpg",
    ],
  },
  {
    class: ".place-h47",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Celaya",
    address:
      "Eje Norponiente Manuel J. Clouthier No. 803, Col. 15 de Mayo, Celaya, Guanajuato, México. C.P. 38016 Tel.: 461 618 5900",
    coords: [20.551323481152004, -100.83986322284878],
    imageUrls: [
      "imgs/hotels/CECEL-1.jpg",
      "imgs/hotels/CECEL-2.jpg",
      "imgs/hotels/CECEL-3.jpg",
    ],
  },
  {
    class: ".place-h48",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Celaya Galerías",
    address:
      "Eje Nororiente Luis Donaldo Colosio No. 203, Santa Rosalía o La Cano, Celaya, Guanajuato, México. C.P. 38080 Tel.: 461 662 7800",
    coords: [20.529118888725442, -100.77614360941224],
    imageUrls: [
      "imgs/hotels/CECEG-1.jpg",
      "imgs/hotels/CECEG-2.jpg",
      "imgs/hotels/CECEG-3.jpg",
      "imgs/hotels/CECEG-4.jpg",
    ],
  },
  {
    class: ".place-h49",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Irapuato",
    address:
      "Blvd. Villas de Irapuato No. 1362, Col. Ejido Irapuato, Irapuato, Guanajuato, México. C.P. 36643 Tel.: 462 606 9800",
    coords: [20.684416171828733, -101.37475192123175],
    imageUrls: [
      "imgs/hotels/CEIRA-1.jpg",
      "imgs/hotels/CEIRA-2.jpg",
      "imgs/hotels/CEIRA-3.jpg",
    ],
  },
  {
    class: ".place-h50",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Irapuato Norte",
    address:
      "Av. Paseo Solidaridad No. 15595, Col. Ejido Lo De Juarez, Irapuato, Guanajuato, México. C.P. 36620 Tel.: 462 167 0600",
    coords: [20.719276983763066, -101.34456531224339],
    imageUrls: [
      "imgs/hotels/CEIRN-1.jpg",
      "imgs/hotels/CEIRN-2.jpg",
      "imgs/hotels/CEIRN-3.jpg",
    ],
  },
  {
    class: ".place-h51",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Salamanca",
    address:
      "Avenida Faja de Oro No.1805 Poniente, El Pirul, Salamanca, Guanajuato, México. C.P. 36740 Tel.: 464 641 8100",
    coords: [20.585255637635292, -101.22166902528166],
    imageUrls: [
      "imgs/hotels/CESLM-1.jpg",
      "imgs/hotels/CESLM-2.jpg",
      "imgs/hotels/CESLM-3.jpg",
    ],
  },
  {
    class: ".place-h52",
    icon: ICON_CONFIGS.citySuites,
    name: "City Express Suites Silao Aeropuerto",
    address:
      "Libramiento Norte No. 900 B, Col. Los Fresnos, Silao, Guanajuato, México. C.P. 36126 Tel.: 472 135 2300",
    coords: [20.95672663691956, -101.44286464987859],
    imageUrls: [
      "imgs/hotels/CCSLP-1.jpg",
      "imgs/hotels/CCSLP-2.jpg",
      "imgs/hotels/CCSLP-3.jpg",
      "imgs/hotels/CCSLP-4.jpg",
      "imgs/hotels/CCSLP-5.jpg",
      "imgs/hotels/CCSLP-6.jpg",
    ],
  },
  {
    class: ".place-h53",
    icon: ICON_CONFIGS.cityCentro,
    name: "City Centro San Luis Potosí",
    address:
      "Calle Ignacio Aldama Núm. 405, Centro Historico, San Luis Potosí, San Luis Potosí, México. C.P. 78000 Tel.: 444 804 2280",
    coords: [22.15050003686416, -100.9767920075235],
    imageUrls: [
      "imgs/hotels/CC-SLP-1.jpg",
      "imgs/hotels/CC-SLP-2.jpg",
      "imgs/hotels/CC-SLP-3.jpg",
      "imgs/hotels/CC-SLP-4.jpg",
      "imgs/hotels/CC-SLP-5.jpg",
      "imgs/hotels/CC-SLP-6.jpg",
    ],
  },
  {
    class: ".place-h54",
    icon: ICON_CONFIGS.citySuites,
    name: "City Express Suites San Luis Potosí",
    address:
      "Av. Benito Juárez No. 1530, Col. Jardines del Sur, San Luis Potosí, San Luis Potosí, México. C.P. 78399 Tel.: 444 826 9900",
    coords: [22.13451770097291, -100.93266151545917],
    imageUrls: [
      "imgs/hotels/CSSLP-1.jpg",
      "imgs/hotels/CSSLP-2.jpg",
      "imgs/hotels/CSSLP-3.jpg",
      "imgs/hotels/CSSLP-4.jpg",
    ],
  },
  // {
  //   class: ".place-h55",
  //   icon: ICON_CONFIGS.cityPlus,
  //   name: "City Express Plus San Luis Potosí",
  //   address:
  //     "Andador Plaza Lomas Lote 52, Lomas del tecnológico, San Luis Potosí, San Luis Potosí, México. C.P. 78215 Tel.: 800 248 9003",
  //   coords: [22.130452860751276, -101.0282814730454],
  //   imageUrls: [
  //     "imgs/hotels/CPSLP-1.jpg",
  //     "imgs/hotels/CPSLP-2.jpg",
  //     "imgs/hotels/CPSLP-3.jpg",
  //     "imgs/hotels/CPSLP-4.jpg",
  //     "imgs/hotels/CPSLP-5.jpg",
  //     "imgs/hotels/CPSLP-6.jpg",
  //   ],
  // },
  {
    class: ".place-h56",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express San Luis Potosí Zona Industrial",
    address:
      "Carr. Central México - San Luis No. 2150, Fracc. Industrias, San Luis Potosí, San Luis Potosí, México. C.P. 78399 Tel.: 444 826 8700",
    coords: [22.13142294679292, -100.92390590320706],
    imageUrls: [
      "imgs/hotels/CESLP-1.jpg",
      "imgs/hotels/CESLP-2.jpg",
      "imgs/hotels/CESLP-3.jpg",
      "imgs/hotels/CESLP-4.jpg",
      "imgs/hotels/CESLP-5.jpg",
    ],
  },
  {
    class: ".place-h57",
    icon: ICON_CONFIGS.cityJunior,
    name: "City Express Junior San Luis Potosí Carranza",
    address:
      "Av. Venustiano Carranza 1513, Los Álamos, San Luis Potosí, San Luis Potosí, México. C.P. 78174 Tel.: 444 880 8400",
    coords: [22.149871112032297, -100.99823449483075],
    imageUrls: [
      "imgs/hotels/CJSLP-1.jpg",
      "imgs/hotels/CJSLP-2.jpg",
      "imgs/hotels/CJSLP-3.jpg",
    ],
  },
  {
    class: ".place-h58",
    icon: ICON_CONFIGS.cityJunior,
    name: "City Express Junior San Luis Potosí Zona Industrial",
    address:
      "Carretera 57 México-Piedras Negras No. 147, Col. Las Mercedes, San Luis Potosí, San Luis Potosí, México. C.P. 78394 Tel.: 444 475 4400 ",
    coords: [22.118474338946285, -100.90523323636027],
    imageUrls: [
      "imgs/hotels/CJSLI-1.jpg",
      "imgs/hotels/CJSLI-2.jpg",
      "imgs/hotels/CJSLI-3.jpg",
    ],
  },
  {
    class: ".place-h59",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Chihuahua",
    address:
      "Avenida de la Juventud 6108, Col. Desarrollo Comercial El Saucito, Chihuahua, Chihuahua, México. C.P. 31110 Tel.: 614 158 4000",
    coords: [28.664374245624636, -106.12828042454666],
    imageUrls: [
      "imgs/hotels/CECUU-1.jpg",
      "imgs/hotels/CECUU-2.jpg",
      "imgs/hotels/CECUU-3.jpg",
    ],
  },
  {
    class: ".place-h60",
    icon: ICON_CONFIGS.cityExpress,
    name: "City Express Ciudad Juárez",
    address:
      "Av. Tomás Fernández No. 7810, Col. Partido Doblado, Ciudad Juárez, Chihuahua, México. C.P. 32424 Tel.: 656 227 0200",
    coords: [31.730103264759435, -106.4106733041144],
    imageUrls: [
      "imgs/hotels/CECJS-1.jpg",
      "imgs/hotels/CECJS-2.jpg",
      "imgs/hotels/CECJS-3.jpg",
      "imgs/hotels/CECJS-4.jpg",
      "imgs/hotels/CECJS-5.jpg",
    ],
  },
  {
    class: ".place-h61",
    icon: ICON_CONFIGS.cityJunior,
    name: "City Express Junior Ciudad Juárez",
    address:
      "Av. Paseo de la Victoria No. 3781, Col. Partido Senecu, Ciudad Juárez, Chihuahua, México. C.P. 32543 Tel.: 656 688 3550",
    coords: [31.68964668107684, -106.39185940826489],
    imageUrls: [
      "imgs/hotels/CJCJS-1.jpg",
      "imgs/hotels/CJCJS-2.jpg",
      "imgs/hotels/CJCJS-3.jpg",
      "imgs/hotels/CJCJS-4.jpg",
      "imgs/hotels/CJCJS-5.jpg",
    ],
  },

  {
    class: ".place-h64",
    iconType: "cityExpress",
    name: "City Express By Marriott Puebla Centro",
    address: "C.10 Nte. 1406 Col. El Alto Puebla",
    coords: [19.046247, -98.189063],
    imageUrls: [],
  },
  {
    class: ".place-h65",
    iconType: "cityExpress",
    name: "City Express By Marriott Puebla Angelópolis",
    address:
      "Cto. Juan Pablo II No. 1755 Reserva Territorial Atlixcayotl, La noria Puebla",
    coords: [19.038445, -98.223037],
    imageUrls: [],
  },
  {
    class: ".place-h66",
    iconType: "cityCentro",
    name: "City Centro By Marriott Oaxaca",
    address: "Calle Aldama No. 410 Barrio de Jalatlaco",
    coords: [17.068016, -96.715155],
    imageUrls: [],
  },
  {
    class: ".place-h67",
    iconType: "cityExpress",
    name: "City Express by Marriott Oaxaca",
    address: "Calzada Niños Héroes 300 Ruta de Independencia Centro Oaxaca",
    coords: [17.072674, -96.725024],
    imageUrls: [],
  },
  {
    class: ".place-h68",
    icon: ICON_CONFIGS.cityCentro,
    name: "City Centro Ciudad de México",
    address: "República de Uruguay No. 45 Centro Histórico CDMX, Cuauhtémoc.",
    coords: [19.430637819084087, -99.13773885429049],
    imageUrls: [],
  },
  {
    class: ".place-h69",
    icon: ICON_CONFIGS.cityPlus,
    name: "City Express Plus By Marriott Reforma el Angel",
    address: "Ave. de la Reforma No. 334 Col. Juárez CDMX",
    coords: [19.426624516216542, -99.16651962480681],
    imageUrls: [],
  },
  {
    class: ".place-h70",
    icon: ICON_CONFIGS.hotssonQueretaro,
    name: "Hotel HS Hotsson Querétaro",
    address: "Boulevard Bernardo Quintana 8300, Centro Sur Querétaro",
    coords: [20.5547, -100.3725],
    imageUrls: [],
  },
  {
    class: ".place-h71",
    icon: ICON_CONFIGS.hotssonLeon,
    name: "Hotel HS Hotsson León",
    address: "Ote. 1102 Col. Los Gavilanes Leon, GTO.",
    coords: [21.1167, -101.6833],
    imageUrls: [],
  },
];

// Route definitions
const routes = [
  // Centro
  {
    id: "routeCQL",
    name: "Ciudad de México - Querétaro - León",
    color: "#4B0082",
    weight: 6,
    offset: 0.01,
    locations: ["Ciudad de México", "Queretaro", "León"],
  },
  {
    id: "routeQLS",
    name: "Queretaro - León - San Luis Potosí",
    color: "#96FF43",
    weight: 6,
    locations: ["Queretaro", "León", "San Luis Potosí"],
  },
  // Occidente
  {
    id: "routeGP",
    name: "Guadalajara - Puerto Vallarta",
    color: "purple",
    weight: 6,
    locations: ["Guadalajara", "Puerto Vallarta"],
  },
  // Norte
  {
    id: "routeCSC",
    name: "Chihuahua - Sierra Tarahumara - Ciudad Juarez",
    color: "#E72525",
    weight: 6,
    locations: ["Chihuahua", "Sierra Tarahumara", "Ciudad Juárez"],
  },
  {
    id: "routeMPC",
    name: "Mazatlan - La Paz - Los Cabos",
    color: "orange",
    weight: 6,
    locations: ["Mazatlan", "La Paz", "Los Cabos"],
  },
  {
    id: "routeTRE",
    name: "Tijuana - Rosarito - Ensenada",
    color: "green",
    weight: 6,
    locations: ["Tijuana", "Rosarito", "Ensenada"],
  },
  // Sur
  {
    id: "routeCPO",
    name: "Ciudad de México - Puebla - Oaxaca",
    color: "#FF6B00",
    weight: 6,
    locations: ["Ciudad de México", "Puebla", "Oaxaca"],
  },
  {
    id: "routePV",
    name: "Puebla - Veracruz",
    color: "cyan",
    weight: 6,
    locations: ["Puebla", "Veracruz"],
  },
  {
    id: "routeTTC",
    name: "Tuxtla - Tapachula - Comitan",
    color: "brown",
    weight: 6,
    locations: ["Tuxtla", "Tapachula", "Comitan"],
  },
  {
    id: "routeOAX",
    name: "Oaxaca Route",
    color: "#D0BB00",
    weight: 6,
    locations: [
      "Capulalpam",
      "Mazunte",
      "Huautla de Jiménez",
      "San Pedro y San Pablo Teposcolula",
      "Mitla",
      "Monte Alban",
      "Puerto Escondido",
      "Hierve el Agua",
      "Arbol del Tule",
    ],
  },
  {
    id: "routeTCM",
    name: "Tabasco - Campeche - Merida",
    color: "#DD0BFF",
    weight: 6,
    locations: ["Tabasco", "Campeche", "Merida"],
  },
  {
    id: "routeCPC",
    name: "Cancun - Playa del Carmen - Chetumal",
    color: "#00C092",
    weight: 6,
    locations: ["Cancún", "Playa del Carmen", "Chetumal"],
  },
  {
    id: "routeQLS",
    name: "Queretaro - Leon - San Luis Potosi",
    color: "#96FF43",
    weight: 6,
    locations: ["Queretaro", "León", "San Luis Potosí"],
  },
  {
    id: "routeCSC",
    name: "Chihuahua - Sierra Tarahumara - Ciudad Juarez",
    color: "#E72525",
    weight: 6,
    locations: ["Chihuahua", "Sierra Tarahumara", "Ciudad Juárez"],
  },
  {
    id: "routeCPO",
    name: "Ciudad de México - Puebla - Oaxaca",
    color: "#FF6B00",
    weight: 6,
    locations: ["Ciudad de México", "Puebla", "Oaxaca"],
  },
  {
    id: "routeCQL",
    name: "Ciudad de México - Querétaro - León",
    color: "#4B0082",
    weight: 6,
    offset: 0.01,
    locations: ["Ciudad de México", "Queretaro", "León"],
  },
  {
    id: "routePSO",
    name: "Puebla - Salina Cruz - Oaxaca",
    color: "#008B8B",
    weight: 6,
    locations: ["Puebla", "Salina Cruz", "Oaxaca"],
  },
];

// =============================================
// INITIALIZATION
// =============================================

// Initialize map
const map = L.map("map").setView(
  MAP_CONFIG.defaultCenter,
  MAP_CONFIG.defaultZoom
);
map.zoomControl.setPosition("bottomright");

// Add tile layer
L.tileLayer(MAP_CONFIG.tileLayerUrl, {
  attribution: MAP_CONFIG.tileLayerAttribution,
}).addTo(map);

// Create icons
const icons = {
  cityExpress: L.icon(ICON_CONFIGS.cityExpress),
  cityCentro: L.icon(ICON_CONFIGS.cityCentro),
  cityJunior: L.icon(ICON_CONFIGS.cityJunior),
  cityPlus: L.icon(ICON_CONFIGS.cityPlus),
  citySuites: L.icon(ICON_CONFIGS.citySuites),
  attraction: L.icon(ICON_CONFIGS.attraction),
  hotssonQueretaro: L.icon(ICON_CONFIGS.hotssonQueretaro),
  hotssonLeon: L.icon(ICON_CONFIGS.hotssonLeon),
};

// =============================================
// MARKER MANAGEMENT
// =============================================

// Create location markers
const locationMarkers = locations.map((location) => {
  const marker = L.marker(location.coords).addTo(map);
  marker.bindPopup(`<b>${location.name}</b>`);
  marker.on("click", () => {
    map.flyTo(location.coords, 12, { duration: 5 });
  });
  return marker;
});

// Create hotel markers
const hotelMarkers = {};
const hotelMarkerObjects = hotelLocations.map((hotel, index) => {
  const marker = L.marker(hotel.coords, {
    icon: icons[
      hotel.icon?.iconUrl.includes("hotsson-queretaro")
        ? "hotssonQueretaro"
        : hotel.icon?.iconUrl.includes("hotsson-leon")
        ? "hotssonLeon"
        : hotel.icon?.iconUrl.includes("plus")
        ? "cityPlus"
        : hotel.icon?.iconUrl.includes("centro")
        ? "cityCentro"
        : hotel.icon?.iconUrl.includes("junior")
        ? "cityJunior"
        : hotel.icon?.iconUrl.includes("suites")
        ? "citySuites"
        : "cityExpress"
    ],
  }).addTo(map);

  const imageElements =
    hotel.imageUrls && hotel.imageUrls.length
      ? hotel.imageUrls
          .map(
            (url, idx) =>
              `<img class="thumb lozad" data-src="${url}" alt="${
                hotel.name
              } - ${idx + 1}" 
         onclick="openModal('${url}')" style="cursor: pointer;" />`
          )
          .join("")
      : "";

  const popupContent = `
    <h3>${hotel.name}</h3>
    ${
      hotel.address
        ? `<div style="margin-bottom:8px;">${hotel.address} 
       <small><a href="https://www.google.com/maps?q=${hotel.coords[0]},${hotel.coords[1]}" 
       target="_blank">Ver en Google maps</a></small></div>`
        : ""
    }
    <div class="thumbs">${imageElements}</div>
  `;

  const popup = L.popup({ closeButton: true, autoClose: false }).setContent(
    popupContent
  );

  marker.on("mouseover", () => {
    if (!popupOpenedByClick) {
      marker.openPopup();
    }
  });

  marker.on("mouseout", () => {
    if (!popupOpenedByClick) {
      marker.closePopup();
    }
  });

  marker.on("click", () => {
    popupOpenedByClick = true;
    map.flyTo(hotel.coords, 12, { duration: 1 });
  });

  marker.bindPopup(popup);
  hotelMarkers[index] = marker;
  return marker;
});

// Create attraction markers
const attractionMarkers = {};
const attractionMarkerObjects = attractionLocations.map((attraction, index) => {
  const marker = L.marker(attraction.coords, {
    icon: icons.attraction,
  }).addTo(map);

  const attractionImgs =
    attraction.imgURL && attraction.imgURL.length
      ? attraction.imgURL
          .map(
            (url, idx) =>
              `<img class="thumb lozad" data-src="${url}" alt="${
                attraction.name
              } - ${idx + 1}" 
         onclick="openModal('${url}')" style="cursor: pointer;" />`
          )
          .join("")
      : "";

  const popupContent = `
    <h3>${attraction.name}</h3>
    <div class="thumbs">${attractionImgs}</div>
  `;

  const popup = L.popup({ closeButton: true, autoClose: false }).setContent(
    popupContent
  );

  marker.on("mouseover", () => {
    if (!popupOpenedByClick) {
      marker.openPopup();
    }
  });

  marker.on("mouseout", () => {
    if (!popupOpenedByClick) {
      marker.closePopup();
    }
  });

  marker.on("click", () => {
    popupOpenedByClick = true;
    map.flyTo(attraction.coords, 12, { duration: 1 });
  });

  marker.bindPopup(popup);
  attractionMarkers[index] = marker;
  return marker;
});

// =============================================
// ROUTE MANAGEMENT
// =============================================

// Create route polylines
const routePolylines = {};
routes.forEach((route) => {
  const routeCoords = route.locations
    .map((locationName) => {
      const location = locations.find((loc) => loc.name === locationName);
      if (!location) return null;
      // Apply offset if specified in the route
      if (route.offset) {
        return [
          location.coords[0] + route.offset,
          location.coords[1] + route.offset,
        ];
      }
      return location.coords;
    })
    .filter((coord) => coord !== null);

  if (routeCoords.length > 1) {
    const polyline = L.polyline(routeCoords, {
      color: route.color,
      weight: route.weight,
      className: route.id,
    }).addTo(map);

    routePolylines[route.id] = polyline;
  }
});

// =============================================
// EVENT HANDLERS
// =============================================

// Track if popup was opened by click
let popupOpenedByClick = false;

// Handle map clicks
map.on("click", () => {
  if (popupOpenedByClick) {
    map.closePopup();
    popupOpenedByClick = false;
  }
});

// Attach event listeners to hotel elements
hotelLocations.forEach((hotel, index) => {
  const elements = document.querySelectorAll(hotel.class);
  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      map.flyTo(hotel.coords, 14, { duration: 1 });
      popupOpenedByClick = true;
      setTimeout(() => {
        hotelMarkers[index].openPopup();
      }, 1000);
    });
  });
});

// Attach event listeners to attraction elements
attractionLocations.forEach((attraction, index) => {
  const elements = document.querySelectorAll(attraction.class);
  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      map.flyTo(attraction.coords, 14, { duration: 1 });
      popupOpenedByClick = true;
      setTimeout(() => {
        attractionMarkers[index].openPopup();
      }, 1000);
    });
  });
});

// Bind route info and place links
function bindRouteInfo(route, routeInfoClass) {
  const routeInfo = document.querySelector(`.${routeInfoClass}`);

  route.on("mouseover", (e) => {
    routeInfo.style.display = "block";
    routeInfo.style.left = e.originalEvent.clientX + "px";
    routeInfo.style.top = e.originalEvent.clientY + "px";
  });

  route.on("mouseout", () => {
    routeInfo.style.display = "none";
  });

  route.on("click", () => {
    map.fitBounds(route.getBounds());
    document.querySelector(".desc").style.display = "none";

    document.querySelectorAll(".route-detail").forEach((el) => {
      if (el.classList.contains(route.options.className)) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });
  });
}

function bindPlaceLink(placeLink, route) {
  placeLink.addEventListener("click", () => {
    map.fitBounds(route.getBounds());
    document.querySelector(".desc").style.display = "none";

    document.querySelectorAll(".route-detail").forEach((el) => {
      if (el.classList.contains(route.options.className)) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });
  });
}

// Bind route info and place links for each route
Object.keys(routePolylines).forEach((routeId) => {
  const route = routePolylines[routeId];
  bindRouteInfo(route, `${routeId}.route-info`);

  const placeLink = document.querySelector(`.${routeId}.place-link`);
  if (placeLink) {
    bindPlaceLink(placeLink, route);
  }
});

// Close detail route div
document.querySelectorAll(".route-close").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".route-detail").forEach((el) => {
      el.style.display = "none";
    });
    document.querySelector(".desc").style.display = "block";
    map.setView(MAP_CONFIG.defaultCenter, 6);
  });
});

// =============================================
// MARKER VISIBILITY MANAGEMENT
// =============================================

// Hide and show markers based on zoom level
const markersToShow = hotelMarkerObjects.concat(attractionMarkerObjects);

function updateMarkers() {
  const zoomLevel = map.getZoom();
  if (zoomLevel >= MAP_CONFIG.minZoomForMarkers) {
    markersToShow.forEach((marker) => {
      map.addLayer(marker);
    });
  } else {
    markersToShow.forEach((marker) => {
      map.removeLayer(marker);
    });
  }
}

updateMarkers();

map.on("zoomend", updateMarkers);

// =============================================
// MODAL MANAGEMENT
// =============================================

function openModal(imageUrl) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imageUrl;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = (event) => {
  const modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// =============================================
// LAZY LOADING
// =============================================

// Initialize lozad for lazy loading images
const observer = lozad(".lozad");
observer.observe();

// Observe images in popups when they open
map.on("popupopen", () => {
  observer.observe();
});

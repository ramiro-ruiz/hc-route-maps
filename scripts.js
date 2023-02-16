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
  { name: 'Ciudad Juárez', coords: [31.68867212402103, -106.42155903089791] },
];

var attractionLocations = [
  { class: '.place-a0', name: 'Costa del Sol Jalisco', coords: [20.685036427607514, -105.03568628739964] },
  { class: '.place-a1', name: 'El Arenal "Pueblo de Amigos" "Guajes y vasijas"', coords: [20.777227962970148, -103.69523043183752] },
  { class: '.place-a2', name: 'Amatitlan tierra de los Amates', coords: [20.83673327985156, -103.73178861441657] },
  { class: '.place-a3', name: 'Tequila Capital del Tequila', coords: [20.881732256524472, -103.8326889652464] },
  { class: '.place-a4', name: 'Magdalena Minas de piedra', coords: [20.99307143678248, -104.02149078664917] },
  { class: '.place-a5', name: 'Ixtlan del Rio Zona arqueológica Los Toriles', coords: [21.04000736823083, -104.34390341316588] },
  { class: '.place-a6', name: 'Mexpan muebles de madera y canastos', coords: [21.035325134488712, -104.41585640098917] },
  { class: '.place-a7', name: 'Jala', coords: [21.105794599946726, -104.4362956211041] },
  { class: '.place-a8', name: 'Chacala Hermosa playa de arena fina', coords: [21.168684324761625, -105.22687923103578] },
  { class: '.place-a9', name: 'Rincón de Guayabitos Playa "coco loco"', coords: [21.025314339823375, -105.26262437433739] },
  { class: '.place-a10', name: 'Las Caletas', coords: [20.505588975918606, -105.38002765495182] },
  { class: '.place-a11', name: 'Observatorio', coords: [23.189126208925043, -106.4259917161002] },
  { class: '.place-a12', name: 'Isla Venados', coords: [23.23431853307027, -106.46646762196812] },
  { class: '.place-a13', name: 'El Faro', coords: [23.18120138205908, -106.42473045102071] },
  { class: '.place-a14', name: 'Ferry a La Paz', coords: [23.187240458554154, -106.4206109149075] },
  { class: '.place-a15', name: 'El Centenario', coords: [24.100943787626214, -110.41062847084854] },
  { class: '.place-a16', name: 'Isla del Espriritu Santo', coords: [24.467819901751394, -110.34127566083616] },
  { class: '.place-a17', name: 'Los Cabos', coords: [22.890055006177494, -109.91686276860645] },
  { class: '.place-a18', name: 'La Ventana', coords: [24.046540806918706, -109.99362945571679] },
  { class: '.place-a19', name: 'Sierra de la Laguna "Los Barriles"', coords: [23.69551950009106, -109.6503657527342] },
  { class: '.place-a20', name: 'El Triunfo', coords: [23.802902768997686, -110.10848333496992] },
  { class: '.place-a21', name: 'Plaza Fiesta', coords: [32.52809856210235, -117.02082040396367] },
  { class: '.place-a22', name: 'Playas de Tijuana', coords: [32.52429485549768, -117.13673245298978] },
  { class: '.place-a23', name: 'Centro Cultural', coords: [32.5305079769086, -117.02286702023656] },
  { class: '.place-a24', name: 'Playas de Rosarito', coords: [32.29141838514872, -117.03444533635755] },
  { class: '.place-a25', name: 'Cantina Hussongs', coords: [31.865137424432817, -116.62803201333357] },
  { class: '.place-a26', name: 'Plaza Santo Tomás', coords: [31.868290178828047, -116.62242219190618] },
  { class: '.place-a27', name: 'La Bufadora', coords: [31.724126747193427, -116.72246486831257] },
  { class: '.place-a28', name: 'Valle de Guadalupe', coords: [32.0964853198933, -116.5734369091653] },
  { class: '.place-a29', name: 'Cholula', coords: [19.07294175804219, -98.31791746717782] },
  { class: '.place-a30', name: 'Atlixco', coords: [18.91415376592388, -98.43085705277792] },
  { class: '.place-a31', name: 'Chignahuapan', coords: [19.838941350503664, -98.03211015798597] },
  { class: '.place-a32', name: 'Cuetzalan', coords: [20.017794892216674, -97.52352347573823] },
  { class: '.place-a33', name: 'Huachinango', coords: [20.175693209360926, -98.06713400970881] },
  { class: '.place-a34', name: 'Xicotepec', coords: [20.279046629379362, -97.96462922939796] },
  { class: '.place-a35', name: 'Zacatlán de las Manzanas', coords: [19.935650505678204, -97.96309960364557] },
  { class: '.place-a36', name: 'Orizaba', coords: [18.850315414302216, -97.10088698413807] },
  { class: '.place-a37', name: 'Coscomatepec', coords: [19.06865731819889, -97.04644842905391] },
  { class: '.place-a38', name: 'Papantla', coords: [20.457193046603976, -97.3137248780907] },
  { class: '.place-a39', name: 'Zozocolco', coords: [20.140252186876985, -97.57464705095258] },
  { class: '.place-a40', name: 'San Cristobal de las Casas', coords: [16.7358434931746, -92.63693155483203] },
  { class: '.place-a41', name: 'Chiapa de Corzo', coords: [16.702873576102537, -93.00885441862661] },
  { class: '.place-a42', name: 'Cañon del Sumidero', coords: [16.84797617719708, -93.11074622308573] },
  { class: '.place-a43', name: 'Los Ruiseñores', coords: [14.893841888677931, -92.28495459455225] },
  { class: '.place-a44', name: 'El Consuelo', coords: [14.903065689661092, -92.23908215360565] },
  { class: '.place-a45', name: 'Capulalpam', coords: [17.30435345941862, -96.44735256132944] },
  { class: '.place-a46', name: 'Mazunte', coords: [15.66795210290462, -96.55505923975662] },
  { class: '.place-a47', name: 'Huautla de Jiménez', coords: [18.130555552559162, -96.8426044266374] },
  { class: '.place-a48', name: 'San Pedro y San Pablo Teposcolula', coords: [17.510560825691172, -97.48898290843367] },
  { class: '.place-a49', name: 'Mitla', coords: [16.921368210768367, -96.39890879784434] },
  { class: '.place-a50', name: 'Monte Alban', coords: [17.043861821315534, -96.76780790361023] },
  { class: '.place-a51', name: 'Puerto Escondido', coords: [15.872369306654525, -97.07746772210392] },
  { class: '.place-a52', name: 'Hierve el Agua', coords: [16.86576602936036, -96.27542714625638] },
  { class: '.place-a53', name: 'Arbol del Tule', coords: [17.046691522962593, -96.63577857879356] },
  { class: '.place-a55', name: 'Tapijulapa', coords: [17.462181970253898, -92.77818663189181] },
  { class: '.place-a56', name: 'Cascadas de Villa Luz', coords: [17.44615991760416, -92.76357683645827] },
  { class: '.place-a57', name: 'Jardín de Dios', coords: [17.474979691173907, -92.81074989412978] },
  { class: '.place-a58', name: 'Cañon del Usumacinta', coords: [17.424267255272298, -91.49130217323] },
  { class: '.place-a59', name: 'Los Fuertes y Puerta de Tierra', coords: [19.84158939123812, -90.53540328164395] },
  { class: '.place-a60', name: 'Palizada', coords: [18.254853525309954, -92.09124468330849] },
  { class: '.place-a61', name: 'Edzna', coords: [19.599067927931856, -90.22879521399068] },
  { class: '.place-a62', name: 'CalaKmul', coords: [18.858508491897553, -89.51579970243135] },
  { class: '.place-a63', name: 'Parque Nacional Sierra Nevada', coords: [8.441038708429948, -70.9067341654192] },
  { class: '.place-a64', name: 'Paseo Montejo', coords: [20.984027597578336, -89.61736613268172] },
  { class: '.place-a65', name: 'Plaza Grande', coords: [20.96719686131585, -89.6244172982237] },
  { class: '.place-a66', name: 'Valladolid', coords: [20.689559288588654, -88.20310787401658] },
  { class: '.place-a67', name: 'Izamal', coords: [20.929685592776753, -89.02298870225142] },
  { class: '.place-a68', name: 'Sisal', coords: [21.166879249403724, -90.02429526657582] },
  { class: '.place-a69', name: 'Maní', coords: [20.393260423150124, -89.39186809269883] },
  { class: '.place-a70', name: 'Chichén Itzá', coords: [20.68461216746037, -88.56685871429802] },
  { class: '.place-a71', name: 'Laguna Nichupté', coords: [21.08005559737725, -86.77535078021013] },
  { class: '.place-a72', name: 'Tulum', coords: [20.211632782710186, -87.46561052306656] },
  { class: '.place-a73', name: 'Cenote Dos Ojos', coords: [20.32554714129354, -87.38933784744816] },
  { class: '.place-a74', name: 'Cobá', coords: [20.49174687629001, -87.73387955532455] },
  { class: '.place-a75', name: 'Holbox', coords: [21.52198191087448, -87.37991103301376] },
  { class: '.place-a76', name: 'Rio Lagartos', coords: [21.595741854052715, -88.15894608004756] },
  { class: '.place-a77', name: 'Cozumel', coords: [20.506885056041405, -86.94563346648346] },
  { class: '.place-a78', name: 'Bacalar', coords: [18.678594288569396, -88.39278812977716] },
  { class: '.place-a79', name: 'Peña de Bernal', coords: [20.748835541099833, -99.94539240232118] },
  { class: '.place-a80', name: 'Tequisquiapan', coords: [20.519516709668327, -99.88625025834868] },
  { class: '.place-a81', name: 'Jalpan de Serra', coords: [21.218965168649706, -99.47177390770415] },
  { class: '.place-a82', name: 'Cadereyta', coords: [20.693625727224443, -99.82881621316761] },
  { class: '.place-a83', name: 'Amealco', coords: [20.186489866213037, -100.14698733109809] },
  { class: '.place-a84', name: 'Celaya', coords: [20.529179331182846, -100.81409992720484] },
  { class: '.place-a85', name: 'Irapuato', coords: [20.67877858640074, -101.35244685656177] },
  { class: '.place-a86', name: 'Silao', coords: [20.952697628446764, -101.42895316121921] },
  { class: '.place-a87', name: 'Salamanca', coords: [20.57420707195768, -101.19516368233086] },
  { class: '.place-a88', name: 'Real de Catorce', coords: [23.689483045548275, -100.88540679122438] },
  { class: '.place-a89', name: 'Aquismón', coords: [21.625120716734237, -99.01907281419217] },
  { class: '.place-a90', name: 'Xilitla', coords: [21.384054217937337, -98.99210582618147] },
  { class: '.place-a91', name: 'Santa Maria del Rio', coords: [21.8033018963162, -100.73441656418329] },
  { class: '.place-a92', name: 'Creel', coords: [27.750391282090213, -107.63663954512481] },
  { class: '.place-a93', name: 'Casas Grandes', coords: [31.551584504343406, -107.49492103868525] },
  { class: '.place-a94', name: 'Batopillas', coords: [27.030430419341755, -107.73619336226045] },
  { class: '.place-a95', name: 'Sierra Tarahumara', coords: [27.022740161736035, -107.20323399608391] },
  { class: '.place-a96', name: 'La Rodadora	', coords: [31.69009133817407, -106.42774623356502] },
  { class: '.place-a97', name: 'Dunas de Samalayuca', coords: [31.34315592018881, -106.41968196284488] },
];

var hotelLocations = [
  { class: ".place-h0", name: 'City Express Plus Guadalajara Expo', coords: [20.65195856855506, -103.39705115596848] },
  { class: ".place-h1", name: 'City Express Plus Providencia', coords: [20.698773994535614, -103.37340650385191] },
  { class: ".place-h2", name: 'City Express Plus Palomar', coords: [20.588784049984586, -103.44408660385436] },
  { class: ".place-h3", name: 'City Express Guadalajara Aeropuerto', coords: [20.574943364376754, -103.29341573689527] },
  { class: ".place-h4", name: 'City Express Plus Puerto Vallarta', coords: [20.654018544662325, -105.23938750117863] },
  { class: ".place-h5", name: 'City Express Plus Mazatlán', coords: [23.273493, -106.453708] },
  { class: ".place-h6", name: 'City Express Mazatlán', coords: [23.246601023180634, -106.43846403633331] },
  { class: ".place-h7", name: 'City Express La Paz', coords: [24.186121392895867, -110.30139600191731] },
  { class: ".place-h8", name: 'City Express Suites Los Cabos', coords: [22.901135598911257, -109.89454739586598] },
  { class: ".place-h9", name: 'City Express Plus Los Cabos', coords: [22.901505763671747, -109.89432139030941] },
  { class: ".place-h10", name: 'City Express Suites Tijuana Rio', coords: [32.52387645660811, -117.02111564574426] },
  { class: ".place-h11", name: 'City Express Plus Tijuana', coords: [32.51851404996508, -117.01700797654065] },
  { class: ".place-h12", name: 'City Express Tijuana Insurgentes', coords: [32.49490130570151, -116.92987813810277] },
  { class: ".place-h13", name: 'City Express Tijuana Otay', coords: [32.53063898500523, -116.95563944399981] },
  { class: ".place-h14", name: 'City Express Tijuana Rio', coords: [32.52472850349082, -117.01369199981993] },
  { class: ".place-h15", name: 'City Express Rosarito', coords: [32.37550528692477, -117.06020424770938] },
  { class: ".place-h16", name: 'City Express Plus Ensenada', coords: [31.88066834761152, -116.68331143608602] },
  { class: ".place-h17", name: 'City Express Ensenada', coords: [31.851089917798554, -116.59607306840464] },
  { class: ".place-h18", name: 'City Express Puebla Centro', coords: [19.04624752457034, -98.1890636475404] },
  { class: ".place-h19", name: 'City Express Puebla Finsa', coords: [19.11262798467519, -98.2493071480656] },
  { class: ".place-h20", name: 'City Express Junior Puebla Finsa', coords: [19.112072836241687, -98.25036077399636] },
  { class: ".place-h21", name: 'City Express Junior Puebla Angelópolis', coords: [19.038445238667865, -98.22303787044719] },
  { class: ".place-h22", name: 'City Express Veracruz', coords: [19.160470025580455, -96.1001392615565] },
  { class: ".place-h23", name: 'City Express Junior Veracruz Aeropuerto', coords: [19.16094004878582, -96.20119055547339] },
  { class: ".place-h24", name: 'City Express Xalapa', coords: [19.51539761163402, -96.87719050335063] },
  { class: ".place-h25", name: 'City Express Tuxtla Gutiérrez', coords: [16.748481862732863, -93.14322071557028] },
  { class: ".place-h26", name: 'City Express Junior Tuxtla Gutiérrez Poliforum', coords: [16.750540753636834, -93.07474994440628] },
  { class: ".place-h27", name: 'City Express Tapachula', coords: [14.874709838385394, -92.28576122804074] },
  { class: ".place-h28", name: 'City Express Comitán', coords: [16.21514771128128, -92.1151258512979] },
  { class: ".place-h29", name: 'City Centro Oaxaca', coords: [17.068016534020916, -96.71515539836818] },
  { class: ".place-h30", name: 'City Express Oaxaca', coords: [17.072674389687954, -96.72502454572613] },
  { class: ".place-h31", name: 'City Express Villahermosa', coords: [17.989214774901686, -92.94830190338104] },
  { class: ".place-h32", name: 'City Express Junior Villahermosa', coords: [17.989120140634046, -92.94810145972744] },
  { class: ".place-h33", name: 'City Express Campeche', coords: [19.849694928919313, -90.53339583270623] },
  { class: ".place-h34", name: 'City Express Plus Mérida', coords: [20.98380059388506, -89.61904717500967] },
  { class: ".place-h35", name: 'City Express Mérida', coords: [21.020670579039912, -89.61886560744146] },
  { class: ".place-h36", name: 'City Express Junior Merida Altabrisa', coords: [21.028237329791782, -89.57163977448214] },
  { class: ".place-h37", name: 'City Express Plus Cancún Aeropuerto Riviera', coords: [20.98901692933984, -86.86326529670939] },
  { class: ".place-h38", name: 'City Express Cancún', coords: [21.15061281164727, -86.82237648163172] },
  { class: ".place-h39", name: 'City Express Junior Cancún', coords: [21.143589337088304, -86.82255077871051] },
  { class: ".place-h40", name: 'City Express Suites Playa del Carmen', coords: [20.98862867101274, -86.8586411293809] },
  { class: ".place-h41", name: 'City Express Playa del Carmen', coords: [20.62420388700023, -87.08835762390181] },
  { class: ".place-h41-1", name: 'City Express Chetumal', coords: [18.521701654377868, -88.3241786634215] },
  { class: ".place-h42", name: 'City Express Suites Querétaro', coords: [20.653790047026078, -100.4322079191971] },
  { class: ".place-h43", name: 'City Express Querétaro', coords: [20.577899844867108, -100.38530201802467] },
  { class: ".place-h44", name: 'City Express Queretaro Juríca', coords: [20.649337298660154, -100.43184446522952] },
  { class: ".place-h45", name: 'City Express Plus Leon Centro de Convenciones', coords: [21.11675497950489, -101.65510684617068] },
  { class: ".place-h46", name: 'City Express León', coords: [21.09945798776053, -101.62885496313424] },
  { class: ".place-h47", name: 'City Express Celaya', coords: [20.551323481152004, -100.83986322284878] },
  { class: ".place-h48", name: 'City Express Celaya Galerías', coords: [20.529118888725442, -100.77614360941224] },
  { class: ".place-h49", name: 'City Express Irapuato', coords: [20.684416171828733, -101.37475192123175] },
  { class: ".place-h50", name: 'City Express Irapuato Norte', coords: [20.719276983763066, -101.34456531224339] },
  { class: ".place-h51", name: 'City Express Salamanca', coords: [20.585255637635292, -101.22166902528166] },
  { class: ".place-h52", name: 'City Express Suites Silao Aeropuerto', coords: [20.95672663691956, -101.44286464987859] },
  { class: ".place-h53", name: 'City Centro San Luis Potosí', coords: [22.15050003686416, -100.9767920075235] },
  { class: ".place-h54", name: 'City Express Suites San Luis Potosí', coords: [22.13451770097291, -100.93266151545917] },
  { class: ".place-h55", name: 'City Express Plus San Luis Potosi', coords: [22.130452860751276, -101.0282814730454] },
  { class: ".place-h56", name: 'City Express San Luis Potosí Zona Industrial', coords: [22.13142294679292, -100.92390590320706] },
  { class: ".place-h57", name: 'City Express Junior San Luis Potosí Carranza', coords: [22.149871112032297, -100.99823449483075] },
  { class: ".place-h58", name: 'City Express Junior San Luis Potosí Zona Industrial', coords: [22.118474338946285, -100.90523323636027] },
  { class: ".place-h59", name: 'City Express Chihuahua', coords: [28.664374245624636, -106.12828042454666] },
  { class: ".place-h60", name: 'City Express Ciudad Juárez', coords: [31.730103264759435, -106.4106733041144] },
  { class: ".place-h61", name: 'City Express Junior Ciudad Juárez', coords: [31.68964668107684, -106.39185940826489] },
];


var markers = locations.map(function(location) {
  var marker = L.marker(location.coords).addTo(map);
  marker.bindPopup('<b>' + location.name + '</b>');
  marker.on('click', function() {
    map.flyTo(location.coords, 12, { duration: 5 });
  });
  return marker;
});

// Attach event listeners to all hotel elements
hotelLocations.forEach(location => {
  const element = document.querySelector(location.class);
  if (element) {
    element.addEventListener("click", function(event) {
      event.preventDefault();
      map.flyTo(location.coords, 14, {
        duration: 1
      });
    });
  }
});

// Attach event listeners to all attraction elements
attractionLocations.forEach(location => {
  const element = document.querySelector(location.class);
  if (element) {
    element.addEventListener("click", function(event) {
      event.preventDefault();
      map.flyTo(location.coords, 14, {
        duration: 1
      });
    });
  }
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
    iconUrl: 'logos/city-express.svg',
    iconSize: [60, 20],
    iconAnchor: [30, 0],
    popupAnchor: [0, 0],
});

// Custom icons - Attractions
var attractionIcon = L.icon({
    iconUrl: 'attraction.svg',
    iconSize: [30, 40],
    iconAnchor: [15, 0],
    popupAnchor: [0, 0],
});

// Create hotel markers
var markersHotels = hotelLocations.map(function(hotelLocation) {
  var marker = L.marker(hotelLocation.coords, {
    icon: cityExpressIcon,
  }).addTo(map);
  marker.bindPopup('<b>' + hotelLocation.name + '</b>');
  marker.on('click', function() {
    map.flyTo(hotelLocation.coords, 12, { duration: 1 });
  });
  return marker;
});

// Create attraction markers
var markersAttractions = attractionLocations.map(function(attractionLocation) {
  var marker = L.marker(attractionLocation.coords, {
    icon: attractionIcon,
  }).addTo(map);
  marker.bindPopup('<b>' + attractionLocation.name + '</b>');
  marker.on('click', function() {
    map.flyTo(attractionLocation.coords, 12, { duration: 1 });
  });
  return marker;
});




 // https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

// function createMarkers(data) {
//   const markers = [];
//   data.forEach(item => {
//     const { lat, lng, name, className, url } = item;
//     const marker = L.marker([lat, lng], { icon: cityExpressIcon })
//       .addTo(map)
//       .bindPopup(
//         `<strong class='${className}'>${name}</strong><br><br><small><a href='${url}'>Ver Google maps</a></small>`
//       );
//     markers.push(marker);
//   });
//   return markers;
// }

// const pvHotels = createMarkers([
//   { lat: 20.65388807175917, lng: -105.23968788697148, name: 'City Express Plus Puerto Vallarta', className: 'pvHotel', url: 'https://www.google.com/maps/@20.65388807175917,-105.23968788697148,14z' }
// ]);
// const mzHotels = createMarkers([
//   { lat: 23.246601023180634, lng: -106.43846403633331, name: 'City Express Mazatlán', className: 'mzHotel', url: 'https://www.google.com/maps/@23.246601023180634,-106.43846403633331,14z' }
// ]);
// const pazHotels = createMarkers([
//   { lat: 24.186121392895867, lng: -110.30139600191731, name: 'City Express La Paz', className: 'mzHotel', url: 'https://www.google.com/maps/@24.186121392895867, -110.30139600191731,14z' }
// ]);
// const caboHotels = createMarkers([
//   { lat: 22.901135598911257, lng: -109.89454739586598, name: 'City Express Suites Los Cabos', className: 'pazHotel', url: 'https://www.google.com/maps/@22.901135598911257, -109.89454739586598,14z' },
//   { lat: 22.901505763671747, lng: -109.89432139030941, name: 'City Express Plus Los Cabos', className: 'pazHotel2', url: 'https://www.google.com/maps/@22.901505763671747, -109.89432139030941,14z' }
// ]);



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
    const routeDetailElements = document.querySelectorAll('.route-detail');
    for (let i = 0; i < routeDetailElements.length; i++) {
        const routeDetailElement = routeDetailElements[i];
        if (routeDetailElement.classList.contains(route.options.className)) {
        routeDetailElement.style.display = 'block';
        } else {
        routeDetailElement.style.display = 'none';
        }
    }
  });
}

function bindPlaceLink(placeLink, route) {
  placeLink.addEventListener('click', function () {
    map.fitBounds(route.getBounds());
    desc.style.display = 'none';
    const routeDetailElements = document.querySelectorAll('.route-detail');
    for (let i = 0; i < routeDetailElements.length; i++) {
        const routeDetailElement = routeDetailElements[i];
        if (routeDetailElement.classList.contains(route.options.className)) {
        routeDetailElement.style.display = 'block';
        } else {
        routeDetailElement.style.display = 'none';
        }
    }
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
var markersToShow = markersHotels.concat(markersAttractions);

function updateMarkers() {
  var zoomLevel = map.getZoom();
  if (zoomLevel >= 8) {
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

// Crear el mapa y establecer la vista inicial
var map = L.map('map').setView([21.88234, -102.28259], 13);

// Agregar la capa de mapa base
var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Definir el conjunto de mapas base
var baseMaps = {
    "OpenStreetMap": osmLayer
};

// Añadir un marcador para el Parque Tres Centurias con el ícono personalizado
var parqueTresCenturias = L.marker([21.87434, -102.29783], { icon: iconParque }).addTo(map);
parqueTresCenturias.bindPopup("<b>Parque Tres Centurias</b><br>Un espacio recreativo y cultural.");

// Configurar el ícono personalizado para el Museo de la Insurgencia
var iconMuseo = L.icon({
    iconUrl: 'Imagenes/MUSEOINSURGENCIA1.jpg', 
    iconSize: [50, 50],
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34]  
}); 

// Añadir un marcador para el Museo de la Insurgencia con el ícono personalizado
var museoInsurgencia = L.marker([21.88113, -102.29199], { icon: iconMuseo }).addTo(map);
museoInsurgencia.bindPopup("<b>Museo de la Insurgencia</b><br>Un lugar histórico con exhibiciones culturales.");

// Añadir un marcador para la Plaza de Toros
var plazaToros = L.marker([21.88505, -102.29543]).addTo(map);
plazaToros.bindPopup("<b>Plaza de Toros</b><br>Un lugar emblemático para las corridas de toros.");

// Añadir un marcador en la Plaza de la Patria
var plazaPatria = L.marker([21.88187, -102.29495]).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

// Añadir un marcador en el Museo Nacional de la Muerte
var museoMuerte = L.marker([21.88417, -102.28878]).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

// Definir el polígono para el Centro Histórico de Aguascalientes
var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

// Agrupar los marcadores para las capas
var overlayMaps = {
    "Lugares importantes": L.layerGroup([parqueTresCenturias, museoInsurgencia, plazaToros, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
};

// Agregar controles de capas
L.control.layers(baseMaps, overlayMaps).addTo(map);
// Íconos personalizados adicionales
var iconParqueMorelos = L.icon({
    iconUrl: 'imagenes/plaza_patria.png', 
    iconSize: [50, 50],
    iconAnchor: [15, 45],
    popupAnchor: [0, -45]
  }); 
  
  var iconJardinSanMarcos = L.icon({
    iconUrl: 'imagenes/jardin_san_marcos.png',
    iconSize: [50, 50],
    iconAnchor: [15, 45],
    popupAnchor: [0, -45]
  });
  
  var iconMuseoAguascalientes = L.icon({
    iconUrl: 'imagenes/museo_aguascalientes.png',
    iconSize: [50, 50],
    iconAnchor: [15, 45],
    popupAnchor: [0, -45]
  });
  
  // Añadir marcadores para los nuevos lugares
  var parqueMorelos = L.marker([21.87925, -102.30488], { icon: iconParqueMorelos }).addTo(map);
  parqueMorelos.bindPopup("<b>Parque Morelos</b><br>Un lugar ideal para pasear y relajarse.");
  
  var jardinSanMarcos = L.marker([21.87838, -102.29714], { icon: iconJardinSanMarcos }).addTo(map);
  jardinSanMarcos.bindPopup("<b>Jardín de San Marcos</b><br>Un parque emblemático de la ciudad.");
  
  var museoAguascalientes = L.marker([21.88095, -102.29578], { icon: iconMuseoAguascalientes }).addTo(map);
  museoAguascalientes.bindPopup("<b>Museo de Aguascalientes</b><br>Exhibiciones de arte local y nacional.");
  

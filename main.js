import './style.css'

import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet'
import 'proj4/dist/proj4'
import 'proj4leaflet/src/proj4leaflet'
import L from 'leaflet'

document.querySelector('#map').innerHTML = `
<noscript>
  here is a nice map Leaflet if javascript is enabled
 </noscript>
`
const lv95 = {
    epsg: 'EPSG:2056',
    def: '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs',
    resolutions: [50,20,10,5,2.5,1,0.5,0.25,0.1,0.05],
    origin: [2420000,1350000]
}
const crs = new L.Proj.CRS(lv95.epsg, lv95.def, {
    resolutions: lv95.resolutions,
    origin: lv95.origin
})
const map = new L.Map('map', {
    crs: crs,
    maxZoom: crs.options.resolutions.length,
});
L.tileLayer('https://tilesmn95.lausanne.ch/tiles/1.0.0/fonds_geo_osm_bdcad_couleur/default/2021/swissgrid_05/{z}/{y}/{x}.png', {
    maxZoom: crs.options.resolutions.length,
}).addTo(map);
const lausanneGareinMN95 = [2537968.5, 1152088.0];
map.setView(L.latLng(46.51721 ,6.62917),7);


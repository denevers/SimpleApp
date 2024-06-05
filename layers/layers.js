var wms_layers = [];

var lyr_AllHydroFeatures_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://maps.geogratis.gc.ca/wms/canvec_en",
    attributions: ' ',
                              params: {
                                "LAYERS": "hydro",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "All Hydro Features",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AllHydroFeatures_0, 0]);
var lyr_administrative_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://maps.geogratis.gc.ca/wms/canvec_en",
    attributions: ' ',
                              params: {
                                "LAYERS": "administrative",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "administrative",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_administrative_1, 0]);
var lyr_AllTransportFeatures_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://maps.geogratis.gc.ca/wms/canvec_en",
    attributions: ' ',
                              params: {
                                "LAYERS": "transport",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "All Transport Features",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AllTransportFeatures_2, 0]);
var format_gsc_cgc_3 = new ol.format.GeoJSON();
var features_gsc_cgc_3 = format_gsc_cgc_3.readFeatures(json_gsc_cgc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gsc_cgc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gsc_cgc_3.addFeatures(features_gsc_cgc_3);
var lyr_gsc_cgc_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gsc_cgc_3, 
                style: style_gsc_cgc_3,
                popuplayertitle: "gsc_cgc",
                interactive: true,
                    title: '<img src="styles/legend/gsc_cgc_3.png" /> gsc_cgc'
                });

lyr_AllHydroFeatures_0.setVisible(true);lyr_administrative_1.setVisible(true);lyr_AllTransportFeatures_2.setVisible(true);lyr_gsc_cgc_3.setVisible(true);
var layersList = [lyr_AllHydroFeatures_0,lyr_administrative_1,lyr_AllTransportFeatures_2,lyr_gsc_cgc_3];
lyr_gsc_cgc_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'url': 'url', });
lyr_gsc_cgc_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'url': 'TextEdit', });
lyr_gsc_cgc_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'url': 'no label', });
lyr_gsc_cgc_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
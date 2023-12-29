var wms_layers = [];

var format_landusesyglanduse_0 = new ol.format.GeoJSON();
var features_landusesyglanduse_0 = format_landusesyglanduse_0.readFeatures(json_landusesyglanduse_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landusesyglanduse_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landusesyglanduse_0.addFeatures(features_landusesyglanduse_0);
var lyr_landusesyglanduse_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_landusesyglanduse_0, 
                style: style_landusesyglanduse_0,
                interactive: false,
    title: 'land use syg — landuse<br />\
    <img src="styles/legend/landusesyglanduse_0_0.png" /> Beach<br />\
    <img src="styles/legend/landusesyglanduse_0_1.png" /> Forest<br />\
    <img src="styles/legend/landusesyglanduse_0_2.png" /> Mangrove<br />\
    <img src="styles/legend/landusesyglanduse_0_3.png" /> Residential<br />\
    <img src="styles/legend/landusesyglanduse_0_4.png" /> <br />'
        });
var format_Building_1 = new ol.format.GeoJSON();
var features_Building_1 = format_Building_1.readFeatures(json_Building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_1.addFeatures(features_Building_1);
var lyr_Building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building_1, 
                style: style_Building_1,
                interactive: true,
                title: '<img src="styles/legend/Building_1.png" /> Building'
            });
var format_RoaddigitizingRoad_2 = new ol.format.GeoJSON();
var features_RoaddigitizingRoad_2 = format_RoaddigitizingRoad_2.readFeatures(json_RoaddigitizingRoad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoaddigitizingRoad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoaddigitizingRoad_2.addFeatures(features_RoaddigitizingRoad_2);
var lyr_RoaddigitizingRoad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoaddigitizingRoad_2, 
                style: style_RoaddigitizingRoad_2,
                interactive: true,
                title: '<img src="styles/legend/RoaddigitizingRoad_2.png" /> Road digitizing — Road'
            });
var format_River_3 = new ol.format.GeoJSON();
var features_River_3 = format_River_3.readFeatures(json_River_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_3.addFeatures(features_River_3);
var lyr_River_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_River_3, 
                style: style_River_3,
                interactive: true,
                title: '<img src="styles/legend/River_3.png" /> River'
            });
var format_CONTOUR1_4 = new ol.format.GeoJSON();
var features_CONTOUR1_4 = format_CONTOUR1_4.readFeatures(json_CONTOUR1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR1_4.addFeatures(features_CONTOUR1_4);
var lyr_CONTOUR1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONTOUR1_4, 
                style: style_CONTOUR1_4,
                interactive: true,
                title: '<img src="styles/legend/CONTOUR1_4.png" /> CONTOUR1'
            });
var format_Coordinateinterstingpoint20_5 = new ol.format.GeoJSON();
var features_Coordinateinterstingpoint20_5 = format_Coordinateinterstingpoint20_5.readFeatures(json_Coordinateinterstingpoint20_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coordinateinterstingpoint20_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coordinateinterstingpoint20_5.addFeatures(features_Coordinateinterstingpoint20_5);
var lyr_Coordinateinterstingpoint20_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coordinateinterstingpoint20_5, 
                style: style_Coordinateinterstingpoint20_5,
                interactive: true,
                title: '<img src="styles/legend/Coordinateinterstingpoint20_5.png" /> Coordinate intersting point2.0'
            });
var format_Coordinateinterestingplace_6 = new ol.format.GeoJSON();
var features_Coordinateinterestingplace_6 = format_Coordinateinterestingplace_6.readFeatures(json_Coordinateinterestingplace_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coordinateinterestingplace_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coordinateinterestingplace_6.addFeatures(features_Coordinateinterestingplace_6);
var lyr_Coordinateinterestingplace_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coordinateinterestingplace_6, 
                style: style_Coordinateinterestingplace_6,
                interactive: true,
                title: '<img src="styles/legend/Coordinateinterestingplace_6.png" /> Coordinate interesting place'
            });

lyr_landusesyglanduse_0.setVisible(false);lyr_Building_1.setVisible(true);lyr_RoaddigitizingRoad_2.setVisible(true);lyr_River_3.setVisible(true);lyr_CONTOUR1_4.setVisible(true);lyr_Coordinateinterstingpoint20_5.setVisible(true);lyr_Coordinateinterestingplace_6.setVisible(true);
var layersList = [lyr_landusesyglanduse_0,lyr_Building_1,lyr_RoaddigitizingRoad_2,lyr_River_3,lyr_CONTOUR1_4,lyr_Coordinateinterstingpoint20_5,lyr_Coordinateinterestingplace_6];
lyr_landusesyglanduse_0.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Name': 'Name', });
lyr_Building_1.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', });
lyr_RoaddigitizingRoad_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Class': 'Class', });
lyr_River_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Class': 'Class', });
lyr_CONTOUR1_4.set('fieldAliases', {'fid': 'fid', 'Height': 'Height', 'layer': 'layer', 'path': 'path', });
lyr_Coordinateinterstingpoint20_5.set('fieldAliases', {'field_1': 'field_1', 'WGS 84': 'WGS 84', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_Coordinateinterestingplace_6.set('fieldAliases', {'field_1': 'field_1', 'WGS 84': 'WGS 84', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_landusesyglanduse_0.set('fieldImages', {'fid': 'TextEdit', 'Type': 'TextEdit', 'Name': 'TextEdit', });
lyr_Building_1.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', });
lyr_RoaddigitizingRoad_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Class': 'TextEdit', });
lyr_River_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Class': 'TextEdit', });
lyr_CONTOUR1_4.set('fieldImages', {'fid': 'TextEdit', 'Height': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Coordinateinterstingpoint20_5.set('fieldImages', {'field_1': 'Range', 'WGS 84': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_Coordinateinterestingplace_6.set('fieldImages', {'field_1': '', 'WGS 84': '', 'field_3': '', 'field_4': '', });
lyr_landusesyglanduse_0.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Name': 'no label', });
lyr_Building_1.set('fieldLabels', {'fid': 'no label', 'Area': 'header label', });
lyr_RoaddigitizingRoad_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Class': 'header label', });
lyr_River_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Class': 'no label', });
lyr_CONTOUR1_4.set('fieldLabels', {'fid': 'no label', 'Height': 'no label', 'layer': 'header label', 'path': 'header label', });
lyr_Coordinateinterstingpoint20_5.set('fieldLabels', {'field_1': 'header label', 'WGS 84': 'header label', 'field_3': 'header label', 'field_4': 'header label', });
lyr_Coordinateinterestingplace_6.set('fieldLabels', {'field_1': 'no label', 'WGS 84': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_Coordinateinterestingplace_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
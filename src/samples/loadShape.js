
import * as Cesium from "cesium";

export const addPoint  = viewer =>{
 
var pointGeometry = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(123.46,41.68, 10),
  typeid: "serverpoint",
  billboard: {
    image: "/圣诞小熊.svg",
    width: 45,
    height: 45,
    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(
      0,
      5000000
    ),
    disableDepthTestDistance: Number.POSITIVE_INFINITY,
  },
  label: {
    text: "姜饼熊",
    font: '500 18px Helvetica', 
    scale: 0.85,
    show: true, 
    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    fillColor: Cesium.Color.WHITE,
    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, 
    outlineWidth: 30.0,
    pixelOffset: new Cesium.Cartesian2(0, -60), //偏移量 
    //distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 5000.0),
  },
});
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(123.46,41.68, 1000),
});

}
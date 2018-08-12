import React, { Component } from 'react';
import ol from 'openlayers';

class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    const { target, center, zoom, data } = this.props.options;
    let _dataArray = data || [];
    let max_count = Math.max.apply(Math, _dataArray.map(item => item.count));
    _dataArray.map(item => item.weight = item.count / max_count);
    const vector = new ol.layer.Heatmap({
      gradient: ['#00f', '#0ff', '#0f0', '#ff0', '#f00'],
      blur: 10,
      radius: 10,
      shadow: 250,
      source: new ol.source.Vector({
        wrapX: false
      })
    });
    let features = [];
    _dataArray.forEach(function (data) {
      var _feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform(data.coordinate, 'EPSG:4326', 'EPSG:3857')),
        data: data,
        weight: data.weight
      });
      features.push(_feature);
    })
    vector.getSource().addFeatures(features)
    const raster = new ol.layer.Tile({
      source: new ol.source.OSM(),
      visible: true
    });

    const map = new ol.Map({
      layers: [raster, vector],
      target: target || 'heatMap',
      view: new ol.View({
        center: ol.proj.transform(center || [108.967213, 34.276221], 'EPSG:4326', 'EPSG:3857'),
        zoom: zoom || 5
      })
    });
  }
  render() {
    const {target}=this.props.options;
    return (<div id={target||"heatMap"}></div>)
  }
}

export default HeatMap;
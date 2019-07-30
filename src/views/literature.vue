<template>
  <div>
    <div class="literature_analysis">
      <div class="l_a_left">
        <h2>文献分析</h2>
        <div>文章内容</div>
      </div>
      <div class="l_a_right">
        <div>998716</div>
        <div>文章总数</div>
        <div>998716</div>
        <div>参考文献</div>
      </div>
    </div>
    <div class="literature_total"></div>
    <div class="literature_details"></div>
  </div>
</template>
<style>
</style>
<script>
var building_sh = "/asset/get/s/data-1557121698984-0GsjhH1SJ.json";
buildingsGeoJSON = [
  {
    height: 800,
    polygon: [
      [121.37041, 31.20569],
      [121.37032, 31.20569],
      [121.37021, 31.20571],
      [121.36954, 31.20598],
      [121.36895, 31.20621],
      [121.36891, 31.20625],
      [121.36891, 31.20631],
      [121.36891, 31.20638],
      [121.36896, 31.20646],
      [121.36987, 31.20802],
      [121.36992, 31.20808],
      [121.36997, 31.20811],
      [121.37003, 31.20813],
      [121.3701, 31.20812],
      [121.37081, 31.2078],
      [121.37156, 31.20751],
      [121.3716, 31.20746],
      [121.3716, 31.2074],
      [121.37159, 31.20732],
      [121.3711, 31.2065],
      [121.37064, 31.20583],
      [121.37053, 31.20574],
      [121.37048, 31.20571],
      [121.37041, 31.20569]
    ]
  }
  //, {
  //     'height': 1000,
  //     'polygon': [
  //         [121.38491, 31.20744],
  //         [121.38548, 31.20739],
  //         [121.3855, 31.20738],
  //         [121.38551, 31.20737],
  //         [121.38552, 31.2072],
  //         [121.38584, 31.20721],
  //         [121.38591, 31.20698],
  //         [121.38596, 31.2068],
  //         [121.38597, 31.20661],
  //         [121.38596, 31.20643],
  //         [121.38584, 31.20643],
  //         [121.38582, 31.20603],
  //         [121.38584, 31.20586],
  //         [121.38585, 31.20567],
  //         [121.38355, 31.2056],
  //         [121.38356, 31.20597],
  //         [121.384, 31.20597],
  //         [121.38401, 31.20642],
  //         [121.38429, 31.20642],
  //         [121.38429, 31.20646],
  //         [121.3844, 31.20676],
  //         [121.38461, 31.20699],
  //         [121.3848, 31.20717],
  //         [121.38485, 31.20722],
  //         [121.38489, 31.20733],
  //         [121.38491, 31.20744],
  //         [121.38461, 31.20699],
  //         [121.3848, 31.20717],
  //         [121.38485, 31.20722],
  //         [121.38489, 31.20733],
  //         [121.38491, 31.20744]
  //     ]
  // }
];

// $.getJSON(building_sh, function(buildingsGeoJSON) {
var builds = buildingsGeoJSON.map(function(feature) {
  return {
    type: "Feature",
    properties: {
      name: Math.random().toString(),
      height: feature.height || 100
    },
    geometry: {
      type: "Polygon",
      coordinates: [feature.polygon]
    }
  };
});

var regionsData = builds.map(function(feature) {
  return {
    name: feature.properties.name,
    value: Math.random() * 1,
    height: feature.properties.height,
    coords: feature.geometry.coordinates
  };
});

myChart.setOption({
  maptalks3D: {
    center: [121.37041, 31.20569],
    zoom: 14.8,
    pitch: 55,
    urlTemplate: "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    postEffect: {
      enable: true,
      FXAA: {
        enable: true
      }
    }
  },
  series: [
    {
      type: "polygons3D",
      coordinateSystem: "maptalks3D",
      data: regionsData,
      shading: "realistic",
      silent: true,
      instancing: true,
      itemStyle: {
        color: "rgba(107,139,188,1)"
      },
      realisticMaterial: {
        metalness: 0.7,
        roughness: 0.4
        // textureTiling: 1,
        // detailTexture: '/asset/get/s/data-1554112593015-LLf-nuxnn.jpg'
      }
    }
  ]
});
myChart.getZr().on("click", function(params) {
  console.log(this);
});
// });
</script>



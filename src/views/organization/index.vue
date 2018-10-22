<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>
        </div>
        <div class="map" id="map">

        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  data() {
    return {};
  },
  components: {
    Header
  },
  methods: {
    initMap() {
      var map = new BMap.Map("map");
      // 创建地图实例
      // let point = new window.BMap.Point(116.404, 39.915);
      let point1 = new BMap.Point(114.014716, 33.011535);
      var point2 = new BMap.Point(116.404, 39.915);  
      var marker1 = new BMap.Marker(point1); 
      var marker2 = new BMap.Marker(point2); 
      // 创建点坐标
      map.centerAndZoom(point1, 5);
      //可以滚动地图
      map.enableScrollWheelZoom(true);
      map.setMapStyle({ style: "pink" });
      map.addControl(
        new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_TOP_LEFT,
          type: BMAP_NAVIGATION_CONTROL_LARGE
        })
      );

      map.addControl(new BMap.ScaleControl());
      map.addOverlay(marker1);  
      map.addOverlay(marker2);  
    }
  },
  created() {
    this.$nextTick(() => {
      this.initMap();
    });
  }
};
</script>

<style scoped lang='scss'>
// .wrap{
//     position: relative;
//     height: 100%;
// }

.map {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  // height: 100%;
  // height: 400px;
}
</style>
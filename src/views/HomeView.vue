<template>
    <div class="toolbar">
        <button @click="addPoint(viewer)">添加自定义标记</button>
        <button @click="addLine(viewer)">添加发光墙</button>
        <button @click="loadPolygonTexture(map)">添加纹理图形</button>
        <button @click="loadBuilding3d(map)">建筑拔地而起</button>
        <button @click="loadPBF(map)">加载矢量切片PBF</button>
        <button @click="loadRaster(map)">加载栅格云图</button>
        <button @click="loadTDT(map)">加载天地图</button>
        <button @click="loadModel3d(map)">加载三维模型</button>
        <button @click="loadTerrain(map)">加载三维地形</button>
        <button @click="loadMp4(map)">加载视频图层</button>
        <button @click="loadAntLine(map)">添加蚂蚁线</button>
        <button @click="roam(map)">漫游</button>
    </div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue'
import * as Cesium from "cesium";
import { addPoint } from '../samples/loadShape' 
const { proxy } = getCurrentInstance()
const viewer = proxy.$cesiumViewer
onMounted(() => {

    // 重写Home组件
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener(
        function (e) {
            e.cancel = true;
            //你要飞的位置
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(123.46,41.68, 20000000),
            });
        }
    );
})





</script>

<style lang="less" scoped>
.toolbar {
    padding: 1.5em;
    overflow-y: scroll;
    height: calc(100vh - 3.5em);
    max-width: 100px;
}
</style>
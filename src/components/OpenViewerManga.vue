<template>
  <div class="viewer-manga">
    <div class="images">
        <img
      v-for="(img, index) in images"
      :key="index"
      :src="img"
      
      class="chapter-img"
      @click="openViewer = true"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenViewerManga",
  props: ["images"],
  data() {
    return {
      openViewer: false,
    };
  },
};
</script>

<style>
.viewer-manga {
  position: fixed;
  top: 0;
  z-index: 222;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.601);
  width: 100%;
  overflow: auto;
}
.images{
   
    position: absolute;
    right: 50%;
    max-width: 550px;
    transform: translateX(50%);
}
.chapter-img{
    object-fit: contain; 
    display: block;
    width: 100%;
}

@media (orientation: portrait){
    .images{
        height: 100vh;   
    }
    .chapter-img{
        width: 100vw;
        
    }
}
</style>
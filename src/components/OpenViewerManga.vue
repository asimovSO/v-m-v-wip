<template>
  <div class="viewer-manga" @click.stop="openSettings">
    <div class="images">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        class="chapter-img"
      />
    </div>
    <div
      class="settings-viewer d-flex justify-end black p-8"
      v-if="getStateSettings"
    >
      <v-icon color="white" @click.stop="closeViewer"> mdi-close </v-icon>
      <!--close the modal viewer images -->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "OpenViewerManga",
  props: ["images"],
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["openSettings", "closeViewer"]),
  },
  computed: {
    ...mapGetters(["getStateSettings"]),
  },
};
</script>

<style>
.settings-viewer {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  z-index: 9999;
}
.viewer-manga {
  position: fixed;
  top: 0;
  z-index: 222;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.601);
  width: 100%;
  overflow: auto;
}
.images {
  position: absolute;
  right: 50%;
  max-width: 750px;
  transform: translateX(50%);
}
.chapter-img {
  object-fit: contain;
  display: block;
  width: 100%;
}

@media (orientation: portrait) {
  .images {
    height: 100vh;
    width: 100vw;
  }
  .chapter-img {
    width: 100%;
    display: block;
  }
}
</style>
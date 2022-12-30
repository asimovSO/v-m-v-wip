<template>
  <v-card dark width=""> 
    <router-link class="rounded" :to="{path: `/${mangaId}`}" style="z-index: 0;"><v-img class="rounded rounded-b-0" style="z-index: 0;" :src="mangaImg" height="300px" aspect-ratio="150/300"></v-img></router-link>
    <v-card-title :title="mangaTitle" class="d-block text-truncate text-h6 text-left font-weight-bold px-2 py-3">{{ mangaTitle }}</v-card-title>
    <v-card-text class="d-flex overflow-hidden px-2">
     <v-chip color="pink darken-5" class="text-center overflow-hidden mr-1" small v-for="(tag, index) in tags.slice(0, 2)" :key="index">{{ tag }}</v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MangaCard",
  // props: ['mangaImage', 'mangaTitle', 'release', 'tags']
  props: {
    mangaId: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    mangaImg: {
      type: String,
      default: undefined,
    },
    mangaTitle: {
      type: String,
      default: undefined,
      required: true,
    },
    tags: {
      type: Array,
      default: () => [],
    },
    releaseDate: String,
    rating: {
      type: Number,
      default: 0,
    },
    views: {
      type: [Number, String],
      default: 0,
    },
    hasHoverReadButton: {
      type: Boolean,
      default: false,
    },
    path: {
      type: String,
    },
  },
};
</script>

<style>
</style>
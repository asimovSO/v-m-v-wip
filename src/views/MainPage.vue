<template>
  <v-main class="grey darken-3 pt-0"  style="min-height: 100vh;">
    <v-container class="">
      <v-row
        justify="center"
        justify-md="start"
        justify-sm="start"
        justify-lg="start"
        justify-xl="center"
      >
        <v-col
          cols="6"
          md="3"
          sm="4"
          lg="2"
          v-for="manga in mangaList"
          :key="manga.id"
        >
          <manga-card
            :mangaId="manga.id"
            :mangaImg="manga.img"
            :mangaTitle="manga.title"
            :tags="manga.tags"
          ></manga-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import MangaCard from "@/components/MangaCard.vue";
import { mangaList } from "@/store/manga-list";

export default {
  components: { MangaCard },
  data() {
    return {
      mangaList: this.$store.state.mangaList,
    };
  },
};
</script>

<style>
</style>
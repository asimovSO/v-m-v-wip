<template>
  <div class="grey darken-3 white--text" style="min-height: 100vh">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <div class="d-flex flex-column align-center gap-3 mr-md-4 mr-lg-0">
            <v-img
              class="rounded-lg"
              max-width="250px"
              :src="mangaItem.img"
            ></v-img>
            <v-rating
              readonly
              color="yellow"
              background-color="grey"
              :value="mangaItem.rating"
              class="py-2"
            ></v-rating>
            <p class="yellow--text text-h4">{{ mangaItem.rating }}</p>
            <p class="subtitle-1 font-weight-medium">{{ mangaItem.release }}</p>
            <p class="font-italic grey--text">@{{ mangaItem.author }}</p>
          </div>
        </v-col>
        <v-col cols="12" md="7" class="text-center text-md-left">
          <h1 class="text-h4 font-weight-medium">{{ mangaItem.title }}</h1>
          <v-divider dark class="mb-8"></v-divider>
          <div class="buttons mb-6">
            <v-btn class="mx-1"  @click="addToFavorite" color="pink darken-5" dark depressed
              ><v-icon left dense>{{btnIsLiked}}</v-icon>Like</v-btn
            ><v-btn class="mx-1"  color="grey darken-1" dark depressed
              ><v-icon left dense>mdi-book</v-icon>Read</v-btn
            >
          </div>
          <p class="subtitle-1 grey--text text--darken-5 mb-8">
            {{ mangaItem.description }}
          </p>
          <v-chip
            v-for="item in mangaItem.tags"
            :key="item"
            class="mr-2 mb-2"
            pill
            dark
            >{{ item }}</v-chip
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mangaItem: undefined,
      isLiked: false,
    };
  },
  methods: {
    showThisManga() {
      this.mangaItem = this.$store.state.mangaList.find(
        (item) => this.$route.params.id == item.id
      );
    },
    addToFavorite() {
      this.isLiked = !this.isLiked;
    },
    
  },
  computed:{
    btnIsLiked(){
      return this.isLiked ? 'mdi-heart': 'mdi-heart-outline'
    }
  },
  created() {
    this.showThisManga();
  },
};
</script>

<style>
</style>
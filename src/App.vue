<template>
  <v-app>
    <Header></Header>
    <keep-alive>
      <router-view></router-view>
    
    </keep-alive>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: { Header, Footer},
  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app-bar
    color="grey darken-4"
    app
    style="position: static"
    v-if="this.$vuetify.breakpoint.mdAndUp"
  >
    <v-container>
      <v-row align="center">
        <div class="img">
          <svg
            width="63"
            height="45"
            viewBox="0 0 63 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="40"
              height="40"
              rx="20"
              stroke="#45BF52"
              stroke-width="4"
            />
            <rect
              x="41"
              y="23"
              width="20"
              height="20"
              rx="10"
              stroke="#45BF52"
              stroke-width="4"
            />
            <rect
              x="43"
              y="14"
              width="8"
              height="8"
              rx="4"
              stroke="#45BF52"
              stroke-width="4"
            />
          </svg>
        </div>
        <div class="links d-flex pl-4 white--text font-weight-medium">
          <div class="px-2 mr-2">
            <router-link to="/" tag="span" class="">Головна</router-link>
          </div>
          <div class="px-2 mr-2">
            <router-link to="/" tag="span">Категорії</router-link>
          </div>
          <div class="px-2 mr-2">
            <router-link to="/" tag="span">Інше</router-link>
          </div>
        </div>

        <v-spacer></v-spacer>
        <div class="mr-4">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            counter="false"
            hide-details="true"
            placeholder="Що шукаєте?"
            solo
            dense
            background-color="grey lighten-5"
          ></v-text-field>
        </div>
        <v-btn icon><v-icon color="white">mdi-heart</v-icon></v-btn>
        <v-btn icon><v-icon color="white">mdi-account</v-icon></v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-app-bar v-else bottom fixed hide-on-scroll class="rounded-t-lg" app style="background-color: transparent;">
    
      <v-tabs background-color="grey darken-4" grow centered dark icons-and-text class="rounded-t-lg" active-class="yellow--text text--darken-1">
        <v-tab link to="/"
          ><span class="text-capitalize">Main</span
          ><v-icon>mdi-book-outline</v-icon></v-tab
        >
        <v-tab link to="/search"
          ><span class="text-capitalize">Search</span
          ><v-icon>mdi-magnify</v-icon></v-tab
        > <v-tab link to="/profile"
          ><span class="text-capitalize">Profile</span
          ><v-icon>mdi-account</v-icon></v-tab
        ></v-tabs
      >
    
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
};
</script>
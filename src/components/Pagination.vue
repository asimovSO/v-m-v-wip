<template>
  <v-pagination
    :length="8"
    color="#167"
    dark
    :value="1"
    v-model="currentPage"
    circle
  ></v-pagination>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>

<style>
</style>
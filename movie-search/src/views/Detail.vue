<template>
  <div class="detail">
    <img :src="movie.image.url" alt="" :width="movie.image.width" :height="movie.image.height">
    <h1>{{movie.title}}</h1>
    <h2>Cast:</h2>
    <p>{{movie.cast}}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      /**@type {Movie}*/
      movie: {},
    };
  },
  components: {},
  created() {
    console.log("=========");
    console.log(this.$route.params.id);
    this.movie = this.$store.state.movies.movies.filter((val) => {
      console.log(val.id);
      return val.id === this.$route.params.id;
    })[0];
    console.log(this.movie);
  },
};
</script>

<style scoped>
.detail{
  text-align: center;
}
</style>

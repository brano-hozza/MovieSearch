<template>
  <div class="home">
    <SearchComponent @update="loadData" @loading="loading=true" />
    <MovieBoxComponent
      v-for="(a_movie, index) in movies"
      :key="a_movie.id"
      :index="index"
      :movie="a_movie"
    ></MovieBoxComponent>
    <div style="text-align:center;">
      <h1 v-if="loading">Loading...</h1>
      <h1 v-else-if="movies.length == 0">Type at least 4 characters :)</h1>
    </div>
  </div>
</template>

<script>
import SearchComponent from "../components/SearchComponent";
import MovieBoxComponent from "../components/MovieBoxComponent";

export default {
  name: "Home",
  components: {
    SearchComponent,
    MovieBoxComponent,
  },
  data: () => ({
    movies: [],
    loading: false,
  }),
  methods: {
    loadData() {
      this.movies = this.$store.state.movies.movies;
      this.loading = false;
    },
  },
};
</script>

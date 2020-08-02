<template>
  <div class="home">
    <SearchComponent @update="loadData" />
    <MovieBoxComponent
      v-for="(a_movie, index) in movies"
      :key="a_movie.id"
      :index="index"
      :movie="a_movie"
    ></MovieBoxComponent>
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
  }),
  methods: {
    loadData() {
      this.movies = this.$store.state.movies.movies;
    },
  },
};
</script>

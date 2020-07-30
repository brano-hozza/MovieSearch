<template>
  <div class="home">
    <SearchComponent @update="loadData"/>
    <MovieBoxComponent v-for="a_movie in movies" :key="a_movie.id" :movie="a_movie"></MovieBoxComponent>
  </div>
</template>

<script>
import SearchComponent from '../components/SearchComponent';
import MovieBoxComponent from '../components/MovieBoxComponent';

export default {
  name: 'Home',
  data: () => {
    return({
      movies:[]

    })
  },
  methods:{
    loadData(){
      this.movies = this.$store.state.movies.movies;
      console.log(this.movies);
    }
  },
  components: {
    SearchComponent,
    MovieBoxComponent
  }
}
</script>

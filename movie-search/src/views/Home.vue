<template>
  <div class="home">
    <SearchComponent/>
    <MovieBoxComponent v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchComponent from '../components/SearchComponent';
import MovieBoxComponent from '../components/MovieBoxComponent';

export default {
  name: 'Home',
  data: () => {
    return({
      movies:[]

    })
  },
  components: {
    SearchComponent,
    MovieBoxComponent
  }
}
</script>

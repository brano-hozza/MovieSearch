<template>
  <span class="search-bar">
    <v-form>
      <v-container>
        <v-row>
          <v-text-field v-model="phrase" label="What movie are you looking for?" prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-row>
      </v-container>
    </v-form>
  </span>
</template>
<script>
//import axios from "axios";
export default {
  data(){
    return{
        phrase:"",
    }
  },
  watch:{
    phrase:{
      handler: function(val){
        console.log(val);
        if(val.length > 3){
          this.loadData();
        }else{
          this.$store.commit('flushMovies');
          this.$emit('update');
        }
      }
    }
  },
  methods: {
    loadData() {
      //TODO:Disconected for now because API isn't free
      let response = {"d":[{"i":{"height":1500,"imageUrl":"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg","width":1102},"id":"tt0944947","l":"Game of Thrones","q":"TV series","rank":12,"s":"Emilia Clarke, Peter Dinklage","v":[{"i":{"height":720,"imageUrl":"https://m.media-amazon.com/images/M/MV5BYWU5YTUzYmQtNWRkOS00MmQyLWEzYzAtN2UyOTA2ZTM3N2EyXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg","width":1280},"id":"vi3672620057","l":"Season 8, Episode 6 Preview","s":"0:27"},{"i":{"height":1080,"imageUrl":"https://m.media-amazon.com/images/M/MV5BODU4NDg1OTItY2UwNS00MTUxLWE5ZjUtYzhiMDU0ODIyMjdlXkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg","width":1920},"id":"vi3449929241","l":"What to Watch After \"I Am Not Okay With This\"","s":"3:39"},{"i":{"height":720,"imageUrl":"https://m.media-amazon.com/images/M/MV5BMTg0ODM4NTc3OV5BMl5BanBnXkFtZTgwODAwODE1OTE@._V1_.jpg","width":1280},"id":"vi2166011673","l":"Season 7 In-Production Teaser","s":"2:03"}],"vt":297,"y":2011,"yr":"2011-2019"},{"i":{"height":597,"imageUrl":"https://m.media-amazon.com/images/M/MV5BOWYxYzY1OTAtZTVlNi00NGMxLWIyYTQtMmQ3ZmU4NjA4NTZiXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg","width":426},"id":"tt11131962","l":"Kissing Game","q":"TV series","rank":539,"s":"Caio Horowicz, Iza Moreira","v":[{"i":{"height":720,"imageUrl":"https://m.media-amazon.com/images/M/MV5BZWE4YWRlMDMtZWI2Ni00ZTIwLTk4ODEtMzA0ZTEyNzI5Y2M0XkEyXkFqcGdeQUlNRGJWaWRlb1RodW1ibmFpbFNlcnZpY2U@._V1_.jpg","width":1280},"id":"vi554221081","l":"Trailer [OV]","s":"1:38"}],"vt":1,"y":2020,"yr":"2020-"},{"i":{"height":2048,"imageUrl":"https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_.jpg","width":1382},"id":"tt2704998","l":"Game Night","q":"feature","rank":861,"s":"Jason Bateman, Rachel McAdams","y":2018},{"i":{"height":4096,"imageUrl":"https://m.media-amazon.com/images/M/MV5BNTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg","width":2764},"id":"tt4209788","l":"Molly's Game","q":"feature","rank":1173,"s":"Jessica Chastain, Idris Elba","y":2017},{"i":{"height":1969,"imageUrl":"https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_.jpg","width":1321},"id":"tt2084970","l":"The Imitation Game","q":"feature","rank":1252,"s":"Benedict Cumberbatch, Keira Knightley","y":2014},{"i":{"height":1800,"imageUrl":"https://m.media-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_.jpg","width":1215},"id":"tt3748172","l":"Gerald's Game","q":"feature","rank":1487,"s":"Carla Gugino, Bruce Greenwood","y":2017},{"i":{"height":2048,"imageUrl":"https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_.jpg","width":1382},"id":"tt1515091","l":"Sherlock Holmes: A Game of Shadows","q":"feature","rank":1826,"s":"Robert Downey Jr., Jude Law","y":2011},{"i":{"height":1500,"imageUrl":"https://m.media-amazon.com/images/M/MV5BOWYyNjA5MmQtNjRiOC00OTgzLTk1ZjEtZDE0N2YyYjI5YTUxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg","width":1013},"id":"tt10580064","l":"Most Dangerous Game","q":"TV series","rank":1892,"s":"Liam Hemsworth, Sarah Gadon","y":2020,"yr":"2020-"}],"q":"game","v":1}
      this.$store.commit('flushMovies');
      response.d.map(movie => this.$store.commit('addMovie', movie));
      this.$emit('update');
      /*
      axios({
        method: "GET",
        //url: "https://imdb8.p.rapidapi.com/title/auto-complete",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "308fcdf6ebmsh0cc77bce49252cep116bc9jsnde48c6cbb1b9",
          useQueryString: true,
        },
        params: {
          q: this.phrase,
        },
      })
        .then((response) => {
          
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });*/
    },
  },
};
</script>
<style scoped>
</style>
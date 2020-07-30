<template>
  <span class="search-bar">
    <v-form>
      <v-container>
        <v-row>
          <v-text-field @change="loadData()" label="Prepend inner" prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-row>
      </v-container>
    </v-form>
  </span>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    loadData() {
      //TODO:Disconected for now because API isn't free
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
          q: "game of thr",
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
</style>
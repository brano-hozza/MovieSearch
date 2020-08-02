<template>
  <span class="search-bar">
    <v-form>
      <v-container>
        <v-row>
          <v-text-field
            v-model="phrase"
            label="What movie/series are you looking for?"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-row>
      </v-container>
    </v-form>
  </span>
</template>
<script>
import axios from "axios";
import { debounce } from "lodash";
export default {
  data: () => ({
    phrase: "",
  }),
  created() {
    this.debouncedLoadData = debounce(this.loadData, 1000);
  },
  watch: {
    phrase: {
      handler(val) {
        if (val.length > 3) {
          this.$emit("loading");
          this.debouncedLoadData();
        } else {
          this.$store.commit("flushMovies");
          this.$emit("update");
        }
      },
    },
  },
  methods: {
    loadData() {
      axios({
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/title/auto-complete",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key": process.env.VUE_APP_IMDB_KEY,
          useQueryString: true,
        },
        params: {
          q: this.phrase,
        },
      })
        .then((response) => {
          this.$store.commit("flushMovies");
          if (this.phrase.length > 3) {
            response.data.d = response.data.d
              .filter((val) => "q" in val)
              .map((movie) => this.$store.commit("addMovie", movie));
          }
          this.$emit("update");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
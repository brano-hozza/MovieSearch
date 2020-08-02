<template>
  <v-container class="main" v-if="loaded">
    <v-parallax dark :src="movie.title.image.url" v-if="'image' in movie.title">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1">{{movie.title.title}}</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row v-else>
      <v-col class="text-center" cols="12">
        <h1 class="display-1">{{movie.title.title}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card max-width="400" class="mx-auto pa-4" height="150">
          <v-card-text style="text-align:center">
            <h2>Rating</h2>
            <p class="display-1">
              <v-icon large>mdi-star</v-icon>
              {{movie.ratings.rating}}/10
            </p>
            <sub class="align-end">{{movie.ratings.ratingCount}} votes</sub>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto pa-4" max-width="500" height="150">
          <v-card-text style="text-align:center">
            <div
              v-if="movie.title.titleType=='movie' || movie.title.titleType=='tvMovie' || movie.title.titleType=='video'  "
            >
              <h2 style="display:inline;">Movie:</h2>
              {{movie.title.year}}
              <p>Running time: {{movie.title.runningTimeInMinutes}} minutes</p>
            </div>
            <div v-else>
              <h2
                class="display-1"
              >TV Series: {{movie.title.seriesStartYear}} - {{movie.title.seriesEndYear}}</h2>
              <p>Running time: {{movie.title.runningTimeInMinutes}} minutes</p>
              <p>Number of episodes: {{movie.title.numberOfEpisodes}}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto pa-4" max-width="400" height="150">
          <h3>Certificates:</h3>
          <div v-for="(country, index) in movie.certificates" :key="index">
            <h4>{{index}}:</h4>
            <p v-for="cert in country" :key="cert.certificate">{{cert.certificate}}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="'plotOutline' in movie">
      <v-col>
        <h2>Overview</h2>
        <p>
          {{movie.plotOutline.text}} -
          <b>{{movie.plotOutline.author}}</b>
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Genres</h2>
        <ul>
          <li v-for="(genre,index) in movie.genres" :key="`genre-${index}`">{{genre}}</li>
        </ul>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="'plotSummary' in movie">
        <h2>Plot summary</h2>
        <p>
          {{movie.plotSummary.text}} -
          <b>{{movie.plotSummary.author}}</b>
        </p>
      </v-col>
      <v-col>
        <h2>Other ratings:</h2>
        <ul>
          <li v-for="(rating, index) in movie.ratings.otherRanks" :key="`rank-${index}`">
            <b>{{rating.label}}</b>
            - {{rating.rank}}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data: () => ({
    loaded: false,
    movie: {},
  }),
  created() {
    axios({
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-overview-details",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": process.env.VUE_APP_IMDB_KEY,
        useQueryString: true,
      },
      params: {
        tconst: this.$route.params.id,
      },
    })
      .then((response) => {
        console.log(response);
        this.movie = response.data;
        this.loaded = true;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.text-center {
  background-color: rgba(0, 0, 0, 0.5);
}
.main {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>

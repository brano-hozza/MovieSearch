<template>
  <v-container class="main" v-if="loaded">
    <v-parallax dark :src="title.image.url">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1">{{title.title}}</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row>
      <v-col>
        <v-card max-width="400" class="mx-auto pa-4" height="150">
          <v-card-text style="text-align:center">
            <h2>Rating</h2>
            <p class="display-1">
              <v-icon large>mdi-star</v-icon>
              {{ratings.rating}}/10
            </p>
            <sub class="align-end">{{ratings.ratingCount}} votes</sub>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto pa-4" max-width="500" height="150">
          <v-card-text style="text-align:center">
            <div v-if="title.titleType=='movie'">
              <h2 style="display:inline;">Movie:</h2>
              {{title.year}}
              <p>Running time: {{title.runningTimeInMinutes}} minutes</p>
            </div>
            <div v-else class="display:1">
              <h2 class="display:1">TV Series: {{title.seriesStartYear}} - {{title.seriesEndYear}}</h2>
              <p>Running time: {{title.runningTimeInMinutes}} minutes</p>
              <p>Number of episodes: {{title.numberOfEpisodes}}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto pa-4" max-width="400" height="150">
          <h3>Certificates:</h3>
          <div v-for="(country, index) in certificates" :key="index">
            <h4>{{index}}:</h4>
            <p v-for="(cert, index) in country" :key="index">{{cert.certificate}}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Overview</h2>
        <p>{{plotOutline.text}} - <b>{{plotOutline.author}}</b></p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Genres</h2>
        <ul>
          <li v-for="(genre,index) in genres" :key="index">
            {{genre}}
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Plot summary</h2>
        <p>{{plotSummary.text}} - <b>{{plotSummary.author}}</b></p>
      </v-col>
      <v-col>
        <h2>Other ratings:</h2>
        <ul>
          <li v-for="(rating, index) in ratings.otherRanks" :key="index">
           <b>{{rating.label}}</b> - {{rating.rank}}
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
  data() {
    return {
      loaded: false,
      title: {},
      certificates: {},
      ratings: {},
      genres: {},
      releaseDate: "",
      plotOutline: {},
      plotSummary: {},
    };
  },
  components: {},
  methods: {
    setData(data) {
      this.title = data.title;
      this.certificates = data.certificates;
      this.ratings = data.ratings;
      this.genres = data.genres;
      this.releaseDate = data.releaseDate;
      this.plotOutline = data.plotOutline;
      this.plotSummary = data.plotSummary;
      this.loaded = true;
    },
  },
  created() {
    /*let response1 = {
      id: "/title/tt0944947/",
      title: {
        "@type": "imdb.api.title.title",
        id: "/title/tt0944947/",
        image: {
          height: 1500,
          id: "/title/tt0944947/images/rm4204167425",
          url:
            "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
          width: 1102,
        },
        runningTimeInMinutes: 57,
        nextEpisode: "/title/tt1480055/",
        numberOfEpisodes: 73,
        seriesEndYear: 2019,
        seriesStartYear: 2011,
        title: "Game of Thrones",
        titleType: "tvSeries",
        year: 2011,
      },
      certificates: { US: [{ certificate: "TV-MA", country: "US" }] },
      ratings: {
        canRate: true,
        rating: 9.3,
        ratingCount: 1693974,
        otherRanks: [
          {
            id: "/chart/ratings/toptv",
            label: "Top 250 TV",
            rank: 11,
            rankType: "topTv",
          },
        ],
      },
      genres: ["Action", "Adventure", "Drama", "Fantasy", "Romance"],
      releaseDate: "2011-04-17",
      plotOutline: {
        author: "GypsyKing878 and Brian McInnis",
        id: "/title/tt0944947/plot/po2596634",
        text:
          "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      },
      plotSummary: {
        author: "Sam Gray",
        id: "/title/tt0944947/plot/ps2733843",
        text:
          "In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.",
      },
    };
    let response2 = {
      id: "/title/tt2911666/",
      title: {
        "@type": "imdb.api.title.title",
        id: "/title/tt2911666/",
        image: {
          height: 2048,
          id: "/title/tt2911666/images/rm1723909376",
          url:
            "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
          width: 1365,
        },
        runningTimeInMinutes: 101,
        title: "John Wick",
        titleType: "movie",
        year: 2014,
      },
      certificates: {
        US: [
          {
            certificate: "R",
            certificateNumber: 49351,
            ratingReason:
              "Rated R for strong and bloody violence throughout, language and brief drug use",
            ratingsBody: "MPAA",
            country: "US",
          },
        ],
      },
      ratings: {
        canRate: true,
        rating: 7.4,
        ratingCount: 516922,
        topRank: 1343,
      },
      genres: ["Action", "Crime", "Thriller"],
      releaseDate: "2014-10-24",
      plotOutline: {
        author: "ahmetkozan",
        id: "/title/tt2911666/plot/po2097497",
        text:
          "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      },
      plotSummary: {
        author: "Nick Riganas",
        id: "/title/tt2911666/plot/ps3738037",
        text:
          "With the untimely death of his beloved wife still bitter in his mouth, John Wick, the expert former assassin, receives one final gift from her--a precious keepsake to help John find a new meaning in life now that she is gone. But when the arrogant Russian mob prince, Iosef Tarasov, and his men pay Wick a rather unwelcome visit to rob him of his prized 1969 Mustang and his wife's present, the legendary hitman will be forced to unearth his meticulously concealed identity. Blind with revenge, John will immediately unleash a carefully orchestrated maelstrom of destruction against the sophisticated kingpin, Viggo Tarasov, and his family, who are fully aware of his lethal capacity. Now, only blood can quench the boogeyman's thirst for retribution.",
      },
    };
    if (this.$route.params.id == "tt2911666") {
      this.setData(response2);
    } else {
      this.setData(response1);
    }*/
    axios({
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-overview-details",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "308fcdf6ebmsh0cc77bce49252cep116bc9jsnde48c6cbb1b9",
        useQueryString: true,
      },
      params: {
        tconst: this.$route.params.id,
      },
    })
      .then((response) => {
        console.log(response);
        this.setData(response.data);
        
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

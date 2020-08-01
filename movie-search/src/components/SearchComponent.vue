<template>
  <span class="search-bar">
    <v-form>
      <v-container>
        <v-row>
          <v-text-field
            v-model="phrase"
            label="What movie are you looking for?"
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
  data() {
    return {
      phrase: "",
    };
  },
  created() {
    //There is no need to call the API everytime when someone is typing
    this.debouncedLoadData = debounce(this.loadData, 1000);
  },
  watch: {
    phrase: {
      handler: function (val) {
        console.log(val);
        if (val.length > 3) {
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
      //TODO:Disconected for now because API isn't free
      console.log(Math.random());
      /*let response = {
        d: [
          {
            i: {
              height: 1500,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
              width: 1102,
            },
            id: "tt0944947",
            l: "Game of Thrones",
            q: "TV series",
            rank: 12,
            s: "Emilia Clarke, Peter Dinklage",
            v: [
              {
                i: {
                  height: 720,
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BYWU5YTUzYmQtNWRkOS00MmQyLWEzYzAtN2UyOTA2ZTM3N2EyXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
                  width: 1280,
                },
                id: "vi3672620057",
                l: "Season 8, Episode 6 Preview",
                s: "0:27",
              },
              {
                i: {
                  height: 1080,
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BODU4NDg1OTItY2UwNS00MTUxLWE5ZjUtYzhiMDU0ODIyMjdlXkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg",
                  width: 1920,
                },
                id: "vi3449929241",
                l: 'What to Watch After "I Am Not Okay With This"',
                s: "3:39",
              },
              {
                i: {
                  height: 720,
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BMTg0ODM4NTc3OV5BMl5BanBnXkFtZTgwODAwODE1OTE@._V1_.jpg",
                  width: 1280,
                },
                id: "vi2166011673",
                l: "Season 7 In-Production Teaser",
                s: "2:03",
              },
            ],
            vt: 297,
            y: 2011,
            yr: "2011-2019",
          },
          {
            i: {
              height: 597,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BOWYxYzY1OTAtZTVlNi00NGMxLWIyYTQtMmQ3ZmU4NjA4NTZiXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
              width: 426,
            },
            id: "tt2911666",
            l: "Kissing Game",
            q: "TV series",
            rank: 539,
            s: "Caio Horowicz, Iza Moreira",
            v: [
              {
                i: {
                  height: 720,
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BZWE4YWRlMDMtZWI2Ni00ZTIwLTk4ODEtMzA0ZTEyNzI5Y2M0XkEyXkFqcGdeQUlNRGJWaWRlb1RodW1ibmFpbFNlcnZpY2U@._V1_.jpg",
                  width: 1280,
                },
                id: "vi554221081",
                l: "Trailer [OV]",
                s: "1:38",
              },
            ],
            vt: 1,
            y: 2020,
            yr: "2020-",
          },
          {
            i: {
              height: 2048,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_.jpg",
              width: 1382,
            },
            id: "tt2704998",
            l: "Game Night",
            q: "feature",
            rank: 861,
            s: "Jason Bateman, Rachel McAdams",
            y: 2018,
          },
          {
            i: {
              height: 4096,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
              width: 2764,
            },
            id: "tt4209788",
            l: "Molly's Game",
            q: "feature",
            rank: 1173,
            s: "Jessica Chastain, Idris Elba",
            y: 2017,
          },
          {
            i: {
              height: 1969,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_.jpg",
              width: 1321,
            },
            id: "tt2084970",
            l: "The Imitation Game",
            q: "feature",
            rank: 1252,
            s: "Benedict Cumberbatch, Keira Knightley",
            y: 2014,
          },
          {
            i: {
              height: 1800,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_.jpg",
              width: 1215,
            },
            id: "tt3748172",
            l: "Gerald's Game",
            q: "feature",
            rank: 1487,
            s: "Carla Gugino, Bruce Greenwood",
            y: 2017,
          },
          {
            i: {
              height: 2048,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_.jpg",
              width: 1382,
            },
            id: "tt1515091",
            l: "Sherlock Holmes: A Game of Shadows",
            q: "feature",
            rank: 1826,
            s: "Robert Downey Jr., Jude Law",
            y: 2011,
          },
          {
            i: {
              height: 1500,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BOWYyNjA5MmQtNjRiOC00OTgzLTk1ZjEtZDE0N2YyYjI5YTUxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
              width: 1013,
            },
            id: "tt10580064",
            l: "Most Dangerous Game",
            q: "TV series",
            rank: 1892,
            s: "Liam Hemsworth, Sarah Gadon",
            y: 2020,
            yr: "2020-",
          },
        ],
        q: "game",
        v: 1,
      };*/
      /*let response = {
        d: [
          {
            i: {
              height: 436,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BYWVkNjQ2NmUtMjVhOS00M2M2LWJlYzctYWY1MWI1ODY3NTk0XkEyXkFqcGdeQXVyMjQyOTg0MzQ@._V1_.jpg",
              width: 365,
            },
            id: "nm4789912",
            l: "Hannah John-Kamen",
            rank: 176,
            s: "Actress, Ant-Man and the Wasp (2018)",
            v: [
              {
                i: {
                  height: 1080,
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BNmNkYjg4MDYtOTQwZC00OWIyLWJkYWEtNGUyNjYzYTE0YTE2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
                  width: 1920,
                },
                id: "vi3888299033",
                l: "Official Teaser Trailer",
                s: "2:00",
              },
              {
                i: {
                  height: 1080,
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BMjgwYjNmYmItODc0My00NjRhLWEzNzItNWI4ZDI5ODYyMTAxXkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg",
                  width: 1920,
                },
                id: "vi195936025",
                l: 'Prequels, Sequels, and How the New "Dark Crystal" Fits In',
                s: "3:54",
              },
              {
                i: {
                  height: 1080,
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BZWY1Y2IwN2YtZWNjMy00NDAyLWFiNDUtNDEwZWQ3YWZkZTI5XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
                  width: 1920,
                },
                id: "vi2666183705",
                l: "Season 5 Official Trailer",
                s: "1:38",
              },
            ],
            vt: 74,
          },
          {
            i: {
              height: 2048,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMTUwNjQ0ODkxN15BMl5BanBnXkFtZTcwMDc5NjQwNw@@._V1_.jpg",
              width: 1523,
            },
            id: "nm0000237",
            l: "John Travolta (I)",
            rank: 214,
            s: "Actor, Pulp Fiction (1994)",
            v: [
              {
                i: {
                  height: 1080,
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BNDg0YWQxZDItYmVkNC00YmNhLWE1NTItZGIxYWYzMGIyZjVmXkEyXkFqcGdeQXN0ZXZlYg@@._V1_.jpg",
                  width: 1920,
                },
                id: "vi3417815833",
                l: "Best of the IMDberet Answers From Cannes Stars",
                s: "1:55",
              },
              {
                i: {
                  height: 1080,
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BMjMyZmY3NzYtZDllOS00MmVlLWE3ZDItMDFiZDY5Y2E2MGU3XkEyXkFqcGdeQWFybm8@._V1_.jpg",
                  width: 1920,
                },
                id: "vi3774987801",
                l: "Official Trailer",
                s: "2:24",
              },
              {
                i: {
                  height: 1080,
                  imageUrl:
                    "https://m.media-amazon.com/images/M/MV5BMzFlNjJlYTAtZjZkYy00ZTU4LTllYTktYzIxODMyZjQxOGUyXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
                  width: 1920,
                },
                id: "vi1419296281",
                l: "A Guide to the Films of Quentin Tarantino",
                s: "2:44",
              },
            ],
            vt: 148,
          },
          {
            i: {
              height: 2400,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNmJhYTVjNzUtNjJiZi00MWFhLTg4MWUtMzNiMGEwMmVkYWY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
              width: 1600,
            },
            id: "tt7945720",
            l: "Dirty John",
            q: "TV series",
            rank: 294,
            s: "Connie Britton, Christian Slater",
            y: 2018,
            yr: "2018-",
          },
          {
            i: {
              height: 2048,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
              width: 1365,
            },
            id: "tt2911666",
            l: "John Wick",
            q: "feature",
            rank: 310,
            s: "Keanu Reeves, Michael Nyqvist",
            y: 2014,
          },
          {
            i: {
              height: 400,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMTc3MzY3MjQ3OV5BMl5BanBnXkFtZTcwODI3NjQxMw@@._V1_.jpg",
              width: 287,
            },
            id: "nm1024677",
            l: "John Krasinski",
            rank: 421,
            s: "Actor, A Quiet Place (2018)",
          },
          {
            i: {
              height: 5550,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
              width: 3600,
            },
            id: "tt6146586",
            l: "John Wick: Chapter 3 - Parabellum",
            q: "feature",
            rank: 587,
            s: "Keanu Reeves, Halle Berry",
            y: 2019,
          },
          {
            i: {
              height: 400,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMTQzMzUyNDkzNF5BMl5BanBnXkFtZTcwNTMwNTU5MQ@@._V1_.jpg",
              width: 319,
            },
            id: "nm0001475",
            l: "John Lithgow (I)",
            rank: 828,
            s: "Actor, 3rd Rock from the Sun (1996-2001)",
          },
          {
            i: {
              height: 426,
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BZjE5NGUzYzgtZDU2Zi00NjBiLWI0YzUtMzJlYTRhZjI0NThmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
              width: 640,
            },
            id: "nm0000131",
            l: "John Cusack (I)",
            rank: 902,
            s: "Actor, Grosse Pointe Blank (1997)",
          },
        ],
        q: "john",
        v: 1,
      };
      this.$store.commit("flushMovies");
      response.d = response.d.filter((val) => "q" in val);
      response.d.map((movie) => this.$store.commit("addMovie", movie));
      this.$emit("update");*/

      axios({
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/title/auto-complete",
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
          this.$store.commit('flushMovies');
          response.data.d = response.data.d.filter((val) => "q" in val);
          response.data.d.map(movie => this.$store.commit('addMovie', movie));
          this.$emit('update');
          
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
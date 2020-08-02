<template>
  <div class="main-box" :class="{'second-box':helper%2==0}">
    <v-row no-gutters>
      <v-col style="text-align: center;" class="image">
        <img :src="movie.image.url" :alt="movie.title.title" height="50" />
      </v-col>
      <v-col :cols="11">
        <router-link :to="{path:'detail/'+movie.id}">
          <h3>{{ movie.title }}</h3>
        </router-link>
        <span class="box-footer">
          <p>Cast:{{movie.cast}}</p>
          <p class="rank">
            <v-icon>mdi-star</v-icon>
            {{movie.rank}}
          </p>
        </span>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      helper: this.index,
    };
  },
};
</script>
<style scoped>
.main-box {
  background-color: white;
  height: 60px;
  padding-left: 2rem;
}
.second-box {
  background-color: rgb(155, 153, 153);
  color: white;
}
.second-box a {
  color: white;
}
.box-footer {
  display: inline;
}
.box-footer p {
  display: inline;
}
.rank {
  float: right;
  margin-right: 2rem;
}
.image {
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
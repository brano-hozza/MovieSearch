<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Movie search V1.0</h1>
      </div>

      <v-spacer></v-spacer>
      <span v-if="$route.fullPath != '/'">
        <router-link to="/" style="color:white;"> <v-icon>mdi-arrow-left</v-icon>Back</router-link>
      </span>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.fullPath"></router-view>
      
    </v-main>
    <v-footer>
      <v-spacer></v-spacer>
      <div>&copy;Branislav Hozza 2020</div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<template>
  <div id="app">
    <NavBarComponent/>
    <router-view :key="$router.fullPath"/>
  </div>
</template>
<script>
import NavBarComponent from './components/NavBarComponent'
export default {
  components:{
    NavBarComponent
  }
  
}
</script>

<style>
</style>

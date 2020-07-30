<template>
<div class="main-box">
    <router-link :to="{path:'detail/'+movie.id}">
    <h3>{{ movie.title }}</h3>
        </router-link>
</div>
</template>
<script>
export default {
    props:{
        movie:{
            type:Object,
            required: true
        }
    }
    
}
</script>
<style scoped>
.main-box{
    background-color: brown;
}

</style>
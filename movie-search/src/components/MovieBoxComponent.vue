<template>
<div class="main-box">
    <h3>{{ movie.title }}</h3>
    <router-link to="/detail">
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
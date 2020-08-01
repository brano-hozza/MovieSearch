<template>
<div class="main-box" :class="{'second-box':helper%2==0}">
    <router-link :to="{path:'detail/'+movie.id}">
    <h3>{{ movie.title }}</h3>
        </router-link>
        <span class="box-footer">
            <p>Cast:{{movie.cast}}</p>
            <p class="rank"><v-icon>mdi-star</v-icon> {{movie.rank}}</p>
        </span>
        </div>
</template>
<script>
export default {
    created(){
        console.log(this.index)
    },
    data(){
        return{
            helper:this.index
        }
    },
    props:{
        movie:{
            type:Object,
            required: true
        },
        index:{
            type:Number,
            required: true
        }
    }
    
}
</script>
<style scoped>
.main-box{
    background-color: white;
    height: 60px;
    padding-left: 2rem;
}
.second-box{
    background-color: gray;
    color: white;
}
.second-box a{
    color: white;
}
.box-footer{
    display: inline;
}
.box-footer p{
    display: inline;
}
.rank{
    float: right;
    margin-right: 2rem;
}
</style>
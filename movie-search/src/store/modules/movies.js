class Movie {
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.l;
        this.type = obj.q,//Movie / Tv Series
        this.rank =  obj.rank,
        this.cast = obj.s,
        this.start_date = obj.y,
        this.duration = obj.yr,
        this.image = {
            url:obj.i.imageUrl,
            height: obj.i.height,
            width:obj.i.width
        }
    }
}

export default {
    state: ()=>({
        movies:[]
    }),
    mutations:{
        addMovie(state, movie){
            state.movies.push(new Movie(movie))
        }

    }
}
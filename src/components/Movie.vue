<template>
  <div class="movie">

    <img class="image" :src="image" alt="Movie poster"/>

    <div class="details">
      <div class="title">{{movie.title}} <span class="year">({{year}})</span></div>
      <div class="duration"><span class="label">Duration:</span> {{duration.hours}}h {{duration.minutes}}min</div>
      <div class="also-on">Trouvez sur : 
        <a class="link imdb" target="_blank" :href="imdbUrl">IMDB</a> - <a class="link tmdb" target="_blank" :href="tmdbUrl">TheMovieDB</a>
      </div>
    </div>
    
    <i @click="remove" class="close fa fa-times"></i>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['movie'],
  computed:{
    image: function () {
      return "https://image.tmdb.org/t/p/w200" + this.movie.poster_path;
    },
    duration: function () {
      const hours = this.movie.runtime / 60;
      const minutes = this.movie.runtime % 60;
      return {
        'hours':"" + Math.floor(hours),
        'minutes':minutes > 9 ? "" + minutes: "0" + minutes
      }
    },
    year: function () {
      return this.movie.release_date.split('-')[0];
    }, imdbUrl: function () {
      return "https://www.imdb.com/title/" + this.movie.imdb_id;
    }, tmdbUrl: function () {
      return "https://www.themoviedb.org/movie/" + this.movie.id;
    }
  }, methods:{
    remove:function(){
      this.$emit("remove", this.movie.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie{
  text-align: left;
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
}

.movie .image{
  width: 100px;
  height: auto;
}

.movie .details{
  width: 100%;
  vertical-align: top;
  display: flex;
  flex-direction: column;
  
  margin-left: 16px;
}

.movie .details .title{
  font-size: 24px;
}

.movie .details .year {
  font-size: 18px;
}

.movie .details .duration{
  font-size: 16px;
  margin-top: 16px;
}

.movie .details .duration .label{
  font-weight: bold;
}

.movie .details .also-on{
  margin-top: 16px;
}

.movie .details .link{
  font-weight: bold;
  color: #26A69A;
  text-decoration: none;
}

.movie .close {
  font-size: 24px;
}

</style>
 
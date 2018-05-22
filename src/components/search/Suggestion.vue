<template>
  <div class="imgContainer" @click="addMovie">
    <img :src="image" alt="Avatar" class="poster" style="width:100%">
    <div class="middle">
      <div class="fa fa-plus-circle"></div>
      <p>Add this movie</p>
    </div>
    <div class="title">{{movie.title}}</div>
  </div>


</template>

<script>
import TMDB from '../../utils/tmdb';

export default {
  name: 'Suggestion',
  props: {
    movie: Object
  }, computed:{
    image: function () {
      return "https://image.tmdb.org/t/p/w200" + this.movie.poster_path;
    }
  }, methods:{
    addMovie: function () {
      TMDB.getMovie(this.movie.id)
          .then(response => (this.$emit('addMovie', response.data)))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.imgContainer {
  max-width: 150px;
  position: relative;
  margin: auto;
  background-color: black;
  cursor: pointer;
}

.poster {
  height:auto;
  opacity: 1;
  display: block;
  transition: .5s ease;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  text-align: center;
  color: white;
}

.middle .fa{
  font-size: 32px;
}

.title{
  transition: .5s ease;
  position: absolute;
  bottom: 0;
  color: white;
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.imgContainer:hover .poster {
  opacity: 0.3;
}

.imgContainer:hover .middle {
  opacity: 1;
}

.imgContainer:hover .title{
  background-color: rgba(0,0,0,0.5);
}

</style>

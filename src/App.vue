<template>
  <div id="app">
    <img src="./assets/logo.png">

  <div class="flexContainer">
    <MovieList class="movieList" :movies="movies"></MovieList>
    <Statistics class="statistics" :movies="movies"></Statistics>
  </div>
    
  </div>
</template>

<script>
import MovieList from './components/Movies.vue'
import Statistics from './components/Statistics.vue'

export default {
  name: 'app',
  components: {
    'MovieList': MovieList,
    'Statistics': Statistics
  },
  data:function () {
    return {
      movies:[]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Open-Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 16px;
}

.flexContainer{
  display: flex;
  justify-content: space-between
}

.movieList, .statistics{
  margin-left: 8px;
  margin-right: 8px;
}

.movieList {
  flex:5;
}

.statistics {
  flex:2;
}


</style>

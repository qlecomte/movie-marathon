<template>
  <div class="container">
    <SearchBar class="searchBar" @search="search" placeholder="Find your next movie"/>
    <Suggestions class="suggestions" :suggestions="suggestions" :movies="movies" @addMovie="addMovie"/>

    <div class="drag-list">
      <Draggable :list="movies" :options="{handle:'.handle'}">
        <Movie 
          class="movie"
          v-for="movie in movies" 
          :movie="movie"
          :key="movie.id"
          @remove="removeMovie">
        </Movie>
      </Draggable>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import Draggable from 'vuedraggable'

import SearchBar from './search/SearchBar.vue'
import Movie from './Movie.vue'
import Suggestions from './search/MovieSuggestions.vue'

export default {
  name: 'MovieList',
  components: {
    'SearchBar':SearchBar,
    'Movie':Movie,
    'Suggestions':Suggestions,
    'Draggable':Draggable
  },props:[
    "movies"
  ],
  data: function () {
    return {
      suggestions:[]
    }
  },
  methods:{
    search: function(data) {
      if(!data){
        this.suggestions = [];
      } else {
        this.suggestions = data.results;
      }
    }, addMovie: function(movie) {
      if (!_.some(this.movies, {id:movie.id})){
        this.movies.push(movie);
      } else {
        console.info('Movie already added');
      }
    }, removeMovie: function(movieId) {
      const index = _.findIndex(this.movies, function(movie){
        return movie.id == movieId;
      });
      if (index !== -1){
        this.movies.splice(index, 1);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  border: 1px solid #e57373;
  padding: 8px;
  box-sizing: border-box;
}

.suggestions{
  margin-bottom: 8px;
}

.searchBar{
  margin-bottom: 8px;
}


</style>

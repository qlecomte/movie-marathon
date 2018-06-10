<template>
  <div class="container">
    <SearchBar class="searchBar" @search="search" placeholder="Find your next movie"/>
    <Suggestions class="suggestions" :suggestions="suggestions" :movies="movies" @addMovie="addMovie"/>
    <alert type="info" id="suggestSaga" v-if="saga.display">
      <div>
        <strong>{{saga.movieTitle}}</strong> fait partie d'une saga de {{saga.saga.parts.length}} films.<br/>
        Souhaitez-vous ajouter la saga complète ?
      </div>
      <div class="selection">
        <div class="accept" @click="addSaga(saga.saga)"><strong>Oui</strong></div>
        <div class="refuse" @click="saga.display = false"><strong>Non</strong></div>
      </div>
    </alert>
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

import alert from './alert'
import SearchBar from './search/SearchBar.vue'
import Movie from './Movie.vue'
import Suggestions from './search/MovieSuggestions.vue'

import TMDB from '../utils/tmdb'

export default {
  name: 'MovieList',
  components: {
    'SearchBar':SearchBar,
    'Movie':Movie,
    'Suggestions':Suggestions,
    'Draggable':Draggable,
    'alert':alert
  },props:[
    "movies"
  ],
  data: function () {
    return {
      suggestions:[],
      saga:{
        display: false,
        movieTitle:"",
        saga:{}
      }
    }
  },
  methods:{
    search: function(data) {
      if(!data){
        this.suggestions = []
      } else {
        this.suggestions = data.results
      }
    }, addMovie: function(movie, fromSaga = false) {
      if (!_.some(this.movies, {id:movie.id})){
        this.movies.push(movie);
        if (movie.belongs_to_collection != null && !fromSaga){
          TMDB.getCollection(movie.belongs_to_collection.id)
            .then(response => (this.showAlert(response.data, movie)))
        } else {
          this.saga.display = false
        }
      } else {
        console.info('Movie already added');
      }
    }, removeMovie: function(movieId) {
      const index = _.findIndex(this.movies, function(movie){
        return movie.id == movieId
      })
      if (index !== -1){
        this.movies.splice(index, 1)
        this.saga.display = false
      }
    }, showAlert: function(saga, movie) {
      this.saga.movieTitle = movie.title
      this.saga.saga = saga
      this.saga.display = true
    }, addSaga: function(saga) {
      this.saga.display = false

      var movieIds = _.map(saga.parts, 'id');
      movieIds.forEach(movieId =>
        TMDB.getMovie(movieId)
          .then(response => (this.addMovie(response.data, true)))
      )
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

.selection{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.selection .accept, .selection .refuse{
  margin-top: 16px;
  padding: 0.5em 1em;
  border: 1px solid;
  margin-right: -1px;
}

.selection .accept:hover, .selection .refuse:hover{
  background-color: #01579b;
  color: #81d4fa;
  border-color: #01579b;
}

.selection .accept{
  border-radius: 5px 0 0 5px;
}

.selection .refuse{
  border-radius: 0 5px 5px 0;
}




</style>

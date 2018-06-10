<template>
    <div class="suggestions">
      <Suggestion 
        class="suggestion"
        v-for="movie in firstSuggestions"  
        :movie="movie" 
        :key="movie.id"
        @addMovie="addMovie"/>
    </div>
</template>

<script>

import Suggestion from './Suggestion.vue'
export default {
  name: 'MovieSuggestions',
  components: {
    'Suggestion': Suggestion,
  },
  props: {
    suggestions: Array,
    movies: Array
  }, 
  computed:{
    firstSuggestions:function(){
      return this.suggestions.slice(0,8);
    }
  }, 
  methods:{
    addMovie: function(movie){
      this.$emit('addMovie', movie);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.suggestions{
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
}

.suggestion{
  margin-left: 4px;
  margin-right: 4px;
  flex-grow: 1;
}

.suggestion:first-child{
  margin-left: 0;
}

.suggestion:last-child{
  margin-right: 0;
}


</style>

<template>
  <div class="wrap">
    <input v-model="searchTerm" type="text" class="searchTerm" v-bind:placeholder="placeholder">
    <p>{{suggestions}}</p>
  </div>
</template>

<script>

import _ from 'lodash'; 
import TMDB from '../../utils/tmdb';

export default {
  name: 'SearchBar',
  data:function (){
    return {
      searchTerm: '',
      suggestions:''
    }
  },
  props: {
    placeholder: String
  }, watch:{
    searchTerm: function(){
      this.debouncedSearch();
    }
  }, created: function(){
    this.debouncedSearch = _.debounce(this.search, 750);
  }, methods: {
    search: function(){
      if (this.searchTerm == ''){
        this.$emit('search', null);
      } else {
        TMDB.search(this.searchTerm)
          .then(response => (this.$emit('search', response.data)))
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.searchTerm {
  width: 100%;
  border: 2px solid #e57373;
  padding: 5px;
  border-radius: 5px;
  color: #f44336;
  box-sizing:border-box
}

</style>

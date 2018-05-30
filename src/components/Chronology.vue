<template>
  <div class="chronology">
    <div class="item" v-for="movie in myMovies" :key="movie.id">
      {{movie.startTime}} - {{movie.endTime}} • <span class="title">{{movie.title}}</span>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';  
import moment from 'moment';

export default {
  name: 'Chronology',
  props:['movies', 'datetime'],
  computed:{
    myMovies:function () {
      var startTime = moment(this.datetime);
      return _.map(this.movies, function(movie){
        movie.startTime = moment(startTime).format('HH:mm');
        movie.endTime = moment(startTime).add(movie.runtime, 'minutes').format('HH:mm');
        startTime = moment(startTime).add(movie.runtime, 'minutes');

        return movie;
      });
    }
  }, methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chronology{
  margin-left: 16px;
  margin-right: 16px;
}

.chronology .item{
  text-align: left;
}

.chronology .item .title{
  font-weight: bold;
}

</style>

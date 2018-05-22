<template>
  <div>
    <div class="duration"><span class="label">Durée totale</span> : {{duration.hours}}h {{duration.minutes}}min</div>
    <dayPicker></dayPicker>
  </div>
</template>


<script>
import _ from 'lodash'; 
import WeekDayPicker from './picker/weekdayPicker.vue'

export default {
  name: 'Statistics',
  components: {
    'dayPicker':WeekDayPicker,
  },
  props: ['movies'],
  computed:{
    duration: function () {
        const totalDuration = _.sumBy(this.movies, 'runtime');
        const hours = totalDuration / 60;
        const minutes = totalDuration % 60;
        return {
            'hours':"" + Math.floor(hours),
            'minutes':minutes > 9 ? "" + minutes: "0" + minutes
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.statistics{
  border: 1px solid #26A69A;
}

.statistics .duration{
  margin-top: 8px;
}

.statistics .duration .label{
  font-weight: bold;
}


</style>

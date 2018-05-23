<template>
  <div>
    <div class="duration"><span class="label">Durée totale</span> : {{duration.days}}d {{duration.hours}}h {{duration.minutes}}min</div>
    <div class="picker">
      <DayPicker></DayPicker>
      <TimePicker></TimePicker>
    </div>
  </div>
</template>


<script>
import _ from 'lodash'; 
import WeekDayPicker from './picker/weekdayPicker.vue'
import TimePicker from './picker/timePicker.vue'

export default {
  name: 'Statistics',
  components: {
    'DayPicker':WeekDayPicker,
    'TimePicker':TimePicker
  },
  props: ['movies'],
  computed:{
    duration: function () {
        const totalDuration = _.sumBy(this.movies, 'runtime');
        const days = totalDuration / 1440;
        const hours = totalDuration % 1440 / 60;
        const minutes = totalDuration % 60;
        return {
            'days':"" + Math.floor(days),
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


.picker {
  display: flex;
  padding-left: 0.5em;
  padding-right: 0.5em; 
}

.day-picker, .time-picker{
  margin-left: 0.5em;
  margin-right: 0.5em; 
}

.day-picker {
  flex: 1;
}

.time-picker {
}


</style>

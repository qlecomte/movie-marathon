<template>
  <div>
    <div class="duration"><span class="label">Durée totale</span> : {{duration.days}}d {{duration.hours}}h {{duration.minutes}}min</div>
    <div class="picker">
      <DayPicker @daySelected="daySelected" :defaultDay="today.weekday"></DayPicker>
      <TimePicker :hours="today.hours" :minutes="today.minutes" :minutesIncrement="timeInterval" @pick-time="pickTime"></TimePicker>
    </div>

    <Chronology :movies="movies" :datetime="today.now"></Chronology>
  </div>
</template>


<script>
import _ from 'lodash'; 
import moment from 'moment';

import WeekDayPicker from './picker/weekdayPicker.vue'
import TimePicker from './picker/timePicker.vue'
import Chronology from './Chronology.vue'

moment.locale('fr', {
  weekdaysShort : ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
})

export default {
  name: 'Statistics',
  data: function(){
    return{
      now: moment(),
      timeInterval: 5
    }
  },
  components: {
    'DayPicker':WeekDayPicker,
    'TimePicker':TimePicker,
    'Chronology':Chronology
  },
  props: ['movies'],
  computed:{
    today: function() {
      return {
        now: this.now.toDate(),
        weekday: this.now.format('ddd'),
        hours: this.now.hour(),
        minutes: this.now.minute()
      }
    },
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
  }, methods: {
    daySelected: function(day){
      console.info("Day is " + day);
    }, pickTime: function(time){
      this.now = moment().hours(time.hours).minutes(time.minutes).seconds(0);
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

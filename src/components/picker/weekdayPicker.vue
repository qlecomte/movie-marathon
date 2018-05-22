<template>
  <ul class="day-picker">
    <li is="WeekDayItem" v-for="day in days" :key="day" :day="day" @toggleDay="toggleDay"></li>
  </ul>
</template>

<script>
import WeekDayItem from './weekdayItem.vue'

export default {
  name: 'weekDayPicker',
  components: {
    'WeekDayItem':WeekDayItem
  },
  data: function () {
    return {
      weekdays:{
        'Lun':false,
        'Mar':false,
        'Mer':false,
        'Jeu':false,
        'Ven':false,
        'Sam':false,
        'Dim':false
      }
    }
  }, computed: {
    days: function(){
      return Object.keys(this.weekdays);
    }
  }, methods: {
    toggleDay: function(day){
      const idx = this.weekdays[day.label];
      if (idx !== undefined){
        this.weekdays[day.label] = day.selected;
      }
    }
  }
}
</script>

<style scoped>
  .day-picker {
    margin-bottom: 0.5em;
    padding-left: 0;
  }

  .day-picker li {
    font-size: 0.8em;
    display: inline-block;
    padding: 0.5em;
    color: #26A69A;
    cursor: pointer;
    width: calc(100% / 7 - 1.61em);
    text-align: center;
    border: 1px solid;
    margin-right: -1px;
    @include transition(all 0.3s ease);
  }

  .day-picker li:first-child { border-radius: 5px 0 0 5px; }
  .day-picker li:hover { 
    background-color: #80CBC4;
    border: 1px solid #80CBC4; 
    color: white; 
  }
  .day-picker li:last-child { border-radius: 0 5px 5px 0; }
  
  .day-picker li.day-selected {
    background-color: #26A69A;
    border: 1px solid #26A69A;
    color: white;
  }


</style>
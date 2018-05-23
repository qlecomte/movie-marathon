<template>
  <div class="day-picker">
    <ul class="weekDayPicker">
      <li is="WeekDayItem" v-for="day in weekdays" :day="day" :selected="day===selected" :key="day" @toggleDay="toggleDay"></li>
    </ul>
  </div>
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
      weekdays:['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'],
      selected:''
    }
  }, methods: {
    toggleDay: function(day){
      if (!day.state){
        this.selected = day.label;
      } else {
        this.selected = '';
      }
    }
  }
}
</script>

<style scoped>
  .day-picker {
    display: flex;
  }

  .weekDayPicker {
    padding-left: 0;
    flex: 1;
    display: flex;
  }

  .weekDayPicker li {
    font-size: 0.8em;
    flex: 1;
    display: inline-block;
    padding: 0.5em;
    color: #26A69A;
    cursor: pointer;
    text-align: center;
    border: 1px solid;
    margin-right: -1px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .weekDayPicker li:first-child { border-radius: 5px 0 0 5px; }
  .weekDayPicker li:hover { 
    background-color: #80CBC4;
    border: 1px solid #80CBC4; 
    color: white; 
  }
  .weekDayPicker li:last-child { border-radius: 0 5px 5px 0; }
  
  .weekDayPicker li.day-selected {
    background-color: #26A69A;
    border: 1px solid #26A69A;
    color: white;
  }


</style>
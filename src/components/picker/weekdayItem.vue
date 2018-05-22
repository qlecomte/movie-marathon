<template>
  <li :day="day" :key="day" @click="toggleDay(day)" :class="daySelected">{{day}}</li>
</template>

<script>
export default {
  name:"weekDayItem",
  props:['day'],
  data: function () {
    return {
      selected: false
    }
  }, computed:{
    daySelected:function(){
      return {
        "day-selected": this.selected
      }
    }
  }, methods: {
    toggleDay: function() {
      this.selected = !this.selected;
      this.$emit("toggleDay", {label: this.day, selected: this.selected});
    }
  }
}
</script>

<style scoped>
  
</style>
<template>
  <li :day="day" :key="day" @click="toggleDay(day)" :class="daySelected">{{day}}</li>
</template>

<script>
export default {
  name:"weekDayItem",
  props:['day', 'selected'],
  computed:{
    daySelected:function(){
      return {
        "day-selected": this.selected
      }
    }
  }, methods: {
    toggleDay: function() {
      this.$emit("toggleDay", {label: this.day, state: this.selected});
    }
  }
}
</script>

<style scoped>
  
</style>
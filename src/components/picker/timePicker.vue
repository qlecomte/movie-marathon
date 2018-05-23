<template>
  <div class="time-picker">
    <div class="hours">13</div>
    <div class="minutes">15</div>
  </div>
</template>

<script>

export default {
  name:"timePicker",
  props:["hours", "minutes"]
} 
</script>


<style scoped>
  .time-picker {
    color: #26A69A;
    font-size: 0.8em;
    display: flex;
    align-items: center;
  }

  .time-picker .hours, .time-picker .minutes {
    padding: 0.5em 1em;
    border: 1px solid;
    margin-right: -1px;
  }

  .time-picker .hours{
    border-radius: 5px 0 0 5px;
  }

  .time-picker .minutes{
    border-radius: 0 5px 5px 0;
  }
</style>


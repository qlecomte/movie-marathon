<template>
  <div class="time-picker">
    <div class="hours">{{hours}}</div>
    <div class="minutes">{{minutes}}</div>
    <!-- <button id="show-modal" @click="show()">Show Modal</button> -->
    <!-- <modal name="hello-world">
      <div class="modal">
        <h2 class="title">Sélectionnez votre heure de début</h2>
        <div class="body"></div>
        <div class="button" @click="hide()">VALIDER</div></div>
    </modal> -->
  </div>
</template>

<script>
export default {
  name:"timePicker",
  props:{
    "hours":{
      default:12
    }, "minutes":{
      default:0
    }
  }
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


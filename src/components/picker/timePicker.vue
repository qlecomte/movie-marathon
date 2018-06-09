<template>
  <div>
    <div class="time-picker" @click="show()">
      <div class="hours">{{hours}}</div>
      <div class="minutes">{{minutes}}</div>
    </div>
    <modal name="hello-world">
      <div class="modal">
        <h2 class="title">Sélectionnez votre heure de début</h2>
        <div class="body">Hello World</div>
        <div class="button" @click="confirm()">VALIDER</div></div>
    </modal>
  </div>
</template>

<script>
import Vue from 'vue'
import VModal from 'vue-js-modal'

Vue.use(VModal)

export default {
  name:"timePicker",
  props:{
    "hours":{
      default:12
    }, "minutes":{
      default:0
    }
  },methods: {
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    }, 
    confirm () {
      this.$modal.hide('hello-world');
    }
  }
} 
</script>


<style scoped>
  .time-picker {
    color: #26A69A;
    font-size: 0.8em;
    height: 100%;
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

  .modal {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
  }

  .modal .title{
  }

  .modal .body{
    flex: 1;
    color: black;
    padding: 8px 0;
  }

  .modal .button{
    padding-top: 12px;
    padding-bottom: 12px;
    width: 100%;
    font-size: 18px;

    color: white;
    background-color: #80cbc4;
  }

  .modal .button:hover{
    background-color: #26A69A;
  }

</style>


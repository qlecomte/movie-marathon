<template>
  <div>
    <div class="time-picker" @click="show()">
      <div class="hours">{{h | twoDigits}}</div>
      <div class="minutes">{{m | twoDigits}}</div>
    </div>
    <modal name="hello-world">
      <div class="modal">
        <h2 class="title">Sélectionnez votre heure de début</h2>
        <div class="body">
          <div class="time-selector">
            <div class="hours">
              <div class="arrow-up fa fa-chevron-up" @click="changeTime('hours', 'up')"></div>
              <div class="value">{{h | twoDigits}}</div>
              <div class="arrow-down fa fa-chevron-down" @click="changeTime('hours', 'down')"></div>
            </div>
            <div class="minutes">
              <div class="arrow-up fa fa-chevron-up" @click="changeTime('minutes', 'up')"></div>
              <div class="value">{{m | twoDigits}}</div>
              <div class="arrow-down fa fa-chevron-down" @click="changeTime('minutes', 'down')"></div></div>
          </div>
        </div>
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
  data: function(){
    return {
      h: this.hours,
      m: this.minutes
    }
  }, props:{
    "hours":{
      type: Number,
      default:12
    }, "minutes":{
      type: Number,
      default:0
    }, "minutesIncrement":{
      default:1
    }
  }, methods: {
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    }, 
    confirm () {
      this.$modal.hide('hello-world');
      this.$emit("pick-time", {hours: this.h, minutes: this.m});
    }, 
    changeTime (type, direction) {
      if (type === 'hours'){
        if (direction === 'up'){
          this.h++;
        } else if (direction === 'down'){
          this.h--;
        }
      } else if (type === 'minutes'){
        if (direction === 'up'){
          this.m += this.minutesIncrement;
        } else if (direction === 'down'){
          this.m -= this.minutesIncrement;
        }
      }

      this.h = (this.h + 24) % 24;
      this.m = (this.m + 60) % 60;
    }
  }, filters: {
    twoDigits: function (value) {
      return value.toString().padStart(2, "0")
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

  .time-selector{
    display: flex;
    padding: 0 25%;
    justify-content: center;
  }

  .time-selector .hours, .time-selector .minutes{
    color: #26A69A;
    font-size: 26px;
    width: 80px;
    border: 1px solid;
    margin-right: -1px;
  }

  .time-selector .hours{
    border-radius: 12px 0 0 12px;
  }

  .time-selector .minutes{
    border-radius: 0 12px 12px 0;
  }


</style>


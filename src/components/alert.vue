<template>
  <div class="alert" :class="alertClass" v-if="visible">
    <span class="content">
      <slot></slot>
    </span>
   
<!--     <i class="close fa fa-times" @click="close"></i> -->
  </div>
    

</template>

<script>
  
export default {
  name: 'alert',
  data: function(){
    return {
      visible: true
    }
  },
  created: function () {
    this.visible = true
  },
  computed: {
    alertClass:function(){
      return {
        info: this.type === 'info',
        success: this.type === 'success',
        warning: this.type === 'warning',
        danger: this.type === 'danger'
      }
    }
  },
  props:{
    type: String
  }, 
  methods:{
    close:function(){
      this.visible = false;
    }
  }
}
</script>

<style scoped>
  .alert{
    border: 1px solid;
    border-radius: 5px;
    padding-top: 8px;
    padding-bottom: 8px;

    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .info{
    border-color: #29b6f6;
    background-color: #81d4fa;
    color: #01579b;
  }

  .success{
    border-color: #66bb6a;
    background-color: #a5d6a7;
    color: #1b5e20;
  }

  .warning{
    border-color: #ffa726;
    background-color: #ffcc80;
    color: #e65100;
  }

  .danger{
    border-color: #ef5350;
    background-color: #ef9a9a;
    color: #b71c1c;
  }

  .alert .content{
    flex:1;
  }

  .alert .close{
    margin: 0 8px;
  }

</style>
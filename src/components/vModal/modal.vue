<template>
  <!-- Button trigger modal -->
  <div @click="modalShow">
  <slot>
      <a href="javascript:void(0)">button</a>
  </slot>
  </div>


<!-- Modal -->
<div @click.self='modalHide' class="modal fade" v-bind:class="{'out': !showState, 'in': showState}" tabindex="-1" role="dialog">
  <div class="modal-background"></div>
  <div class="modal-dialog" role="document">
    <div class="modal-card">
        <div class="modal-card-head">
            <p class="modal-card-title">{{title}}</p>
            <a class="delete" href='javascript:void(0);' @click="modalHide"><span aria-hidden="true">&times;</span></a>
        </div>
        <div class="modal-card-body">
          <slot name='modal-body'>
            content
          </slot>
      </div>
      <div class="modal-card-foot" v-show="hasFooter">
          <button type="button" class="button is-default" @click="modalCancel">{{ cancelText }}</button>
          <button type="button" class="button is-primary" @click="modalSure">{{ successText }}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
        showState: false
      }
  },
  props: {
    title: {
      type: String,
      default(){
        return ''
      }
    },
    cancelText: {
      type: String,
      default(){
        return '取消'
      }
    },
    successText: {
      type: String,
      default(){
        return '确定'
      }
    },
    hasFooter: {
      type: Boolean,
      default(){
        return true
      }
    },
    onCancel: {
      type: Function
    },
    onSuccess: {
      type: Function
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    modalShow(){
      this.showState = true
    },
    modalHide(){
      this.showState = false
    },
    modalCancel(){
      this.modalHide()
      this.onCancel()
    },
    modalSure(){
      this.modalHide()
      this.onSuccess()
    }
  },
  ready(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, button, textarea{
  outline: none;
}
  .in{
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(0, 0, 0, .5);
  }

  .out{
    display: none;
  }
</style>

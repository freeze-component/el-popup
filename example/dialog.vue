<template>
  <div class="dialog d-popup-center"
    v-if="rendered"
    v-show="visible"
    :transition="transition"
    :class="{ showclose: showClose }">
    <div class="dialog-content">
      <slot></slot>
    </div>
    <slot name="test"></slot>
    <div class="dialog-close" @click="close()" v-if="showClose"></div>
  </div>
</template>

<style>
  .dialog {
    position: fixed;
  }

  .dialog-content {
    background: #fff;
    border-radius: 8px;
    padding-bottom: 12px;
  }

  .dialog.showclose {
    padding-bottom: 40px;
  }

  .dialog-close {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    height: 35px;
    width: 35px;
    line-height: 35px;
    text-align: center;
    background-size: cover;
  }
</style>

<script type="text/ecmascript-6" lang="babel">
  import Popup from '../src/index';
  require('../src/popup.css');

  export default {
    mixins: [Popup],

    props: {
      showClose: {
        type: Boolean,
        default: true
      },
      showModal: {
        type: Boolean,
        default: true
      },
      modal: {
        default: true
      },
      closeOnClickModal: {
        default: true
      },
      title: String
    },

    methods: {
      willOpen() {
        console.log('will open...');
        return true;
      }
    }
  }
</script>

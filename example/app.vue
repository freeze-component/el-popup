<template>
  <button @click="dialogVisible = true">Open Dialog</button>
  <button @click="$refs.test.open()">Open Dialog By open()</button>

  <dialog :visible.sync="dialogVisible" v-ref:test>
    afaddfdf
    <div slot="test">
      dafdaaf
    </div>
  </dialog>
</template>

<script>
  const Dialog = require('./dialog.vue');

  export default {
    name: 'app',

//    template: require('./demo.md'),

    components: {
      Dialog
    },

    data() {
      return {
        dialogVisible: false
      };
    }
  };
</script>

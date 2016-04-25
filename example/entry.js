import Vue from 'vue';

if (process.env.NODE_ENV !== 'production') {
  require('./assets/rainbow.css');
  require('./assets/grid.css');
}

new Vue({ // eslint-disable-line
  el: 'body',
  components: { app: require('./app') }
});

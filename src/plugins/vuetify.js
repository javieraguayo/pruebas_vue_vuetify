import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

Vue.prototype.$multiwatch = function (props, watcher) {
    var iterator = function(prop) {
      this.$watch(prop, watcher);
    };
    props.forEach(iterator, this);
  }

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#194f90',
          },
        },
      },
});

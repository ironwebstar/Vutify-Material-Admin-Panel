// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'font-awesome/css/font-awesome.css';  
import 'vuetify/dist/vuetify.min.css';
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
 
// import './theme/default.styl';
import App from './App';
import router from './router';
import VeeValidate from 'vee-validate';
import colors from 'vuetify/es5/util/colors';
import Truncate from 'lodash.truncate';
Vue.config.productionTip = false;

Vue.filter('truncate', Truncate);
Vue.use(VeeValidate, { fieldsBagName: 'formFields' });
Vue.use(Vuetify, {
  theme: {
    // primary: colors.indigo.base, // #E53935
    // secondary: colors.indigo.lighten4, // #FFCDD2
    // accent: colors.indigo.base // #3F51B5
  },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary',
      },
      sideToolbar: {
      },
      sideNav: 'secondary',
      mainNav: 'primary lighten-1',
      bodyBg: '',
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

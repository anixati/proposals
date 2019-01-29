//import Es6Promise from 'es6-promise'
import 'babel-polyfill'
import Vue from 'vue';
import Vuetify from 'vuetify'
import App from './App.vue';
import router from './router';
import store from './store';


//import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import 'font-awesome/css/font-awesome.css'
// import 'vuetify/dist/vuetify.min.css' 

Vue.config.productionTip = false;


Vue.use(Vuetify, {
  theme: {
    primary:'#022C5E', //'#009688',//'#4D7288',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#424242',
    success: '#4CAF50',
    warning: '#FFC107',
    purple:'#022C5E',
    amber:'#212121',
  },
  customProperties: true,
  iconfont: 'fa4',
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

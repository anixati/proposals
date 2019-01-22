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
    primary: '#4D7288',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    amber:'#4D7288'
  },
  customProperties: true,
  iconfont: 'fa4',
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

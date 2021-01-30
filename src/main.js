import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyBdvU9aJKzIxTTdizfOdHk46QjwSR0DzGg",
  authDomain: "palami-apps.firebaseapp.com",
  databaseURL: "https://palami-apps.firebaseio.com",
  projectId: "palami-apps",
  storageBucket: "palami-apps.appspot.com",
  messagingSenderId: "1000349405707",
  appId: "1:1000349405707:web:30b2663bba0702a693ed0e",
  measurementId: "G-SXYQZW4EMY"
};
firebase.initializeApp(config);
firebase.analytics();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
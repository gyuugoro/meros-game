import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

let config = {
  apiKey: "機密情報",
  authDomain: "機密情報",
  databaseURL: "機密情報",
  projectId: "機密情報",
  storageBucket: "機密情報",
  messagingSenderId: "機密情報",
  appId: "機密情報",
  measurementId: "機密情報"
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

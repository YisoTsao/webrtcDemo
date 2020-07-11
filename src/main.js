import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import WebRTC from 'vue-webrtc';
import * as io from 'socket.io-client'
window.io = io

Vue.use(WebRTC)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
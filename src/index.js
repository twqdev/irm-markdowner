import 'weui';
import '@ASSETS/style/index.styl';

import Vue from 'vue';
import weui from 'weui.js';
import App from '@VIEWS/App';
import http from '@SRC/plugins/http';

// 原型注入
Vue.prototype.$http = http;
Vue.prototype.$weui = weui;

const appElm = document.getElementById('app');

const app = new Vue({
    render: (h) => h(App)
}).$mount(appElm);
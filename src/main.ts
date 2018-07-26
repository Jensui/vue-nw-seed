import Vue from 'vue';

import App from './components/App.vue';

// Hot reloading
import * as hot from './dev/hot';
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV !== 'production')
    hot.reload();

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});

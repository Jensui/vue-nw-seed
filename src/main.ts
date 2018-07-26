import Vue from "vue";

import App from "./components/App.vue";

// Hot reloading
import * as hot from "./dev/hot";
if (process.env.NODE_ENV !== "production") {
	hot.reload();
}

const vue = new Vue({
	el: "#app",
	template: "<App/>",
	components: { App }
});

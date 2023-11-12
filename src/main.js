import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueGoodTablePlugin from "vue-good-table-next";

// import the styles
import "vue-good-table-next/dist/vue-good-table-next.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

app.use(VueGoodTablePlugin);

app.use(VueSweetalert2);

app.use(createPinia());

app.use(router);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseIcon from "@/components/BaseIcon";
import 'nprogress/nprogress.css'
import './index.css'

const app = createApp(App);
app.component("BaseIcon", BaseIcon);
app.use(store).use(router).mount("#app");

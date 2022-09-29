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
app.config.globalProperties.$filters = {
    DateFilter(value) {
        const date = new Date(value)
        return date.toLocaleDateString(['en-us'], {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    })
    }
}

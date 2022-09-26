import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";

const routes = [
  {
    path: '',
    name: "event-list",
    component: EventList
  },
  {
    path: "/event-create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
  },
  {
    // path: "/about-us",
    // name: "about",
    // alias: "/about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  }
  // {
  //   path: "/about-us",
  //   redirect: "/about"
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

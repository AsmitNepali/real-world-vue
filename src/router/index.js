import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";
import NProgress from "nprogress";
import store from "@/store";
import NotFound from "../views/NotFound"
import NetworkIssue from "../views/NetworkIssue"
import ExampleView from "../views/ExampleView.vue"

const routes = [
  {
    path: '',
    name: "event-list",
    component: EventList,
    props: true
  },
  {
    path: '/example-view',
    name: "exmaple",
    component: ExampleView,
    props: true
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
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('event/fetchEvent', routeTo.params.id).then(event => {
        routeTo.params.event = event
        next()
      }).catch(error => {
        if(error.response && error.response.status == 404) {
        next({ name: '404', params:{ resource: 'event' } })
        } else {
          next({ name: 'network-issue' })
        }
      })
    }
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
  },

  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue
  },

  {
    path:'/:pathMatch(.*)*',
    redirect: { name: '404', params: { reource: 'page'}}
  },
  {
    // path: "/about-us",
    // name: "about",
    // alias: "/about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },

  // {
  //   path: "/about-us",
  //   redirect: "/about"
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;

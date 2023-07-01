import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import JobResultsView from "@/views/JobResultsView";
// import JobView from "@/views/JobView";

const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () =>
  import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView");
const JobView = () => import(/* webpackChunkName: "jobs" */ "@/views/JobView");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    /*// route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about"  "../views/JobResultsView.vue"),*/
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;

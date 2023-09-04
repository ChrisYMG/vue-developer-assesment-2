import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/details/:title",
    name: "details",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

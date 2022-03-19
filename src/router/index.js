import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/",
    name: Login,
    component: Login,
  },
  {
    path: "/signup",
    name: Signup,
    component: Signup,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

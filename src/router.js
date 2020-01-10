import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Home = () => import("@/views/home/Home.vue");
const Find = () => import("@/views/find/Find.vue");
const User = () => import("@/views/user/User.vue");
const Details = () => import("@/views/find/Details.vue");
const router = new VueRouter({
	routes: [
		{
			path: "/",
			component: Home
		},
		{
			path: "/find",
			component: Find
		},
		{
			path: "/user",
			component: User
		},
		{
			path: "/details/:id",
			component: Details
		}
	]
});

export default router;

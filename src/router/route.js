import { createRouter, createWebHistory } from "vue-router";

// Lazy load views using relative paths
const BlogHome = () => import("../views/BlogHome.vue");
const CreatePost = () => import("../views/CreatePost.vue");

const routes = [
  {
    path: "/",
    name: "BlogHome",
    component: BlogHome,
  },
  {
    path: "/create",
    name: "CreatePost",
    component: CreatePost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

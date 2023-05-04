import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'index',
      component: () => import("@/components/layout/HomeLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/pages/Home.vue"),
        },
        {
          path: "search/scanner",
          name: "searcher",
          component: () => import("@/pages/scanner/Scanner.vue"),
        },
        // {
        //   path: "/result/:query",
        //   name: "result",
        //   component: () => import(""),
        // },
      ],
    },
  ],
});

export default router;

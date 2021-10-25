import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import About from "./About";
import Movie from "./Movie";
import Apply from "./Apply";
import Check from "./Check";
import Notice from "./Notice";
import Qna from "./Qna";
import Summary from "./Summary";
import AdApply from "./AdApply";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/movie/:id",
      component: Movie,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/apply",
      component: Apply,
    },
    {
      path: "/check",
      component: Check,
    },
    {
      path: "/notice",
      component: Notice,
    },
    {
      path: "/question",
      component: Qna,
    },
    {
      path: "/summary",
      component: Summary,
    },
    {
      path: "/admin",
      component: AdApply,
    },
    {
      path: `/:notFound(.*)`,
      component: NotFound,
    },
  ],
});

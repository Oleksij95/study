import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ExamDate from '../views/ExamDate';
import ClassRoom from '../views/ClassRoom';
import Settings from '../views/Settings';
import SigIn from '../views/SigIn';
import NoticeBoard from '../views/NoticeBoard';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SingIn',
    component: SigIn,
    meta: { requiresAuth: false },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/exam-date',
    name: 'ExamDate',
    component: ExamDate,
    meta: { requiresAuth: true },
  },
  {
    path: '/class-room',
    name: 'ClassRoom',
    component: ClassRoom,
    meta: { requiresAuth: true },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true },
  },
  {
    path: '/notice-board',
    name: 'NoticeBoard',
    component: NoticeBoard,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && store.getters['USER'] == null) {
    next({ name: 'SingIn' });
  } else if (
    store.getters['USER'] !== null &&
    (to.name == 'Registration' || to.name == 'SingIn')
  ) {
    next({ name: 'Dashboard' });
  } else next();
});
export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ExamDate from '../views/ExamDate';
import ClassRoom from '../views/ClassRoom';
import Settings from '../views/Settings';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/exam-date',
    name: 'ExamDate',
    component: ExamDate,
  },
  {
    path: '/class-room',
    name: 'ClassRoom',
    component: ClassRoom,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

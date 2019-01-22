import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './pages/Dashboard.vue';
import SubmissionList from './pages/Submissions.vue';
import Proposal from './pages/Proposal.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/submissions',
      name: 'Submissions',
      component: SubmissionList,
      //component: () => import(/* webpackChunkName: "submissions" */ './pages/Submissions.vue'),
    },{
      path: '/proposal',
      name: 'Proposal',
      component: Proposal,
    },
    {
      path: '/',
      redirect: '/dashboard'
    }
  ],
});

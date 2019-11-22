import { Route } from 'mobx-state-router';

const routes: Route[] = [
  {
    name: 'notFound',
    pattern: '/not-found'
  },
  {
    name: 'home',
    pattern: '/'
  }
];

export default routes;

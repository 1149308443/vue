import Index from '@/pages/index';

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
const routes = [
    { path: '/', component: Index},
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/:id', component: Index},
];
export default routes;
  
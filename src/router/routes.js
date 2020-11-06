// import Index from '@/pages/index';
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
const Index = () => import('@/pages/index');
const HomePage = () =>import('@/pages/homePage');
const routes = [
    { path: '/', component: Index},
    { path: '/HomePage', component: HomePage},
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/:id', component: Index},
];
export default routes;
  
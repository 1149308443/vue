// import Index from '@/pages/index';
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
const Demo = () => import('@/pages/demo');
const HomePage = () =>import('@/pages/homePage');
const Article = () =>import('@/pages/article');
const Editor = () =>import('@/pages/editor');
const routes = [
    { path: '/', component: HomePage},
    { path: '/article', component: Article},
    { path: '/editor', component: Editor},
    { path: '/demo', component: Demo},
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/:id', component: Demo},
];
export default routes;
  
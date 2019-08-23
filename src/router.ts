import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Counter from './views/Counter.vue';
import GroceryList from './views/GroceryList.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/counter',
            name: 'counter',
            component: Counter,
        }, {
            path: '/grocery',
            name: 'grocery',
            component: GroceryList,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
    ],
});

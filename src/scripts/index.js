import Vue from 'vue';
import App from '../views/App.vue';
import VueRouter from 'vue-router';
import HelloWorld from '../views/components/HelloWorld.vue'
import Demos from '../views/components/Demos.vue'
import DemoGreeting from '../views/components/demoGreeting.vue'
import Demo2 from '../views/components/Demo2.vue'
import DemoAjaxList from '../views/components/DemoAjaxList.vue'
import DemoEventBinding from '../views/components/DemoEventBinding.vue'
import DemoOneWayDataBinding from '../views/components/demoOneWayDataBinding.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: [
        {
            path: '/',
            component: HelloWorld,
            props: { msg : "Welcome to Your Vue.js App" }
            // children: [
            //     {
            //         path: 'demo1',
            //         component: Demo1
            //     }
            // ]
        },
        {
            path: '/demos',
            component: Demos
        },
        {
            path: '/demoGreeting',
            component: DemoGreeting
        },
        {
            path: '/demo2',
            component: Demo2
        },
        {
            path: '/demoAjaxList',
            component: DemoAjaxList
        },
        {
            path: '/demoEventBinding',
            component: DemoEventBinding
        },
        {
            path: '/demoOneWayDataBinding',
            component: DemoOneWayDataBinding
        }
    ]
});

new Vue({
    render: h => h(App),
    router,
}).$mount("#app");
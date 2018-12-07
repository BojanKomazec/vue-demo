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
import DemoChild1 from '../views/components/demoChild1.vue'
import DemoChild2 from '../views/components/demoChild2.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: [
        {
            path: '/',
            component: HelloWorld,
            props: { msg : "Welcome to Your Vue.js App" },
            children: [
                {
                    path: 'demoChild1',
                    component: DemoChild1,
                    children: [
                      {
                          path: 'demoChild2',
                          component: DemoChild2
                      },
                    ]
                },
            ]
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
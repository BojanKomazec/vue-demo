import Vue from 'vue';
import App from '../views/App.vue';
import VueRouter from 'vue-router';
import HelloWorld from '../views/components/HelloWorld.vue'
import Demos from '../views/components/Demos.vue'
import Demo1 from '../views/components/Demo1.vue'
import Demo2 from '../views/components/Demo2.vue'

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
            path: '/demo1',
            component: Demo1
        },
        {
            path: '/demo2',
            component: Demo2
        }
    ]
});

new Vue({
    render: h => h(App),
    router,
}).$mount("#app");
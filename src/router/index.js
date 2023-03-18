import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/skills',
        name: 'skills',
        component: Skills
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// import Vue from 'vue'
// import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
// import Skills from '../views/Skills.vue'
// import Projects from '../views/Projects.vue'
// import Contact from '../views/Contact.vue'

// Vue.use(VueRouter)

// const routes = [{
//         path: '/',
//         name: 'home',
//         component: Home
//     },
//     {
//         path: '/skills',
//         name: 'skills',
//         component: Skills
//     },
//     {
//         path: '/projects',
//         name: 'projects',
//         component: Projects
//     },
//     {
//         path: '/contact',
//         name: 'contact',
//         component: Contact
//     },
// ]

// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })


export default router
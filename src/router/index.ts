import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'home',
        component: ()=>import('@/components/Pages/HomePage.vue')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: ()=>import('@/components/Pages/JobsPage.vue')
    },
    {
        path: '/jobs/:id',
        name: 'job',
        component: ()=>import('@/components/Pages/JobPage.vue')
    },
    {
        path: '/jobs/edit/:id',
        name: 'edit-job',
        component: ()=>import('@/components/Pages/EditJobPage.vue')
    },
    {
        path: '/job/add',
        name: 'add-job',
        component: ()=>import('@/components/Pages/AddJobPage.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: ()=>import('@/components/Pages/NotFound.vue')
    }
]
})

export default router
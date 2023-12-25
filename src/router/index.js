//* Importaciones
import { createRouter, createWebHistory } from 'vue-router';

import { setTitlePage } from './guards';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('@/modules/login/LoginLayout.vue'),
            meta: {
                title: 'Iniciar Sesión'
            }
        },
        {
            path: '/create-account',
            name: 'create-account',
            component: () => import('@/modules/create_account/CreateAccountLayout.vue'),
            meta: {
                title: 'Crear Cuenta'
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'page-not-found',
            component: () => import('@/shared/components/PageNotFound.vue'),
            meta: {
                title: 'Error 404'
            }
        },
    ]
});

//? Configuración de nombre de pestaña
setTitlePage( router );
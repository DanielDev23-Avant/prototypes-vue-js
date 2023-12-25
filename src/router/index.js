//* --> Importaciones globales
import { createRouter, createWebHistory } from 'vue-router';

//* --> Importaciones locales
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
            path: '/:pathMatch(.*)*',
            name: 'page-not-found',
            component: () => import('@/shared/components/PageNotFound.vue'),
            meta: {
                title: 'Error 404'
            }
        },
    ]
});

//? --> Configuración de nombre de página
setTitlePage( router );
<script setup>

    //* --> Importaciones
    import { defineAsyncComponent } from 'vue';

    //* --> Componentes
    const FormLogin = defineAsyncComponent(() => import('./components/FormLogin.vue'));

</script>

<template>
    <div class="login-container">
        <!-- Título del Módulo -->
        <h2 class="title-3">Inicio de Sesión</h2>

        <!-- Formulario de Iniciar Sesión -->
        <form-login></form-login>

        <!-- Creación de Cuenta -->
        <div class="create-account-option">
            <p>¿Aún no tienes una cuenta?</p>
            <router-link :to="{ name: 'create-account' }" class="btn-link text-bold">Registrarme</router-link>
        </div>
    </div>
</template>

<style scoped>
    .login-container, .create-account-option { 
        display: flex; 
    }

    .login-container {
        flex-direction: column;
        gap: 25px;
    }

    .create-account-option {
        gap: 8px;
        justify-content: center;
        align-items: center;
    }
</style>
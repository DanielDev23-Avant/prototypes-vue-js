<script setup>

    //* --> Importaciones
    import { defineAsyncComponent } from 'vue';

    //* --> Componentes
    const FormCreateAccount = defineAsyncComponent(() => import('./components/FormCreateAccount.vue'));

</script>

<template>
    <div class="create-account-container">
        <router-link :to="{ name: 'login' }" class="button-back-login">
            <i class="material-symbols-rounded back-login-icon">east</i>
            Ya tengo una cuenta
        </router-link>

        <!-- Título del Módulo -->
        <h2 class="title-3">Crear Cuenta</h2>

        <!-- Formulario de Iniciar Sesión -->
        <form-create-account></form-create-account>
    </div>
</template>

<style scoped>
    .create-account-container {
        min-width: 100%;
        min-height: calc(100vh - 45px);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;

        position: relative;
    }

    .button-back-login {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 15px;

        position: absolute;
        top: 0;
        right: 0;

        margin:  15px 15px 0 0;
        transition: color .5s ease;
    }

    .button-back-login:hover { color: #AEAEAE; }

    .back-login-icon {
        background-color: #293277;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #FFFFFF;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
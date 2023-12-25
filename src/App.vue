<script setup>

    //* --> Importaciones
    import { defineAsyncComponent } from 'vue';

    //* --> Componentes
    const Navbar = defineAsyncComponent(() => import('@/shared/components/Navbar.vue'));

</script>

<template>
    <div class="main-container">
        <!-- Barra de Navegación -->
        <div class="nav-container">
            <navbar></navbar>
        </div>

        <!-- Contenido Principal -->
        <div class="main-content">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" ></component>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<style scoped>
    .nav-container {
        width: 100%;
        height: 45px;

        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 5px 1px 5px #dbdbdb;
    }
    .main-content {
        width: 100%;
        height: calc(100vh - 45px);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
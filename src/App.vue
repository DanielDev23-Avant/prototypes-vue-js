<script setup>

    //* --> Importaciones
    import { defineAsyncComponent } from 'vue';

    //* --> Componentes
    const AppVersion = defineAsyncComponent(() => import('@/shared/components/AppVersion.vue'));

</script>

<template>
    <div class="main-container">
        <!-- Versión del Producto -->
        <app-version></app-version>

        <!-- Renderización de Contenido -->
        <router-view v-slot="{ Component }">
            <!-- Configuración de Animaciones por Vue Router -->
            <transition name="fade">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<style scoped>
    
</style>
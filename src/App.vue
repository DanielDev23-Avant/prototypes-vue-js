<script setup>

    //* --> Importaciones
    import { defineAsyncComponent } from 'vue';

    //* --> Componentes
    const AppVersion = defineAsyncComponent(() => import('@/shared/components/AppVersion.vue'));

</script>

<template>
    <div class="main-container">
        <!-- Versión de Producto -->
        <app-version></app-version>

        <!-- Contenido Principal -->
        <div class="actions-wrapper">
            <button class="btn btn-primary">Modal Informativo</button>
            <button class="btn btn-primary">Modal Formulario</button>
            <button class="btn btn-primary">Modal Imagen</button>
        </div>
    </div>
</template>

<style scoped>
    .actions-wrapper {
        width: 600px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>
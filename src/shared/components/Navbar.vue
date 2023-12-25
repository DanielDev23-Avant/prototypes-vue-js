<script setup>

    //* --> Importaciones
    import { defineAsyncComponent } from 'vue';

    //* --> Componentes
    const AppVersion = defineAsyncComponent(() => import('./AppVersion.vue'));

</script>

<template>
    <!-- Versión del Producto -->
    <app-version></app-version>
</template>

<style scoped>
    
</style>
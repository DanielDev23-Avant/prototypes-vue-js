<script setup>

    //* --> Importaciones
    import { ref } from 'vue';

    /**
     * @constant {Ref<string>} Define la madurez del producto.
     */
    const APP_VERSION = ref( import.meta.env.VITE_VERSION );

</script>

<template>
    <div class="app-version-container">
        <h1 class="title-2">Vue Form Errors</h1>
        <span class="version">v{{ APP_VERSION }}</span>
    </div>
</template>

<style scoped>
    .app-version-container {
        display: flex;
        gap: 5px;
    }
</style>
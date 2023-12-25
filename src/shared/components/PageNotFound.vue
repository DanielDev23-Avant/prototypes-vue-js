<script setup>

    //* --> Importaciones
    import { useRouter } from 'vue-router';

    /**
     * @type {object} Referencia del enrutador de la aplicación.
     */
    const router = useRouter();

    /**
     * Redirecciona al usuario una página antes.
     */
    const previousPage = () => router.go(-1);

</script>

<template>
    <h1 class="title-3">Página No Encontrada</h1>
    <p class="description-2">Error 404</p>
    <button 
        @click="previousPage" 
        class="btn btn-back">Volver</button>
</template>

<style scoped></style>
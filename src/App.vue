<script setup>

    //* --> Importaciones
    import { defineAsyncComponent } from 'vue';
    import { useModalStore } from '@/stores/useModalStore';

    //* --> Componentes
    const AppVersion = defineAsyncComponent(() => import('@/shared/components/AppVersion.vue'));

    const ModalInfo = defineAsyncComponent(() => import('@/views/ModalInfo.vue'));
    const ModalInfoV2 = defineAsyncComponent(() => import('@/views/ModalInfoV2.vue'));
    const ModalImg = defineAsyncComponent(() => import('@/views/ModalImg.vue'));
    const ModalForm = defineAsyncComponent(() => import('@/views/ModalForm.vue'));

    //* --> Acciones
    const modal = useModalStore();

</script>

<template>
    <div class="main-container">
        <!-- Versión de Producto -->
        <app-version></app-version>

        <!-- Contenido Principal -->
        <div class="actions-wrapper">
            <button class="btn btn-primary" @click="modal.toggleModalInfo">Modal Info</button>
            <button class="btn btn-primary" @click="modal.toggleModalInfoV2">Modal Info V2</button>
            <button class="btn btn-primary" @click="modal.toggleModalForm">Modal Form</button>
            <button class="btn btn-primary" @click="modal.toggleModalImg">Modal Img</button>
        </div>

        <!-- Renderización de Ventanas Emergentes -->
        <modal-Info :store="modal"></modal-Info>
        <modal-Info-v2 :store="modal"></modal-Info-v2>
        <modal-img :store="modal"></modal-img>
        <modal-form :store="modal"></modal-form>
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
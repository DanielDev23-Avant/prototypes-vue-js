<script setup>

    //* --> Importaciones
    import { ref, defineAsyncComponent } from 'vue';

    //* --> Componentes
    const BaseModal = defineAsyncComponent(() => import('@/shared/vue_modal/BaseModal.vue'));

    //* --> Acciones
    const props = defineProps({
        store: {
            type: Object,
            required: true
        }
    });

    //? -> Desestructuración de props
    const { store } = props;

    /**
     * @constant {object} Configuración del botón de confirmación en modal.
     */
    const btnSuccessConfig = ref({
        action: store.toggleModalInfo,
        name: 'Confirmar'
    });

</script>

<template>
    <transition name="fade" mode="out-in">
        <base-modal 
            v-if="store.showModalInfo"
            :btn-success="btnSuccessConfig">

            <!-- Título -->
            <template #modal-title>
                <h2 class="title-2">Error 500</h2>
            </template>

            <!-- Descripción -->
            <template #modal-description>
                <p class="description-2">Opps, estamos experimentando problemas en servidor, intente de nuevo más tarde.</p>
            </template>

        </base-modal>
    </transition>
</template>

<style scoped>
    
</style>
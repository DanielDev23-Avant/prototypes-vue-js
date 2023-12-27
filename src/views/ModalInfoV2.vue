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
        action: store.toggleModalInfoV2,
        icon: 'delete',
        name: 'Eliminar'
    });

    /**
     * @constant {object} Configuración del botón de cancelar en modal.
     */
    const btnCancelConfig = ref({
        action: store.toggleModalInfoV2,
        icon: 'close',
        name: 'Cancelar'
    });

</script>

<template>
    <transition name="fade" mode="out-in">
        <base-modal 
            v-if="store.showModalInfoV2"
            :btn-close="store.toggleModalInfoV2"
            :btn-cancel="btnCancelConfig"
            :btn-success="btnSuccessConfig">

            <!-- Título -->
            <template #modal-title>
                <h2 class="title-2">Eliminar Usuario</h2>
            </template>

            <!-- Descripción -->
            <template #modal-description>
                <p class="description-2">¿Estás seguro de eliminar al usuario <span class="text-bold">Daniel Gonzalez</span>?</p>
            </template>

        </base-modal>
    </transition>
</template>

<style scoped>
    .btn-success {
        text-transform: none;
        letter-spacing: 0;
    }
</style>
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
        action: store.toggleModalImg,
        name: 'Confirmar'
    });

</script>

<template>
    <transition name="fade" mode="out-in">
        <base-modal 
            v-if="store.showModalImg"
            :btn-success="btnSuccessConfig">

            <!-- Título -->
            <template #modal-title>
                <h2 class="title-2">Logo de Vue</h2>
            </template>

            <!-- Descripción -->
            <template #modal-description>
                <p class="description-2">A continuación, se muestra el logo de Vue JS.</p>
            </template>

            <!-- Contenido -->
            <template #modal-body>
                <div class="modal-content">
                    <img src="@/assets/logo.svg" alt="Logotipo de Vue" class="brand-logo">
                </div>
            </template>

        </base-modal>
    </transition>
</template>

<style scoped>
    .modal-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .brand-logo {
        width: 200px;
    }
</style>
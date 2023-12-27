<script setup>

    //* --> Acciones
    const props = defineProps({
        btnClose: { type: Function },
        btnCancel: { type: Object },
        btnSuccess: { type: Object },
        dimensionH: {
            type: String,
            default: 'auto'
        },
        dimensionW: { 
            type: String,
            default: '400px'
        },
    });

    //? -> Desestructuración de props
    const { btnClose, btnCancel, btnSuccess, dimensionH, dimensionW } = props;

</script>

<template>
    <div class="overlay">
        <div class="modal-container">

            <!-- Botón de Cerrar -->
            <button class="btn-close" v-if="btnClose !== undefined" @click="btnClose">
                <i class="material-symbols-rounded btn-close-icon">close</i>
            </button>

            <!-- Título -->
            <slot name="modal-title"></slot>

            <!-- Descripción -->
            <slot name="modal-description"></slot>

            <!-- Contenido -->
            <slot name="modal-body"></slot>

            <!-- Acciones -->
            <div class="btn-controls-container" v-if=" btnSuccess !== undefined || btnCancel !== undefined">
                <button class="btn btn-success" v-if="btnSuccess !== undefined" @click="btnSuccess.action">
                    <i class="material-symbols-rounded" v-if="btnSuccess !== undefined">{{ btnSuccess.icon }}</i>
                    {{ btnSuccess.name }}
                </button>

                <button class="btn btn-cancel" v-if="btnCancel !== undefined" @click="btnCancel.action">
                    <i class="material-symbols-rounded" v-if="btnCancel !== undefined">{{ btnCancel.icon }}</i>
                    {{ btnCancel.name }}
                </button>
            </div>

            <!-- Extras -->
            <slot name="modal-extra"></slot>
        </div>
    </div>
</template>

<style scoped>
    .overlay {
        background-color: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;

        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: opacity .3s ease;
    }

    .modal-container {
        background-color: #FFFAFA;
        width: v-bind(dimensionW);
        height: v-bind(dimensionH);
        border-radius: 8px;
        padding: 20px;

        position: relative;

        display: flex;
        flex-direction: column;
        gap: 20px;

        transition: all .3s ease;
    }

    .btn-close {
        width: 25px;
        height: 25px;
        color: #A4A4A4;
        cursor: pointer;

        position: absolute;
        top: 10px;
        right: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: color .5s ease;
    }
    .btn-close:hover {
        color: #DC5959;
    }

    .btn-close-icon { 
        font-size: 22px;
        font-weight: 600;
    }

    .btn-controls-container {
        display: flex;
        flex-direction: row-reverse;
        gap: 10px;
    }

    .btn-success { background-color: #293277; }
    .btn-success:hover { background-color: #3d4899; }

    .btn-cancel { background-color: #DC5959; }
    .btn-cancel:hover { background-color: #c84c4c; }
</style>
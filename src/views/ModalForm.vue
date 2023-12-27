<script setup>

    //* --> Importaciones
    import { ref, defineAsyncComponent } from 'vue';
    import { useTogglePassword } from '@/shared/helpers';

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

    const currentPassword = ref('');
    const newPassword = ref('');
    const confirmPassword = ref('');

    const { 
        showCurrentPassword, showNewPassword, showConfirmPassword,
        toggleCurrentPassword, toggleNewPassword, toggleConfirmPassword
    } = useTogglePassword();

    const submitLogin = async () => {
        console.log('✨ LOGIN_DATA: ', {
            currentPassword: currentPassword.value,
            newPassword: newPassword.value,
            confirmPassword: confirmPassword.value,
        });

        currentPassword.value = '';
        newPassword.value = '';
        confirmPassword.value = '';
    }

</script>

<template>
    <transition name="fade" mode="out-in">
        <base-modal 
            v-if="store.showModalForm"
            :btn-close="store.toggleModalForm">

            <!-- Título -->
            <template #modal-title>
                <h2 class="title-1 text-bold">Restablecer Contraseña</h2>
            </template>

            <!-- Descripción -->
            <template #modal-description>
                <p class="description-2">Ingrese y complete los siguientes campos</p>
            </template>

            <!-- Contenido -->
            <template #modal-body>
                <div class="modal-content">
                    <form @submit.prevent="submitLogin" autocomplete="off" class="form">

                        <!-- Contraseña Actual -->
                        <div class="form-group">
                            <label for="current-password" class="form-label">Contraseña</label>

                            <div class="form-input-wrapper">
                                <i class="material-symbols-rounded form-icon form-icon--left">lock</i>

                                <input 
                                    :type="showCurrentPassword ? 'text' : 'password'"
                                    id="current-password"
                                    class="form-input"
                                    placeholder="$Avant123"
                                    v-model="currentPassword">

                                <i 
                                    class="material-symbols-rounded form-icon form-icon--right toggle-password"
                                    @click="toggleCurrentPassword">{{ showCurrentPassword ? 'visibility_off' : 'visibility' }}</i>
                            </div>
                        </div>

                        <!-- Nueva Contraseña -->
                        <div class="form-group">
                            <label for="new-password" class="form-label">Contraseña</label>

                            <div class="form-input-wrapper">
                                <i class="material-symbols-rounded form-icon form-icon--left">lock</i>

                                <input 
                                    :type="showNewPassword ? 'text' : 'password'"
                                    id="new-password"
                                    class="form-input"
                                    placeholder="$TestAvant2023"
                                    v-model="newPassword">

                                <i 
                                    class="material-symbols-rounded form-icon form-icon--right toggle-password"
                                    @click="toggleNewPassword">{{ showNewPassword ? 'visibility_off' : 'visibility' }}</i>
                            </div>
                        </div>

                        <!-- Confirmar Contraseña -->
                        <div class="form-group">
                            <label for="confirm-password" class="form-label">Confirmar Contraseña</label>

                            <div class="form-input-wrapper">
                                <i class="material-symbols-rounded form-icon form-icon--left">lock</i>

                                <input 
                                    :type="showConfirmPassword ? 'text' : 'password'"
                                    id="confirm-password"
                                    class="form-input"
                                    placeholder="$TestAvant2023"
                                    v-model="confirmPassword">

                                <i 
                                    class="material-symbols-rounded form-icon form-icon--right toggle-password"
                                    @click="toggleConfirmPassword">{{ showConfirmPassword ? 'visibility_off' : 'visibility' }}</i>
                            </div>
                        </div>

                        <!-- Submit -->
                        <button class="btn btn-primary">Ingresar</button>

                    </form>
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
    .brand-logo { width: 200px; }

    .btn-primary { width: 100%; }
</style>
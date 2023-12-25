<script setup>

    //* --> Importaciones
    import { storeToRefs } from 'pinia';

    import { useCreateAccountStore } from '../stores';
    import { useErrorHandler } from '../composables';
    import { useTogglePassword } from '@/shared/helpers';

    //? --> Acciones
    const { username, email, password, confirmPassword } = storeToRefs( useCreateAccountStore() );

    const { showPassword, showConfirmPassword, togglePassword, toggleConfirmPassword } = useTogglePassword();
    const { validateField, hasError, hasErrors, getErrorMessage } = useErrorHandler({ username, email, password, confirmPassword });

    /**
     * Procesa la petición para iniciar sesión.
     */
    const submitCreateAccount = async () => {

        //? --> Validación de campos
        validateField('username');
        validateField('email');
        validateField('password');
        validateField('confirmPassword');

        //? --> Iniciando sesión
        if ( !hasErrors() ) {

            console.log('CREATE_ACCOUNT: ', {
                username: email.value,
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value
            });

            username.value = '';
            email.value = '';
            password.value = '';
            confirmPassword.value = '';

        }

    }

</script>

<template>
    <form @submit.prevent="submitCreateAccount" autocomplete="off" class="form">

        <!-- Nombre de Usuario -->
        <div class="form-group">
            <label for="username" class="form-label">Usuario</label>

            <div class="form-input-wrapper">
                <i class="material-symbols-rounded form-icon form-icon--left">person</i>

                <input 
                    type="text"
                    id="username"
                    class="form-input"
                    placeholder="John Smith"
                    v-model="username"
                    @blur="validateField('username')"
                    :class="{ 'form-error': hasError('username') }">
            </div>

            <transition name="fade">
                <span class="form-error-message">{{ getErrorMessage('username') }}</span>
            </transition>
        </div>

        <!-- Correo Electrónico -->
        <div class="form-group">
            <label for="email" class="form-label">Correo Electrónico</label>

            <div class="form-input-wrapper">
                <i class="material-symbols-rounded form-icon form-icon--left">mail</i>

                <input 
                    type="text"
                    id="email"
                    class="form-input"
                    placeholder="example@cistem.com.mx"
                    v-model="email"
                    @blur="validateField('email')"
                    :class="{ 'form-error': hasError('email') }">
            </div>

            <transition name="fade">
                <span class="form-error-message">{{ getErrorMessage('email') }}</span>
            </transition>
        </div>

        <!-- Contraseña -->
        <div class="form-group">
            <label for="password" class="form-label">Contraseña</label>

            <div class="form-input-wrapper">
                <i class="material-symbols-rounded form-icon form-icon--left">lock</i>

                <input 
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    class="form-input"
                    placeholder="*****"
                    v-model="password"
                    @blur="validateField('password')"
                    :class="{ 'form-error': hasError('password') }">

                <i 
                    class="material-symbols-rounded form-icon form-icon--right toggle-password"
                    @click="togglePassword">{{ showPassword ? 'visibility_off' : 'visibility' }}</i>
            </div>

            <transition name="fade">
                <span class="form-error-message">{{ getErrorMessage('password') }}</span>
            </transition>
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
                    placeholder="*****"
                    v-model="confirmPassword"
                    @blur="validateField('confirmPassword')"
                    :class="{ 'form-error': hasError('confirmPassword') }">

                <i 
                    class="material-symbols-rounded form-icon form-icon--right toggle-password"
                    @click="toggleConfirmPassword">{{ showConfirmPassword ? 'visibility_off' : 'visibility' }}</i>
            </div>

            <transition name="fade">
                <span class="form-error-message">{{ getErrorMessage('confirmPassword') }}</span>
            </transition>
        </div>

        <!-- Submit -->
        <button class="btn btn-submit">Ingresar</button>

    </form>
</template>

<style scoped></style>
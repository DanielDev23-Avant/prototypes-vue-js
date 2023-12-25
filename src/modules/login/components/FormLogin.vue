<script setup>

    //* --> Importaciones
    import { storeToRefs } from 'pinia';

    import { useLoginStore } from '../stores';
    import { useErrorHandler } from '../composables';
    import { useTogglePassword } from '@/shared/helpers';

    //? --> Acciones
    const { email, password } = storeToRefs( useLoginStore() );

    const { showPassword, togglePassword } = useTogglePassword();
    const { validateField, hasError, hasErrors, getErrorMessage } = useErrorHandler({ email, password });

    /**
     * Procesa la petición para iniciar sesión.
     */
    const submitLogin = async () => {

        //? --> Validación de campos
        validateField('email');
        validateField('password');

        //? --> Iniciando sesión
        if ( !hasErrors() ) {

            console.log('LOGIN_SESSION: ', {
                email: email.value,
                password: password.value
            });

            email.value = '';
            password.value = '';

        }

    }

</script>

<template>
    <form @submit.prevent="submitLogin" autocomplete="off" class="form">

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

        <!-- Submit -->
        <button class="btn btn-submit">Ingresar</button>

    </form>
</template>

<style scoped></style>
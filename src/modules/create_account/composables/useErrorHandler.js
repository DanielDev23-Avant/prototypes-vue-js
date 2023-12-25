//* --> Importaciones
import { ref } from 'vue';

import { errorHandler } from '@/shared/helpers';

//? --> Desestructuración de propiedades
const { 
    inputConfirmPassword, 
    inputCreatePassword, 
    inputEmail, 
    inputUsername, 
} = errorHandler.inputs;

/**
 * Composable para manejador de errores.
 * 
 * @param {object} inputsForm - Definición de inputs de formulario.
 * @param {string} inputsForm.username - Nombre de Usuario a validar.
 * @param {string} inputsForm.email - Correo electrónico a validar.
 * @param {string} inputsForm.password - Contraseña a validar.
 * @param {string} inputsForm.confirmPassword - Confirmación de Contraseña a validar.
 * 
 * @returns {object} Manejador de Errores.
 */
export const useErrorHandler = ( inputsForm ) => {

    //? --> Inputs de formulario
    const { username, email, password, confirmPassword } = inputsForm;

    /**
     * @constant {Ref<object>} Esquema de errores.
     */
    const schemeErrors = ref({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    /**
     * Ejecuta el bloque de validación según el input.
     * 
     * @param {string} field - Campo de formulario.
     */
    const validateField = ( field ) => {

        switch ( field ) {
            case 'username':
                schemeErrors.value.username = inputUsername( username.value);
            break;

            case 'email':
                schemeErrors.value.email = inputEmail( email.value );
            break;

            case 'password':
                schemeErrors.value.password = inputCreatePassword( password.value );
            break;

            case 'confirmPassword':
                schemeErrors.value.confirmPassword = inputConfirmPassword( confirmPassword.value, password.value );
            break;
        }

    }

    /**
     * Verifica si hay un error en el campo específicado.
     * 
     * @param {string} field - Campo de formulario.
     * 
     * @returns 'true' si hay un error, 'false' todo lo contrario.
     */
    const hasError = ( field ) => !!schemeErrors.value[field];

    /**
     * Verifica si hay algún error en cualquier campo.
     * 
     * @returns 'true' si hay un errorm 'false' todo lo contrario.
     */
    const hasErrors = () => Object.values( schemeErrors.value ).some( error => !!error );

    /**
     * Obtiene el mensaje de error del campo específico.
     * 
     * @param {string} field - Campo de formulario.
     * 
     * @returns {string} Mensaje de Error.
     */
    const getErrorMessage = ( field ) => schemeErrors.value[field];

    return {
        //* Properties

        //* Methods
        validateField,
        hasError,
        hasErrors,
        getErrorMessage,
    }

}
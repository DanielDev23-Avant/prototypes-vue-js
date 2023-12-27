//* --> Importaciones
import { ref } from 'vue';

/**
 * Composable para delimitar propiedades de 'Mostrar u Ocultar contraseña'.
 * 
 * @returns {object} Propiedades del Composable 'TogglePassword'.
 */
export const useTogglePassword = () => {

    /**
     * @constant {Ref<boolean>} Bandera que muestra u oculta la contraseña actual.
     */
    const showCurrentPassword = ref(false);

    /**
     * @constant {Ref<boolean>} Bandera que muestra u oculta la nueva contraseña.
     */
    const showNewPassword = ref(false);

    /**
     * @constant {Ref<boolean>} Bandera que muestra u oculta la confirmación de contraseña.
     */
    const showConfirmPassword = ref(false);

    /**
     * Muestra u oculta la contraseña actual.
     * 
     * @returns 'true' para mostrar contraseña, 'false' para ocultarla.
     */
    const toggleCurrentPassword = () => showCurrentPassword.value = !showCurrentPassword.value;

    /**
     * Muestra u oculta la nueva contraseña actual.
     * 
     * @returns 'true' para mostrar contraseña, 'false' para ocultarla.
     */
    const toggleNewPassword = () => showNewPassword.value = !showNewPassword.value;

    /**
     * Muestra u oculta la confirmación de contraseña.
     * 
     * @returns 'true' para mostrar contraseña, 'false' para ocultarla.
     */
    const toggleConfirmPassword = () => showConfirmPassword.value = !showConfirmPassword.value;


    return {
        //* Properties
        showCurrentPassword, showNewPassword, showConfirmPassword,

        //* Methods
        toggleCurrentPassword, toggleNewPassword, toggleConfirmPassword
    }

}
//* --> Importaciones
import { ref } from 'vue';

/**
 * Composable para delimitar propiedades de 'Mostrar u Ocultar contraseña'.
 * 
 * @returns {object} Propiedades del Composable 'TogglePassword'.
 */
export const useTogglePassword = () => {

    /**
     * @constant {Ref<boolean>} Bandera que muestra u oculta la contraseña.
     */
    const showPassword = ref(false);

    /**
     * @constant {Ref<boolean>} Bandera que muestra u oculta la confirmación de contraseña.
     */
    const showConfirmPassword = ref(false);

    /**
     * Muestra u oculta la contraseña.
     * 
     * @returns 'true' para mostrar contraseña, 'false' para ocultarla.
     */
    const togglePassword = () => showPassword.value = !showPassword.value;

    /**
     * Muestra u oculta la confirmación de contraseña.
     * 
     * @returns 'true' para mostrar contraseña, 'false' para ocultarla.
     */
    const toggleConfirmPassword = () => showConfirmPassword.value = !showConfirmPassword.value;


    return {
        //* Properties
        showPassword, showConfirmPassword,

        //* Methods
        togglePassword, toggleConfirmPassword
    }

}
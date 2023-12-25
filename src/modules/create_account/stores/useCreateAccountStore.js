//* Importaciones nativas
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

/**
* Store de Pinia para propiedades del módulo 'Crear Cuenta'.
* 
* @returns {object} Estados, Getters y Acciones de 'Crear Cuenta'.
*/
export const useCreateAccountStore = defineStore('create-account', () => {

    //* States
    /**
     * @constant {Ref<string>} Nombre de usaurio del usuario.
     */
    const username = ref('');

    /**
     * @constant {Ref<string>} Correo Electrónico del usuario.
     */
    const email = ref('');

    /**
     * @constant {Ref<string>} Contraseña del usuario.
     */
    const password = ref('');

    /**
     * @constant {Ref<string>} Confirmar Contraseña del usuario.
     */
    const confirmPassword = ref('');

    //* Getters

    //* Actions

    return {
        //* States
        username, email, password, confirmPassword,

        //* Getters

        //* Actions
    }

});
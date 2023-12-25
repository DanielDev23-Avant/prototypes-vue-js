//* Importaciones nativas
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

/**
* Store de Pinia para propiedades del módulo 'Iniciar Sesión'.
* 
* @returns {object} Estados, Getters y Acciones de 'Iniciar Sesión'.
*/
export const useLoginStore = defineStore('login', () => {

    //* States
    /**
     * @constant {Ref<string>} Correo electrónico del usuario.
     */
    const email = ref('');

    /**
     * @constant {Ref<string>} Contraseña del usuario.
     */
    const password = ref('');

    //* Getters

    //* Actions

    return {
        //* States
        email, password,

        //* Getters

        //* Actions
    }

});
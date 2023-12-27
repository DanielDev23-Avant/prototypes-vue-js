import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {

    //* States
    const showModalInfo = ref(false);
    const showModalInfoV2 = ref(false);
    const showModalImg = ref(false);
    const showModalForm = ref(false);

    //* Getters
    

    //* Actions
    const toggleModalInfo = () => showModalInfo.value = !showModalInfo.value;
    const toggleModalInfoV2 = () => showModalInfoV2.value = !showModalInfoV2.value;
    const toggleModalImg = () => showModalImg.value = !showModalImg.value;
    const toggleModalForm = () => showModalForm.value = !showModalForm.value;

    return {
        //* States
        showModalInfo,
        showModalInfoV2,
        showModalImg,
        showModalForm,

        //* Getters
        

        //* Actions
        toggleModalInfo,
        toggleModalInfoV2,
        toggleModalImg,
        toggleModalForm
    }

});
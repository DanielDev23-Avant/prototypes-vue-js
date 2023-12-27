//* --> Importación de estilos globales
import './assets/css/reset.css';
import './assets/css/global.css';

//* --> Importaciones globales
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

//? --> Instancias globales
const app = createApp(App);

const pinia = createPinia();

app.use( pinia );

app.mount('#app');
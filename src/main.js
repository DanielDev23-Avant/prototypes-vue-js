//* --> Importación de estilos globales
import './assets/css/reset.css';
import './assets/css/global.css';

//* --> Importaciones globales
import App from './App.vue';
import { createApp } from 'vue';
import { router } from './router';

//? --> Instancias globales
const app = createApp(App);

app.use( router );

app.mount('#app');
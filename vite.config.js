import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode }) => {

    const env = loadEnv( mode, process.cwd(), '' );

    const { VITE_PORT } = env;

    return {
        plugins: [
            vue(),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        server: {
            port: Number( VITE_PORT ),
            host: '0.0.0.0'
        }
    }

});
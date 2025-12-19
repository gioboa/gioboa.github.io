import { qwikVite } from '@qwik.dev/core/optimizer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [qwikVite({ csr: true })],
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
		}),
		svgr(),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	server: {
		port: 8081,
		proxy: {
			'/api': {
				target: 'http://localhost:8080', // URL бэкенда
				changeOrigin: true,
			},
		},
	},
});

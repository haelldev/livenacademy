import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/livenacademy/', // ← nome do seu repositório
  plugins: [react()]
});
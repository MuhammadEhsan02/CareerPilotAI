import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Provide tsconfigRaw to esbuild so it doesn't traverse upwards and hit an empty ../../tsconfig.json
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        jsx: 'react-jsx',
        target: 'ES2020',
        module: 'ESNext'
      }
    }
  }
});

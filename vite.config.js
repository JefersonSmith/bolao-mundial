import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Adicione a opção 'base' aqui para o deploy no GitHub Pages
  // Substitua 'bolao-mundial-react' pelo nome EXATO do seu repositório no GitHub
  base: '/bolao-mundial/',
  plugins: [react()],
})
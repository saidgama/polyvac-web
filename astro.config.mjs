// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "**.strapiapp.com", // Para Strapi Cloud
      },
      // Agrega tu dominio de producción aquí
      // {
      //   protocol: "https",
      //   hostname: "tu-dominio-strapi.com",
      // }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
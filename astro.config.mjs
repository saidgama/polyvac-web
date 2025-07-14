// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "http",
        hostname: "ec2-13-218-128-154.compute-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**.strapiapp.com", // Para Strapi Cloud
      },
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
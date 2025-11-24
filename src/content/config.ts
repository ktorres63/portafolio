// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Define la colección 'projects'
const projectCollection = defineCollection({
  // 'type: 'content'` para Markdown/MDX
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    tags: z.array(z.string()), // Array de strings: ['Astro', 'Tailwind', 'JS']
    image: z.string().optional(), // Ruta a la imagen
    publishDate: z.date(), // Para ordenar
    lang: z.enum(['es', 'en']),
  }),
});

// 2. Exporta un objeto 'collections'
export const collections = {
  'projects': projectCollection,
};
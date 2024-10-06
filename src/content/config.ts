import { defineCollection, z } from 'astro:content';

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string()
  })
});

const heroCollection = defineCollection({
  type: 'content',
  schema: z.object({
    zurich: z.string(),
    buttontext: z.string(),
    teaser: z.string()
  })
});


export const collections = {
  'faqs': faqCollection,
  'hero': heroCollection
};
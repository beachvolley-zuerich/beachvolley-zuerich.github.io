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
    teasertitle: z.string(),
    teaser: z.string(),
    
  })
});

const labelCollection = defineCollection({
  type: 'data',
  schema: z.object({
    join: z.string(),
    logintitle: z.string()
  })
})



export const collections = {
  'faqs': faqCollection,
  'hero': heroCollection,
  'labels': labelCollection
};


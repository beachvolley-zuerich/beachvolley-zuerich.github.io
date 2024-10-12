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
    title: z.string(),
    buttontext: z.string(),
    teasertitle: z.string(),
    teaser: z.string(),
    
  })
});

const labelCollection = defineCollection({
  type: 'data',
  schema: z.object({
    join: z.string(),
    logintitle: z.string(),
    nav_account: z.string(),
    bvz: z.string(),
    faq_title: z.string(),
    faq_subtitle: z.string(),
    login_title: z.string(),
    password: z.string(),
    no_account: z.string(),
    register_title: z.string(),
    register_desc: z.string(),
    register_email_desc: z.string(),
    register_password_desc: z.string(),
    signout: z.string(),
    delete_account: z.string()
  })
})



export const collections = {
  'faqs': faqCollection,
  'hero': heroCollection,
  'labels': labelCollection
};


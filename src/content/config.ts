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
    delete_account: z.string(),
    update_account: z.string(),
    profile_zip: z.string(),
    profile_joined: z.string(),
    tab_membership: z.string(),
    tab_profile: z.string(),
    tab_email: z.string(),
    tab_email_email: z.string(),
    tab_email_pw: z.string(),
    tab_password: z.string(),
    tab_password_old_pw: z.string(),
    tab_password_new_pw: z.string()
  })
})



export const collections = {
  'faqs': faqCollection,
  'hero': heroCollection,
  'labels': labelCollection
};


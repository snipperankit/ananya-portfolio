import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/casestudies" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      role: z.string(),
      date: z.preprocess((arg) => {
        if (typeof arg === "string" || typeof arg === "number")
          return new Date(arg as string);
        return arg;
      }, z.date()),
      cover: image().optional(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      outcomes: z.array(z.string()).default([]),
      chartEmbed: z.string().url().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { caseStudies };

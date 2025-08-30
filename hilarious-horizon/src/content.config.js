import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    date: z.date().optional(),
    summary: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    date: z.date().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { blog, projects };

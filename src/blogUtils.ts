import { blogPosts } from './data'; // Насочено към твоя централен файл за данни

export interface BlogPostMarkdown {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: string;
  seoTitle?: string;
  seoDescription?: string;
  seo?: {
    title?: string;
    description?: string;
  };
}

export function getAllPosts(): BlogPostMarkdown[] {
  // Използваме експортирания масив от src/data.ts
  return blogPosts as BlogPostMarkdown[];
}

export function getPostBySlug(slug: string): BlogPostMarkdown | undefined {
  return getAllPosts().find(p => p.slug === slug);
}
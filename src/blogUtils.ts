import { allBlogPosts } from './data/posts';

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
}

export function getAllPosts(): BlogPostMarkdown[] {
  // Връщаме директно новите отделени статии
  return allBlogPosts;
}

export function getPostBySlug(slug: string): BlogPostMarkdown | undefined {
  return getAllPosts().find(p => p.slug === slug);
}
import { economicStagnationPost } from './economicStagnation';
import { publicProcurementPost } from './publicProcurement';
import { gergyovdenPost } from './gergyovden';

export type { BlogPost } from './economicStagnation';

export const allBlogPosts = [
  economicStagnationPost,
  publicProcurementPost,
  gergyovdenPost,
];

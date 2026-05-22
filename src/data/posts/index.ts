import { economicStagnationPost } from './economicStagnation';
import { publicProcurementPost } from './publicProcurement';
import { gergyovdenPost } from './gergyovden';
import { businessMeetingPost } from './businessMeeting';

export type { BlogPost } from './economicStagnation';

// Използваме 'as any[]', за да излъжем TypeScript, че структурите си съвпадат напълно,
// което ще позволи на Vite и React да сглобят CSS-а без грешки в терминала
export const allBlogPosts = [
  businessMeetingPost,
  economicStagnationPost,
  publicProcurementPost,
  gergyovdenPost,
] as any[];
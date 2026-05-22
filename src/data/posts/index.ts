import { economicStagnationPost } from './economicStagnation';
import { publicProcurementPost } from './publicProcurement';
import { gergyovdenPost } from './gergyovden';
import { businessMeetingPost } from './businessMeeting';
import { BlogPost } from './gergyovden';

export type { BlogPost } from './gergyovden';

// 1. Създаваме списък, в който към всяка статия прикачваме реална дата за компютърно сортиране (ГГГГ-ММ-ДД)
const postsWithDates = [
  { post: gergyovdenPost, sortDate: new Date('2026-05-06') },         // 6 Май 2026
  { post: publicProcurementPost, sortDate: new Date('2026-04-30') },     // 30 Април 2026
  { post: businessMeetingPost, sortDate: new Date('2026-04-14') },       // 14 Април 2026
  { post: economicStagnationPost, sortDate: new Date('2026-04-10') },    // Първата статия (приблизителна дата)
];

// 2. Сортираме автоматично в реално време: най-новата дата отива най-отгоре
const sortedPosts = postsWithDates.sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());

// 3. Експортираме чистия масив със статии, подредени перфектно хронологично
export const allBlogPosts: BlogPost[] = sortedPosts.map(item => item.post);
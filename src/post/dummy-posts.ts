import { Post } from './dto/post';
export const dummyPosts: Post[] = [
  {
    id: 1,
    title: 'Exploring the World of Soccer',
    headline: 'The excitement of soccer matches',
    body: 'Soccer, also known as football in many countries, is a popular sport that brings people together...',
    created_at: new Date('2023-02-11'),
    tags: ['Sports'],
  },
  {
    id: 2,
    title: 'Latest Technological Advancements in Business',
    headline: 'The impact of technology on modern businesses',
    body: "In today's rapidly evolving business landscape, technology plays a pivotal role...",
    created_at: new Date('2023-02-10'),
    tags: ['Business', 'Tech'],
  },
  {
    id: 3,
    title: 'Understanding Economic Trends',
    headline: 'Analyzing the current economic situation',
    body: 'As the global economy faces various challenges, it becomes essential to examine the...',
    created_at: new Date('2023-02-09'),
    tags: ['Economy'],
  },
];

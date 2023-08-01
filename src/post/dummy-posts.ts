import { Post } from './dto/post';

export const dummyPosts: Post[] = [
  {
    id: 1,
    title: 'Exploring the World of Soccer',
    headline: 'The excitement of soccer matches',
    body: "Soccer, also known as football in many countries, is a popular sport that brings people together. Whether it's the FIFA World Cup, UEFA Champions League, or local league matches, soccer enthusiasts gather to witness the thrill of the game. The roar of the crowd, the passion of the players, and the intensity of the competition create an electrifying atmosphere that captivates millions of fans worldwide. From breathtaking goals to dramatic saves, soccer offers unforgettable moments that unite people across cultures and continents.",
    created_at: new Date('2023-02-11'),
    tags: ['Sports'],
    comments: [
      {
        id: 1,
        created_at: new Date('2023-02-11T14:00:00Z'),
        body: 'Great article! I love watching soccer matches.',
        author: 'SoccerFan88',
      },
      {
        id: 2,
        created_at: new Date('2023-02-11T15:30:00Z'),
        body: 'I agree! Soccer is the best sport ever.',
        author: 'FootballEnthusiast',
      },
    ],
  },
  {
    id: 2,
    title: 'Latest Technological Advancements in Business',
    headline: 'The impact of technology on modern businesses',
    body: "In today's rapidly evolving business landscape, technology plays a pivotal role in shaping the future of organizations. From artificial intelligence and machine learning to blockchain and the Internet of Things (IoT), innovative technologies have disrupted traditional business models and unlocked new possibilities. Organizations leverage data analytics to gain insights into customer behavior, enhance operational efficiency, and drive strategic decision-making. Moreover, cloud computing enables seamless collaboration and scalable solutions for businesses of all sizes. Embracing these technological advancements has become imperative for staying competitive and delivering value to customers in the digital era.",
    created_at: new Date('2023-02-10'),
    tags: ['Business', 'Tech'],
    comments: [
      {
        id: 3,
        created_at: new Date('2023-02-10T12:45:00Z'),
        body: 'This article is eye-opening! Technology is changing everything.',
        author: 'TechGeek2023',
      },
    ],
  },
  {
    id: 3,
    title: 'Understanding Economic Trends',
    headline: 'Analyzing the current economic situation',
    body: 'As the global economy faces various challenges, it becomes essential to examine the prevailing economic trends. Factors such as inflation, unemployment rates, fiscal policies, and international trade dynamics influence the economic landscape of countries and regions. Economists and policymakers closely monitor these indicators to make informed decisions and predict potential outcomes. Understanding economic trends helps businesses strategize and adapt to changing market conditions, while governments implement measures to promote sustainable growth and address socio-economic disparities. By staying informed about economic developments, individuals and organizations can navigate uncertainties and seize opportunities for prosperity.',
    created_at: new Date('2023-02-09'),
    tags: ['Economy'],
    comments: [
      {
        id: 4,
        created_at: new Date('2023-02-09T16:20:00Z'),
        body: 'This post provides valuable insights into economic trends.',
        author: 'EconomicAnalyst',
      },
      {
        id: 5,
        created_at: new Date('2023-02-09T18:05:00Z'),
        body: 'I learned a lot from this article. Thanks for sharing!',
        author: 'FinanceEnthusiast',
      },
    ],
  },
];

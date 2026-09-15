export interface PhotoItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export const PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    title: 'Glove',
    category: 'Baseball',
    imageUrl: '/baseball-glove.jpg',
  },
  {
    id: 'photo-2',
    title: 'Baseball',
    category: 'Baseball',
    imageUrl: '/baseball.jpg',
  },
  {
    id: 'photo-3',
    title: 'Bat',
    category: 'Baseball',
    imageUrl: '/photos.jpeg',
  },
  {
    id: 'photo-4',
    title: 'Referee',
    category: 'Football',
    imageUrl: '/referee.jpeg',
  },
  {
    id: 'photo-5',
    title: 'Football',
    category: 'Football',
    imageUrl: '/footballs.jpeg',
  },
  {
    id: 'photo-6',
    title: 'Goalpost',
    category: 'Football',
    imageUrl: '/goalpost.jpeg',
  },
  {
    id: 'photo-7',
    title: 'Basketball Hoop',
    category: 'Basketball',
    imageUrl: '/basketball-hoop.jpeg',
  },
  {
    id: 'photo-8',
    title: 'Basketball',
    category: 'Basketball',
    imageUrl: '/basketball.jpeg',
  },
  {
    id: 'photo-9',
    title: 'Scoreboard',
    category: 'Basketball',
    imageUrl: '/scoreboard.jpeg',
  },
];

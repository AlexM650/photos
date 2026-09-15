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
    title: 'Alpine Lake',
    category: 'Waterscape',
    imageUrl: 'https://images.unsplash.com/photo-1439853941329-a99ce0421c81?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-8',
    title: 'Coastal Headland',
    category: 'Coast',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-9',
    title: 'Emerald Valley',
    category: 'Wilderness',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&h=600&q=80',
  },
];

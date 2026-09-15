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
    title: 'Misty Pine Forest',
    category: 'Nature',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-4',
    title: 'Golden Sand Dunes',
    category: 'Desert',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-5',
    title: 'Urban Architecture',
    category: 'Cityscape',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-6',
    title: 'Autumn Trail',
    category: 'Forest',
    imageUrl: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=600&h=600&q=80',
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

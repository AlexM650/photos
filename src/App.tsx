import React, { useState } from 'react';
import { PHOTOS } from './photosData';

const categories = ['All', 'Baseball', 'Football', 'Basketball'] as const;
type Category = (typeof categories)[number];

const sportAccents: Record<string, string> = {
  Baseball: 'bg-red-950/60 border-red-500/50 hover:border-red-400',
  Football: 'bg-emerald-950/60 border-emerald-500/50 hover:border-emerald-400',
  Basketball: 'bg-orange-950/60 border-orange-500/50 hover:border-orange-400',
};

const badgeAccents: Record<string, string> = {
  Baseball: 'bg-red-950/80 text-red-300',
  Football: 'bg-emerald-950/80 text-emerald-300',
  Basketball: 'bg-orange-950/80 text-orange-300',
};

const categoryButtonAccents: Record<Category, string> = {
  All: 'bg-white text-neutral-950',
  Baseball: 'bg-red-500 text-white',
  Football: 'bg-emerald-500 text-white',
  Basketball: 'bg-orange-500 text-white',
};

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const visiblePhotos = selectedCategory === 'All'
    ? PHOTOS
    : PHOTOS.filter((photo) => photo.category === selectedCategory);

  return (
    <div
      id="app-root"
      data-theme={selectedCategory.toLowerCase()}
      className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <header id="gallery-header" className="mb-10 text-center">
          <h1 id="gallery-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Some of the Many Sports
          </h1>
          <nav aria-label="Filter photos by sport" className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isSelected
                      ? categoryButtonAccents[category]
                      : 'bg-white/10 text-neutral-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </nav>
        </header>

        <main id="photo-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, index) => (
            <article
              key={`${selectedCategory}-${photo.id}`}
              id={`photo-card-${index + 1}`}
              className={`category-bend group rounded-xl overflow-hidden border-2 ${
                sportAccents[photo.category] ?? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'
              } transition-all duration-200 flex flex-col shadow-sm`}
            >
              <div
                id={`photo-container-${index + 1}`}
                className="relative aspect-square w-full overflow-hidden bg-neutral-800"
              >
                <img
                  id={`photo-img-${index + 1}`}
                  src={photo.imageUrl}
                  alt={photo.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                />
              </div>
              <div id={`photo-meta-${index + 1}`} className="p-4 flex items-center justify-between">
                <h2
                  id={`photo-title-${index + 1}`}
                  className="text-base font-medium text-neutral-200 group-hover:text-white truncate"
                >
                  {photo.title}
                </h2>
                <span
                  id={`photo-badge-${index + 1}`}
                  className={`text-xs px-2 py-0.5 rounded ${badgeAccents[photo.category] ?? 'text-neutral-400 bg-neutral-800/80'}`}
                >
                  {photo.category}
                </span>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { PHOTOS } from './photosData';

export function App() {
  return (
    <div id="app-root" className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header id="gallery-header" className="mb-10 text-center">
          <h1 id="gallery-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Photo Gallery
          </h1>
          <p id="gallery-subtitle" className="mt-2 text-sm text-neutral-400">
            A curated 3×3 grid of nine equal-dimension photographs
          </p>
        </header>

        <main id="photo-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PHOTOS.map((photo, index) => (
            <article
              key={photo.id}
              id={`photo-card-${index + 1}`}
              className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-200 flex flex-col shadow-sm"
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                  className="text-xs text-neutral-400 bg-neutral-800/80 px-2 py-0.5 rounded"
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

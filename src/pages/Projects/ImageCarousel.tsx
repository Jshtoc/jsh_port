import { useState } from 'react'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const pages: string[][] = []
  for (let i = 0; i < images.length; i += 2) {
    pages.push(images.slice(i, i + 2))
  }
  const [index, setIndex] = useState(0)

  return (
    <div>
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {pages.map((pair, i) => (
            <div key={i} className="flex gap-4 w-full flex-shrink-0">
              {pair.map((src, j) => (
                <div
                  key={src}
                  className={`h-96 bg-white/5 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center ${
                    pair.length === 1 ? 'w-full' : 'w-1/2'
                  }`}
                >
                  <img
                    src={src}
                    alt={`${alt} ${i * 2 + j + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {pages.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="text-white/60 hover:text-primary disabled:opacity-30 disabled:hover:text-white/60 transition-colors"
            aria-label="이전 이미지"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`${i + 1}번째 슬라이드`}
                className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-primary' : 'bg-white/30'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex((i) => Math.min(pages.length - 1, i + 1))}
            disabled={index === pages.length - 1}
            className="text-white/60 hover:text-primary disabled:opacity-30 disabled:hover:text-white/60 transition-colors"
            aria-label="다음 이미지"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

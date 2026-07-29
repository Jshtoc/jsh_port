import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    if (lightboxIndex === null) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length))
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, images.length])

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
                  className={`h-96 bg-white border border-line rounded-xl overflow-hidden flex items-center justify-center ${
                    pair.length === 1 ? 'w-full' : 'w-1/2'
                  }`}
                >
                  <img
                    src={src}
                    alt={`${alt} ${i * 2 + j + 1}`}
                    onClick={() => setLightboxIndex(i * 2 + j)}
                    className="w-full h-full object-contain cursor-zoom-in"
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
            className="text-muted hover:text-fg disabled:opacity-30 disabled:hover:text-muted transition-colors"
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
                className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-primary' : 'bg-fg/20'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex((i) => Math.min(pages.length - 1, i + 1))}
            disabled={index === pages.length - 1}
            className="text-muted hover:text-fg disabled:opacity-30 disabled:hover:text-muted transition-colors"
            aria-label="다음 이미지"
          >
            ›
          </button>
        </div>
      )}

      {lightboxIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="닫기"
              className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl leading-none transition-colors"
            >
              ×
            </button>

            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))
                }}
                aria-label="이전 이미지"
                className="absolute left-4 sm:left-8 text-white/70 hover:text-white text-4xl leading-none transition-colors"
              >
                ‹
              </button>
            )}

            <img
              src={images[lightboxIndex]}
              alt={`${alt} ${lightboxIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />

            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length))
                }}
                aria-label="다음 이미지"
                className="absolute right-4 sm:right-8 text-white/70 hover:text-white text-4xl leading-none transition-colors"
              >
                ›
              </button>
            )}
          </div>,
          document.body,
        )}
    </div>
  )
}

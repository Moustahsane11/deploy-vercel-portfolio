import { useEffect, useCallback, useRef, useState } from 'react'

export default function ImageLightbox({ images, currentIndex, onClose }) {
    const [activeIndex, setActiveIndex] = useState(currentIndex)
    const [isAnimating, setIsAnimating] = useState(false)
    const touchStartX = useRef(null)
    const touchEndX = useRef(null)

    // Navigate to next image
    const goToNext = useCallback(() => {
        if (isAnimating) return
        setIsAnimating(true)
        setActiveIndex((prev) => (prev + 1) % images.length)
        setTimeout(() => setIsAnimating(false), 300)
    }, [images.length, isAnimating])

    // Navigate to previous image
    const goToPrev = useCallback(() => {
        if (isAnimating) return
        setIsAnimating(true)
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
        setTimeout(() => setIsAnimating(false), 300)
    }, [images.length, isAnimating])

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') goToNext()
            if (e.key === 'ArrowLeft') goToPrev()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onClose, goToNext, goToPrev])

    // Handle touch events for swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return
        
        const diff = touchStartX.current - touchEndX.current
        const minSwipeDistance = 50

        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                goToNext()
            } else {
                goToPrev()
            }
        }

        touchStartX.current = null
        touchEndX.current = null
    }

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose} aria-label="Close">
                <i className="iconoir-cancel"></i>
            </button>

            <div 
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className={`lightbox-image-wrapper ${isAnimating ? 'animating' : ''}`}>
                    <img 
                        src={images[activeIndex]} 
                        alt={`Gallery image ${activeIndex + 1}`}
                        className="lightbox-image"
                    />
                </div>

                {images.length > 1 && (
                    <>
                        <button 
                            className="lightbox-nav lightbox-prev" 
                            onClick={goToPrev}
                            aria-label="Previous image"
                            disabled={isAnimating}
                        >
                            <i className="iconoir-nav-arrow-left"></i>
                        </button>
                        <button 
                            className="lightbox-nav lightbox-next" 
                            onClick={goToNext}
                            aria-label="Next image"
                            disabled={isAnimating}
                        >
                            <i className="iconoir-nav-arrow-right"></i>
                        </button>

                        <div className="lightbox-counter">
                            {activeIndex + 1} / {images.length}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

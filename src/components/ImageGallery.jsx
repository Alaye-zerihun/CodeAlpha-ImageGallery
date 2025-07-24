import { useState, useEffect } from 'react'
import ImageCard from './ImageCard'
import Lightbox from './Lightbox'
import CategoryFilter from './CategoryFilter'
import './ImageGallery.css'

const imageData = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Beautiful landscape',
    category: 'nature',
    title: 'Mountain Vista'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'City architecture',
    category: 'architecture',
    title: 'Modern Architecture'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Portrait photography',
    category: 'people',
    title: 'Portrait Study'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ocean waves',
    category: 'nature',
    title: 'Ocean Waves'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Street art',
    category: 'art',
    title: 'Street Expression'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/3693056/pexels-photo-3693056.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Modern building',
    category: 'architecture',
    title: 'Glass Tower'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Forest path',
    category: 'nature',
    title: 'Forest Trail'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Group of friends',
    category: 'people',
    title: 'Friendship'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Abstract art',
    category: 'art',
    title: 'Color Symphony'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Sunset landscape',
    category: 'nature',
    title: 'Golden Hour'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/2096978/pexels-photo-2096978.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Urban architecture',
    category: 'architecture',
    title: 'Urban Geometry'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Creative portrait',
    category: 'people',
    title: 'Creative Mind'
  }
]

const categories = [
  { id: 'all', name: 'All', count: imageData.length },
  { id: 'nature', name: 'Nature', count: imageData.filter(img => img.category === 'nature').length },
  { id: 'architecture', name: 'Architecture', count: imageData.filter(img => img.category === 'architecture').length },
  { id: 'people', name: 'People', count: imageData.filter(img => img.category === 'people').length },
  { id: 'art', name: 'Art', count: imageData.filter(img => img.category === 'art').length }
]

function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredImages, setFilteredImages] = useState(imageData)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(imageData)
    } else {
      setFilteredImages(imageData.filter(image => image.category === selectedCategory))
    }
  }, [selectedCategory])

  const openLightbox = (image) => {
    const index = filteredImages.findIndex(img => img.id === image.id)
    setCurrentIndex(index)
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setCurrentIndex(nextIndex)
    setLightboxImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setLightboxImage(filteredImages[prevIndex])
  }

  return (
    <div className="image-gallery">
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <ImageCard 
            key={image.id}
            image={image}
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>

      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          currentIndex={currentIndex + 1}
          totalImages={filteredImages.length}
        />
      )}
    </div>
  )
}

export default ImageGallery
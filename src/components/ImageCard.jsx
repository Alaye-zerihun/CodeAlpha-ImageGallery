import { useState } from 'react'
import './ImageCard.css'

function ImageCard({ image, onClick }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="image-card" onClick={onClick}>
      <div className="image-container">
        <img 
          src={image.src} 
          alt={image.alt}
          className={`image ${isLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="image-overlay">
          <div className="overlay-content">
            <h3 className="image-title">{image.title}</h3>
            <p className="image-category">{image.category}</p>
            <button className="view-button">View Full Size</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
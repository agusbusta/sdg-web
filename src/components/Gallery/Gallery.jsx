import React, { useState } from 'react';
import './Gallery.css';
import { FaShare, FaDownload, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, url: `${process.env.PUBLIC_URL}/home.jpg`, title: 'Copa Desafío' },
    // Agrega más imágenes según tengas disponibles
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleDownload = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'copa-desafio-imagen.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (imageUrl) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Copa Desafío',
          text: 'Mira esta imagen de la Copa Desafío',
          url: imageUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback para navegadores que no soportan Web Share API
      const shareUrl = `https://twitter.com/intent/tweet?text=Mira esta imagen de la Copa Desafío&url=${encodeURIComponent(imageUrl)}`;
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className="gallery">
      <h2>GALERÍA DE FOTOS</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>
              <FaTimes />
            </button>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="modal-actions">
              <button onClick={() => handleShare(selectedImage.url)}>
                <FaShare /> Compartir
              </button>
              <button onClick={() => handleDownload(selectedImage.url)}>
                <FaDownload /> Descargar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery; 
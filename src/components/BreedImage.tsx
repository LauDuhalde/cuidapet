import { useState, useEffect } from 'react';

export function BreedImage({ referenceImageId }: { referenceImageId: string }) {
    const [image, setImage] = useState<string | null>(null);
  
    useEffect(() => {
      if (referenceImageId) {
        fetch(`https://api.thedogapi.com/v1/images/${referenceImageId}`)
          .then((res) => res.json())
          .then((data) => setImage(data.url))
          .catch(() => setImage(null));
      }
    }, [referenceImageId]);
  
    return image ? (
      <div>
        <img src={image} alt="Raza" width={150} className="grid-image"/>
      </div>
    ) : (
      <p>No image available</p>
    );
  }
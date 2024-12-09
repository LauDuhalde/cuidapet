'use client';

import { useState, useEffect } from 'react';
import { fetchBreeds } from '../utils/api';
import { BreedImage } from '@/components/BreedImage';
import '../app/globals.css';


export default function Home() {
  const [breeds, setBreeds] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBreeds();
      setBreeds(data);
    };

    fetchData();
  }, []);


  const filteredBreeds = breeds.filter(breed =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginate = (data: any[], page: number, itemsPerPage: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const paginatedBreeds = paginate(filteredBreeds, currentPage, itemsPerPage);

  return (
    <div>
      <h1>Lista de Razas</h1>
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          disabled={currentPage * itemsPerPage >= breeds.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>

      <input
        type="text"
        placeholder="Buscar raza..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="grid-container">
        {paginatedBreeds.map((breed: { id: number; name: string; reference_image_id: string }) => (
          <div key={breed.id} className="grid-item">
            {breed.reference_image_id && (
              <BreedImage referenceImageId={breed.reference_image_id} />
            )}
            <h2>{breed.name}</h2>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          disabled={currentPage * itemsPerPage >= breeds.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

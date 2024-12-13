'use client';

import { useState, useEffect } from 'react';
import { fetchBreeds } from '../utils/api';
import { BreedImage } from '@/components/BreedImage';
import {Navbar} from '@/components/Navbar';
import '../app/globals.css';
import { BreedCard } from '@/components/BreedCard';


export default function Home() {
  const [breeds, setBreeds] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
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
      <Navbar/>
      <h1>Welcome</h1>
      <div id="pagination" className="w-fit mx-auto justify-items-center justify-center mt-10 mb-5">
        <button className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 font-medium rounded-md" 
          disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Anterior
        </button>
        <span className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium rounded-md">{currentPage}</span>
        <button className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 font-medium rounded-md"
          disabled={currentPage * itemsPerPage >= breeds.length}
          onClick={() => setCurrentPage(currentPage + 1)}>
          Siguiente
        </button>
      </div>
<div id="search" className="w-fit mx-auto justify-items-center justify-center mt-10 mb-5">
      <input
        type="text"
        placeholder="Buscar raza por nombre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
      />
</div>

<section id="cards" className="w-fit mx-auto">
  <BreedCard paginatedBreeds={paginatedBreeds} />
</section>

      
    </div>
  );
}

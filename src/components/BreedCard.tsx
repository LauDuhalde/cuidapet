import { BreedImage } from '@/components/BreedImage';

export function BreedCard({ paginatedBreeds }: { paginatedBreeds: { id: number; name: string; temperament:string, reference_image_id: string }[] }) {
  return (
    <section
      id="card"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      {paginatedBreeds.map((breed) => (
        <div key={breed.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          {breed.reference_image_id && <BreedImage referenceImageId={breed.reference_image_id} />}
          <h2 className="text-lg font-bold text-black">{breed.name}</h2>
          <span className="text-gray-400">{breed.temperament}</span>

          
        </div>
      ))}
    </section>
  );
}
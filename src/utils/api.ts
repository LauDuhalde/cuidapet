const DOG_API_KEY = process.env.NEXT_PUBLIC_DOG_API_KEY;
const API_URL = 'https://api.thedogapi.com/v1/breeds';
//https://api.thedogapi.com/v1/images/<reference_image_id>

export async function fetchBreeds() {
  const response = await fetch(API_URL, {
    headers: {
      'x-api-key': DOG_API_KEY as string,
    },
  });
  if (!response.ok) {
    throw new Error('Error al obtener las razas');
  }
  return response.json(); // Devuelve los datos como JSON
}
import type { Brewery } from '../types/brewery';


// fallback for running "npm test"
const API_BASE = import.meta.env?.VITE_API_URL ?? process.env.VITE_API_URL;

if (!API_BASE) {
  throw new Error('VITE_API_URL environment variable is not defined');
}

export async function fetchBreweries(): Promise<Brewery[]> {
  const response = await fetch(`${API_BASE}`);
  if (!response.ok) {
    throw new Error('Failed to fetch breweries');
  }
  return response.json();
}

export async function fetchBreweryById(id: string): Promise<Brewery> {
  const response = await fetch(`${API_BASE}/${id}`);
  if (!response.ok) { 
    throw new Error('Failed to fetch brewery');
  }
  return response.json();
}
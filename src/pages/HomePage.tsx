import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Brewery } from '../types/brewery';
import { fetchBreweries } from '../api/api';

export function HomePage() {
  const [items, setItems] = useState<Brewery[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBreweries()
      .then(data => setItems(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading breweries...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Brewery Explorer</h1>
        <p className="page-subtitle">Discover amazing breweries from around the world</p>
      </div>
      
      <ul className="brewery-list">
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/brewery/${item.id}`} className="brewery-card">
              <div className="brewery-name">{item.name}</div>
              <div className="brewery-location">
                {item.city}, {item.state}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
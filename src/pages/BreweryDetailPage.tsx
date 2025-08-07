import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBreweryById} from '../api/api';
import type { Brewery } from '../types/brewery';

export function BreweryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Brewery | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchBreweryById(id)
        .then(data => setItem(data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div className="loading">Loading brewery details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!item) return <div className="error">No brewery found.</div>;

  return (
    <div className="brewery-detail">
      <div className="brewery-detail-header">
        <h1 className="brewery-detail-title">{item.name}</h1>
        <div className="brewery-detail-type">{item.brewery_type}</div>
      </div>
      
      <div className="brewery-info-grid">
        <div className="info-item">
          <div className="info-label">Address</div>
          <div className="info-value">{item.address_1}</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">City</div>
          <div className="info-value">{item.city}</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">State</div>
          <div className="info-value">{item.state}</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">Country</div>
          <div className="info-value">{item.country}</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">Phone</div>
          <div className="info-value">{item.phone}</div>
        </div>
        
        {item.website_url && (
          <div className="info-item">
            <div className="info-label">Website</div>
            <div className="info-value">
              <a href={item.website_url} target="_blank" rel="noopener noreferrer" className="website-link">
                {item.website_url}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
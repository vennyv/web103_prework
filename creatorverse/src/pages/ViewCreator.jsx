
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './ViewCreator.css';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single();
      setCreator(data);
    }

    fetchCreator();
  }, [id]);

  if (!creator) return <p className="loading-text">Loading...</p>;

  return (
    <div className="view-creator-container">
      {creator.imageURL && (
        <div className="creator-image-container">
          <img src={creator.imageURL} alt={creator.name} className="creator-image" />
        </div>
      )}
      <div className="creator-content">
        <h2>{creator.name}</h2>
        <p className="creator-description">{creator.description}</p>
        <a 
          href={creator.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="visit-channel-button"
        >
          Visit 
        </a>
      </div>
    </div>
  );
}

export default ViewCreator;

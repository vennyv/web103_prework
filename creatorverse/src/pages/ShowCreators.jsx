import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import './ShowCreators.css';


function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
    }

    fetchCreators();
  }, []);

  return (
    <div className="show-creators-container">
      <div className="header">
        <Link to="/add" className="add-button">Add New Creator</Link>
      </div>
      <div className="creators-grid">
        {creators.length > 0 ? (
          creators.map((creator) => (
            <CreatorCard key={creator.id} {...creator} />
          ))
        ) : (
          <p>No creators found</p>
        )}
      </div>
    </div>
  );
}

export default ShowCreators;

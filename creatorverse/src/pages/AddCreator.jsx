import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './AddCreator.css';

function AddCreator() {
  const navigate = useNavigate();
  const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').insert([creator]);
    navigate('/');
  };

  return (
    <div className="add-creator-container">
      <h2>Add New Creator</h2>
      <form onSubmit={handleSubmit} className="add-creator-form">
        <input
          type="text"
          value={creator.name}
          onChange={(e) => setCreator({ ...creator, name: e.target.value })}
          placeholder="Name"
          required
          className="add-input"
        />
        <input
          type="url"
          value={creator.url}
          onChange={(e) => setCreator({ ...creator, url: e.target.value })}
          placeholder="URL"
          required
          className="add-input"
        />
        <textarea
          value={creator.description}
          onChange={(e) => setCreator({ ...creator, description: e.target.value })}
          placeholder="Description"
          required
          className="add-textarea"
        />
        <input
          type="url"
          value={creator.imageURL}
          onChange={(e) => setCreator({ ...creator, imageURL: e.target.value })}
          placeholder="Image URL"
          className="add-input"
        />
        <button type="submit" className="submit-button">Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;

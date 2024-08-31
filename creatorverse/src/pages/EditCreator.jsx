import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './EditCreator.css'; 

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });

  useEffect(() => {
    async function fetchCreator() {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single();
      setCreator(data);
    }

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').update(creator).eq('id', id);
    navigate('/');
  };

  const handleDelete = async () => {
    await supabase.from('creators').delete().eq('id', id);
    navigate('/');
  };

  return (
    <div className="edit-creator-container">
      <h2>Edit Creator</h2>
      <form onSubmit={handleSubmit} className="edit-creator-form">
        <input
          type="text"
          value={creator.name}
          onChange={(e) => setCreator({ ...creator, name: e.target.value })}
          placeholder="Name"
          required
          className="edit-input"
        />
        <input
          type="url"
          value={creator.url}
          onChange={(e) => setCreator({ ...creator, url: e.target.value })}
          placeholder="URL"
          required
          className="edit-input"
        />
        <textarea
          value={creator.description}
          onChange={(e) => setCreator({ ...creator, description: e.target.value })}
          placeholder="Description"
          required
          className="edit-textarea"
        />
        <input
          type="url"
          value={creator.imageURL}
          onChange={(e) => setCreator({ ...creator, imageURL: e.target.value })}
          placeholder="Image URL (optional)"
          className="edit-input"
        />
        <button type="submit" className="submit-button">Update</button>
      </form>
      <button onClick={handleDelete} className="delete-button">Delete</button>
    </div>
  );
}

export default EditCreator;

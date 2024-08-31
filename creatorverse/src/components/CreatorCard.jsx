import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faExpand } from '@fortawesome/free-solid-svg-icons';
import './CreatorCard.css';

function CreatorCard({ id, name, url, description, imageURL }) {
  return (
    <div className="creator-card">
      <div className="creator-image">
        {imageURL ? <img src={imageURL} alt={name} /> : <div className="placeholder-image"></div>}
      </div>
      <div className="creator-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="creator-actions">
          <a href={url} target="_blank" rel="noopener noreferrer" className="visit-link">
            <FontAwesomeIcon icon={faEye} />
          </a>
          <Link to={`/view/${id}`} className="view-link">
            <FontAwesomeIcon icon={faExpand} /> 
          </Link>
          <Link to={`/edit/${id}`} className="edit-link">
            <FontAwesomeIcon icon={faEdit} /> 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreatorCard;

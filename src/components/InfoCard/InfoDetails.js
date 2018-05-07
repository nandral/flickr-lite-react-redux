import React from 'react';
import './InfoCard.css';
import { get } from 'lodash';

const InfoDetails = props => {
  const { infoDetails, onClose } = props;

  if (!infoDetails) return null;
  const title = get(infoDetails, 'title', '');
  const author = get(infoDetails, 'author', '');
  const tags = get(infoDetails, 'tag', '');
  const img = get(infoDetails, 'media.m').replace('_m', '');

  return (
    <div>
      <div className="card-header">
        <div className="close" onClick={onClose}>
          X
        </div>
      </div>
      <div className="content">
        <div className="details">
          <div className="title">{title}</div>
          <div className="author">Author : {author}</div>
          <div className="tags">Tags : {tags}</div>
        </div>
        <div className="imgDiv">
          <img src={img} alt={title} className="img" />
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;

import React from 'react';
import PropTypes from 'prop-types';

export default function AnswerCardPhotos({ photos }) {
  return (
    <div>
      {photos.map((image) => (<span key={image}>image</span>))}
    </div>
  );
}

AnswerCardPhotos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

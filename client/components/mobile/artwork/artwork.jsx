import React from 'react';

const Artwork = (props) => {
  const { src } = props;
  return <img className='artwork-image' src={ src } />;
}

export default Artwork;

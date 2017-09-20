import React from 'react';

const Slide = (props) => {
  return (
    <div className='slide'>
      <h1>{ props.heading }</h1>
      <p>{ props.text }</p>
    </div>
  );
}

export default Slide;

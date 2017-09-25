import React from 'react';

const MenuLink = (props) => {
  const { link, val } = props;
  return (
    <div>
      <a href={ link }>{ val }</a>
      <div className='border' />
    </div>
  );
}

export default MenuLink;

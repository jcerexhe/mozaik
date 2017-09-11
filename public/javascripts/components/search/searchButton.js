import React from 'react';

const SearchButton = (props) => {
  return (
    <button type='button' className={ 'search-button' + (props.active ? ' active' : '') + (props.bg ? ' white' : '') } onClick={ () => props.onClick(props.val) }>{ props.val }</button>
  );
}

export default SearchButton;

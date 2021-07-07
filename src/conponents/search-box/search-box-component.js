import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ handleChange ,placeholder}) => (
  <input
    className='search-box'
    type='search'
    placeholder={ placeholder}
    onChange={handleChange}
  />
);
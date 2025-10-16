// @ts-check
import React from 'react';
import './App.css';

export const DogImage = (props) => {
  return <img src={props.imageUrl} alt="Dog" className="dog-image" />
}

export default DogImage;
// @ts-check

import React, { useState, useEffect} from 'react';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        setBreeds(Object.keys(data.message));
      })
      .catch(error => console.error('Error fetching breeds:', error));
  }, []); // 空配列で初回マウント時のみ実行

  return (
    <ul>
      {breeds.map((breed) => (
        <li key={breed}>{breed}</li>
      ))}
    </ul>
  );
}

export default DogListContainer

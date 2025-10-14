// @ts-check

import React, { useState, useEffect} from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(''); // ここに新しい state を追加するよ
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        setBreeds(Object.keys(data.message));
      })
      .catch(error => console.error('Error fetching breeds:', error));
  }, []); // 空配列で初回マウント時のみ実行

  return (
    <>
      <BreedsSelect 
        breeds={breeds} 
        selectedBreed={selectedBreed}  // ←これと
        onBreedChange={setSelectedBreed}  // ←これが足りてない！
      />
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </>
  );
}

export default DogListContainer

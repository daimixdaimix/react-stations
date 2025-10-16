// @ts-check

import React, { useState, useEffect } from 'react';
import DogImage from './DogImage';
import './App.css';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogImage, setDogImage] = useState([]);

  // 犬種リスト取得
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        const breedsArray = Object.keys(data.message);
        setBreeds(breedsArray);
        setSelectedBreed(breedsArray[0] || '');
      })
      .catch(error => console.error('Error fetching breeds:', error));
  }, []);

  // 「表示」ボタン押下時の処理
  const handleShowClick = async () => {
    if (!selectedBreed) return;
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/15`);
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error fetching dog images:', error);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="breed"><b>Breeds List</b></label>
        <select
          id="breed"
          value={selectedBreed}
          onChange={e => setSelectedBreed(e.target.value)}
        >
          {breeds.map(breed => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button onClick={handleShowClick}>
          表示
        </button>
      </div>
      <ul className="dog-list">
        {dogImage.map((url, idx) => (
          <li key={idx} className="dog-list-item">
            <DogImage imageUrl={url} alt={`Dog ${idx + 1}`} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DogListContainer;
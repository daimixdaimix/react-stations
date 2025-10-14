// DO NOT DELETE

import './App.css'
import { useState } from 'react';
import Header from './Header';
import Description from './Description';
import DogListContainer from './DogListContainer';

const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/collie-border/n02106166_1539.jpg');

  const fetchRandomDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
      .catch(error => console.error('Error fetching the dog image:', error));
  };

  return (
    <>
      <Header />
      <Description dogUrl={dogUrl} setDogUrl={setDogUrl} /> {/* Descriptionコンポーネントを追加 */}
      <DogListContainer />
    </>
  )
}

export { App };  // 名前付きexport

// 参考: Reactコンポーネントの基本構造
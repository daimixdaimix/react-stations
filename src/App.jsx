// DO NOT DELETE

import './App.css'
import { useState } from 'react';

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
      <header className="header-style">
        <h1>犬のアプリ</h1>
      </header>
      <div>
        <p className="dog-text">ここに犬の画像を表示します。</p>
        <img src={dogUrl} alt='犬の画像' />
        <button onClick={fetchRandomDogImage}>犬の画像を変更</button>
      </div>
    </>
  )
}

export { App };  // 名前付きexport

// 参考: Reactコンポーネントの基本構造
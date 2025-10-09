// DO NOT DELETE

import './App.css'
import { useState } from 'react';

const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/collie-border/n02106166_1539.jpg');

  return (
    <>
      <header>
        <h1>犬のアプリ</h1>
      </header>
      <div>
        <p>ここに犬の画像を表示します。</p>
        <img src={dogUrl} alt='犬の画像' />
        <button onClick={() => setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')}>犬の画像を変更</button>
      </div>
    </>
  )
}

export { App };  // 名前付きexport

// 参考: Reactコンポーネントの基本構造
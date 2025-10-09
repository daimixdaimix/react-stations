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
      </div>
    </>
  )
}

export default App;

// 参考: Reactコンポーネントの基本構造
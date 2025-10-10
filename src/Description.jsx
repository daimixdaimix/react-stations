// @ts-check
import DogImage from './DogImage';

// 関数の引数として受け取るよ
export const Description = (props) => {
  // propsの中に dogUrl と setDogUrl が入ってる！
  const dogUrl = props.dogUrl;
  const setDogUrl = props.setDogUrl;

  async function fetchRandomDogImage() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      if (data.status === 'success') {
        setDogUrl(data.message);
      }
    } catch (error) {
      console.error('Failed to fetch dog image:', error);
    }
  }

  // あとは今まで通り使える
  return (
    <div>
      <p className="dog-text">ここに犬の画像を表示します。</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={fetchRandomDogImage}>犬の画像を変更</button>
    </div>
  );
}

export default Description

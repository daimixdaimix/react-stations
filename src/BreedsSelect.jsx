// @ts-check

// propsでbreedsを受け取るよ

export const BreedsSelect = (props) => {
  const { breeds, onBreedChange, selectedBreed, onShowClick } = props;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <select onChange={(e) => props.onBreedChange(e.target.value)} value={props.selectedBreed}>
        <option value="select">Select a breed</option>
        {
        /* ここにoptionタグをmapで生成 */
        breeds.map((breed) => (
        <option key={breed} value={breed}>{breed}</option>
        ))}
      </select>
      <button onClick={() => { console.log("表示ボタンが押されたよ") }}>表示</button>
    </div>
  )
}

export default BreedsSelect

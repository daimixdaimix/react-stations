// @ts-check

// propsでbreedsを受け取るよ

export const BreedsSelect = (props) => {
  const { breeds } = props;
  return (
    <select onChange={(e) => props.onBreedChange(e.target.value)} value={props.selectedBreed}>
      <option value="select">Select a breed</option>
      {
      /* ここにoptionタグをmapで生成 */
      breeds.map((breed) => (
        <option key={breed} value={breed}>{breed}</option>
      ))}
    </select>
  )
}

export default BreedsSelect

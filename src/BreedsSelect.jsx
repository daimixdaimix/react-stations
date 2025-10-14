// @ts-check

export const BreedsSelect = (props) => {
  const { breeds } = props;
  return (
    <select>
      <option value="">Select a breed</option>
      
      {
      /* ここにoptionタグをmapで生成 */
      breeds.map((breed) => (
        <option key={breed} value={breed}>{breed}</option>
      ))}
    </select>
  )
}

export default BreedsSelect

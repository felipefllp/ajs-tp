export default function DateInput({
  labelDescription = 'Descrição do label',
  inputValue = 'Valor padrão',
  onInputChange = null,
}) {

  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col my-4 items-center">
      <label className="text-sm mb-1" htmlFor="inputDate">
        {labelDescription}
      </label>

      <input
        autoFocus
        id="inputDate"
        className="border p-1"
        style={{width: "200px"}}
        type="datetime-local"
        value={inputValue}
        onChange={handleInputChange}
      />
      
    </div>
  )
}

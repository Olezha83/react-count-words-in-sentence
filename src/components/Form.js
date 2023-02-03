import './Form.css'

function Form({ value, onFocus, onChange, onSubmit, error }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className={error ? 'error' : ''}
        placeholder="Type your sentence here"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      ></input>
      <button type="submit">Count</button>
    </form>
  )
}

export default Form

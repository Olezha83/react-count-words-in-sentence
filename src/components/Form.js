import { forwardRef } from 'react'
import './Form.css'

const Form = forwardRef(function Form(props, ref) {
  const { value, onFocus, onChange, onSubmit, error } = props

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={ref}
        className={error ? 'error' : ''}
        placeholder="Type your sentence here"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      ></input>
      <button type="submit">Count</button>
    </form>
  )
})

export default Form

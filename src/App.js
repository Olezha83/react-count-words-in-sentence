import { useRef, useState } from 'react'
import { Answer, Form, Head } from './components'
import countWords from './utils/countWords'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [wordsCount, setWordsCount] = useState('')
  const [error, setError] = useState(false)

  const inputRef = useRef(null)

  const onChangeHandler = (event) => {
    setText(event.target.value)
  }

  const onFocusHandler = () => {
    setWordsCount('')
    setText('')
    setError(false)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    inputRef.current.blur()
    if (!text) {
      return setError(true)
    }
    setWordsCount(countWords(text))
  }

  return (
    <div className="App">
      <Head />
      <Form
        ref={inputRef}
        value={text}
        onFocus={onFocusHandler}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        error={error}
      />
      {wordsCount && <Answer quantity={wordsCount} />}
    </div>
  )
}

export default App

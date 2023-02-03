import { useState } from 'react'
import './App.css'
import { Answer, Form, Head } from './components'

function App() {
  const [text, setText] = useState('')
  const [wordsCount, setWordsCount] = useState('')
  const [error, setError] = useState(false)

  const onChangeHandler = (event) => {
    setText(event.target.value)
  }

  const onFocusHandler = () => {
    setWordsCount('')
    setText('')
    setError(false)
  }

  const countWords = () => {
    const spaces = text.trim().replace(/ {2,}/g, ' ').match(/ /g)
    return spaces ? `${spaces.length + 1} words` : 'only one word'
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (!text) {
      return setError(true)
    }
    setWordsCount(countWords())
  }

  return (
    <div className="App">
      <Head />
      <Form
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

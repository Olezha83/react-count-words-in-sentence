const countWords = (text) => {
  const spaces = text.trim().replace(/ {2,}/g, ' ').match(/ /g)
  return spaces ? `${spaces.length + 1} words` : 'only one word'
}

export default countWords

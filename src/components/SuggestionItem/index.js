import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, suggestionSelected} = props
  const {suggestion} = suggestionItem
  const suggestionClicked = () => {
    suggestionSelected(suggestion)
  }
  return (
    <li className="suggestion">
      <p className="suggestion-title">{suggestion}</p>
      <button onClick={suggestionClicked} className="arrow-btn" type="button">
        <img
          className="arrow-img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

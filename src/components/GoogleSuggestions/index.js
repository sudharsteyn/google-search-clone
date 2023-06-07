import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  suggestionSelected = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachSuggestion => {
      const suggestion = eachSuggestion.suggestion.toLowerCase()
      return suggestion.includes(searchInput)
    })

    return (
      <div className="bg-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <dic className="search-input-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                onChange={this.onChangeSearch}
                className="input"
                value={searchInput}
                type="search"
                placeholder="Search Google"
              />
            </div>
            <ul className="suggestion-list">
              {searchResult.map(eachSuggestion => (
                <SuggestionItem
                  suggestionSelected={this.suggestionSelected}
                  key={eachSuggestion.id}
                  suggestionItem={eachSuggestion}
                />
              ))}
            </ul>
          </dic>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

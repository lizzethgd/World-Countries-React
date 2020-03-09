import React, { Component } from 'react'
import Country from './components/Country'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: '',
      countries: [],
      filteredCountries: false,
      weather : false
    }
  }
  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
      .then(response => response.json())
      .then(countries => this.setState({countries: countries}))
  }

  handleChange = e => {
    const word = e.target.value
    this.setState({ word: word})
    const countries = this.state.countries
    const filteredCountries = countries.filter(country  => country.name.toLowerCase().startsWith(word.toLowerCase()) || country.capital.toLowerCase().startsWith(word.toLowerCase()) )
    this.setState({filteredCountries: filteredCountries})
    filteredCountries.length!==250 && filteredCountries.length!==0 ? this.setState({weather: true}) : this.setState({weather: false })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const word  = this.state.word
    const countries = this.state.filteredCountries===false ? this.state.countries : this.state.filteredCountries

  return (
    <div> 
      <div className='container' id='div_tittle'>
            <h1>World Countries Data</h1>
            <p>Currently, we have {countries.length} countries</p>
            <p id='results_p'></p>  
      </div>
      <form className='container' onSubmit={this.handleSubmit}>
            <input id='input_search' type='text' name='word' value={word} onChange={this.handleChange}/>               
      </form>
      <div id='results_div'>
      {countries.map(country => <Country key={country.name} country={country} weather={this.state.weather} />)}
      </div>   
    </div>)}
}

export default App


import React, { Component } from 'react'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
     weather : ''
    }
  }
  componentDidMount() {
      //a6d872ae3fbf3bb8412878a37561366f  4789e54e44ff1b4b4923dc3c25a2d45b
    const myApi = '4789e54e44ff1b4b4923dc3c25a2d45b'
     const city = this.props.city
     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${myApi}`
     fetch(url)
     .then(response => response.json())
     .then(data => { if(data.main!==undefined)  
       {const {temp} = data.main
        this.setState({weather: city+' weather: '+temp+' °C'}) } else { this.setState({weather: city+' not found by the weather API'})}})
}
    render() { 
    return (
    <p>{this.state.weather}</p>  
    )
    }}

    export default  Weather
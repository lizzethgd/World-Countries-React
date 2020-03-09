import React, { Component } from 'react'
import Weather from './Weather'

const Country = ({country, weather}) => {
  
const {name, capital, population, flag, languages} = country
    let langs = []
    for (const language of languages) {
    let {name}= language
    langs.push(name) }
  return (
    <div className='div_country'>
        <img src={flag} alt='' />
        <h2>{name}</h2>
        <p>Capital: {capital}</p>
        {weather ? <Weather city={capital} /> : ''}
        <p>Languages: {langs.length===1 ? langs : langs.slice(0,langs.length-1).join(', ') +' and '+langs[langs.length-1]}</p>
        <p>Population: {population}</p>
     </div>
    )
  }

export default Country
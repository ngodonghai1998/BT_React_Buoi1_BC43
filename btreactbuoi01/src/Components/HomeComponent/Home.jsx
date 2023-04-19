import React, { Component } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Section from './Section'

export default class Home extends Component {
  render() {
    return (
        <div>
            <Navigation/>
            <Header/>
            <Section/>
            <Footer/>
        </div>    
    )
  }
}

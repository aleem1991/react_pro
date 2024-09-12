import React, { Component } from 'react'
import "./components/style.css"
import { Component1 } from './components/Component1'
import { Component2 } from './components/Component2'
import { Componet3 } from './components/Componet3'
import { Component4 } from './components/Component4'
import MyClassComponent2 from './components/MyClassComponent2'
import ClassComponent from './components/ClassComponent'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hi i am externally styled</h1>
        <div className='mysquare'></div>
        <h2 style={{color:"red",backgroundColor:"green"}}>inline styling</h2>
        
      </div>
    )
  }
}

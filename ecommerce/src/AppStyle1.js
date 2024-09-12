import React from 'react'
import "./components/style1.css"
import { Component1 } from './components/Component1'
import { Component2 } from './components/Component2'
import { Componet3 } from './components/Componet3'
import { Component4 } from './components/Component4'
import MyClassComponent2 from './components/MyClassComponent2'
import ClassComponent from './components/ClassComponent'
export const App = () => {
  return (
    <div>
      <Component1/>
      <Component2></Component2>
      <Componet3></Componet3>
      <Component4></Component4>
      <MyClassComponent2></MyClassComponent2>
      <ClassComponent></ClassComponent>
     
      
    </div>
  )
}
export default App;


import './App.css';
import React from 'react'
import Student from './Student';
import State from './state';
import Zia from './zia'
import New from './new'
import Counter from './state2'
function App() {


  return (
    <div className="App">

      <h1>PROPS IN REACT</h1>
<img src="widget1.gif"></img>

      <Student name={"ziaurrahman"} email="urrahmanzia60@gmail.com" />
     
      <State />
      <Zia />


      <New />
      <Counter/>

    </div>
  );
}

export default App;

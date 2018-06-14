import React, { Component } from 'react';


import './App.css';
import Login from './Components/Login'
import Home from './Components/Home'
const log=console.log.bind(console)
window.bshow=true


class App extends Component {
  constructor(){
    super()
    this.state={
      bshow:true
    }
  }
  fnCallback(e){
    this.setState({
      bshow:e
    })
  }
  
  render() {
    if(this.state.bshow){
       return (<div>
          <Login msg={this.fnCallback.bind(this)} />
       </div>)
    }else{
       return(
           <div>  
            <Home />
         </div>
    )
    }
  }
}

export default App;

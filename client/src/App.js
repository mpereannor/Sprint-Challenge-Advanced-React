import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Players from './players';
import Design from './design';

class App extends Component{

  constructor(props){
    super(props);

    this.state ={

      plc: []
    } 
  }
  
  componentDidMount(){
    const playersApi = `https://localhost:5000/api/players`;

    axios.get(playersApi)
    .then(response => {
      this.setState({plc: response.data})
    })
    .catch(console.log('error'));
  }

  render(){
   
    return (
      <div className="App">
       <Players playerInfo={this.state.plc}/>
       {/* <Design/> */}
      </div>
    );
  }
};

export default App;




import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);

    this.state ={

      plc: []
    } 
  }
  
  componentDidMount(){
    const playersApi = `htttps://localhost:5000/api/players`;
    
    axios.get(playersApi)
    .then(response => {
      this.setState({plc: response.data})
    })
    .catch(console.log('error'));
  }

  render(){
   
    return (
      <div className="App">
       
      </div>
    );
  }
}


export default App;



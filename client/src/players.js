import React, {Component} from 'react';

 
 export default class Player extends Component{     
 
   render(){
     const playerCardArray = this.props.playerInfo;
 
     return(
       <div>
           <h1>WOMENS WORLD CUP</h1>
           {playerCardArray.map(player =>
            <div>
                <h1>{player.name}</h1>
                <h3>Country: {player.country}</h3>
                <h3>Number of Searches: {player.searches}</h3>
            </div>)}
       </div>
     )
   }
 }
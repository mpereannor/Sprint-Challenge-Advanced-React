import React, {Component} from 'react';

 
 export default class Player extends Component{     
 
   render(){
     const playerCardArray = this.props.playerInfo;
 
     return(
       <div>
           {playerCardArray.map(player =>
            <div>
                <h1>{player.name}</h1>
                <h1>{player.country}</h1>
                <h1>{player.searches}</h1>
            </div>)}
       </div>
     )
   }
 }
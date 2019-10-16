import React, {useState} from 'react';
import useColor from './customHooks/useColorMode';

 const Design = () => {

    const[paint, setPaint] = useColor('colorfy', false);

    const displayHandler = e => {
        e.preventDefault();
        setPaint(!paint);
    };

    return(
    <div>
          <div className='burna' onClick={displayHandler}>
          <h2 className= 'colorfyStyle'>CLICK AND MAKE PAGE NICER</h2>    
          </div>        
    </div>
    )
}
export default Design;
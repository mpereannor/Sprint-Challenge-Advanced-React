import {useEffect} from 'react';

import useLocalStorage from './useLocalStorage';

const useColor = (key, initialValue ) => {

    const [paint, setPaint] = useLocalStorage(key, initialValue);
    
    
    const burnaDiv = document.body;

    // const burnaDiv = document.div('burna');

    useEffect(() => {
        paint ? burnaDiv.classList.add('colorfy') : burnaDiv.classList.remove('colorfy');},[paint]);
  
    return [paint, setPaint];


}

export default useColor;

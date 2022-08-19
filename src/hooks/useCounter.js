import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );
    
    const increment = ( value = 1 ) => {
        // setCounter ( counter + value ); this line doesn't allow you to use 2 test of this function at the same test
        setCounter ( (current) => current + value );
    }
    const reset = () => {
        setCounter ( initialValue );
    }
    const decrement = ( value = 1) => {
        if ( counter === 0 ) return;
        // setCounter ( counter - value ); this line doesn't allow you to use 2 test of this function at the same test
        setCounter ( (current) => current - value );
    }

    return{
        counter,
        increment,
        reset,
        decrement,
    }
}
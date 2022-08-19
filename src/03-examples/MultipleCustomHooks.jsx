import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { author, quote } = !!data && data[0]; // ! if data is true then data[0], because data have the undefined value and ! transofrm undefined in true and the second ! trasnform it to false
    // console.log({ data, isLoading, hasError });

    return (
        <>
        <h1>Breaking Bad Quotes</h1>
        <hr />
        {
            isLoading
            ?<LoadingQuote /> 
            :<Quote author={ author } quote={ quote }/>
        }

        <button 
        className="btn btn-primary"
        disabled={ isLoading }
        onClick={ () => increment() }>
        Next quote
        </button>

        </>
    )
}

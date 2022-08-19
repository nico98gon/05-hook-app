import { act, fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Testing on MultipleCustomHooks', () => {
    
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });
    
    test('should show the component by default ', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks />);

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextButton = screen.getByRole('button',{ name: 'Next quote' });

        expect(nextButton.disabled).toBeTruthy();

    });

    test('should show a quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        // screen.debug();

        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Fernando') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(nextButton.disabled).toBeFalsy();

    });

    test('should call the increment function', () => {  

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click( nextButton );
        
        expect( mockIncrement ).toHaveBeenCalled();
    });

});
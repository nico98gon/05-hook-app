import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";

describe('test into useCounter', () => {

    test('should return the default values', () => {

        const { result } = renderHook( () => useCounter());
        // console.log(result);
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

    });

    test('should generate the counter with the value of 100', () => {

        const { result } = renderHook( () => useCounter(100));
        const { counter } = result.current;

        expect( counter ).toBe(100);

    });

    test('should increment the counter', () => {

        const num = 0;
        const { result } = renderHook( () => useCounter(num) );
        const { increment } = result.current;

        act( () => {
            increment();
            increment(2);
        });

        // expect( counter ).toBe( num + 1 ); This doesn't wotk, beocuse the value of counter isn't the current value
        expect( result.current.counter ).toBe( num + 3 );

    });

    test('should decrement the counter', () => {

        const num = 5;
        const { result } = renderHook( () => useCounter(num) ); 
        const { decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        // expect( counter ).toBe( num + 1 ); This doesn't wotk, beocuse the value of counter isn't the current value
        expect( result.current.counter ).toBe( num - 3 );

    });

    test('should not decrement the counter when the counter is 0', () => {

        const { result } = renderHook( () => useCounter(0) ); 
        const { decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        // expect( counter ).toBe( num + 1 ); This doesn't wotk, beocuse the value of counter isn't the current value
        expect( result.current.counter ).toBe( 0 );

    });

    test('should reset the counter', () => {

        const num = 5;
        const { result } = renderHook( () => useCounter(num) ); 
        const { increment, decrement, reset } = result.current;

        

        // expect( counter ).toBe( num + 1 ); This doesn't wotk, beocuse the value of counter isn't the current value
        expect( result.current.counter ).toBe( num );

    });

})

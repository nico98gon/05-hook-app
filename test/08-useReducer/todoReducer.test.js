import { todoReducer } from "../../src/08-useReducer/todoReducer";
import { screen } from "@testing-library/react";


describe('Testing on todoReducer', () => {

    const initialState =[{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('should return the initial state', () => {
        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState );
    });

    test('should add a todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe(2);
        expect( newState ).toContain( action.payload );

    });

    test('should remove a todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const remove = {
            type: '[TODO] Remove Todo',
            payload: 2
        };

        const newState = todoReducer(initialState, action )

        const newState2 = todoReducer( newState, remove );

        expect( newState2 ).toEqual(initialState);
        expect( newState2.length ).toBe(1);

    });

    test('should remove a todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action )

        expect( newState[0].done ).toBe( true );
        expect( newState.length ).toBe(1);

    });

});
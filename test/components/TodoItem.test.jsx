import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/components/TodoItem";

describe('Testing TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should show the pending Todo to complete', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo= { onToggleTodoMock }
            />
        );
        
        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');

    });

    test('should show the Todo as complete', () => {

        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo= { onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center text-decoration-line-through');

    });

    test('should call the toggle Todo when click on it', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo= { onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.doubleClick( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });

    test('button should call the deleteTodo', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo= { onToggleTodoMock }
            />
        );

        const deleteButton = screen.getByRole("button");
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    });

});
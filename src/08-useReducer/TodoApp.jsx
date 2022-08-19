import { TodoAdd } from "../components/TodoAdd";
import { TodoList } from "../components/TodoList";
import { useTodos } from "../hooks";

// const initialState = [
//     {
//         id: new Date().getTime(),
//         description: 'Recolectar la piedra del alma',
//         done: false,
//     },
//     {
//         id: new Date().getTime() * 3,
//         description: 'Recolectar la piedra del tiempo',
//         done: false,
//     }
// ]

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodos([]);

    return (
        <>
        <h1>TodoApp { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }
                />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={ handleNewTodo }/>
            </div>
        </div>

        </>
    )
}

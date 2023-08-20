import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (todo: Todo) => void;
    deleteTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo: (todo: Todo) => {},
    deleteTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todo: Todo) :void => {
      setTodos([...todos, todo])
    }
    const deleteTodoHandler = (id: string): void => {
      setTodos(todos.filter((item) => item.id !== id))
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        deleteTodo: deleteTodoHandler
    }

    return (
        <TodosContext.Provider value={contextValue}>
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;
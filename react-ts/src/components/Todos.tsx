import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

interface Props {
    items: Todo[];
    onDeleteTodo: (id: string) => void;
}
const Todos:React.FC<Props> = ({items, onDeleteTodo}: Props) => {
    return (
        <ul className={classes.todos}>
            { items.map((item) => 
                <TodoItem item={item} onDeleteTodo={onDeleteTodo} />
            )}
        </ul>
    );
}

export default Todos;
import { useRef } from 'react';
import Todo from '../models/todo';
import classes from './NewTodo.module.css';

interface Props {
    onAddTodo: (todo: Todo) => void
}

const NewTodo: React.FC<Props> = ({onAddTodo}: Props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        onAddTodo(new Todo (enteredText));
    }

    return ( 
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button type='submit'>Add Todo</button>
        </form>
    );
}

export default NewTodo;
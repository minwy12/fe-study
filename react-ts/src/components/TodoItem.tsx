import Todo from "../models/todo";
import classes from './TodoItem.module.css';

interface Props {
    item: Todo;
    onDeleteTodo: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ item, onDeleteTodo }: Props) => {
    return (
        <div>
            <li className={classes.item} onClick={() => {onDeleteTodo(item.id)}}>{item.text}</li>
        </div>
    );
}

export default TodoItem;
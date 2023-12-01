import React from 'react';
import './TodoList.css';

interface TodoListProps{
    items : {id:string, todo:string}[];
    onDelete: (id:string) => void
};

const TodoList: React.FunctionComponent <TodoListProps> = ({items, onDelete}) => {

    return (
        <ul>
            {items.map(todo => (
                <span key={todo.id}>
                    <li>{todo.todo}</li>
                    <button onClick={ onDelete.bind(null,todo.id)}>DELETE</button>
                </span>
            ))}
        </ul>
    )
};

export default TodoList;
import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
    onAdd: (text: string) => void;
}

const NewTodo: React.FC <NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit: any = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAdd(enteredText);
        textInputRef.current!.value = " ";
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor='todo-text'>Add Todo :-) </label>
                <input type='text' id="todo-text" ref={textInputRef}></input>
            </div>
            <button type='submit'>Add</button>
        </form>
    )
};

export default NewTodo;
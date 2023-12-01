import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {Todo} from './Todo.model';

function App () {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos,{id:Math.random().toString(), todo:text} ]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }
  console.log(todos);

  return(
    <div className='App'>
      <TodoList items ={todos} onDelete = {todoDeleteHandler} />
      <div>
        <NewTodo onAdd = {addTodoHandler} />
      </div>
    </div>
  )
}

export default App;

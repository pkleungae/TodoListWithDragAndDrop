import React, { FC } from 'react'
import { Todo } from '../models/models'
import SingleTodo from './SingleTodo'

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
export const TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='container'>

    <div className='todos'>
      <span className="todos__heading">Active Tasks</span>
      {todos.map(todo=>(
        
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}
        ></SingleTodo>
        ))}
    </div>
        
    <div className='todos remove'>
      <span className="todos__heading">Deleted Tasks</span>
      {todos.map(todo=>(
        
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}
        ></SingleTodo>
        ))}
    </div>

        </div>
  )
}

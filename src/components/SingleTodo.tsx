import React from 'react'
import { Todo } from '../models/models'

interface Props{
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  return (
    <form className='todos__single'>
      <span className='todos__single--text'>{todo.todo}</span>
    </form>
  )
}

export default SingleTodo
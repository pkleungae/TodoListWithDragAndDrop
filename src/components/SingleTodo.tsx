import React from 'react'
import { Todo } from '../models/models'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { TodoList } from './TodoList';

interface Props{
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Array<Todo>>>;
}


const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {

  function handleDone(id: number): void {
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
    console.log('id: ' + id+ ' just del')
  }
  

  return (
    <form className='todos__single'>

      {/* todo display conttrol */}

      {todo.isDone ? (
      <s className='todos__single--text'>{todo.todo}</s>
      ):(
        <span className='todos__single--text'>{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit></AiFillEdit>
        </span>
          
        <span className="icon">
        <AiFillDelete ></AiFillDelete>
        </span>

        <span className="icon">
        <MdDone onClick={()=>handleDone(todo.id)}></MdDone>
        </span>
        
        
      

      </div>

    </form>
  )
}

export default SingleTodo



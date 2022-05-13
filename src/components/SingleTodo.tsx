import React from 'react'
import { Todo } from '../models/models'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props{
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  return (
    <form className='todos__single'>
      <span className='todos__single--text'>{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit></AiFillEdit>
        </span>
          
        <span className="icon">
        <AiFillDelete></AiFillDelete>
        </span>

        <span className="icon">
        <MdDone></MdDone>
        </span>
        
        
      

      </div>

    </form>
  )
}

export default SingleTodo
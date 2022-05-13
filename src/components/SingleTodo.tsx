import React, { useState } from 'react'
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

 
//handle edit function implementation
  function handleEdit(e:React.FormEvent, id:number):void{
    
    e.preventDefault();

    setTodos(
      todos.map((todo)=>todo.id===id?{...todo,todo:editTodo}:todo));
    
 
  }

  function handleDelete(id: number): void {
    setTodos(todos.filter((todo)=>todo.id!==id));
    console.log('id: ' + id+ ' just del')
  }
  
  function handleDone(id: number):void {
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
    console.log('id: ' + id+ ' just done')
  }
  

  return (
    // where the handle edit fire up 
    <form className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>

      {/* isDone todo display conttrol */}

      {todo.isDone ? (
      <s className='todos__single--text'>{todo.todo}</s>
      ):(
        <span className='todos__single--text'>{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit onClick={()=>handleEdit(e,todo.id)}></AiFillEdit>
        </span>
          
          {/* delete function implemention */}

        <span className="icon">
        <AiFillDelete onClick={()=>handleDelete(todo.id)}></AiFillDelete>
        </span>

        {/* Done function implemention */}
        <span className="icon">
        <MdDone onClick={()=>handleDone(todo.id)}></MdDone>
        </span>
        
        
      

      </div>

    </form>
  )
}

export default SingleTodo



import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './models/models';
import { TodoList }from './components/TodoList'

let name:string = 'Piyush'

let hobbies:string[];

let role:[number,string]

let age:number|string

// let printName: (name:string)=>void; 

// let printName: (name:string)=>never; 

// let personName:unknow; 

// function printName(name:string){
//  console.log(name)
// }


type Person ={
  name:string;
  age:number;
}

type Person2 =  Person & {
  name:string;
  age?:number;
}

let y: Person2 = {
  name:'asd',
  age:1
}

let person:Person ={
  name : 'haha',
  age:5
}

interface Person4 {
  profession:string
}

interface Person5 {
  profession2:string
}

interface Person3 extends Person4, Person5{
  name:string; 
  age:number;

}

let haha:Person3 ={
  name:'asd',
  profession2:'asdf',
  age:5,
  profession:'askjhd'

}

const App:React.FC = ()=>{

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  console.log(todo)
  
  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo, isDone:false}])
      setTodo("")
    }
  }
  return (
    <div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
    
    
  );
}

export default App;

import {useState} from "react"

export const TodoList = () => {
 const initialState = [
   {
     task: "Learn vue.js",
     isCompleted: false,
   },
   {
     task: "Learn React Hook",
     isCompleted: false,
   },
   {
     task: "Learn Gatsby.js",
     isCompleted: false,
   },
 ];

 const [todos, setTodos] = useState(initialState);

 return (
  <>
   <input></input>
     <ul>
       {todos.map((todo, index) => (
         <li key={index}>{todo.task}</li>
       ))}
     </ul>
   </>
 );
}
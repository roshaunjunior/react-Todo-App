import React , {useState} from 'react'

// let globalId = 0;
// export default function Todoapp() {
//  const [todos, setTodos] = useState([]);
//  const [task, setTask] = useState('') ;
  
 

//  function createTodo(event){
//        event.preventDefault();

//         setTodos(oldTodos => {
//           setTask('');
//           return [ ...oldTodos , {todo: task, id: globalId++}]
//         })
// } 
  
//  function deleteTodo(itemId){
//     setTodos(oldTodos => {
//       return oldTodos.filter(item => item.id !== itemId)
//     })
//  }
 

//  return (

       
//     <div>
//       <h1>
//         Best ToDo App Ever
//       </h1>
//       <form onSubmit={createTodo}>
//           <input type="text" value = {task} onChange = {event => {
//             setTask(event.target.value); 
//           }}
//           />

//           <button type = 'submit'>Click Me to Add</button>
//       </form>
//       <ul>
//          {todos.map(item => {
//            return <div key = {item.id}>

//              <li>{item.todo}</li>
//             <button onClick={() => deleteTodo(item.id)}>Delete</button>
//            </div>
//            })
//          }
//       </ul>
//     </div>
//   )
// }



import React, {useState} from 'react'

let globalID = 0;
export default function Practice() {
   const [task, setTask] = useState('')  
   const [todos, setTodos] = useState([])  
    function createTodo(event){
        event.preventDefault();

        setTodos(oldTodos => {
            setTask('');
            return [...oldTodos , {
                todo: task,
                id: globalID ++
            }]
        })

    }
     function deleteTodo(itemId) {
        setTodos(oldTodos => {
            return oldTodos.filter(e => e.id !== itemId)
        })
     }
  return (
    <div className='bg-slate-700 h-screen'>
        <h1 className='mx-40 py-8 text-5xl font-mono text-white'>Best ToDo app</h1>
        <form onSubmit = {createTodo}>
            <input className='m-8 p-4 font-mono text-black text-xl border-solid hover:border-dotted border-2 border-indigo-800 rounded-2xl' type="text" value = {task} onChange = {
                event => setTask(event.target.value)
            }/>

            <button className='text-black text-xl font-mono m-2 p-4 bg-blue-200 border-solid hover:border-dotted border-2 border-indigo-800 rounded-2xl ' type = 'submit'>Click Me to Add List</button>


            <ul>
                {todos.map(item => {
                    return <div key = {item.id}>

                        <li className='text-white m-4 p-2 font-mono underline '>{item.todo}</li>
                        <button className='ml-16 bg-blue-200 border-solid hover:border-dotted border-2 border-indigo-800 rounded-md' onClick={() => deleteTodo(item.id)}>Delete</button>
                    </div> 
                })}
                
            </ul>

        </form>
    </div>
  )
}

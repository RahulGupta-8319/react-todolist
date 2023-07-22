import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId)
      console.log('edit====>', editTodo);
      const updateTodo = todos.map((t) => {
        if (t.id === editTodo.id) {
         return t = { "id": t.id, todo }
        }else{
          return t = { "id": t.id, "todo":t.todo }
        }
      })
      console.log('upadated===>', updateTodo);
      setTodos(updateTodo)
      setEditId(0)
      setTodo('')
      return;
    }

    if (todo ) {
      console.log("inside wrong place");
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo('')
    }
  }

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((to) => to.id !== id)
    setTodos([...deleteTodo])
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((to) => to.id === id)
    setTodo(editTodo.todo)
    setEditId(id)

  }



  console.log(todos);
  return (
    <div className='app'>
      <div className='container'>
        {/*------- heading---------  */}
        <h1>write down today task</h1>

        {/* ---------input data------- */}
        <form className='form' onSubmit={handleSubmit} >
          <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
          <button className='btn' type='submit'>{editId ? "edit" : "go"}</button>
        </form>

        {/* -------- lists ----------  */}
        <ul className='allTodos'>
          {
            todos.map((obj) => (
              <li className='singleTodo'>
                <span className='todoText' >{obj.todo}</span>
                <button onClick={() => handleEdit(obj.id)}>edit</button>
                <button onClick={() => handleDelete(obj.id)} >delete</button>
              </li>

            ))
          }


        </ul>
      </div>
    </div>
  )
}

export default App
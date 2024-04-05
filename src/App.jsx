import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
    <div className='flex flex-col items-center h-screen bg-gray-100'>
    <h1 className='text-4xl font-bold mt-36'>Todo List</h1>
    <AddTodo/>
    <Todos/>
    </div>
    </>
  )
}

export default App

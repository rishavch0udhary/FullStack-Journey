import React from 'react'

function Task() {
  return (
    <div className='flex items-center gap-4  shadow-lg bg-slate-700 rounded-lg text-white p-6'>
      <span>Task Name</span>
      <span>Task Description</span>
      <div className='flex items-center select-none gap-2'>
      <input id='isComplete' type='checkbox'/>
      <label htmlFor="isComplete">Completed</label>
      </div>
      <button className='bg-green-600 px-6 py-2 rounded-lg text-white '>Edit</button>
      <button className='bg-red-600 px-6 py-2 rounded-lg text-white  '>Delete</button>
    </div>
  )
}

export default Task
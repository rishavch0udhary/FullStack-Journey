import React from 'react'


function AddTask() {
  return (
    <div className='p-2 flex items-center gap-2'>
      <input className='bg-slate-100'  type="text" placeholder='Task Name'/>
      <input className='bg-slate-100'  type="text" placeholder='Task Description'/>
      <div className='flex items-center select-none gap-2'>
      <input id='isComplete' type='checkbox'/>
      <label htmlFor="isComplete">Completed</label>
      </div>
      <button className='bg-blue-600 rounded-lg text-white px-6 py-2'>Add</button>
    </div>
  )
}

export default AddTask
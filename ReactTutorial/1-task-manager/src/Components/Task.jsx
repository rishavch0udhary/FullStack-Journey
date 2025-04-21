import React from 'react'

function Task({task}) {
  return (
    <div className='flex items-center justify-evenly gap-4 w-[35rem] shadow-lg bg-slate-700 rounded-lg text-white p-6'>
      <span className='font-bold'>{task.title}</span>
      <span>{task.desc}</span>
      <span className={`${task.isCompleted && "text-blue-500"}`}>
        {task.isCompleted ? "complete" : "pending"}
        </span>
      <button className='bg-green-600 px-6 py-2 rounded-lg text-white '>Edit</button>
      <button className='bg-red-600 px-6 py-2 rounded-lg text-white  '>Delete</button>
    </div>
  )
}

export default Task
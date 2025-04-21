import React from 'react'
import Task from './Task'

function Tasks({allTasks}) {
  return (
    <div className='flex flex-col items-center gap-2 h-[40rem] overflow-auto p-4'>
    {
      allTasks.map((task)=>(
        <Task key={task.desc} task={task}/>
      ))
    }     
    </div>
  )
}

export default Tasks
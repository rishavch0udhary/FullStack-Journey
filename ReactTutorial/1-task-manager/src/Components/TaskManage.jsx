import React from 'react'
import AddTask from './AddTask'
import Tasks from './Tasks'

function TaskManage() {
  return (
    <div className='flex flex-col p-8 items-center'>
    <AddTask/>
    <div className='w-[100%] bg-slate-300 h-[2px] m-4'></div>
    <Tasks/>
    </div>
  )
}

export default TaskManage
import React from 'react'
import Task from './Task'

function Tasks() {
  return (
    <div className='flex flex-col items-center gap-4'>
    <Task/>
    <Task/>    
    <Task/>
    <Task/>
    <Task/>
    </div>
  )
}

export default Tasks
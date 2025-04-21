import React from 'react'
import AddTask from './AddTask'
import Tasks from './Tasks'

function TaskManage() {
  let allTasks = [
    {
      title: "Task1",
      desc: "Task1 description",
      isCompleted: true,
    },
    {
      title: "Task2",
      desc: "Task2 description",
      isCompleted: false,
    },
    {
      title: "Task3",
      desc: "Task3 description",
      isCompleted: false,
    },
    {
      title: "Task4",
      desc: "Task4 description",
      isCompleted: true,
    }
  ]
  return (
    <div className='flex flex-col p-8 items-center'>
    <AddTask/>
    <div className='w-[100%] bg-slate-300 h-[2px] m-4'></div>
    <Tasks allTasks={allTasks}/>
    </div>
  )
}

export default TaskManage
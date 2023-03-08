import React from 'react'
import {BsPlusLg} from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Sidebar(props) {
  //console.log(props)
  const navigate = useNavigate()
  const tasks = props.tasks
  //console.log(tasks)
  function addAndNavigateToTask(){
    let id  = uuidv4();
    props.changeTask([...props.tasks, {task:'Untitled',createdat:"",description:'',id:id}]);


    navigate(`/${id}/edit`);
}
  return (
    <div className='h-full w-96 bg-slate-300 flex flex-col'>
        
    <div className='flex justify-between border-2 p-4'>
        <h1 className='text-4xl font-slate-900 font-bold'>Note</h1>
        <button className='font-bold text-4xl' onClick={addAndNavigateToTask}><BsPlusLg/></button>

    </div>

    
    </div>
  )
}

export default Sidebar
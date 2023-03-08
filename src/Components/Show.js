import React from 'react'
import Sidebar from './Sidebar'

function Show(props) {
    console.log(props);
  return (
    <div className='flex w-screen'>
        <Sidebar tasks={props.tasks} changeTask={props.changeTask} />

        <div className='w-[100%]'>
            <div className='flex justify-between'>
                <div>
                <div className='flex-col'>
                    <div>
                    
                    </div>
                    <div>
                    date
                    </div>
                </div>
                </div>
            <div className='flex gap-10'>
                <button>Edit</button>
                <button>delete</button>
            </div> 
        </div>
        </div>
    </div>
  )
}

export default Show
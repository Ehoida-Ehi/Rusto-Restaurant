import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className='flex'>
      <div className='bg-black fixed h-[100vh] w-[20%]'>
        <Sidebar/>
      </div>
      <div className='absolute right-0  bg-white w-[80%] h-[800px]'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
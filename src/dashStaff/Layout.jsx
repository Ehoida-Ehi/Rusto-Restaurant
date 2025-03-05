import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Layout = () => {
  return (
    <div className='flex'>
    <div className='bg-slate-500 fixed h-[100vh] w-[20%]'>
      <SideBar/>
    </div>
    <div className='absolute right-0  bg-slate-300 w-[80%] h-[800px]'>
      <Outlet />
    </div>
  </div>
  )
}

export default Layout
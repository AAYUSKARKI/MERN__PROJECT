import React from 'react'
import DashboardHeader from '../components/Dashboardheader'
import DashboardSidebar from '../components/DashboardSidebar'
import AlladminCards from '../components/AlladminCards'

function Homepage() {
  return (
    <>
     <div className='h-screen flex flex-col'>
      <DashboardHeader />
      <div className='flex-grow overflow-y-auto'>
        <div className='flex'>
        <DashboardSidebar />
        <div className='flex flex-col overflow-y-auto ml-24'>
        <AlladminCards />
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Homepage
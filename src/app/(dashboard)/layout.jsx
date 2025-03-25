import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div>
        <div className='grid grid-cols-12'>
            {/* Sidebar */}
            <div className='col-span-3 bg-slate-300'>
                <ul>
                    <li>User List</li>
                    <li>Service</li>
                    <li>Blog</li>
                </ul>

            </div>
        {/* Dashboard content */}
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    </div>
  )
}

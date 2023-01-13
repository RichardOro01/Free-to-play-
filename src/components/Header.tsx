import React from 'react'
import logo from '../icons/bx-camera-movie.svg'
import user from '../icons/bx-user-circle.svg'

export const Header = () => {
  return (
    <header className="App-header bg-slate-800 h-28 text-gray-200 flex flex-row justify-between items-center p-4">
        <div className='flex flex-row gap-2 items-center'>
            <img src={logo} alt='logo' className='w-12'/>
            <span className='font-serif text-4xl'>Movies DB</span>
            
        </div>
            <img src={user} alt='user' className='w-12 cursor-pointer'/>
    </header>
  )
}

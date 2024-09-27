import React from 'react'
import { Logo } from './logo'
import Search from './search'
import Actions from './actions'
type Props = {}

export default function NavBar({}: Props) {
  return (
    <>
        <div className='flex justify-between items-center top-0 w-full h-auto p-2 bg-slate-900'>
          <Logo/>
          <Search/>
          <Actions/>
        </div>
    </>
  )
}
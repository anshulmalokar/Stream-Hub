import React from 'react'
import { Logo } from './_components/logo';
type Props = {}

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }> ) {
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center'>
      <Logo/>
      {children}
    </div>
  )
}
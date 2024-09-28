'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import { useSideBar } from '@/store/use-sidebar'
import { Button } from '@/components/ui/button'
import { Tooltip } from '@/components/ui/tooltip'
type Props = {}

export default function Toggle({}: Props) {
  const {
    collasped,
    onContract,
    onExpand
  } = useSideBar();

  if(collasped){
    return <>
        <div className='hidden lg:block p-3'>
            <Button size={'sm'} onClick={onExpand}>
                <ArrowRight size={16}/>
            </Button>
        </div>
    </>
  }

  return (
    <>
        <div className='flex justify-between p-3 items-center'>
            <div>
                For you
            </div>
            <Button size={'sm'} onClick={onContract}>
                <ArrowLeft size={16} />
            </Button>
        </div>
    </>
  )
}
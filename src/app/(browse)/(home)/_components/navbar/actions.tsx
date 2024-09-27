import React from 'react'
import { Button } from '@/components/ui/button'
import { currentUser } from '@clerk/nextjs/server'
import { SignOutButton } from '@clerk/nextjs'
import { SignInButton } from '@clerk/nextjs'
type Props = {}

const Actions = (props: Props) => {
  const user = currentUser();
  return (
    <>
        {
            !user && <>
                <SignOutButton/>
            </>
        }
        <>
            <SignInButton/>
        </>
    </>
  )
}

export default Actions;
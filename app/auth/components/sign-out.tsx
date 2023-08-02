'use client'
import { signOut } from 'next-auth/react'

import { Button } from "@/components/ui/button"

const SignOut = () => {
  return (
    <Button onClick={() => signOut()}>SignOut</Button>
  )
}

export default SignOut
'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import { signIn } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'

const AuthForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    // const socialAction = (action: string) => {
    //     setIsLoading(true);
    
    //     signIn(action, { redirect: false })
    //       .then((callback) => {
    //         if (callback?.error) {
    //         //   toast.error('Invalid credentials!');
    //         }
    
    //         if (callback?.ok) {
    //           redirect('/dashboard')
    //         }
    //       })
    //       .finally(() => setIsLoading(false));
    //   } 
  return (
    <div className='space-y-3'>
    <Button 
    onClick={() => signIn('google')}
    className="
    inline-flex
    w-full 
    justify-center 
    rounded-md 
    bg-white 
    px-8
    py-2 
    text-gray-800 
    shadow-sm 
    ring-1 
    ring-inset 
    ring-gray-300 
    hover:bg-gray-50 
    focus:outline-offset-0
    gap-x-2
  ">
      <FcGoogle size={20}/>
      Google
    </Button>
    <Button 
    onClick={() => signIn('github')} 
    className="
    inline-flex
    w-full 
    justify-center 
    rounded-md 
    bg-white 
    px-8
    py-2 
    text-gray-800 
    shadow-sm 
    ring-1 
    ring-inset 
    ring-gray-300 
    hover:bg-gray-50 
    focus:outline-offset-0
    gap-x-2
  ">
      <AiFillGithub color="black" size={20}/>
      Github
    </Button>
    </div>
  )
}

export default AuthForm
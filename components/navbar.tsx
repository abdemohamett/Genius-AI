import React from 'react'
import { Button } from './ui/button'
import {Menu} from 'lucide-react'
import UserButton from '@/app/auth/components/user-button'
import MobileSidebar from '@/components/mobile-sidebar'
import { checkSubscription } from '@/lib/subscription'

interface NavbarProps{
  apiLimitCount: number,
}

const Navbar = async({
  apiLimitCount = 0
}: NavbarProps )=> {
  const isPro = await checkSubscription()

  return (
    <div className='flex items-center p-4'>
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className='flex w-full justify-end'>
        <UserButton/>
      </div>
    </div>
  )
}

export default Navbar
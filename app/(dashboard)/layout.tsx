import getCurrentUser from '@/app/actions/getCurrentUser';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genius | Dashboard',
  description: 'Generated by create next app',
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser();
  if(!user){
    redirect('/auth')
  }
  
  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()

  return (
   <div className="h-full relative">
    <div className='hidden h-full md:flex md:w-72 md:flex-col bg-gray-900 md:fixed md:inset-y-0 z-[80]'>
    <Sidebar isPro={isPro} apiLimitCount={apiLimitCount}/>
    </div>
    <main className='md:pl-72 pb-10'>
      <Navbar apiLimitCount={apiLimitCount}/>
      {children}
    </main>
   </div>
  )
}

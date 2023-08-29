import React from 'react'

import SideBar from '@/components/navigation/SideBar';

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  const SideBarComponent: JSX.Element = await SideBar();

  return (
    <div className='h-full'>
      <div className='hidden h-full md:flex flex-col fixed inset-y-0 w-[72px]'>
        {SideBarComponent}
      </div>
      <main className='md:pl-[72px] h-full'>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
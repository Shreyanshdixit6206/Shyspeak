import React from 'react'
import { redirect } from 'next/navigation';

import NavigationActions from './NavigationActions';
import { db } from '@/lib/db';
import { currentProfile } from '@/lib/current-profile'
import { Separator } from '../ui/separator';
import { ScrollArea } from '../ui/scroll-area';
import NavigationItem from './NavigationItem';
import { ModeToggle } from '../ui/mode-toggle';
import { UserButton } from '@clerk/nextjs';

async function SideBar() {
    const profile = await currentProfile();
    
    if(!profile) {
        return redirect("/");
    }

    const servers = await db.server.findMany({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    return (
        <aside className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3'>
            <NavigationActions />
            <Separator
                className='h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto'
            />
            <ScrollArea
                className='w-full flex-1'
            >
                {servers.map(server => (
                    <div key={server.id} className="mb-4">
                        <NavigationItem id={server.id} name={server.name} imageUrl={server.imageUrl} />
                    </div>
                ))}
            </ScrollArea>
            <div className='pb-3 mt-auto flex items-center flex-col gap-y-4'>
                <ModeToggle />
                <UserButton 
                    afterSignOutUrl='/'
                    appearance={{
                        elements: {
                            avatarBox: "h-[48px] w-[48px]"
                        }
                    }}
                />
            </div>
        </aside>
    )
}

export default SideBar
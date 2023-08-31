import React from 'react'
import { Hash } from 'lucide-react';
import MobileToggle from '../MobileToggle';

interface ChatHeaderProps {
    serverId: string;
    name: string;
    type: "channel" | "conversation";
    imageUrl?: string;
}

const ChatHeader = async ({ name, type, imageUrl, serverId }: ChatHeaderProps) => {
  const mobileToggle = await MobileToggle({ serverId });

  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
        {mobileToggle}
        {type === "channel" && (
            <Hash className='h-5 w-5 text-zinc-500 dark:text-zinc-400 ml-2 mr-1' />
        )}
        <p className='font-semibold text-md text-black dark:text-white'>
            {name}
        </p>
    </div>
  )
}

export default ChatHeader;

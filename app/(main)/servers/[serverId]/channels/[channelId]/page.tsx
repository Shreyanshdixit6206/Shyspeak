import { redirect } from "next/navigation";
import { redirectToSignIn } from "@clerk/nextjs";

import ChatHeader from "@/components/chat/Header";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface ChannelIdPageProps {
    params: {
        serverId: string;
        channelId: string;
    }
}

export default async function ChannelPage({ params }: ChannelIdPageProps) {
  const profile = await currentProfile();
  
  if(!profile) {
    return redirectToSignIn();
  }
  
  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
  });
  
  const member = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
  });
  
  if(!channel || !member) {
    redirect("/");
  }
  
  const header = await ChatHeader({ type: "channel", serverId: params.serverId, name: channel.name });

  return (
    <main className="bg-white dark:bg-[#313338] flex flex-col h-full">
        {header}
    </main>
  )
}

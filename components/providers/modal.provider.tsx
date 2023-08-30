"use client";

import { useEffect, useState } from "react";

import { CreateServerModal } from "../modals/CreateServerModal";
import { EditServerModal } from "../modals/EditServerModal";
import { InviteModal } from "../modals/InviteModal";
import { MembersModal } from "../modals/MembersModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  
    return () => {
      setIsMounted(false);
    }
  }, []);

  if(!isMounted) {
      return null;
  }

  return (
    <>
      <CreateServerModal />
      <EditServerModal />
      <InviteModal />
      <MembersModal />
    </>
  );
}

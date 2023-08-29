"use client";

import { useEffect, useState } from "react";

import { CreateServerModal } from "../modals/CreateServerModal";
import { InviteModal } from "../modals/InviteModal";

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
            <InviteModal />
        </>
    );
}

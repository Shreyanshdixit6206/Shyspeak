"use client";

import { useEffect, useState } from "react";

import { CreateServerModal } from "../modals/CreateServerModal";

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
        </>
    );
}

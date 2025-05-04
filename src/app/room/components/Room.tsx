"use client";

import { ReactNode } from "react";
import { RoomProvider } from "@liveblocks/react/suspense";
import { ClientSideSuspense } from "@liveblocks/react";
import ErrorListener from "@/components/ErrorListener";
import { useRoomId } from "@/hooks/useRoomId";

export default function Room({ children }: { children: ReactNode }) {
    const roomId = useRoomId();

    if (!roomId) {
        return <div>No room ID found</div>;
    }

    return (
        <RoomProvider
            id={roomId ?? ""}
            initialPresence={{ cursor: null }}
            key={roomId}
        >
            <ClientSideSuspense fallback={<ErrorListener />}>
                {children}
            </ClientSideSuspense>
        </RoomProvider>
    )
}
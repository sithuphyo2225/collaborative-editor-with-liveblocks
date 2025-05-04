"use client";

import { useErrorListener } from "@liveblocks/react/suspense";
import { useState } from "react";
import { Loading }  from "./Loading";

export default function ErrorListener() {
    const [error, setError] = useState<string | undefined>();

    useErrorListener((error) => {
        switch (error.context.code) {
            case -1:
                setError("Could not connect to Liveblocks");
                break;
            case 4001:
                // Could not connect because you don't have access to this room
                setError("You don't have access to this room");
                break;

            default:
                setError("An unexpected error occurred");
                break;
        }
    });

    return error ? <div className="error-banner">{error}</div> : <Loading />;
}
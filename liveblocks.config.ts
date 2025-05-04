declare global {
    interface Liveblocks {
        Presence: {
            cursor: {
                x: number;
                y: number;
            } | null;
        };
        UserMetadata: {
            id: string;
            info: {
                name: string;
                color: string;
                picture: string;
            };
        };
    }
}

export {}
import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";

const USER_INFO = [
    {
      name: "Si Thu Phyo",
      color: "#D583F0",
      picture: "https://avatars.githubusercontent.com/u/88924444?v=4&size=64",
    },
    {
      name: "Mislav Abha",
      color: "#F08385",
      picture: "https://liveblocks.io/avatars/avatar-2.png",
    },
    {
      name: "Tatum Paolo",
      color: "#F0D885",
      picture: "https://liveblocks.io/avatars/avatar-3.png",
    },
];

const liveblocks = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(req: NextRequest) {
    const userId = Math.floor(Math.random() * 10 % USER_INFO.length);
    const roomId = req.nextUrl.searchParams.get("roomId");

    const session = liveblocks.prepareSession(`session-${userId}`, {
        userInfo: USER_INFO[userId],
    });

    // Full access to the room, room:read and room:write
    session.allow(roomId!, session.FULL_ACCESS);

    const { body, status } = await session.authorize();

    return new Response(body, { status });
}

# Collaborative Text Editor

A real-time collaborative text editor built with Next.js, Tiptap, and Liveblocks. This editor allows multiple users to edit the same document simultaneously, with real-time collaboration features including:

- Live collaboration with multiple users
- Real-time cursor presence
- User avatars
- Rich text editing capabilities
- Automatic content saving

## Technologies Used

- **Next.js** - React framework for the frontend
- **Tiptap** - Headless rich text editor for React
- **Liveblocks** - Real-time collaboration infrastructure
- **Yjs** - CRDT for real-time collaboration

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

3. Create a `.env.local` file and add your Liveblocks API key:

```
LIVEBLOCKS_SECRET_KEY=sk_your_secret_key
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000/room?roomId=any-room-id](http://localhost:3000/room?roomId=any-room-id) in your browser to see the editor.

## Features

### Real-Time Collaboration

The editor uses Liveblocks and Yjs to provide real-time collaboration. Multiple users can edit the same document simultaneously, with changes reflected instantly across all users.

### Rich Text Editing

Powered by Tiptap, the editor supports a variety of rich text formatting options including:
- Bold, italic, strikethrough
- Blockquotes
- Bullet and ordered lists
- Horizontal lines

### User Presence

The editor shows which users are currently in the document with:
- User avatars displayed in the header
- Real-time cursor positions
- User names on hover

### Content Persistence

The editor includes functionality to save content to a database:
- Debounced saving to prevent excessive database operations
- Timestamp indicator for last saved time







"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./Toolbar";
import styles from "./Editor.module.css";
import { Avatars } from "./Avatars";
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { useState, useRef, useCallback, useEffect } from "react";

export function Editor() {
    const liveblocksExtension = useLiveblocksExtension();
    const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
    const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    
    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (saveTimeoutRef.current) {
                clearTimeout(saveTimeoutRef.current);
            }
        };
    }, []);
    
    // Debounced save function
    const saveToDatabase = useCallback((content: any) => {
        // Clear any pending save
        if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
        }
        
        // Set new timeout
        saveTimeoutRef.current = setTimeout(async () => {
            try {
                console.log('Saving to database:', content);
                
                // Example API call to save content
                // const response = await fetch('/api/documents/save', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({ content }),
                // });
                
                // if (!response.ok) throw new Error('Failed to save');
                
                setLastSavedAt(new Date());
                console.log('Content saved successfully');
            } catch (error) {
                console.error('Error saving content:', error);
            }
        }, 2000); // 2 second debounce
    }, []);
    
    const editor = useEditor({
        editorProps: {
            attributes: {
                class: styles.editor,
            },
        },
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            liveblocksExtension,
        ],
        onUpdate: ({ editor }) => {
            const json = editor.getJSON();
            saveToDatabase(json);
        },
        immediatelyRender: false
    });

    return (
        <div className={styles.editorContainer}>
            <div className={styles.editorHeader}>
                <Toolbar editor={editor} />
                <Avatars />
                {lastSavedAt && (
                    <div className={styles.saveStatus}>
                        Last saved: {lastSavedAt.toLocaleTimeString()}
                    </div>
                )}
            </div>
            <EditorContent editor={editor} className={styles.editorContainer} />
        </div>
    );
}
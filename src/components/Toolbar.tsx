import { Editor } from "@tiptap/react";
import styles from "./Toolbar.module.css";
import { BoldIcon, ItalicIcon, StrikethroughIcon, BlockQuoteIcon, HorizontalLineIcon, BulletListIcon, OrderedListIcon } from "./Icons";

type Props = {
  editor: Editor | null;
};

export function Toolbar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <div className={styles.toolbar}>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-active={editor.isActive("bold") ? "is-active" : undefined}
        aria-label="bold"
      >
        <BoldIcon />
      </button>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        data-active={editor.isActive("italic") ? "is-active" : undefined}
        aria-label="italic"
      >
        <ItalicIcon />
      </button>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        data-active={editor.isActive("strike") ? "is-active" : undefined}
        aria-label="strikethrough"
      >
        <StrikethroughIcon />
      </button>

      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        data-active={editor.isActive("blockquote") ? "is-active" : undefined}
        aria-label="strikethrough"
      >
        <BlockQuoteIcon />
      </button>

      <button
        className={styles.button}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        data-active={undefined}
        aria-label="horizontal-line"
      >
        <HorizontalLineIcon />
      </button>

      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-active={editor.isActive("bulletList") ? "is-active" : undefined}
        aria-label="bullet-list"
      >
        <BulletListIcon />
      </button>

      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        data-active={editor.isActive("orderedList") ? "is-active" : undefined}
        aria-label="number-list"
      >
        <OrderedListIcon />
      </button>
    </div>
  );
}
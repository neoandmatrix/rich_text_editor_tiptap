'use client'

import { useEditor, EditorContent, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'


const Tiptap = () => {
  const [editorCOntent , setEditorContent] = useState(" ");
  

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌎️</p>',

    onUpdate({editor}){
      setEditorContent(editor.getHTML())
    }
  })

  console.log(typeof(editorCOntent))

  return (
    <>




{editor && <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          h1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          h2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          bullet list
        </button>
      </FloatingMenu>}
      <EditorContent editor={editor} />





    <button
onClick={() => editor?.chain().focus().toggleBold().run()}

className={editor?.isActive('bold') ? 'bg-red-500' : ' bg-amber-500'}
>
bold
</button>
    <div >
      {editorCOntent}
    </div>
    <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap
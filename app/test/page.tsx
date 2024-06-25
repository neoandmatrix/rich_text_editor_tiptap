'use client'

import { useCurrentEditor } from '@tiptap/react'

export default function EditorJSONPreview () {
  const { editor } = useCurrentEditor()

  return (
    <pre>
      {JSON.stringify(editor?.getJSON())}
    </pre>
  )
}
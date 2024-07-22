import { Box } from '@chakra-ui/react'
import { Editor } from "@monaco-editor/react"
import React, { useRef, useState } from 'react'
import LanguageSelector from './LanguageSelector'

export const CodeEditor = () => {
    const editorRef = useRef()
    const [value, setValue] = useState('')

    const onMount = (editor)=>{
        editorRef.current = editor;
        editor.focus();
    }
  return (
    <Box>
        <LanguageSelector/>
        <Editor height="75vh" theme='vs-dark' defaultLanguage="javascript" defaultValue="// some comment" value={value}
        onMount={onMount}
        onChange={
            (value) => setValue(value)
        }
        />
    </Box>
  )
}
export default CodeEditor;
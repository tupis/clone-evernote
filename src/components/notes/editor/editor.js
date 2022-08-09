import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

const NotesEditor = ({currentNote, updateNote}) => {
    const [currentContent, setCurrentContent] = useState('')
    const [timer, setTimer] = useState(null)

    const handleChange = (content, delta, source) => {
        clearTimeout(timer)
        if(source == 'user') {
            setCurrentContent(content);
            setTimer(setTimeout(() => updateNoteLocal(content), 2500))
        }
    }

    const updateNoteLocal = (content) => {
        const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30);
        updateNote(currentNote, {'title': title, 'body': content})
    }

    useEffect(() => {
        setCurrentContent(currentNote.body)
    },[currentNote])

    const modules = {
        toolbar: [
            [{'header': '1'}, {'header': '2'},{'font': []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link'],
            ['clean']
        ]
    }

    return (
        <>
            <ReactQuill modules={modules} value={currentContent} onChange={handleChange}/>
        </>
    );
}
 
export default NotesEditor;
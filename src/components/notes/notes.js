import { useEffect, useState } from 'react';
import '../../styles/notes.scss'
import { push as Menu } from 'react-burger-menu';
import { Column } from 'rbx';
import NotesServices from '../../services/notes'
import List from './lists/lists'
import NotesEditor from './editor/editor';
import Search from './search/search';


const Notes = ({isOpen, setIsOpen}) => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState({Title: "", body: "", id: ""});

    useEffect(() => {
        fetchNotes()
    },[]);
    

    async function fetchNotes() {
        const response = await NotesServices.index();
        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
            setCurrentNote(response.data[0])
        } else {
            setNotes([])
        }
    }

    const createNote = async (title, body) => {
        const note = await NotesServices.create(title, body);
        fetchNotes()
    }

    const selectNote = (id) => {
        const note = notes.find(note => note._id === id)
        setCurrentNote(note)
    }

    const deleteNote = async (note) => {
        await NotesServices.delete(note._id);
        fetchNotes()
    }

    const updateNote = async (oldNote, params) => {
        const updatedNote = await NotesServices.update(oldNote._id, params);
        const index = notes.indexOf(oldNote);
        const newNotes = notes;
        newNotes[index] = updatedNote.data;
        setNotes(newNotes);
        setCurrentNote(updatedNote.data)
    }

    const searchNote = async (query) => {
        const response = await NotesServices.search(query);
        setNotes(response.data)
    }

    return (
        <>
            <Column.Group className="notes" id="notes">
                    <Menu
                        pageWrapId={"notes-editor"}
                        isOpen={isOpen}
                        onStateChange={(state) => setIsOpen(state.isOpen)}
                        disableAutoFocus
                        outerContainerId={"notes"}
                        customBurgerIcon={false}
                        customCrossIcon={false}
                    >
                    <Column.Group>
                        <Column size={10} offset={1}>
                            <Search searchNote={searchNote} fetchNotes={fetchNotes}/>
                        </Column>
                    </Column.Group>
                    <List 
                        notes={notes} 
                        selectNote={selectNote} 
                        currentNote={currentNote} 
                        createNote={createNote}
                        deleteNote={deleteNote}
                    />
                </Menu>

                <Column size={12} className="notes-editor" id="notes-editor">
                    <NotesEditor 
                        currentNote={currentNote} 
                        updateNote={updateNote}
                    />
                </Column>
            </Column.Group>
        </>   
    )
}

export default Notes;
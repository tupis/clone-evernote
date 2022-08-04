import { useEffect, useState } from 'react';
import '../../styles/notes.scss'
import { push as Menu } from 'react-burger-menu';
import { Column } from 'rbx';
import NotesServices from '../../services/notes'
import List from './lists/lists'


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
        }
        setCurrentNote(response.data[0])
    }

    const selectNote = (id) => {
        const note = notes.find(note => note._id === id)
        setCurrentNote(note)
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
                            Search...
                        </Column>
                    </Column.Group>
                    <List notes={notes} selectNote={selectNote} currentNote={currentNote} />
                </Menu>

                <Column size={12} className="notes-editor" id="notes-editor">
                    Editor...
                </Column>
            </Column.Group>
        </>   
    )
}

export default Notes;
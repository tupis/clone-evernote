import { Column, Tag, Title, List, Button } from "rbx";
import Moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function ListNotes({ notes, selectNote, currentNote, createNote, deleteNote }) {
    return (
        <>
            <Column.Group breakpoint="mobile">
                <Column size={6} offset={1}>
                    <Title size={6}>
                        {notes.length} Notes
                    </Title>
                </Column>
                <Column size={2}>
                    <Button state="active" color="custom-purple" outlined size="small" onClick={() => createNote('Titulo', 'Body')}>
                        Notes +
                    </Button>
                </Column>
            </Column.Group>

            <List className="notes-list">
                {notes.map((note, key) => (
                    <List.Item key={key} onClick={() => selectNote(note._id)} active={note === currentNote}>
                        <div class='wrapper-text-area'>
                            <Title size={6}>
                                {/*Regex para tirar as tags html*/}
                                {note.title.replace(/(<([^>]+)>)/ig, "").substring(0,15)}
                            </Title>
                            
                            <Title size={6} subtitle spaced={false}>
                                {/*Regex para tirar as tags html*/}
                                {note.body.replace(/(<([^>]+)>)/ig, "").substring(0,30)}
                            </Title>

                            <Column.Group breakpoint="mobile">
                                <Column size={10}>
                                    <Tag color="dark">
                                        {Moment(note.created_at).format('DD/MM')}
                                    </Tag>
                                </Column>
                                <Column size={2}>
                                    <FontAwesomeIcon 
                                        icon={faTrash}
                                        onClick={() => deleteNote(note)}
                                        color="grey"
                                    />
                                </Column>
                            </Column.Group>
                        </div>
                    </List.Item>
                ))}
            </List>
        </>
    )
}

export default ListNotes;
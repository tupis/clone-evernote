import { Column, Tag, Title, List } from "rbx";
import Moment from 'moment';


function ListNotes({ notes, selectNote, currentNote }) {
    return (
        <>
            <Column.Group breakpoint="mobile">
                <Column size={6} offset={1}>
                    <Title size={6}>
                        {notes.length} Notes
                    </Title>
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
                            </Column.Group>
                        </div>
                    </List.Item>
                ))}
            </List>
        </>
    )
}

export default ListNotes;
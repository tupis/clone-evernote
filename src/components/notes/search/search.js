import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Column, Input } from "rbx";
import { useState } from "react";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Search = ({searchNote, fetchNotes}) => {

    const [query, setQuery] = useState('')

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            searchNote(query)
        }
    }

    return (
        <>
            <Column.Group>
                <Column size="9" offset={1}>
                    <Input 
                        type="text"
                        name={query}
                        value={query}
                        placeholder="Search notes..."
                        onChange={e => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </Column>
                <Column mobile={2} size={1}>
                    <a href='#' onClick={() => {
                        fetchNotes()
                        setQuery('')
                    }}>
                        <FontAwesomeIcon 
                            icon={faTimes}
                            color='gray'
                            className="is-pulled-left"
                        />
                    </a>
                </Column>
            </Column.Group>
        </>
    );
}
 
export default Search;
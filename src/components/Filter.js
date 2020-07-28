import React, {useState} from 'react'


export default function Filter(props) {
    const [searchString, setSearchString] = useState('')
    
    let changeHandle = event => {
        setSearchString(event.target.value)
    }

    let submitHandle = event => {
        event.preventDefault()
        props.filterRecords(searchString)
    }


    return(
        <form onSubmit={submitHandle}>
            <input type='search' placeholder='Input filter' onChange={changeHandle}/>
            <button type='submit'>Search</button>
        </form>
    )
}
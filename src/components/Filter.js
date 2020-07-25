import React, {useState} from 'react'


export default function Filter(props) {
    const [searchString, setSearchString] = useState('')
    
    let changeHandle = event => {
        setSearchString(event.target.value)
    }

    let submitHandle = event => {
        console.log(event)
        event.preventDefault()
        props.filterRecords(searchString)
    }

    let resetFilter = event => {
        console.log('reset handler')
    }

    let deepSearchToggle = event => {
        console.log('deep search handler')
    }
    return(
        <form onSubmit={submitHandle}>
            <input type='checkbox' onChange={deepSearchToggle}></input>
            <input type='search' placeholder='Input filter' onChange={changeHandle}/>
            <button type='submit'>Search</button>
            <button onClick={resetFilter}>Reset filters</button>
        </form>
    )
}
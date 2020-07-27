import React from 'react'
import RecordsCount from './RecordsCount'
import Filter from './Filter'

export default function Header(props) {
    let addRecordHandle = event => {
        document.querySelector('.form-wrapper').classList.remove('hidden')
    }
    
    return(
        <nav className=''>
            <h1>Test table</h1>
            <RecordsCount changeRecordsCount={props.changeRecordsCount}/>
            {props.availability && <button className="show-form" onClick={addRecordHandle}>New record</button>}
            <Filter filterRecords={props.filterRecords}/>
        </nav>
    )

}
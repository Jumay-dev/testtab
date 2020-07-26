import React from 'react'

import Filter from './Filter'

export default function Header(props) {
    let addRecordHandle = event => {
        document.querySelector('.form-wrapper').classList.remove('hidden')
    }
    
    return(
        <nav className=''>
            <h1>Test table</h1>
            {props.availability && <button className="show-form" onClick={addRecordHandle}>New record</button>}
            <Filter filterRecords={props.filterRecords}/>
        </nav>
    )

}
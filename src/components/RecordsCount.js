import React from 'react'

export default function RecordsCount(props) {
    let clickHandle = event => {
        props.toggleShowLoader(true)
        let url = new URL('http://www.filltext.com/');
        url.searchParams.append('rows', event.target.dataset.value);
        url.searchParams.append('id', '{number|1000}');
        url.searchParams.append('firstName', '{firstName}');
        url.searchParams.append('lastName', '{lastName}');
        url.searchParams.append('email', '{email}');
        url.searchParams.append('phone', '{phone|(xxx)xxx-xx-xx}');
        url.searchParams.append('address', '{addressObject}');
        url.searchParams.append('description', '{lorem|32}');
        // let spinner = document.querySelector('#spinner')
        fetch(url)
        .then(res => res.json())
        .then(result => {
            props.changeRecordsCount(result);
            document.querySelector('.record-count').classList.add('hidden');
            props.toggleShowLoader(false)
        })
        .catch(console.log);
    }

    return (
        <div className='record-count'>
            <ul>
                <li className=''><button onClick={clickHandle} data-value='32'>32 записи</button></li>
                <li className=''><button onClick={clickHandle} data-value='1000'>1000 записей</button></li>
            </ul>
        </div>
    )
}
import React from 'react'

export default function Info(props) {

    let closeHandle = event => {
        if (event.target.classList.contains('view-info-wrapper') || event.target.classList.contains('close-info')) {
            event.target.closest('.view-info-wrapper').classList.add('hidden');
        }
    }

    const address = props.choosenRecord.address;

    return (
        <div className="view-info-wrapper hidden" onClick={closeHandle}>
        <div className='view-info'>
            <div className='grid-container'>
                <span>Выбран пользователь <b>{props.choosenRecord.firstName + ' ' + props.choosenrecord.lastName}</b></span>
                <span>Описание:</span>
                <span>{props.choosenRecord.description}</span>
                <span>Адрес проживания:</span>
                <span>{address.streetAddress}</span>
                <span>Город:</span>
                <span>{address.city}</span>
                <span>Провинция/штат:</span>
                <span>{address.state}</span>
                <span>Индекс:</span>
                <span>{address.zip}</span>
            </div>
            <span className="close-info">x</span>
        </div>
    </div>
    )
}
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
                    <span>Выбран пользователь <b>{props.choosenRecord.firstName + ' ' + props.choosenRecord.lastName}</b></span>
                    <span>Описание: {props.choosenRecord.description}</span>
                    <span>Адрес проживания: {address.streetAddress}</span>
                    <span>Город: {address.city}</span>
                    <span>Провинция/штат: {address.state}</span>
                    <span>Индекс: {address.zip}</span>
                </div>
                <span className="close-info">x</span>
            </div>
        </div>
    )
}
import React, {useState} from 'react'

export default function NewRecord(props) {

    let submitHandle = event => {
        event.preventDefault();
        let formElems = event.target.elements;

        let emptyElem = Array.prototype.filter.call(formElems, elem => {
            return elem.value === '';
        });

        if (emptyElem.length === 0) {

            let newRecord = {
                id: parseInt(formElems['id'].value),
                firstName: formElems['first-name'].value,
                lastName: formElems['last-name'].value,
                email: formElems['email'].value,
                phone: formElems['phone'].value,
                address: {
                    streetAddress: formElems['street-address'].value,
                    city: formElems['city'].value,
                    state: formElems['state'].value,
                    zip: formElems['zip'].value,
                },
                description: formElems['description'].value
            }
            console.log(newRecord)
            props.addNewRecord(newRecord);
            newRecord = {}
            document.querySelector('.add-new-record').reset();
            document.querySelector('.form-wrapper').classList.add('hidden');
        } else {
            let alrt = document.querySelector('.alert');
            alrt.classList.remove('hidden');
            setTimeout(() => {
                alrt.classList.add('hidden');
            }, 2000);
        }
    }
    
    let clickHandle = event => {
        if (event.target.classList.contains('form-wrapper') || event.target.classList.contains('close-form')) {
            event.target.closest('.form-wrapper').classList.add('hidden');
        }
    }

    return (
        <div className='form-wrapper hidden' onClick={clickHandle}>
            <span className='alert hidden'>Fill each field</span>
            <form className="add-new-record" onSubmit={submitHandle}>
                <label htmlFor="id">ID:</label>
                <input id='id' name='id' type="number" />
                <label htmlFor="first-name">First Name:</label>
                <input id='first-name' name='first-name' type="text" />
                <label htmlFor="last-name">Last Name:</label>
                <input id='last-name' name='last-name' type="text" />
                <label htmlFor="email">Email:</label>
                <input id='email' name='email' type="email" />
                <label htmlFor="phone">Phone:</label>
                <input id='phone' name='phone' type="tel" />
                <label htmlFor="street-address">Street Address:</label>
                <input id='street-address' name='street-address' type="text" />
                <label htmlFor="city">City:</label>
                <input id='city' name='city' type="text" />
                <label htmlFor="state">State:</label>
                <input id='state' name='state' type="text" />
                <label htmlFor="zip">Zip:</label>
                <input id='zip' name='zip' type="text" />
                <label htmlFor="description">Description:</label>
                <textarea id='description' name='description' />

                <button className='send-form' type="submit" value='save'>Save</button>
                <span className="close-form">x</span>
            </form>
        </div>
    )
}
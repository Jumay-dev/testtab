import React from 'react'


export default function TabContent(props) {
    let clickHandle = () => {
        console.log('Here will be element click handler')
    }

    let records = props.records.map((record, index) => {
        const address = record.address;
        const viewAddress = `${address.streetAddress},\n${address.city} ${address.zip}, ${address.state}`;
        return (
            <tr key={index}>
                <td className='id' name='id'>{record.id}</td>
                <td className='first-name' name='first-name'>{record.firstName}</td>
                <td className='last-name' name='last-name'>{record.lastName}</td>
                <td className='email' name='email'>{record.email}</td>
                <td className='phone' name='phone'>{record.phone}</td>
                <td className='address' name='address'>{viewAddress}</td>
                <td className='description' name='description' title={record.description}>{record.description}</td>
            </tr>
        )
    });

    return (
        <tbody onClick={clickHandle}>
            {records}
        </tbody>
    )
}
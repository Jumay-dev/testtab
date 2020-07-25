import React from 'react'

export default function TabHead() {
    let clickHandle = () => {
        console.log('click happened')
    }

    return (
        <tr onClick={clickHandle}>
            <th data-name='id' data-type='number'>ID</th>
            <th data-name='firstName' data-type='string'>First Name</th>
            <th data-name='lastName' data-type='string'>Last Name</th>
            <th data-name='email' data-type='string'>Email</th>
            <th data-name='phone' data-type='string'>Phone</th>
            <th data-name='address' data-type='address'>Address</th>
            <th data-name='description' data-type='string'>Description</th>
        </tr>
    )
}
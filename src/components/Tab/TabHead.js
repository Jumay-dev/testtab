import React from 'react'

export default function TabHead(props) {
    let clickHandle = event => {
        let sortableColumn = event.target;
        Array.prototype.forEach.call(event.currentTarget.children, child => {
            child.classList.remove('ascending')
            child.classList.remove('descending')
        })

        if(!sortableColumn.classList.contains('ascending')) {
            sortableColumn.classList.remove('descending')
            sortableColumn.classList.add('ascending')
        } else {
            sortableColumn.classList.remove('ascending')
            sortableColumn.classList.add('descending')
        }
        props.sortRecords(sortableColumn.dataset.name, sortableColumn.classList.contains('ascending'), sortableColumn.dataset.type)
    }

    return (
        <thead>
            <tr onClick={clickHandle}>
                <th data-name='id' data-type='number'>ID</th>
                <th data-name='firstName' data-type='string'>First Name</th>
                <th data-name='lastName' data-type='string'>Last Name</th>
                <th data-name='email' data-type='string'>Email</th>
                <th data-name='phone' data-type='string'>Phone</th>
                <th data-name='address' data-type='address'>Address</th>
                <th data-name='description' data-type='string'>Description</th>
            </tr>
        </thead>
    )
}
import React, {useState} from 'react'



export default function TabContent(props) {
    // const [recordState, setRecordState] = useState({
    //     id: '',
    //     firstName: ''
    // })

    let clickHandle = event => {
        const choosen = event.target.closest('tr')
        props.chooseRecord({
            id: choosen.children['id'].innerText,
            firstName: choosen.children['first-name'].innerText
        })

        console.log(choosen.children['id'].innerText)
        // props.chooseRecord(recordState)
    }

    let records = props.records.map((record, index) => {
        return (
            <tr key={index}>
                <td className='id' name='id'>{record.id}</td>
                <td className='first-name' name='first-name'>{record.firstName}</td>
                <td className='last-name' name='last-name'>{record.lastName}</td>
                <td className='email' name='email'>{record.email}</td>
                <td className='phone' name='phone'>{record.phone}</td>
            </tr>
        )
    });

    return (
        <tbody onClick={clickHandle}>
            {records}
        </tbody>
    )
}
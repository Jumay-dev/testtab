import React from 'react'
import TabHead from './Tab/TabHead'
import TabContent from './Tab/TabContent'

export default function TabView(props) {

    
    return (
        <table className="react-table">
            <TabHead 
                sortRecords={props.sortRecords} 
            />

            <TabContent 
                records={props.records}
                chooseRecord={props.chooseRecord}
            />
        </table>
    )
}
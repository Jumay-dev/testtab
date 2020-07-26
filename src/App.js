import React, { useEffect, useState } from 'react';
import './App.css';
import TabView from './components/TabView'
import NewRecord from './components/NewRecord'
import Header from './components/Header'
import Loader from './components/Loader'
import Info from './components/Info'

function App() {
  const [records, setRecords] = useState([])
  const [choosenRec, setChoosenRec] = useState({
    id: '',
    firstName: ''
  })

  async function fetchData(source, pagCount) {
    const res = await fetch(source);
    res
      .json()
      .then(res => setRecords(res))
  }

  useEffect(() => {
    fetchData("http://www.filltext.com/?rows=20&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}");
  }, []);

  let sortRecords = (colName, ascending, type) => {
    let currentRecords = records.sort((a, b) => {
      let one = a[colName]
      let two = b[colName]

      if (type === 'string') {
        one = one.toLowerCase()
        two = two.toLowerCase()
      }

      if (type === 'address') {
        one = one.city
        two = two.city
      }
      //тернарный оператор или elseif
      return one > two ? 1 : one === two ? 0 : one < two ? -1 : 0
    }).slice()

    if (!ascending) {
      currentRecords = currentRecords.reverse()
    }

      setRecords(currentRecords)
  }

  //TODO: реализовать deepSearch с рекурсивной функцией поиска по вложенным структурам

  let filterRecords = searchString => {

    let currentRecords = records.filter( record => {
      for (let param in record) {
        if (typeof(record[param]) === 'object') {
          for (let subparam in record[param]) {
            if (record[param][subparam].includes(searchString)) {
              return true
            }
          }
        } else {
          if (record[param].toString().includes(searchString)) {
            return true
          }
        }
      }
      return false
    }).slice()

    setRecords(currentRecords)
  }

  let addNewRecord = record => {
    let currentRecords = records.slice()
    currentRecords.unshift(record)
    setRecords(currentRecords)
    console.log(records)
  }

  let chooseRecord = ({id, firstName}) => {
    const choosenRecord = records.find((item) => {
      if (item.id === parseInt(id) && item.firstName === firstName) {
        return true;
      }
      return false;
    })

    setChoosenRec(choosenRecord)

    document.querySelector('.view-info-wrapper').classList.remove('hidden')
  }

  return (
    <div className="App">
      <Header 
        filterRecords={filterRecords}
        availability={records.length === 0 ? false : true}
      />
      <TabView 
        records={records}
        sortRecords={sortRecords}
        chooseRecord={chooseRecord}
      />
      {/* <Info 
        choosenRecord={choosenRec} 
      /> */}
      <NewRecord 
        addNewRecord={addNewRecord}
      />
      
      
      <Loader 
        visibility={records.length === 0 ? true : false}
      />      
    </div>
  );
}

export default App;

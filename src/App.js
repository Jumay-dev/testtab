import React, { useState } from 'react';
import './App.css';
import TabView from './components/TabView'
import NewRecord from './components/NewRecord'
import Header from './components/Header'
import Loader from './components/Loader'
import Info from './components/Info'
import Pagination from './components/Pagination'

function App() {
  const [records, setRecords] = useState([])
  const [choosenRec, setChoosenRec] = useState({
    id: '',
    firstName: '',
    description: '',
    address: {
      streetAddress: '',
      city: '',
      state: '',
      zip: ''
    },
  })
  const [currentPage, setCurrentPage] = useState(0)
  const [splittedRecords, setSplittedRecords] = useState([])
  const [showLoader, setShowLoader] = useState(false)

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

    setSplittedRecords(splitRecords(currentRecords))
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

    setCurrentPage(0)
    setSplittedRecords(splitRecords(currentRecords))
    setChoosenRec({
      id: '',
      firstName: '',
      description: '',
      address: {
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
      }}
      )
  }


  let changeRecordsCount = records => {
    setRecords(records)
    setSplittedRecords(splitRecords(records))
    setCurrentPage(0)
    setChoosenRec({
      id: '',
      firstName: '',
      description: '',
      address: {
        streetAddress: '',
        city: '',
        state: '',
        zip: ''}
      })
  }

  let addNewRecord = record => {
    let currentRecords = records.slice()
    currentRecords.unshift(record)
    setRecords(currentRecords)
    setSplittedRecords(splitRecords(currentRecords))
    setCurrentPage(0)
  }

  let chooseRecord = r => {
    const choosenRecord = records.find((item) => {
      if (item.id === parseInt(r.id) && item.firstName === r.firstName) {
        return true;
      }
      return false;
    })

    setChoosenRec(choosenRecord)

    document.querySelector('.view-info-wrapper').classList.remove('hidden')
  }

  let splitRecords = records => {
    // debugger
    const size = 50
    let pageList = []
    let itemList = []
    if (records.length > size) {
      records.forEach((item, index) => {
        if ((index + 1) % size === 0) {
          pageList.push(itemList)
          itemList = []
        }
        itemList.push(item)
    })
    } else {
      records.forEach((item) => {
        itemList.push(item)
      })
      pageList.push(itemList)
    }
    return pageList
  }

  let changePage = page => {
    setCurrentPage(page)
  }

  let toggleShowLoader = bool => {
    setShowLoader(bool)
  }


  return (
    <div className="App">
      <Header 
        filterRecords={filterRecords}
        changeRecordsCount={changeRecordsCount}
        availability={records.length === 0 ? false : true}
        toggleShowLoader={toggleShowLoader}
      />

      { splittedRecords.length > 0 ?
      <>
      <Pagination 
          currentPage={currentPage}
          pageCount={splittedRecords.length}
          changePage={changePage}
      />      
      <TabView 
        records={splittedRecords[currentPage]}
        sortRecords={sortRecords}
        chooseRecord={chooseRecord}
      />
      <Pagination 
          currentPage={currentPage}
          pageCount={splittedRecords.length}
          changePage={changePage}
      />
      <Info 
        choosenRecord={choosenRec} 
      />
      <NewRecord 
        addNewRecord={addNewRecord}
      />
      </>
      : <Loader showLoader={showLoader}/>}     
    </div>
  );
}

export default App;

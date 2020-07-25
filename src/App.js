import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
import TabView from './components/TabView'
import Filter from './components/Filter'

function App() {
  const [records, setRecords] = useState([])
  const [hasError, setErrors] = useState(false)

  async function fetchData(source) {
    const res = await fetch(source);
    res
      .json()
      .then(res => setRecords(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}");
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

  function filterRecords(searchString) {

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

  return (
    <div className="App">
      <Filter 
        filterRecords={filterRecords}
      />
      <TabView 
        records={records}
        sortRecords={sortRecords}
      />
      
      <span>Has error {hasError}</span>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
import TabView from './components/TabView'

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
    let currentRecords = records.slice()
    currentRecords.sort((a, b) => {
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

      // if (one > two) {
      //   return 1
      // }

      // if (one === two) {
      //   return 0
      // }

      // if (one < two) {
      //   return -1
      // }

      // return 0
    })

    if (!ascending) {
      currentRecords = currentRecords.reverse()
    }

      setRecords(currentRecords)
  }


  return (
    <div className="App">
      <TabView 
        records={records}
        sortRecords={sortRecords}
      />
      <span>Has error {hasError}</span>
    </div>
  );
}

export default App;

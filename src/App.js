import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
import TabHead from './components/Tab/TabHead'
import TabContent from './components/Tab/TabContent'

function App() {
  const [data, setData] = useState([])
  const [hasError, setErrors] = useState(false)

  async function fetchData(source) {
    const res = await fetch(source);
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}");
  }, []);



  return (
    <div className="App">
      <TabHead />
      <TabContent records={data}/>
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}

export default App;

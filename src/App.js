import React from 'react';
import './App.css';
import TabHead from './components/Tab/TabHead'
import TabContent from './components/Tab/TabContent'

function App() {
  let records = [
    {
      id: 101,
      firstName: 'Sue',
      lastName: 'Corson',
      email: 'DWhalley@in.gov',
      phone: '(612)211-6296',
      address: {
        streetAddress: '9792 Mattis Ct',
        city: 'Waukesha',
        state: 'WI',
        zip: '22178'
      },
      description: 'et lacus magna dolor...',
    },
    {
      id: 102,
      firstName: 'Sue',
      lastName: 'Corson',
      email: 'DWhalley@in.gov',
      phone: '(612)211-6296',
      address: {
        streetAddress: '9792 Mattis Ct',
        city: 'Waukesha',
        state: 'WI',
        zip: '22178'
      },
      description: 'et lacus magna dolor...',
    },
    {
      id: 103,
      firstName: 'Sue',
      lastName: 'Corson',
      email: 'DWhalley@in.gov',
      phone: '(612)211-6296',
      address: {
        streetAddress: '9792 Mattis Ct',
        city: 'Waukesha',
        state: 'WI',
        zip: '22178'
      },
      description: 'et lacus magna dolor...',
    }
  ]

  return (
    <div className="App">
      <TabHead />
      <TabContent records={records}/>
    </div>
  );
}

export default App;

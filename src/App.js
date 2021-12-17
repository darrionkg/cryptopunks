import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import axios from 'axios';
import { useState, useEffect } from 'react'
import PunkList from './components/PunkList.js'
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets/?asset_contract_address=0x9993d5329fCbA4112540ae7d810a5b1314141C30');
      console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    }
    return getMyNfts();
  }, [])

  return (
    <div className="App">
      <Header />
      <Main />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import axios from 'axios';
import { useState, useEffect } from 'react'
import PunkList from './components/PunkList.js'

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
      {/* <CollectionCard id={0} name={'Bandana Punk'} traits={[{'value': 7}]} image="https://ipfs.thirdweb.com/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"/> */}
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;

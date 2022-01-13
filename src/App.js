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
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets/?asset_contract_address=0x9993d5329fCbA4112540ae7d810a5b1314141C30');
      // Remove the extra NFT I added that was missing a property and fixes the order of the NFT collection.
      const newPunkListData = openSeaData.data.assets.filter(punk => punk.id !== 19199595);
      newPunkListData.sort((a, b) => (a.tokenId > b.tokenId ? 1 : -1));
      newPunkListData[4].token_id = 4;
      setPunkListData(newPunkListData);
    }
    return getMyNfts();
  }, [])

  return (
    <div className="App">
      <Header />
        {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
        )}
    </div>
  );
}

export default App;

import React from 'react'
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'

const Main = () => {
  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img
              className='selectedPunk'
              src={'https://ipfs.thirdweb.com/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4'}
              alt=''
            />
          </div>
        </div>
        <div className='punkDetails' style={{ color: '#fff'}}>
          <div className='title'>Bandana Punk</div>
          <span className='itemNumber'>#1</span>
        </div>
        <div className='owner'>
          <div className='ownerImageContainer'>
            <img
                src={'https://ipfs.thirdweb.com/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4'}
                alt=''
            />
          </div>
          <div className='ownerDetails'>
            <div className='ownerNameAndHandle'>
              <div>0xc819E876457Cb117d48dE7B072088d231F2BD4Fe</div>
              <div className='ownerHandle'>@darrionkg</div>
            </div>
            <div className='ownerLink'>
              <img src={instagramLogo} alt='Instagram Logo' />
            </div>
            <div className='ownerLink'>
              <img src={twitterLogo} alt='Twitter Logo' />
            </div>
            <div className='ownerLink'>
              <img src={moreIcon} alt='More Icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main

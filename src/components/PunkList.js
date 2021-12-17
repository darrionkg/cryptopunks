import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

const PunkList = ({ punkListData }) => {

  const newPunkListData = punkListData.filter(punk => punk.id !== 19199595);

  return (
    <div className='punkList'>
      {newPunkListData.map(punk =>
        <div>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      )}
    </div>
  )
}

export default PunkList
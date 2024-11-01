import React from 'react'
import './body.css'

import svetodiod from '../../assets/svetodiod.avif'
import clips from '../../assets/clips.avif'
import charger from '../../assets/charger.avif'
import for_side_mirror from '../../assets/for_side_mirror.avif'


const Body = () => {
  return (
    <div className='body'>
        <img src={svetodiod} alt="" />
        <img src={clips} alt="" />
        <img src={charger} alt="" />
        <img src={for_side_mirror} alt="" />

    </div>
  )
}

export default Body
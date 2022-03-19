import React, { useContext } from 'react'
import './booking.scss'
import {GlobalContext} from '../../../context'
import CardComponent from '../../../utils/card'
import Tabcomponent from '../../../utils/tab/tabcomponent'

function Booking() {
  const data=useContext(GlobalContext)
  console.log("Booking",data)
  return (
    <div className='booking'>
      <Tabcomponent/>
    </div>
  )
}

export default Booking
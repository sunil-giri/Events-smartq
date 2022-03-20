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
      <p className='fw-bold fs-2 text-primary title'>
      Book Your Meal
      </p>
      <Tabcomponent/>
    </div>
  )
}

export default Booking
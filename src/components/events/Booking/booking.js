import React, { useContext } from 'react'
import './booking.scss'
import {GlobalContext} from '../../../context'
import CardComponent from '../../../utils/card'

function Booking() {
  const data=useContext(GlobalContext)
  console.log("Booking",data)
  return (
    <div className='booking'>
      
      {data.value!==null?<CardComponent data={data.value.menu}/>:null}
    </div>
  )
}

export default Booking
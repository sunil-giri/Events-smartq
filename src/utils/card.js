import React from 'react'
import "./card.scss"

function CardComponent({data}) {
  return (
    <div className='main'>
        {data.map((val)=>{
            return <div className='card-grid' id="class-grid" key={val.foodname}>
                <div className='details'>
                    <img src={val.imageurl} alt='food-img'/>
                    <div className='fooddetails'>
                    <p className='fs-4 fw-bold'>{val.foodname}</p>
                    <p className='fs-6'>{val.fooddescription}</p>
                    <p className='fs-6'>{val.category}</p>
                    <button className='btn btn-primary px-2'>Add-ons</button>
                    </div>
                    <p className='text-primary fw-bold fs-4 price'>${val.price}</p>
                </div>
                <div className='formdetails'>
                    <form>
                        <div className='formgroup1'>
                        <label>Quantity</label>
                        <label className='session'>Session</label>
                        <label>Sub Total</label>
                        <input type="text" name="qty" placeholder='Qty'/>
                        <select>
                            <option selected hidden>Select</option>
                            <option>Somethings</option>
                            <option>Something more</option>
                        </select>
                        <input type="text" name="subtotal" placeholder="$0.00"/>
                        
                        <label className='note'>Note to Kitchen</label>
                        <input type="text" className='note-text'/>
                        <button className='btn btn-primary px-3'>Add to Cart</button>
                        </div>
                    </form>
                </div>
            </div>
        })}
    </div>
  )
}

export default CardComponent
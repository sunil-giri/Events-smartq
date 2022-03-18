import React from 'react'
import "./card.scss"

function CardComponent({data}) {
  return (
    <div className='main'>
        {data.map((val)=>{
            return <div className='card-grid' id="class-grid">
                <div className='details'>
                    <img src={val.imageurl} alt='food-img'/>
                    <div className='fooddetails'>
                    <p>{val.foodname}</p>
                    <p>{val.fooddescription}</p>
                    <p>{val.category}</p>
                    <button>Add</button>
                    </div>
                    <p>{val.price}</p>
                </div>
                <div className='formdetails'>
                    <form>
                        <div className='labelformgroup1'>
                        <label>Quantity</label>
                        <label>Session</label>
                        <label>Sub Total</label>
                        </div>
                        <div className='formgroup1'>
                        <input type="text" name="qty" placeholder='Qty'/>
                        <select>
                            <option>Somethings</option>
                            <option>Something more</option>
                        </select>
                        <input type="text" name="subtotal" placeholder="$0.00"/>
                        </div>
                        <div className='labelformgroup2'>
                        <label>Note to Kitchen</label>

                        </div>
                        <div className="formgroup2">
                        <input type="text"/>
                        <button>Add to Cart</button>
                        </div>
                    </form>
                </div>
            </div>
        })}
    </div>
  )
}

export default CardComponent
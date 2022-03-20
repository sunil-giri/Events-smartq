import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import CardComponent from '../card'
import "./tabcomponent.scss"
import searchImage from "../../assets/search-icon.png"

function Tabcomponent() {

    const data=useContext(GlobalContext)

    const handleClick=(e)=>{
        const tabs= document.querySelectorAll('img')
        console.log(tabs,e);
        for(let i=0;i<tabs.length;i++){
            if(tabs[i].classList.length==0)
            continue
            if(e.target.title === tabs[i].classList[0]){
                tabs[i].classList.add('active')
                if(document.querySelector(`.${tabs[i].classList[0]}-p`)!=null){
                document.querySelector(`.${tabs[i].classList[0]}-p`).style.color='blue'
                document.querySelector(`.${tabs[i].classList[0]}-p`).style.opacity=1
            }
        }
        else{
            tabs[i].classList.remove('active')
            if(document.querySelector(`.${tabs[i].classList[0]}-p`)!=null){
                document.querySelector(`.${tabs[i].classList[0]}-p`).style.color='black'
                document.querySelector(`.${tabs[i].classList[0]}-p`).style.opacity=0.5
               }
            }
        }
    }
  return (
    <div className="tab-main">
        <div className='tabs'>
            <div className='tab btn-searched' title='search-item' onClick={handleClick}>
            </div>
            <img className='search-item' src={searchImage} alt="search-icon"/>
            <p className='search-item-p'>Searched Items</p>
            <div className='tab btn-maincourse active' title='pizza-item' onClick={handleClick}>
            </div>
            <img className='pizza-item' src="https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/pizza_1.png" alt="pizza-icon"/>
                <p className='pizza-item-p'>Pizza</p>
            <div className='tab btn-snacks' title='consumable-item' onClick={handleClick}>
            </div>
             <img className='consumable-item' src='https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/restaurant-cutlery.png' alt="consumable-icon"/>   
                <p className='consumable-item-p'>Consumables</p>
            <div className='tab btn-specialmeals' title='decoration-item' onClick={handleClick}>
            </div>
             <img className='decoration-item' src='https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/corporate-event.png' alt="decoration-icon"/>   
                <p className='decoration-item-p'>Decoration</p>
            
        </div>
        <div className='searched'>
            {data.value!==null?<CardComponent data={data.value.menu}  />:null}
            {/* <CardComponent items='searched'/> */}
        </div>
    </div>
  )
}

export default Tabcomponent
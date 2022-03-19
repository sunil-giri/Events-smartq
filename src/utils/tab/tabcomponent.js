import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers'
import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import CardComponent from '../card'
import "./tabcomponent.scss"

function Tabcomponent() {

    const data=useContext(GlobalContext)

    const handleClick=(e)=>{
        const tabs= document.querySelectorAll('.tab')
        console.log(tabs,e);
        for(let i=0;i<tabs.length;i++){
            if(e.target.classList[1] === tabs[i].classList[1]){
                tabs[i].classList.add('active')
            }
            else{
               tabs[i].classList.remove('active')
            }
        }
    }
  return (
    <div className="tab-main">
        <div className='tabs'>
            <button className='tab btn-searched' onClick={handleClick}>Searched Items</button>
            <button className='tab btn-maincourse active' onClick={handleClick}>Pizza</button>
            <button className='tab btn-snacks' onClick={handleClick}>Consumables</button>
            <button className='tab btn-specialmeals' onClick={handleClick}>Decoration</button>
            
        </div>
        <div className='searched'>
            {data.value!==null?<CardComponent data={data.value.menu}  />:null}
            {/* <CardComponent items='searched'/> */}
        </div>
    </div>
  )
}

export default Tabcomponent
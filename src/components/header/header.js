import {BsSearch} from "react-icons/bs"
import React from 'react'
import SmartQLogo from "../../assets/SmartQLogo.png"
import "./header.scss"

function Header(){

    const handleSearch=(e)=>{
        console.log(e.target.value)
    }
    return (
        <>
        <div className='head'>
        <img className='head-img' src={SmartQLogo} alt="SmartQ"/>
        <div className="search">
        <BsSearch className="search-icon"/>
        <input type="text" className='search-input' placeholder='Search' onChange={handleSearch} />
        </div>
        </div>
        </>
    )

}

export default Header
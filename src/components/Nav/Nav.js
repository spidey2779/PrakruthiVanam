import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom';
import{FaShoppingCart} from'react-icons/fa';
import{TbHeartPlus} from'react-icons/tb';
import{BiSolidUserCircle} from'react-icons/bi';
import {HiMenu} from 'react-icons/hi'
import {IoSearch} from 'react-icons/io5'
const Nav = () => {
  return (
    <div className='navMain'>
      <div className="firstnav">
            <div className="part1">
                <h1>PRAKRUTHIVANAM</h1>
            </div>
                       
            <div className="part2">
                
                    <HiMenu className='menuicon'/>
                <div className='searchdiv'>
                    <input type="" placeholder="Search for products"/>
                    <IoSearch className='headericon'/>
                </div>
                <div className="icondiv">
                    <div className="headericonwrapper"><NavLink to="/cart"><FaShoppingCart className='headericon'/></NavLink></div>
                    <div className="iconwrapper"><NavLink><TbHeartPlus className='headericon'/></NavLink></div>
                    <div className="iconwrapper"><NavLink><BiSolidUserCircle className='headericon'/></NavLink></div> 
                </div>
                  
            </div>
        </div>

        <div className="secondnav">
            <ul className="itemlist">
                <li>Home</li>
                <li>Millets</li>
                <li>Oil&Ghee</li>
                <li>Atta&Flour</li>
                <li>Dal&Pulses</li>
                <li>Masala</li>
                <li>Spices</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav

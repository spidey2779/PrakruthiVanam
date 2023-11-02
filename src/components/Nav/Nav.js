import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <div className='navMain'>
      <div className="firstnav">
            <div className="part1">
                <i class="fa-solid fa-bars  menu"></i>
                <h1>PRAKRUTHIVANAM</h1>
            </div>
            <div className='searchdiv'>
                <input type="" placeholder="Search for products"/>
                <i class="fas fa-search search  search" ></i>
            </div>           
            <div className="part2">
               <i class="far fa-heart"></i>
               <i class="fas fa-cart-plus"></i>
               <i class="fas fa-user-circle"></i>
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

import React ,{useState} from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom';
import{FaShoppingCart} from'react-icons/fa';
import{TbHeartPlus} from'react-icons/tb';
import{BiSolidUserCircle } from'react-icons/bi';
import {HiMenu} from 'react-icons/hi'
import {IoSearch} from 'react-icons/io5'
import {ImCross} from 'react-icons/im'
const Nav = () => {
    const [disNone,setDisNone]=useState('disNone')
    const menubarHandler=()=>{
        if(disNone === 'disNone'){
            setDisNone(()=>{
                return ''
            })
        }
        else{
            setDisNone(()=>{
                return 'disNone'
            })
        }
    }
    const backdropHandler=()=>{
        setDisNone(()=>{
            return 'disNone'
        })
    }
  return (
    <div className='navMain'>
      <div className="firstnav">
            <div className="part1">
                <h1>PRAKRUTHIVANAM</h1>
            </div>
                       
            <div className="part2">
                <div className= {`sideBar ${disNone}`}>
                    <div className='sidebarTop'> 
                        <div className='topleftSidebar'>
                            <NavLink><BiSolidUserCircle className='barUsericon'/></NavLink>
                            <div className='topleftSidebarText'>Login</div>
                        </div>
                        <div className='toprightSidebar'>
                            <ImCross className='crossmark' onClick={backdropHandler}/>
                        </div>
                    </div>
                    <div className='sidebarMiddle'>
                        <NavLink className='middlebarChild'>Home</NavLink>
                        <NavLink className='middlebarChild'>All Categories</NavLink>
                        <NavLink className='middlebarChild'>Millets</NavLink>
                        <NavLink className='middlebarChild'>Oil & Ghree</NavLink>
                        <NavLink className='middlebarChild'>Atta & Flour</NavLink>
                        <NavLink className='middlebarChild'>Dal & Pulses</NavLink>
                        <NavLink className='middlebarChild'>Masala</NavLink>
                        <NavLink className='middlebarChild'>Spices</NavLink>
                    </div>
                    <div className='sidebarBottom'>
                        <NavLink className='sidebarBottomChild'>About Us</NavLink>
                        <NavLink className='sidebarBottomChild'>Help & Support</NavLink>
                        <NavLink className='sidebarBottomChild'>Logout</NavLink>
                    </div>
                </div>
                {/* back drop */}
                <div className={`backdrop ${disNone}`} onClick={backdropHandler}></div>
                {/* menu Icon */}
                <HiMenu className='menuicon'onClick={menubarHandler}/>
                <div className='searchdiv'>
                    <input type="" placeholder="Search for products"/>
                    <IoSearch className='headericon'/>
                </div>
                <div className="icondiv">
                    <div className="headericonwrapper cartIconParent"><div className="cartIndicator">20</div><NavLink to="/cart"><FaShoppingCart className='headericon'/></NavLink></div>
                    <div className="headericonwrapper"><NavLink><TbHeartPlus className='headericon'/></NavLink></div>
                    <div className="headericonwrapper"><NavLink><BiSolidUserCircle className='headericon'/></NavLink></div> 
                </div>
                  
            </div>
        </div>

        <div className="secondnav">
            <ul className="itemlist">
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink><li>Millets</li></NavLink>
                <NavLink><li>Oil&Ghee</li></NavLink>
                <NavLink><li>Atta&Flour</li></NavLink>
                <NavLink><li>Dal&Pulses</li></NavLink>
                <NavLink><li>Masala</li></NavLink>
                <NavLink><li>Spices</li></NavLink>
                
                
            </ul>
        </div>
    </div>
  )
}

export default Nav

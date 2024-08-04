import React from 'react'
import logo from '../../assets/dclub@4x.png'
import { TbChartDots3 } from "react-icons/tb";
import {Link} from 'react-router-dom'
const index = () => {
  return (
    <div className='navbar'>
        <div className="inner-nav-container">
            <div className="header-logo">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className="header-options">
                <div className="nav-options">
                    <ul>
                        <li>Project <div className="highlight"></div></li>
                        <Link to='services'><li>Services</li></Link>
                        <Link to='about'><li>About</li></Link>
                        <li>Handbook</li>
                    </ul>
                </div>
                <div className="nav-button">
                    <button className='white-button'>Get a quote</button>
                </div>
                <div  className="nav-slidbar ">
                    <TbChartDots3 className='black-button ' style={{ height:'30px' , width:'30px'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default index
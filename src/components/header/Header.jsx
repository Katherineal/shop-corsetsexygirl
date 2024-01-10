"use client"
import { useState } from 'react';
import '../../styles/components/header.css';
import { Icon } from '../Icon';
import { GiCorset } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";


const Header=()=> {
    return (
        <section className='sectionHeader'>
            <div className='containerHeader'>
                <div className='boxHeader'>
                    <div className='menu'>
                        <a href=""><IoMenuOutline /></a>
                    </div>
                </div>
                <div className='boxHeader'>
                    <div className='logo'>
                        <GiCorset />
                    </div>
                </div>
                <div className='boxHeader'>
                    <div className='info'>
                        <a href=""><IoSearchOutline /></a>
                        <a href=""><IoCartOutline /></a>
                    </div>
                </div>
            </div>
        </section>     
);
}
export default Header;
"use client"
import { useState } from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { GiCorset } from "react-icons/gi";
import '../../styles/components/footer.css';

const Footer=()=> {
    return (
    <section className='sectionFooter' >
        <div className='containerFooter'>
            <div className='itemInfo'>
                <div className='containerImg' >
                    <GiCorset />
                </div> 
            </div>
            <div class="itemInfo">
                
                <div className='textGroup'>
                    <h4>CONSULTAS</h4>
                    <a class="text" href="#">Reembolso</a>
                    <a class="text" href="#">Envío</a>
                    <a class="text" href="#">Contacto</a>
                </div>
            </div>
            <div class="itemInfo">
                
                <div className='textGroup'>
                    <h4>NOSOTROS</h4>
                    <a class="text" href="">Historia de la empresa</a>
                </div>
            </div>
            <div class="itemInfo">
                <div className='textGroup'>
                <h4>SIGUENOS:</h4>
                </div>
                <div className='socials'>
                        <a href="#"><SlSocialInstagram /></a>
                        <a href="#"><SlSocialFacebook /></a>
                        <a href="#"><SlSocialYoutube /></a>
                </div>  
            </div>
        </div>
        <div class="containerFooter2">
            <h5>COPYRIGHT © 2024 CorsetSexyGirl</h5>   
        </div>
    </section>
);
}
export default Footer;
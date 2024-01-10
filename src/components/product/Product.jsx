"use client"
import { useState } from 'react';
import '../../styles/components/product.css';
import { useRouter } from 'next/navigation';

const Product=({img,title,text,price,link})=> {
    return (
        <section className='sectionProduct'>
            <div className='containerProduct'>
                <a href='/productsite' target='_blank'>
                    <div className='imgProduct'>
                        <img src={img}  alt=""></img>
                    </div>
                    <div className='bodyProduct'>
                        <div className='textProduct' >
                            <h2>{title}</h2>
                        </div>
                        <div className='text2Product' >
                            <h3>{text}</h3>
                        </div>
                        <div className='priceProduct'>
                            <h3>{price}</h3>
                        </div>
                    </div>
                </a>
            </div>
            
        </section>
);
}
export default Product;
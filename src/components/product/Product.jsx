"use client"
import { useState } from 'react';
import '../../styles/components/product.css';
import { useRouter } from 'next/navigation';

const Product=({img,title,price})=> {
    return (
        <section className='sectionProduct'>
            <div className='containerProduct'>
                <div className='imgProduct'>
                    <img src={img}  alt=""></img>
                </div>
                <div className='bodyProduct'>
                    <div className='textProduct' >
                        <h2>{title}</h2>
                    </div>
                    <div className='priceProduct'>
                        <h3>{price}</h3>
                    </div>
                    <div className='buttonProduct'>
                        <button type="button" class="custom-btn btn-1">Comprar</button>
                        <button type="button" class="custom-btn btn-1">Lista de deseos</button>
                    </div>
                </div>
            </div>
        </section>
);
}
export default Product;
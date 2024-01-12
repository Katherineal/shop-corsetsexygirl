"use client"
import { useState } from 'react';
import '../../styles/components/details.css';

const Details=({img,title,price,text1,text2})=> {
    return (
    <section className='sectionProductsite' >
        <div className='containerProductsite'>
            <div className='product'>
                <div className='imgProductsite'>
                    <img src={img}></img>
                </div>
                <div className='detailsProductsite'>
                    <h2>{title}</h2>
                    <h3>{price}</h3>
                    <p>{text1}</p>
                    <div className='buttonProduct'>
                        <button type="button" class="custom-btn btn-1">Comprar</button>
                        <button type="button" id='button2' class="custom-btn btn-1">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            <div className='bodyDetails'>
                <h2>Descripción</h2>
                <p>{text2}</p>
            </div>
        </div>
    </section>
);
}
export default Details;
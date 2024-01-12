"use client"
import { useState,useEffect } from 'react'
import Details from '@/components/details/Details'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from "react";
import Accordion from '@/components/accordion/Accordion'

export default function Productsite() {
    const accordionItems = [
        { title: 'Sección 1', content: 'Contenido de la sección 1' },
        { title: 'Sección 2', content: 'Contenido de la sección 2' },
        { title: 'Sección 3', content: 'Contenido de la sección 3' },
    ];
    return (
        <main >
            <div>
                <Header/>
                <Details
                img='https://acdn.mitiendanube.com/stores/697/263/products/corset-underbust-puntas-en-brocato-500-2-web-21-9214ec0a9c6f9a8b0116230790627306-1024-1024.jpg'
                title='Corset bajo busto'
                price='$100.000'
                text1='djaoija,hvkueho'
                text2='bukvjcfgvbhj acero'/>
                <div className='containerAccordion'>
                    <h1>Preguntas frecuentes</h1>
                    <Accordion items={accordionItems} />
                </div>
                <br/>
                <Footer/>
            </div>
        </main>
)
}

"use client"
import React, { useState } from 'react';
import '../../styles/components/navbar.css';
import { useRouter } from 'next/navigation';

const Navbar=()=> {
    const Router=useRouter()
    return (
        <nav className='navbar'>
            <div className='boxHeader'>
                    <div className='logo'>
                        <GiCorset />
                    </div>
                </div>
        <div class="navLinks">
            <ul>
                <li><button onClick={()=>Router.push("/home")} title="home">Home</button></li>
                <li><button onClick={()=>Router.push("/productos")} title="cuentas">Productos</button></li>
                <li><button onClick={()=>Router.push("/preguntas")} title="prestamos">Preguntas frecuentes</button></li>
                <li><button onClick={()=>Router.push("/nosotros")} title="transferencias">Nosotros</button></li>
                <li><button onClick={()=>Router.push("/consultas")} title="transferencias">Consultas</button></li>
            </ul>
        </div>
        </nav>
);
}

export default Navbar;
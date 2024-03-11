import React from 'react';
import Tarjetas from './tarjetas';
import Carrusel from './carrusel';
import Decoradores from './decoradores';

export function Body(){
    return (
        <>
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[70vh] bg-[url("fondo.jpg")]'>
            </div >
            <div className="justify-items-center items-center">
                <Decoradores/>
            </div>
            <section className='my-10 border-4 border-t-0 border-l-0 border-r-0 bg-[#f0efeb] border-b-[#f3bc04]'>
                <div className='montserrat-normal flex flex-col items-center text-[32px] mx-4 md:mx-8 lg:mx-64 '>
                    Algunos de nuestros diseños
                </div>                
                <Carrusel/>
            </section>

            <Tarjetas/>
        </>

    );
}

export default Body;
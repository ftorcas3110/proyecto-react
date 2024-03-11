
'use client';

import { Card } from 'flowbite-react';

function Decoradores() {
  return (
    <>
    <br/>
    <h2 className='grid text-3xl justify-items-center items-center text-[32px] montserrat-normal'>Nuestros diseñadores</h2>
    <br/>
    <div className='grid justify-items-center items-center pt-80px'>        
    <Card className="max-w-sm" imgSrc="kelly.jpeg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Kelly Wearstler
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        
      Kelly Wearstler es una aclamada diseñadora de interiores conocida por su estilo audaz e innovador. Con una combinación única de opulencia y modernismo, crea espacios lujosos pero acogedores a través de colores llamativos, texturas ricas y conceptos de diseño imaginativos, desafiando los límites del diseño convencional para crear entornos cautivadores.      </p>
    </Card>
    </div>
    </>
  );
}


export default Decoradores;
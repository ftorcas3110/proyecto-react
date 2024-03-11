
'use client';

import { Carousel } from 'flowbite-react';

function Carrusel() {
  return (
    <div className="h-56 sm:h-64 xl:h-[60vh] 2xl:h-96 border-4 border-t-[#f3bc04] border-b-[#f3bc04] m-0 p-0">
      <Carousel>
        <img src="carrusel1.jpg" alt="..." />
        <img src="carrusel2.jpg" alt="..." />
        <img src="carrusel3.jpg" alt="..." />
        <img src="carrusel4.jpeg" alt="..." />
      </Carousel>
    </div>
  );
}

export default Carrusel;
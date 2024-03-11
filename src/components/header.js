'use client';

import { Navbar } from 'flowbite-react';

function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="logo.png" className="mr-3 h-6 sm:h-9" alt="Logo.png" />
        <span className="self-center whitespace-nowrap text-xl dark:text-white dancing-script-bold">Luxury Interiors</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Inicio
        </Navbar.Link>
        <Navbar.Link href="#">Servicios</Navbar.Link>
        <Navbar.Link href="#">Precios</Navbar.Link>
        <Navbar.Link href="#">Contacto</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default Header;
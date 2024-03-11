"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsTiktok, BsInstagram, BsTwitter } from "react-icons/bs";

function ComponentFooter() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="text-2xl font-bold text-[#d4af37] dancing-script-bold">
            <Footer.Brand
              href="/"
              src="logo.png"
              alt="Flowbite Logo"
              name="Luxury interiors"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="Acerca de" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Quien somos</Footer.Link>
                <Footer.Link href="#">Nuestros proveedores</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Política de privacidad</Footer.Link>
                <Footer.Link href="#">Terminos y condiciones</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between"></div>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="http://www.facebook.com" icon={BsFacebook} />
          <Footer.Icon href="http://www.instagram.com" icon={BsInstagram} />
          <Footer.Icon href="http://www.twitter.com" icon={BsTwitter} />
          <Footer.Icon href="http://www.tiktok.com" icon={BsTiktok} />
        </div>
      </div>
    </Footer>
  );
}

export default ComponentFooter;

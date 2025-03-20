import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Contact } from "./Contact";

export function Contacts() {
  const [open, setOpen] = useState(false);

  function isMB() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true; // está utilizando celular
    } else {
      return false; // não é celular
    }
  }

  function handleMoreContacts() {
    setOpen((prev) => !prev);
  }

  return (
    <div className="fixed bottom-3 right-3 flex flex-col items-center md:bottom-6 md:right-6 bg-black">
      <div
        className={` relative  flex flex-col justify-end  transition-all ease-in-out duration-500 overflow-hidden md:h-fit md:overflow-auto ${
          open ? "h-[calc(60px*3)] " : "h-12 "
        }`}
      >
        <div className="relative flex flex-col gap-4 justify-end items-center">
          <Contact
            Icon={FaLinkedin}
            href="https://www.linkedin.com/in/gutemberglz/"
          />
          <Contact Icon={FaGithub} href="https://www.github.com/gutemberglz/" />
          <Contact
            Icon={FaWhatsapp}
            href={
              isMB()
                ? "https://api.whatsapp.com/send?phone=5521983042278"
                : "https://web.whatsapp.com/send?phone=5521983042278"
            }
          />
        </div>
      </div>
      <div className="z-30 size-8 fixed mt-[-30px] md:hidden">
        {!open && <IoIosArrowUp fontSize={28} onClick={handleMoreContacts} />}
        {open && <IoIosArrowDown fontSize={28} onClick={handleMoreContacts} />}
      </div>
    </div>
  );
}

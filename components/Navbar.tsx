import { NavbarContext } from '@contexts/NavbarContext'
import Link from 'next/link'
import { useContext, useState } from 'react'

const Navbar = () => {
  const { isOpen, toggleIsOpen } = useContext(NavbarContext)
  return (
    <div
      className={`w-full bg-black text-white px-8 py-4 flex justify-between md:px-14 md:py-10 sticky top-0`}
    >
      <span className="text-2xl md:text-4xl">Reply art</span>
      {isOpen ? (
        <span className="text-2xl md:hidden" onClick={toggleIsOpen}>
          X
        </span>
      ) : (
        <span className="text-2xl md:hidden" onClick={toggleIsOpen}>
          =
        </span>
      )}
      <div className={`fixed top-16 left-0 w-full h-[100vh] bg-black ${isOpen ? 'block' : 'hidden'}`}>
        <ul>
          <li>
            <Link href="/">
              <a>Nuestro trabajo</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Contactanos</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

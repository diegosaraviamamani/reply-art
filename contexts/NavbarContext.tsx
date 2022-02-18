import { createContext, FC, useState } from 'react'

interface INavbarContext {
  isOpen: boolean
  toggleIsOpen?: () => void
}

const defaultState = {
  isOpen: false,
}
export const NavbarContext = createContext<INavbarContext>(defaultState)

export const NavbarProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleIsOpen = () => setIsOpen((isOpen) => !isOpen)

  const state = { isOpen, toggleIsOpen }

  return (
    <NavbarContext.Provider value={state}>{children}</NavbarContext.Provider>
  )
}

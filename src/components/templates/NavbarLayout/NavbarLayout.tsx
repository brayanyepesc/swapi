import React from "react"
import { Navbar } from "../Navbar/Navbar"

export const NavbarLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      { children }
    </>
  )
}
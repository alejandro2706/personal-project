import React from 'react'
import NavbarItem from './NavbarItem'
import '../../styles/components/Navbar/NavbarList.sass'

const NavbarList = () => (
  <ul className='Navbar-list'>
    <NavbarItem
      title='Nosotros'
      route='about'
      className='Navbar-list_item'
    />
    <NavbarItem
      title='Productos'
      route='products'
      className='Navbar-list_item'
    />
    <NavbarItem
      title='Contacto'
      route='contact'
      className='Navbar-list_item'
    />
  </ul>
)

export default NavbarList

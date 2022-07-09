import React from 'react'
import logo from '../assets/img/logo-xbox.svg'

export default function Header() {
  return (
   <header>
      <a href="#" className="logo">
        <img src={logo} alt="Logo Xbox" />
      </a>
      <nav>
        <ul>
          <li><a href="#">visão geral</a></li>
          <li><a href="#">jogos</a></li>
          <li><a href="#">galeria</a></li>
          <li><a href="#">unbox</a></li>      
        </ul>
        <a href="#" className="button">ver disponibilidade</a>
      </nav>
   </header>
  )
}

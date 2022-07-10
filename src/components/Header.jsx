import React from 'react'
import logoP from '../assets/img/logo-xboxP.svg'
import logoG from '../assets/img/logo-xboxG.svg'
export default function Header() {
  return (
   <header>
      <a href="#" className="logo">
        <picture>
          <source media="(min-width: 820px)" srcSet={logoG} />
          <img src={logoP} alt="Logo Xbox" />
        </picture>
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

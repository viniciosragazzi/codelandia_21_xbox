import React from 'react'
import one from '../assets/img/1.png'
import two from '../assets/img/2.png'
import three from '../assets/img/3.png'
import four from '../assets/img/4.png'
export default function SectionThree() {
  return (
   <section className='sectionThree'>
      <img src={one} alt="Farcry6" />
      <img src={two} alt="Forza Horizon" />
      <img src={three} alt="FIFA" />
      <img src={four} alt="Minecraft" />
   </section>
  )
}

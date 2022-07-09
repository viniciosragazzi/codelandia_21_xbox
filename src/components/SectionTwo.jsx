import React from 'react'
import controlexbox from '../assets/img/controle-xbox.png'
export default function SectionTwo() {
  return (
    <section className='sectionTwo'>
        <div className="text">
          <h3>
          <span>Desempenho</span> aperfeiçoado
          </h3>
          <p>
          O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.
          </p>
        </div>
        <div className="imgArea">
            <img src={controlexbox} alt="controle xbox" />
        </div>
    </section>
  )
}

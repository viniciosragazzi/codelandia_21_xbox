import { CaretDown } from "phosphor-react";
import React from "react";

export default function SectionFour() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [itemOpen , setItemOpen] = React.useState('');

  const handleClick = (e) => {
    console.log();
    if(e.target.parentNode.classList.contains('openDiv')){
      e.target.parentNode.classList.remove('openDiv');
    }else{
      e.target.parentNode.classList.add('openDiv');
    }
  }
  return (
    <section className="sectionFour">
      <div className="questions">
        <h2 className="title">
          <span>Perguntas</span> frequentes
        </h2>
        <div className="content">
          <div className="question">
            <div className="questionTitle" onClick={(e) => handleClick(e) }>
              <h4>
                Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?
              </h4>
              <CaretDown size={24} weight="bold" />
            </div>
            <div className="questionContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="question">
            <div className="questionTitle" onClick={(e) => handleClick(e) }>
              <h4>O que está incluído no Xbox Series X?</h4>
              <CaretDown size={24} weight="bold" />
            </div>
            <div className="questionContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="question">
            <div className="questionTitle" onClick={(e) => handleClick(e) }>
              <h4>Como sei se minha TV é compatível com 4K?</h4>
              <CaretDown size={24} weight="bold" />
            </div>
            <div className="questionContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

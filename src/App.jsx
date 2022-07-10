import Header from "./components/Header";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import logoP from './assets/img/logo-xboxP.svg'
import logoG from './assets/img/logo-xboxG.svg'
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>
      <footer>
        <div className="content">
          <a href="#">
          <picture>
          <source media="(min-width: 820px)" srcSet={logoG} />
          <img src={logoP} alt="Logo Xbox" />
        </picture>
          </a>
          <div className="rightFooter">
            <span>© Microsoft 2022</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

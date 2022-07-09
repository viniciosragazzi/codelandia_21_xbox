import Header from "./components/Header";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import logo from './assets/img/logo-xbox.svg'
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
          <img src={logo} alt="Logo Xbox" />
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

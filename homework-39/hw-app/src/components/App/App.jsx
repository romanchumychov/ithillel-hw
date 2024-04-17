import './App.css'
import Header from "../Header/Header.jsx";
import Aside from "../Aside/Aside.jsx";
import Section from "../Section/Section.jsx";

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <div className="container">
          <Aside />
          <Section />
        </div>
      </main>
    </>
  )
}

export default App

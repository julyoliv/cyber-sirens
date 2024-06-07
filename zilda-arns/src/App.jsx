import { React } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Agendamentos from "./pages/Agendamentos.jsx"
import Agendar from "./pages/Agendar.jsx"
import Dependentes from "./pages/AddDependentes.jsx"
import Home from "./pages/Home.jsx"
import Perfil from "./pages/Perfil.jsx"
import Sair from "./pages/MainPage"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Roboto";
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<MainPage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={ <Home /> } />
            <Route path="Perfil" element = { <Perfil /> } />
            <Route path="Dependentes" element = { <Dependentes /> } />
            <Route path="Agendamentos" element = { <Agendamentos /> } />
            <Route path="Agendar" element = { <Agendar /> } />
            <Route path="Sair" element = { <Sair /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;

import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import * as S from "./Style.jsx"
import Telaprincipal from "./Tela principal.jsx"
import Login from "./Login"
import Cadastro from "./Cadastro"
import TelaPrincipal from "./Tela principal"
import Logo from "../src/assets/Logo Zilda Branco.png"
import Imagemmoça from "../src/assets/imagemmoça.png"

function Navegacao() {
    return (
        <BrowserRouter>
        <S.Navegacao>
            <S.Logo src={Logo} alt="Imagem Logo" />
            
            <S.Botoes>     
                                                            
               <S.BotaoLogin><button>Login</button></S.BotaoLogin>
               <S.BotaoCadastro><button>Cadastre-se</button></S.BotaoCadastro>
               
            </S.Botoes>
        </S.Navegacao>
        <Routes>

            <Route path="/" element={<TelaPrincipal />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cadastro" element={<Cadastro />} />
           

        </Routes>


        </BrowserRouter>
        
    )
}

export default Navegacao;
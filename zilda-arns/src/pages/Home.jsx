import React from "react"
import * as S from "../components/Style.jsx"
import { Link } from "react-router-dom"

function Home(){
    return(
        <S.Home>
            <h2>Bem vindo(a) ao portal do paciente</h2>
            <S.AcessoRapido>
            <Link to="/Agendar"> <button>
                    Agendar consulta
                </button></Link>
                <Link to="/Agendamentos"> <button>
                    Minhas consultas
                </button></Link>
                
            </S.AcessoRapido>
            <S.ProxConsultas>
            <p className="ps">Próximas consultas:</p>
            <div>
                <p>Você não possui consultas agendadas.</p>
            </div>
            </S.ProxConsultas>
        </S.Home>
    )
}
export default Home
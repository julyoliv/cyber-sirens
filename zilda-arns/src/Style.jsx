import styled from "styled-components";

export const Navegacao = styled.nav`

font-family: "Roboto";

    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:12px;
    background-color: white;
    border-radius: 5px;
    border:1px solid black;
    
`
export const Logo = styled.img`
width:5vw;

`
//border: solid green;//
export const Botoes = styled.div`
height:60px;
width:40vw;
list-style:none;

display:flex;
justify-content:space-around;
align-items: center;
background-color: white;


`
export const BotaoLogin = styled.button`
font-size:16px;
border: none;
background-color: white;

button {
    font-size:30px;
    background-color:white;
    color: #57BDE7;
    height: 3rem;
    width: 13vw;
    border: none;
    
    border-radius: 45px;
    cursor: pointer;
    
  }
}

`
//border:solid red;//
export const BotaoCadastro = styled.button`
 border: none;
background-color: white;

button {
    font-size:22px;
    background-color: #1F566C;
    color: white;
    height: 4rem;
    width: 14vw;
    border: none;
    
    border-radius: 45px;
    cursor: pointer;
    
  }

`
export const Telaprincipal = styled.main`


`
//border: solid black;//
export const SectionTelaprincipal = styled.section`
background-color:rgba(87, 189, 231, 0.8);
display: flex;
align-items: center;
font-family: "Roboto", cursive;
width: 100vw;
height: 70vh;
a{
    text-decoration: none;
    color: black;}

div{ 

    height: 60vh;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

h1{
    width: 48vw;
    font-size: 1,5rem;
    color:#1F566C;
    text-align: justify;
    
    }


h2{
    color: white;
    font-size: 3rem;
    text-align: justify;
    margin-top: 15px;
    }
 `

export const Imagemmoça = styled.img`
width:50vw
height:50vh                                  ;
`
export const Cadastro = styled.main`
border: solid blue;
`
export const Login = styled.main`
border: solid red;
`
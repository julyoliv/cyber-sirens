import { createGlobalStyle } from 'styled-components'
import React from "react"
import Navegacao from "../src/Navegacao"
import { Telaprincipal } from './Style'


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
       
}
`

function App(){
  return(
    <>
    <GlobalStyle/>
    <Navegacao/>
    
   </>  )
}

export default App;
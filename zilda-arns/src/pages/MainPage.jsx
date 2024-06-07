import React from "react"
import { Link } from "react-router-dom"

function MainPage(){
  return(
    <>
   <h2>Pacient Portal</h2>
   <Link to="/Register">Não possuo uma conta.</Link>
   <Link to="/Login">Já tenho uma conta</Link>
    </>
  )
} 

export default MainPage
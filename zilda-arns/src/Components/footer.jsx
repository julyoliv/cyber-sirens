import React from 'react'
import * as S from './style'
import Lg from "./images/logo-.png"
import Ph from "./images/phone.png"

function Footer () {
  
  return (
    <>   
    <S.Rodape>   
    <S.Container>
    <S.Box>      
            <img src={Lg} alt="Logo" />
            <p><strong>Tecnologia e humanidade unidas pela sua saúde</strong></p>
    </S.Box>

 <S.Box2>
 <p>Entre em contato conosco:  
 <p>
 <S.Img src={Ph} alt="Telefone" />
 <strong>(11) 4002-8922</strong>
 </p></p>
</S.Box2>
</S.Container>

    <S.Box3> 
        <p><hr widht="300px"></hr></p><br />
    <p>Responsável técnico: Cyber Sirens.<br />
    Copyright 2024. Todos os direitos reservados.</p>   
    </S.Box3>


        
                    

    </S.Rodape>     
    
     
    
    
    
    </>
  )
}

export default Footer
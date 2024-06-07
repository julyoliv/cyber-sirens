import styled from "styled-components";

const colors = {
  darkBlue: "#1f566c",
  lightBlue: "#e6f2f7",
  button: "#164A6C",
  errorText: "#FF0000",
  navbarBackground: "#57BDE7",
  alertText: "#155724", 
  alertBackground: "#d4edda" 
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const NavBar1 = styled.nav`
  width: 100%;
  height: 11vh;
  background-color: ${colors.navbarBackground};
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
  }

  img {
    width: 5vw;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40vw;
  padding: 1rem;
  background-color: ${colors.lightBlue};
  color: ${colors.darkBlue};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-weight: bold;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: ${colors.lightBlue};
  color: black;

  h4 {
    margin-bottom: 1rem;
  }

  button {
    background-color: ${colors.button};
    color: white;
    height: 3rem;
    width: 100%;
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 80px;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    height: 2rem;
    width: 100%;
    border: 1px solid ${colors.darkBlue};
    padding: 0.5rem 1rem;
    border-radius: 80px;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.errorText};
  margin-top: 0.5rem;
`;

export const AlertMessage = styled.p`
  color: ${colors.alertText};
  margin-top: 0.5rem;
  background-color: ${colors.alertBackground};
  padding: 0.5rem;
  border-radius: 4px;
`;










export const Navegacao = styled.nav`
    display: flex;
    align-items: center;
    background-color: #57BDE7;
    font-family: "Roboto", sans-serif;

    img{
       height: 5vh;
    }
    .logo{
        height: 10vh;
    }
`
export const Lista = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 10vh;
width: 80vw;
list-style: none;
font-family: "Roboto", sans-serif;

li{
    display: flex;
justify-content: space-evenly;
align-items: center;
}

a{
     text-decoration: none;
    color: black; 
    font-size: 1rem;
}
`
export const Home = styled.main`
text-align: center;
color: #57BDE7;
font-size: 1.5rem;
padding-top: 3rem;
`
export const AcessoRapido = styled.section`
button {
    background-color: #EAF9FF;
    border: 1px solid #B3E6FB;
    border-radius: 0.7rem;
    color: #111827;
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.5rem;
    padding: .75rem 1rem;
    margin: 3rem;
    text-align: center;
  }
  button:hover {
    font-weight: 700;
    cursor: pointer;
  }
`
export const ProxConsultas = styled.section`
color: #000000;
background-color: #F2F2F2;
width: 100vw;
text-align: left;
.ps{
    background-color: #FFFFFF;
    margin-left: 1rem;
}
div{
    border-top: solid grey;
    height:60vh;
    padding: 1rem;
}
`
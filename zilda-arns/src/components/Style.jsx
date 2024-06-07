import styled from "styled-components";

const colors = {
  darkBlue: "#1f566c",
  lightBlue: "#e6f2f7",
  button: "#164A6C",
  errorText: "#FF0000",
  navbarBackground: "#57BDE7",
  alertText: "#155724",
  successText: "#155724",
  successBackground: "#d4edda",
  alertText: "#155724",
  alertBackground: "#d4edda",
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

export const SuccessMessage = styled.p`
  color: ${colors.successText};
  margin-top: 0.5rem;
  background-color: ${colors.successBackground};
  padding: 0.5rem;
  border-radius: 4px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  background-color: #57bde7;
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;

  img {
    height: 5vh;
  }
  .logo {
    height: 10vh;
  }
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  width: 80vw;
  list-style: none;
  font-family: "Roboto", sans-serif;

  li {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
  }
`;

export const Home = styled.main`
  text-align: center;
  color: #57bde7;
  font-size: 1.5rem;
`;
export const FastAccess = styled.section`
  button {
    background-color: #eaf9ff;
    border: 1px solid #b3e6fb;
    border-radius: 0.7rem;
    color: #111827;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
    padding: 0.75rem 1rem;
    margin: 3rem;
    text-align: center;
  }
  button:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;
export const NextApp = styled.section`
  color: #000000;
  background-color: #f2f2f2;
  width: 100vw;
  text-align: left;
  .ps {
    background-color: #ffffff;
    margin-left: 1rem;
  }
  div {
    border-top: solid grey;
    height: 60vh;
    padding: 1rem;
  }
`;

export const Footer = styled.footer`
  background-color: #1f566c;
  color: #ffffff;
  width: 100vw;
`;

export const Container1 = styled.div`
  display: flex;
`;
export const Box = styled.div`
  width: 40rem;
  height: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1.3rem;
`;
export const Box2 = styled.div`
  width: 70rem;
  display: flex;
  align-items: end;
  flex-direction: column;
  font-size: 1rem;
`;
export const Img = styled.img`
  width: 30px;
`;
export const Box3 = styled.div`
  display: block;
  width: 100%;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
`;

export const fone = styled.p`
  font-size: 8rem;
`;

export const Profile = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const NavBar2 = styled.nav`
  font-family: "Roboto";

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
`;

export const Logo = styled.img`
  width: 5vw;
`;

export const Botoes = styled.div`
  height: 60px;
  width: 40vw;
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;
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

`;
//border:solid red;//
export const BotaoCadastro = styled.button`
  border: none;
  background-color: white;

  button {
    font-size: 22px;
    background-color: #1f566c;
    color: white;
    height: 4rem;
    width: 14vw;
    border: none;

    border-radius: 45px;
    cursor: pointer;
  }
`;
export const MainPage = styled.main`
  background-color: rgba(87, 189, 231, 0.8);
  display: flex;
  align-items: center;
  font-family: "Roboto", cursive;
  width: 100vw;
  height: 70vh;
  a {
    text-decoration: none;
    color: black;
  }

  div {
    height: 60vh;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h1 {
    width: 48vw;
    font-size: 1, 5rem;
    color: #1f566c;
    text-align: justify;
  }

  h2 {
    color: white;
    font-size: 3rem;
    text-align: justify;
    margin-top: 15px;
  }
`;

export const MainImg = styled.img`
width:50vw
height:50vh                                  ;
`;
export const Cadastro = styled.main`
  border: solid blue;
`;
export const Login = styled.main`
  border: solid red;
`;

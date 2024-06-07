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

import styled from "styled-components"
import LoginForm from "../components/loginForm/loginForm"
import loginBackground from "../assets/loginBackground.png";


const Wrapper = styled.div`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-image: linear-gradient(to right, rgba(36, 205, 200, .4), rgba(36, 205, 200, .4)), url(${loginBackground});






`
const LoginPage = () => {
  return (
    <Wrapper>
         <LoginForm/>
    </Wrapper>
  )
}

export default LoginPage
import React from "react";
import styled from "styled-components";
import logo from "../assets/WherebnbLogo.png"
import { useNavigate } from "react-router-dom";
import loginimg from "../assets/kakao_login_large_wide.png"

function Login() {
  const navigate = useNavigate()
    const LoginButtonHandler = () => {
            window.open('https://kauth.kakao.com/oauth/authorize?client_id=8047e89d739d21f2f220a5e8df94ddd0&redirect_uri=http://localhost:8081/user/login&response_type=code') 
    }
  return (
    <StLayout>
      <StLoginBox>
        <Stlogo src={logo} alt="logo" />
        <div>
            <Stlogin src={loginimg} alt="loginimg" onClick={() => {LoginButtonHandler()}}/>
        </div>
        <StregisterBtn onClick={()=> {navigate('/')}}>당신의 공간을 웨어비앤비하세요</StregisterBtn>
      </StLoginBox>
    </StLayout>
  );
}

export default Login;
const StLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const StLoginBox = styled.div`
  width: 440px;
  height: 440px;
  display: flex;
  
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border-radius: 18px;
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
`;

const Stlogo = styled.img`
  transform: scale(40%);
`

const Stlogin = styled.img`
    transform: scale(60%);
    cursor: pointer;
`

const StregisterBtn = styled.button`
    all: unset;
    cursor: pointer;
    color: #dedede;
    font-size: 14px;
    &:hover{
        color: black;
    }
`
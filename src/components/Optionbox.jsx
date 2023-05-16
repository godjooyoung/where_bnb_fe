import React from "react";
import { styled } from "styled-components";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Optionbox({ onOption }) {
  const divRef = useRef();

  const navigator = useNavigate()
  const RegisterButtonHandler = () => {
    navigator('/register')
  }
  const LoginButtonHandler = () => {
    navigator('/loginpage')
  }

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      onOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StOption ref={divRef}>
      <div>
        <StOptionBtn onClick={() => {LoginButtonHandler()}}>회원가입</StOptionBtn>
        <StOptionBtn onClick={() => {
            LoginButtonHandler()
        }}>로그인</StOptionBtn>
      </div>
      <hr/>
      <div>
        <StOptionBtn onClick={() => {RegisterButtonHandler()}}>당신의 공간을 웨어비앤비하세요</StOptionBtn>
        <StOptionBtn>도움말</StOptionBtn>
      </div>
    </StOption>
  );
}

export default Optionbox;

const StOption = styled.div`
  background-color: white;
  height: 200px;
  width: 200px;
  position: fixed;
  z-index: 9999;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  transform: translate3d(1130px, 80px, 0);
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-weight: 600;
`;

const StOptionBtn = styled.button`
  all: unset;
  width: 180px;
  height: 43px;
  font-size: 12px;
  padding-left: 20px;
  &:hover{
    background-color: #f7f7f7;
  }
`;

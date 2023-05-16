import React, { useState } from "react";
import kakaoLogin from "../api/user";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { setCookie } from "../cookie/Cookie"
import { styled } from "styled-components";
const OAuth2RedirectHandler = (props) => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();
  // 토근 받아오기

  const [token,setToken] = useState(null)
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/login?code=${code}`
        );
        console.log(res.data)
        const token = res.headers.authorization;
        setCookie("token", token);       
        setCookie("userName", res.data.data);        
 
        window.localStorage.setItem("token", token);
        navigate("/");
      } catch (e) {
        console.error(e);
        navigate("/loginpage");
      }
    })();
  }, []);

  const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  `
  return(
    <Container>
      <div>로그인 중입니다</div>
    </Container>
  )

  // 토큰 보내기
  // useEffect(() => {
  //   if (!token) return; // 토큰이 없으면 실행되지 않음

  //   (async () => {
  //     try {
  //       const res = await axios.post(
  //         `${process.env.REACT_APP_SERVER_URL}/login?code=${code}`,
  //         {
  //           headers: {
  //             Authorization: token,
  //           },
  //         }
  //       );
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, [token]); // 의존성 배열에 token 추가

  // const token = window.localStorage.getItem("token");
  // async () => {
  //   try {
  //     const res = await axios.post(
  //       `${process.env.REACT_APP_SERVER_URL}/login?code=${code}`,
  //       {
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     );
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  

  
};
export default OAuth2RedirectHandler;

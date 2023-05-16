import React, { useState } from "react";
import kakaoLogin from "../api/user";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { setCookie } from "../cookie/Cookie"
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
  

  // const fetchKakaoLogin = () => {
  //   if (code) {
  //     kakaoLogin(code, navigate);
  //   }
  // };

  // const { isLoading, isError, data } = useQuery("KakaoLogin", fetchKakaoLogin, {
  //   enabled: !!code,
  //   onSuccess: (response) => {
  //     const accessToken = response.data.accessToken;
  //     console.log(accessToken)
  //     localStorage.setItem("token", accessToken);
  //     navigate("/");
  //   },
  // });

  // console.log(data)

  // if(isLoading){
  //   return <div>로딩중 입니다....</div>;
  // }

  // if (isError) {
  //   return <div>인증 실패! 다시 시도해주세요.</div>;
  // }

  // if (data) {
  //   navigate("/");
  //   return null; // 필요한 관련 반환 값을 넣으세요
  // }
};
export default OAuth2RedirectHandler;

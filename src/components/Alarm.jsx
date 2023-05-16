import React from "react";
import { styled } from "styled-components";
import { useRef, useEffect } from "react";
import { BiBell } from "react-icons/bi";
import { useQuery } from "react-query";
import { getNotice } from "../api/notice";
import instance from '../api/apiConfig';
import { getCookie } from '../cookie/Cookie';

function Alarm({ onAlarm }) {
  const divRef = useRef();

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      onAlarm(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


let subscribeUrl = `${process.env.REACT_APP_SERVER_URL}/sub`;

 let data = null
if(getCookie("token")){
    console.log("제발 들어와라.....");
    let eventSource = new EventSource(subscribeUrl + "?token=" + getCookie("token"));
    eventSource.addEventListener("notifyLike", function(event) {
        let message = event.data;
        alert(message);
    })
}
  return (
    <StAlarm ref={divRef}>
      <Sttitle>알림</Sttitle>
      <StAlarmboxB>
      {data ? (
        data.map((item) => {
          return (
              <Stlikebox>
                <Stlikeboxtext>
                  {item.userName} 님이 내 '{item.roomName}'
                </Stlikeboxtext>
                <Stlikeboxtext>게시글에 즐겨찾기 하셨습니다.</Stlikeboxtext>
                <Stlikeboxtime>{item.createdAt}</Stlikeboxtime>
              </Stlikebox>
          );
        })
        ) : (
            <StAlarmbox>
          <div>
            <BiBell fontSize={30} />
          </div>
          <div>현재 알림 없음</div>
          <Stsubtext>
            <div>(현재는) 알림이 없습니다.새로운 소식이 있으면</div>
            <div>알려드리겠습니다</div>
          </Stsubtext>
        </StAlarmbox>
      )}
      </StAlarmboxB>
    </StAlarm>
  );
}

export default Alarm;

const StAlarm = styled.div`
  background-color: white;
  height: 600px;
  width: 300px;
  position: fixed;
  z-index: 9999;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  transform: translate3d(1130px, 100px, 0);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;
`;

const Sttitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const StAlarmbox = styled.div`
  font-size: 13px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const Stsubtext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-weight: 400;
`;
const StAlarmboxB = styled.div`
  font-size: 12px;
  height: 520px;
`;
const Stlikebox = styled.div`
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 15px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Stlikeboxtext = styled.div`
  font-weight: 500;
`;
const Stlikeboxtime = styled.div`
  margin-left: 180px;
  color: gray;
`;

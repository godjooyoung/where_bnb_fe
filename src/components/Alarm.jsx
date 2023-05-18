import React, { useState } from "react";
import { styled } from "styled-components";
import { useRef, useEffect } from "react";
import { BiBell } from "react-icons/bi";
import { useQuery } from "react-query";
import { getNotice } from "../api/notice";
import instance from '../api/apiConfig';
import { getCookie } from '../cookie/Cookie';
import { useDataStore } from "../context/DataStore";
import { Container } from "@mui/material";

function Alarm({ onAlarm }) {
  const divRef = useRef();
  const [alarms, setAlarms] = useState([])
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
const data = useDataStore()

  
useEffect(() => {
      setAlarms([...alarms,data])

  },[data])

  return (
    <Containerbox>
    <StAlarm ref={divRef}>
      <Sttitle>알림</Sttitle>
      <StAlarmboxB>
      {alarms[0]?.data?.userName ? (
        alarms.map((item,index) => {
          return (
              <Stlikebox key={index}>
                <Stlikeboxtext>
                  {item.data.userName} 님이 내 {item.data.roomName}
                </Stlikeboxtext>
                <Stlikeboxtext>게시글에 즐겨찾기 하셨습니다.</Stlikeboxtext>
                <Stlikeboxtime>{item.data.createdAt}</Stlikeboxtime>
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
    </Containerbox>
  );
}

export default Alarm;

const Containerbox = styled.div`
    /* background-color: blue; */
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 9999;
    justify-content: end;
    padding-right: 30px;
    padding-top: 100px;

`
const StAlarm = styled.div`
  background-color: white;
  height: 600px;
  width: 300px;
  z-index: 9999;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
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
  /* margin-left: 180px; */
  color: gray;
  width: 230px;
    display: flex;
    justify-content: end;
`;

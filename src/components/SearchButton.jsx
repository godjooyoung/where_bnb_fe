import React, { useState } from "react";
import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { createPortal } from "react-dom";
// 6-8번 ,98-107번 복사해서 가져가시면 됩니다!
// yarn add react-date-range 다운도!
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import RoomInfo from "../components/roomRegiser/registerStepComponent/RoomInfo";
import { useRef } from "react";

function SearchButton({ onClose }) {
  const [checkin, setCheckin] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [guest, setGuest] = useState(false);
  const [color, setColor] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const outside = useRef();

  const checkinbuttonhandler = () => {
    setCheckin(true);
    setColor(true);
    setCheckout(false);
    setGuest(false);
  };
  const checkoutbuttonhandler = () => {
    setCheckout(true);
    setColor(true);
    setCheckin(false);
    setGuest(false);
  };
  const guestbuttonhandler = () => {
    setGuest(true);
    setColor(true);
    setCheckin(false);
    setCheckout(false);
  };
  return createPortal(
    <ModalBG
      ref={outside}
      onClick={(event) => {
        if (event.target === outside.current) onClose(false);
      }}
    >
      <Container>
        <StcontentBtn>
          <div>숙소</div>
          <div>체험</div>
          <div>온라인 체험</div>
        </StcontentBtn>
        <StcateBtn color={color}>
          <Stcheckin
            onClick={() => {
              checkinbuttonhandler();
            }}
          >
            <div>체크인</div>
            <div>날짜 추가</div>
          </Stcheckin>
          <Stcheckout
            onClick={() => {
              checkoutbuttonhandler();
            }}
          >
            <div>체크아웃</div>
            <div>날짜 추가</div>
          </Stcheckout>
          <StGuest
            onClick={() => {
              guestbuttonhandler();
            }}
          >
            <div>
              <div>여행자</div>
              <div>게스트 추가</div>
            </div>
            <StSearch>
              <FaSearch />
              <div>검색</div>
            </StSearch>
          </StGuest>
        </StcateBtn>
        <div>
          {checkin ? (
            <Stmapbox>
              <div>날짜 지정 월 단위 유연한 일정</div>
              <div>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  months={2}
                  direction="horizontal"
                />
              </div>
            </Stmapbox>
          ) : (
            ""
          )}
        </div>
        <div>
          {checkout ? (
            <Stmapbox>
              <div>날짜 지정 월 단위 유연한 일정</div>
              <div>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  months={2}
                  direction="horizontal"
                />
              </div>
            </Stmapbox>
          ) : (
            ""
          )}
        </div>
        <div>
          {guest ? (
            <Stguestbox>
              <div>
                <RoomInfo initOptValue={1} optTitle="성인" type="counter" />
                <RoomInfo initOptValue={1} optTitle="어린이" type="counter" />
                <RoomInfo initOptValue={1} optTitle="유아" type="counter" />
                <RoomInfo initOptValue={1} optTitle="반려동물" type="counter" />
              </div>
            </Stguestbox>
          ) : (
            ""
          )}
        </div>
      </Container>
    </ModalBG>,
    document.getElementById("modal")
  );
}

export default SearchButton;
const ModalBG = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 999;
  transform: translateY(144px);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-144px);
`;

const StcontentBtn = styled.div`
  display: flex;
  align-items: center;
  width: 225px;
  height: 80px;
  justify-content: space-around;
`;
const StcateBtn = styled.div`
  display: flex;
  height: 60px;
  width: 522px;
  align-items: center;
  justify-content: space-between;
  border-radius: 33px;
  border: 1px solid #d8d8d88b;
  background-color: ${(props) => (props.color ? "#d8d8d88b" : "none")};
`;
const Stlocation = styled.button`
  all: unset;
  height: 66px;
  width: 328px;
  border-radius: 33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  font-size: 13px;
  gap: 3px;
  &:hover {
    background-color: #d8d8d8;
  }
  &:focus {
    background-color: white;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;
const Stcheckin = styled.button`
  all: unset;
  height: 60px;
  width: 132px;
  border-radius: 33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  font-size: 13px;
  gap: 3px;
  &:hover {
    background-color: #d8d8d8;
  }
  &:focus {
    background-color: white;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;
const Stcheckout = styled.button`
  all: unset;
  height: 60px;
  width: 132px;
  border-radius: 33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  font-size: 13px;
  gap: 3px;
  &:hover {
    background-color: #d8d8d8;
  }
  &:focus {
    background-color: white;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;
const StGuest = styled.button`
  all: unset;
  height: 60px;
  width: 262px;
  border-radius: 33px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 10px;
  font-size: 13px;
  gap: 3px;
  &:hover {
    background-color: #d8d8d8;
  }
  &:focus {
    background-color: white;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;
const StSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 48px;
  border-radius: 24px;
  background-color: #e00b41;
  gap: 10px;
  color: white;
`;

const Stmapbox = styled.div`
  margin-top: 4px;
  width: 750px;
  height: 449px;
  background-color: white;
  border-radius: 33px;
  padding: 30px 28px 0 44px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
`;

const Stguestbox = styled.div`
  margin-top: 4px;
  margin-left: 120px;
  width: 406px;
  height: 414px;
  background-color: white;
  border-radius: 33px;
  padding: 30px 28px 0 44px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
`;

const locationbox = styled.div``;

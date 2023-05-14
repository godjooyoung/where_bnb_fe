import React, { useState } from "react";
import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
// 6-8번 ,98-107번 복사해서 가져가시면 됩니다!
// yarn add react-date-range 다운도!
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import RoomInfo from "./roomRegiser/RoomInfo";
import { useRef } from "react";
import { CiCalendar } from "react-icons/ci";

function SearchButton({ onClose }) {
  const [checkin, setCheckin] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [guest, setGuest] = useState(false);
  const [color, setColor] = useState(false);
  const [clickdate, setClickdate] = useState(true);
  const [clickrange, setClickrange] = useState(false);
  const [weekend, setWeekend] = useState(false);
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const outside = useRef();

  const checkinbuttonhandler = () => {
    setCheckin(!checkin);
    setColor(true);
    setCheckout(false);
    setGuest(false);
  };
  const checkoutbuttonhandler = () => {
    setCheckout(!checkout);
    setColor(true);
    setCheckin(false);
    setGuest(false);
  };
  const guestbuttonhandler = () => {
    setGuest(!guest);
    setColor(true);
    setCheckin(false);
    setCheckout(false);
  };
  const weekendbuttonhandler = () => {
    setWeekend(true);
    setWeek(false);
    setMonth(false);
  };
  const weekbuttonhandler = () => {
    setWeek(true);
    setWeekend(false);
    setMonth(false);
  };
  const monthbuttonhandler = () => {
    setMonth(true);
    setWeek(false);
    setWeekend(false);
  };
  return (
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
            <div>
              <div>체크인</div>
              <div>날짜 추가</div>
            </div>
          </Stcheckin>
          <Stcheckout
            onClick={() => {
              checkoutbuttonhandler();
            }}
          >
            <div>
              <div>체크아웃</div>
              <div>날짜 추가</div>
            </div>
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
            <Stmapbox clickdate={clickdate}>
              <Daycheckbox>
                <Daycheckboxinner
                  clickdate={clickdate}
                  onClick={() => {
                    setClickdate(true);
                    setClickrange(false);
                  }}
                >
                  날짜 지정
                </Daycheckboxinner>
                <Daycheckboxinner
                  clickrange={clickrange}
                  onClick={() => {
                    setClickdate(false);
                    setClickrange(true);
                  }}
                >
                  유연한 일정
                </Daycheckboxinner>
              </Daycheckbox>
              {clickdate ? (
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
              ) : (
                ""
              )}
              {clickrange ? (
                <Stdaterange>
                  <div>숙박 기간을 선택하세요.</div>
                  <Stselect>
                    <StselectbtnB
                      weekend={weekend}
                      onClick={() => {
                        weekendbuttonhandler();
                      }}
                    >
                      주말
                    </StselectbtnB>
                    <Stselectbtn
                      week={week}
                      onClick={() => {
                        weekbuttonhandler();
                      }}
                    >
                      일주일
                    </Stselectbtn>
                    <StselectbtnC
                      month={month}
                      onClick={() => {
                        monthbuttonhandler();
                      }}
                    >
                      한달
                    </StselectbtnC>
                  </Stselect>
                  <div>여행 날짜를 선택하세요.</div>
                  <StmonthboxList>
                    <Stmonthbox>
                      <div>
                        <CiCalendar fontSize={40} />
                      </div>
                      <div>5월</div>
                      <Styeartext>2023</Styeartext>
                    </Stmonthbox>
                    <Stmonthbox>
                      <div>
                        <CiCalendar fontSize={40} />
                      </div>
                      <div>6월</div>
                      <Styeartext>2023</Styeartext>
                    </Stmonthbox><Stmonthbox>
                      <div>
                        <CiCalendar fontSize={40} />
                      </div>
                      <div>7월</div>
                      <Styeartext>2023</Styeartext>
                    </Stmonthbox>
                  </StmonthboxList>
                </Stdaterange>
              ) : (
                ""
              )}
            </Stmapbox>
          ) : (
            ""
          )}
        </div>
        <div>
        {checkout ? (
            <Stmapbox clickdate={clickdate}>
              <Daycheckbox>
                <Daycheckboxinner
                  clickdate={clickdate}
                  onClick={() => {
                    setClickdate(true);
                    setClickrange(false);
                  }}
                >
                  날짜 지정
                </Daycheckboxinner>
                <Daycheckboxinner
                  clickrange={clickrange}
                  onClick={() => {
                    setClickdate(false);
                    setClickrange(true);
                  }}
                >
                  유연한 일정
                </Daycheckboxinner>
              </Daycheckbox>
              {clickdate ? (
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
              ) : (
                ""
              )}
              {clickrange ? (
                <Stdaterange>
                  <div>숙박 기간을 선택하세요.</div>
                  <Stselect>
                    <StselectbtnB
                      weekend={weekend}
                      onClick={() => {
                        weekendbuttonhandler();
                      }}
                    >
                      주말
                    </StselectbtnB>
                    <Stselectbtn
                      week={week}
                      onClick={() => {
                        weekbuttonhandler();
                      }}
                    >
                      일주일
                    </Stselectbtn>
                    <StselectbtnC
                      month={month}
                      onClick={() => {
                        monthbuttonhandler();
                      }}
                    >
                      한달
                    </StselectbtnC>
                  </Stselect>
                  <div>여행 날짜를 선택하세요.</div>
                  <StmonthboxList>
                    <Stmonthbox>
                      <div>
                        <CiCalendar fontSize={40} />
                      </div>
                      <div>5월</div>
                      <Styeartext>2023</Styeartext>
                    </Stmonthbox>
                    <Stmonthbox>
                      <div>
                        <CiCalendar fontSize={40} />
                      </div>
                      <div>6월</div>
                      <Styeartext>2023</Styeartext>
                    </Stmonthbox><Stmonthbox>
                      <div>
                        <CiCalendar fontSize={40} />
                      </div>
                      <div>7월</div>
                      <Styeartext>2023</Styeartext>
                    </Stmonthbox>
                  </StmonthboxList>
                </Stdaterange>
              ) : (
                ""
              )}
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
    </ModalBG>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-144px);
  width: 100px;
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
  z-index: 999;
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
  gap: 4px;
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
  height: ${(props) => (props.clickdate ? "480px" : "440px")};
  background-color: white;
  border-radius: 33px;
  padding: 30px 28px 0 44px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  z-index: 888;

`;
const Daycheckbox = styled.div`
  background-color: #d8d8d88b;
  width: 220px;
  height: 45px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  font-size: 13px;
  font-weight: 500;
  gap: 10px;
`;
const Daycheckboxinner = styled.button`
  all: unset;
  background-color: ${(props) => (props.clickdate ? "white" : "none")};
  background-color: ${(props) => (props.clickrange ? "white" : "none")};
  width: 100px;
  height: 35px;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;
const Stdaterange = styled.div`
  /* margin-top: 10px; */
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 600px; */
  gap: 25px;
  align-items: center;
  height: 350px;
`;
const Stselect = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 400;
`;
const Stselectbtn = styled.button`
  all: unset;
  width: 70px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  border: ${(props) =>
    props.week ? "1.5px solid black" : "1px solid lightgray;"};
  font-size: 13px;
  cursor: pointer;
  &:hover{
    border: ${(props) =>
    props.week ? "" : "1px solid gray;"};
  }
`;
const StselectbtnB = styled.button`
  all: unset;
  font-size: 13px;
  width: 60px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  border: ${(props) =>
    props.weekend ? "1.5px solid black" : "1px solid lightgray;"};
  cursor: pointer;
  &:hover{
    border: ${(props) =>
    props.weekend ? "" : "1px solid gray;"};
  }
`;
const StselectbtnC = styled.button`
  all: unset;
  font-size: 13px;
  width: 60px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  border: ${(props) =>
    props.month ? "1.5px solid black" : "1px solid lightgray;"};
  cursor: pointer;
  &:hover{
    border: ${(props) =>
    props.month ? "" : "1px solid gray;"};
  }
`;
const Stmonthbox = styled.button`
  border: 1px solid lightgray;
  width: 120px;
  height: 130px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;
const Styeartext = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const StmonthboxList = styled.div`
display: flex;
gap: 10px;
`;

import React, { useState, useContext } from "react";
import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
// 6-8번 ,98-107번 복사해서 가져가시면 됩니다!
// yarn add react-date-range 다운도!
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import RoomInfo from "../components/roomRegiser/registerStepComponent/RoomInfo";
import { useRef } from "react";
import Monthbox from "./Monthbox";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ko from "date-fns/locale/ko";
import { format } from "date-fns";
import axios from "axios";
import { getCookie } from "../cookie/Cookie";
import { SearchContext } from '../providers/SearchContext'

function SearchButton({ onClose }) {
  /**전역 */
  const { updateSearchResults } = useContext(SearchContext);

  const [checkin, setCheckin] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [guest, setGuest] = useState(false);
  const [color, setColor] = useState(false);
  const [clickdate, setClickdate] = useState(true);
  const [clickrange, setClickrange] = useState(false);
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);
  const [filterdata, setFilterdata] = useState({
    checkInDate: "",
    checkOutDate: "",
    adultsNum: 1,
    childrenNum: 1,
    infantExist: false,
    petExist: false,
    flexibleTripLengths: "not_flexible",
    month: [],
  });

  const objectToQueryString = (obj) => {
    let queryString = '';
  
    Object.entries(obj).forEach(([key, value], index) => {
      if (key === 'month' && Array.isArray(value)) {
        queryString += `${key}=${value.join(',')}`;
      } else if (Array.isArray(value)) {
        queryString += value.map((element) => `${key}=${element}`).join('&');
      } else {
        queryString += `${key}=${value}`;
      }
  
      if (index < Object.entries(obj).length - 1) {
        queryString += '&';
      }
    });
  
    return queryString;
  };
    const token = getCookie('token')
  const queryString = objectToQueryString(filterdata);
  const baseUrl = token?`${process.env.REACT_APP_SERVER_URL}/user/main/condition`:`${process.env.REACT_APP_SERVER_URL}/main/condition`;
  const url = `${baseUrl}?${queryString}`;
  console.log(url)

  const [selectedMonths, setSelectedMonths] = useState({});
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const dateSeletedHandler = (date) => {
    const startDate = format(date.selection.startDate, "yyyy-MM-dd");
    const endDate = format(date.selection.endDate, "yyyy-MM-dd");
    setState([date.selection]);

    setFilterdata(
      { ...filterdata,
        checkInDate: startDate,
        checkOutDate: endDate,
        // key: "selection",
      },
    );
  };

  const notflexibleHandler = () => {
    setClickdate(true);
    setClickrange(false);
    setFilterdata(
      { ...filterdata,
        flexibleTripLengths: "not_flexible",
      },
    );
  }

  const outside = useRef();

  const boxListRef = useRef();

  const scrollLeft = () => {
    boxListRef.current.scrollBy({
      top: 0,
      left: -100,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    boxListRef.current.scrollBy({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  const months = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

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
  const flexiblehandler = () => {
    setClickdate(false);
    setClickrange(true);
    setFilterdata(
      { ...filterdata,
        flexibleTripLengths: "one_month",
      },
    );
  }
  const weekbuttonhandler = () => {
    setWeek(true);
    setMonth(false);
    setFilterdata(
      { ...filterdata,
        flexibleTripLengths: "one_week",
      },
    );
  };
  const monthbuttonhandler = () => {
    setMonth(true);
    setWeek(false);
    setFilterdata(
      { ...filterdata,
        flexibleTripLengths: "one_month",
      },
    );
  };

  const onMonthClick = (month) => {
    setSelectedMonths((prevState) => {
      const newState = {
        ...prevState,
        [month]: !prevState[month],
      };
  
      const selectedMonths = Object.keys(newState).filter(
        (selectedMonth) => newState[selectedMonth]
      ).map((selectedMonth) => {
        const selectedMonthNumber = parseInt(selectedMonth, 10);
        return selectedMonthNumber >= 13 ? selectedMonthNumber - 12 : selectedMonthNumber;
      });
  
      setFilterdata({
        ...filterdata,
        month: selectedMonths,
      });
  
      return newState;
    });
  };
  
  

  const getCapacityformData = (x) => {
    // console.log(typeof x.adult, x.kids)
    setFilterdata({
      ...filterdata,
      ...x,

    })
  };


  //  /////////////// 검색 이벤트 시작
  const SearchbuttonHandler = async () => {
    const response = await axios.get(`${url}`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        // 다른 헤더 필드도 추가할 수 있습니다.
      }
    }

    );
    const getfilter = response.data
    console.log(getfilter)
    
    /** 전역 */
    updateSearchResults(getfilter.data)
    
    // const { setgetfilter } = useContext(UrlContext);
    

    onClose(false);
    
    // useEffect(() => {
    //   setgetfilter(getfilter); 
    // }, [getfilter]);
  };
  
  //  /////////////// 검색 이벤트 끝 


  return (
    <>
    

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
            checkin={checkin}
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
            checkout={checkout}
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
            guest={guest}
            onClick={() => {
              guestbuttonhandler();
            }}
          >
            <div>
              <div>여행자</div>
              <div>게스트 추가</div>
            </div>
            <StSearch
              onClick={() => {
                SearchbuttonHandler();
              }}
            >
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
                    notflexibleHandler()
                  }}
                >
                  날짜 지정
                </Daycheckboxinner>
                <Daycheckboxinner
                  clickrange={clickrange}
                  onClick={() => {
                    flexiblehandler()
                  }}
                >
                  유연한 일정
                </Daycheckboxinner>
              </Daycheckbox>
              {clickdate ? (
                <div>
                  <DateRange
                    editableDateInputs={true}
                    onChange={dateSeletedHandler}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    months={2}
                    direction="horizontal"
                    showDateDisplay={false} //선택된 날짜 표시 안함
                    locale={ko}
                    dateDisplayFormat={"yyyy-MM-dd"}
                  />
                </div>
              ) : (
                ""
              )}
              {clickrange ? (
                <Stdaterange>
                  <div>숙박 기간을 선택하세요.</div>
                  <Stselect>
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
                  <MonthSlide>
                    <StButton onClick={scrollLeft} style={{ left: -20 }}>
                      <IoIosArrowBack />
                    </StButton>
                    <StMonthboxList ref={boxListRef}>
                      {months.map((month, index) => (
                        <StSlideContainer
                          key={index}
                          onClick={() => {
                            onMonthClick(month);
                          }}
                        >
                          <Monthbox selected={selectedMonths[month]}>
                            {month >= 13 ? `${month - 12}` : `${month}`}
                          </Monthbox>
                        </StSlideContainer>
                      ))}
                    </StMonthboxList>
                    <StButton onClick={scrollRight} style={{ right: -20 }}>
                      <IoIosArrowForward />
                    </StButton>
                  </MonthSlide>
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
                    notflexibleHandler()
                  }}
                >
                  날짜 지정
                </Daycheckboxinner>
                <Daycheckboxinner
                  clickrange={clickrange}
                  onClick={() => {
                    flexiblehandler()
                    
                  }}
                >
                  유연한 일정
                </Daycheckboxinner>
              </Daycheckbox>
              {clickdate ? (
                <div>
                  <DateRange
                    editableDateInputs={true}
                    onChange={dateSeletedHandler}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    months={2}
                    direction="horizontal"
                    showDateDisplay={false} //선택된 날짜 표시 안함
                    locale={ko}
                    dateDisplayFormat={"yyyy-MM-dd"}
                  />
                </div>
              ) : (
                ""
              )}
              {clickrange ? (
                <Stdaterange>
                  <div>숙박 기간을 선택하세요.</div>
                  <Stselect>
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
                  <MonthSlide>
                    <StButton onClick={scrollLeft} style={{ left: -20 }}>
                      <IoIosArrowBack />
                    </StButton>
                    <StMonthboxList ref={boxListRef}>
                      {months.map((month, index) => (
                        <StSlideContainer
                          key={index}
                          onClick={() => {
                            onMonthClick(month);
                          }}
                        >
                          <Monthbox selected={selectedMonths[month]}>
                            {month >= 13 ? `${month - 12}` : `${month}`}
                          </Monthbox>
                        </StSlideContainer>
                      ))}
                    </StMonthboxList>
                    <StButton onClick={scrollRight} style={{ right: -20 }}>
                      <IoIosArrowForward />
                    </StButton>
                  </MonthSlide>
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
                <RoomInfo
                  initOptValue={1}
                  optTitle="성인"
                  type="counter"
                  dataName="adultsNum"
                  getCapacityformData={getCapacityformData}
                />
                <RoomInfo
                  initOptValue={1}
                  optTitle="어린이"
                  type="counter"
                  dataName="childrenNum"
                  getCapacityformData={getCapacityformData}
                />
                <RoomInfo
                  initOptValue={false}
                  optTitle="유아"
                  type="switch"
                  dataName="infantExist"
                  getCapacityformData={getCapacityformData}
                />
                <RoomInfo
                  initOptValue={false}
                  optTitle="반려동물"
                  type="switch"
                  dataName="petExist"
                  getCapacityformData={getCapacityformData}
                />
              </div>
            </Stguestbox>
          ) : (
            ""
          )}
        </div>
      </Container>
    </ModalBG>
    </>
  );
}

export default SearchButton;
const ModalBG = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 999;
  transform: translateY(145px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-145px);
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
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.checkin ? "none" : "#d8d8d8")};
  }
  background-color: ${(props) => (props.checkin ? "white" : "none")};
  box-shadow: ${(props) =>
    props.checkin ? "0px 3px 10px rgba(0, 0, 0, 0.2);" : "none"};
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
    background-color: ${(props) => (props.checkout ? "none" : "#d8d8d8")};
  }

  background-color: ${(props) => (props.checkout ? "white" : "none")};
  box-shadow: ${(props) =>
    props.checkout ? "0px 3px 10px rgba(0, 0, 0, 0.2);" : "none"};
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
    background-color: ${(props) => (props.guest ? "none" : "#d8d8d8")};
  }

  background-color: ${(props) => (props.guest ? "white" : "none")};
  box-shadow: ${(props) =>
    props.guest ? "0px 3px 10px rgba(0, 0, 0, 0.2);" : "none"};
`;
const StSearch = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 48px;
  border-radius: 24px;
  background-color: #e00b41;
  gap: 10px;
  color: white;
  cursor: pointer;
`;

const Stmapbox = styled.div`
  margin-top: 4px;
  width: 750px;
  height: ${(props) => (props.clickdate ? "450px" : "440px")};
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
  &:hover {
    border: ${(props) => (props.week ? "" : "1px solid gray;")};
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
  &:hover {
    border: ${(props) => (props.month ? "" : "1px solid gray;")};
  }
`;

const StMonthboxList = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
  position: relative;
  width: 700px;
  height: 130px;
  scroll-snap-type: x mandatory;
`;
const StSlideContainer = styled.div`
  display: flex;
  width: 120px;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  flex-shrink: 0;
`;

const StButton = styled.button`
  background-color: white;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
`;
const MonthSlide = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;

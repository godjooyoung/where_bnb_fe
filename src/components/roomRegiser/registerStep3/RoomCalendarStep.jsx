import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { DateRange } from "react-date-range";
import ko from 'date-fns/locale/ko'
import { format } from 'date-fns'
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';

function RoomCalendarStep(props) {
    // 달력 기본 설정
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",

        },
    ]);

    // 선택된 일자를 받아오는 함수
    const dateSeletedHandler = (date) => {
        console.log("넘기는값", format(date.selection.startDate, 'yyyy-MM-dd'))
        console.log("넘기는값", format(date.selection.endDate, 'yyyy-MM-dd'))
        setState([date.selection])
    }

    // 폼 입력이 완료되면 상태값을 부모로 올린다.
    useEffect(() => {
        if(state[0].endDate){
            props.getStepIsDone(true)
        }else{
            props.getStepIsDone(false)
        }
    }, [state])

    return (
        <StepDiv>
            <StepWrapDiv>
                <RoomRegiTitle title="숙박 제공 기간을 선택해주세요." alert="게스트들이 예약 할 수 있는 숙박 제공 기간을 선택해주세요." />
                <div style={{ width: '100%', height: '15px' }}></div>

                <div>
                    <DateRange
                        locale={ko}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={true}
                        ranges={state}
                        months={2}
                        direction="horizontal"
                        onChange={dateSeletedHandler}
                        dateDisplayFormat={'yyyy-MM-dd'} // 날짜 포맷값
                        showSelectionPreview={false} // 상단 선택된 날짜 표현 안하기
                        showDateDisplay={false} //선택된 날짜 표시 안함
                    />
                </div>

            </StepWrapDiv>
        </StepDiv>
    );
}

export const StepDiv = styled.div`
    display: flex;
    justify-content: center;
`
export const StepWrapDiv = styled.div`
    display: block;
    width: 80vw;
`

export default RoomCalendarStep;
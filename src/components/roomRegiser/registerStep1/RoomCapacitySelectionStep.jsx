import React from 'react';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import RoomInfo from '../registerStepComponent/RoomInfo';
import { styled } from 'styled-components';
function RoomCapacitySelectionStep(props) {
    return (
        <StepDiv>
        <StepWrapDiv>
            <RoomRegiTitle title="숙소의 기본 정보를 알려주세요." alert="침대 유형과 같은 세부 사항은 나중에 추가하실 수 있습니다."/>
                <div style={{width:'100%', height:'15px'}}></div>
            <RoomInfo initOptValue={1} optTitle="게스트" type="counter"/>
            <RoomInfo initOptValue={1} optTitle="침실" type="counter"/>
            <RoomInfo initOptValue={1} optTitle="침대" type="counter"/>
            <RoomInfo initOptValue={0.5} optTitle="욕실" type="counter"/>
            <RoomInfo initOptValue={false} optTitle="유아 동반가능" type="switch"/>
            <RoomInfo initOptValue={false} optTitle="애견 동반가능" type="switch"/>
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
export default RoomCapacitySelectionStep;
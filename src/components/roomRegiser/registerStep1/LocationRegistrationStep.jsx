import React from 'react';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import RoomLocationInput from '../registerStepComponent/RoomLocationInput';
import { styled } from 'styled-components';
function LocationRegistrationStep() {
    return (
        <StepDiv>
        <StepWrapDiv>
            <RoomRegiTitle title="숙소의 위치는 어디인가요?" alert="정확한 주소는 게스트의 예약이 확정된 이후 공개됩니다."/>
                <div style={{width:'100%', height:'15px'}}></div>
            <RoomLocationInput/>
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
export default LocationRegistrationStep;
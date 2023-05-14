import React from 'react';
import { styled } from 'styled-components';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import RoomDesc from '../registerStepComponent/RomeDesc'

function DescriptionRegistrationStep(props) {
    return (
        <StepDiv>
        <StepWrapDiv>
        <RoomRegiTitle title="숙소 설명 작성하기" alert="숙소의 특징과 장점을 알려주세요."/>
                <div style={{width:'100%', height:'15px'}}></div>
            <RoomDesc/>
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
export default DescriptionRegistrationStep;

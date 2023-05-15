import React, {useEffect}  from 'react';
import { styled } from 'styled-components';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import RoomName from '../registerStepComponent/RoomName';

function NameRegistrationStep(props) {
    return (
        <StepDiv>
        <StepWrapDiv>
        <RoomRegiTitle title="이제 숙소에 이름을 지어주세요." alert="숙소 이름은 짧을수록 효과적입니다. 나중에 언제든지 변경할 수 있으니, 너무 걱정하지 마세요."/>
                <div style={{width:'100%', height:'15px'}}></div>
            <RoomName/>
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
export default NameRegistrationStep;

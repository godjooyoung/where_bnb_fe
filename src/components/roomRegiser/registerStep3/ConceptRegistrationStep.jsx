import React, {useEffect}  from 'react';
import { styled } from 'styled-components';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import RoomConcept from '../registerStepComponent/RoomConcept';

function ConceptRegistrationStep(props) {
    return (
        <StepDiv>
        <StepWrapDiv>
        <RoomRegiTitle title="이제 숙소에 대해 설명해주세요." alert="숙소의 특징이 잘 드러나는 문구를 최대 2개까지 선택하실 수 있습니다."/>
                <div style={{width:'100%', height:'15px'}}></div>
            {/* <DragDrop/> */}
            <RoomConcept/>
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
export default ConceptRegistrationStep;
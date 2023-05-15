import React, {useEffect}  from 'react';
import { styled } from 'styled-components';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import DragDrop from '../registerStepComponent/DragDrop';

function RoomPhotoUploadStep(props) {
    return (
        <StepDiv>
        <StepWrapDiv>
        <RoomRegiTitle title="숙소 사진 추가하기" alert="숙소 등록을 시작하려면 사진 5장을 제출하셔야 합니다. 나중에 추가하거나 변경하실 수 있습니다."/>
                <div style={{width:'100%', height:'15px'}}></div>
            <DragDrop/>
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
export default RoomPhotoUploadStep;
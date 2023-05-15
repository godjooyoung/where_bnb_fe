import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import DragDrop from '../registerStepComponent/DragDrop';

function RoomPhotoUploadStep(props) {

    // 폼 입력이 완료되면 상태값을 부모로 올린다.
    const [formIsDone, setFormIsDone] = useState(false)
    const getFormIsDone = (x) => {
        setFormIsDone(x)
    }
    useEffect(() => {
        props.getStepIsDone(formIsDone)
    }, [formIsDone])

    // 폼 입력이 이루어지면 입력된 데이터를 부모로 올려준다.
    const getImage = (files) => {
        props.getRegiDataForm(files)
    }

    return (
        <StepDiv>
            <StepWrapDiv>
                <RoomRegiTitle title="숙소 사진 추가하기" alert="숙소 등록을 시작하려면 사진 5장을 제출하셔야 합니다. 나중에 추가하거나 변경하실 수 있습니다." />
                <div style={{ width: '100%', height: '15px' }}></div>
                <DragDrop getFormIsDone={getFormIsDone} getImage={getImage} />
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
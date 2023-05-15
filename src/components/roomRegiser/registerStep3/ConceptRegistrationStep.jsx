import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import RoomConcept from '../registerStepComponent/RoomConcept';

function ConceptRegistrationStep(props) {
    // 폼 입력이 완료되면 상태값을 부모로 올린다.
    const [formIsDone, setFormIsDone] = useState(false)
    const getFormIsDone = (x) => {
        setFormIsDone(x)
    }
    useEffect(() => {
        props.getStepIsDone(formIsDone)
    }, [formIsDone])

    // 폼 입력이 이루어지면 입력된 데이터를 부모로 올려준다.
    const [keywords, setKeywords] = useState({
        keyword1: null,
        keyword2: null
    })
    const getKeywords = (x) => {
        setKeywords({ ...keywords, ...x })
    }
    useEffect(() => {
        props.getRegiData({
            keyword1: keywords.keyword1,
            keyword2: keywords.keyword2
        })
    }, [keywords])

    return (
        <StepDiv>
            <StepWrapDiv>
                <RoomRegiTitle title="이제 숙소에 대해 설명해주세요." alert="숙소의 특징이 잘 드러나는 문구를 최대 2개까지 선택하실 수 있습니다." />
                <div style={{ width: '100%', height: '15px' }}></div>
                <RoomConcept getFormIsDone={getFormIsDone} getKeywords={getKeywords}/>
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
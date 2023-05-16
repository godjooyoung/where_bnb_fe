import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import RoomCost from '../registerStepComponent/RoomCost'

function CostRegistrationStep(props) {
    useEffect(() => {
        props.getStepIsDone(true)
    })

    // 폼 입력이 이루어지면 입력된 데이터를 부모로 올려준다.
    const [price, setPrice] = useState('')
    const getPrice = (x) => {
        setPrice(x)
    }
    useEffect(() => {
        props.getRegiData({ price: price })
    }, [price])


    return (
        <StepDiv>
            <StepWrapDiv>
                <RoomRegiTitle title="마지막 단계입니다! 이제 요금을 설정하세요." alert="언제든지 변경하실 수 있습니다." />
                <div style={{ width: '100%', height: '15px' }}></div>
                <RoomCost getPrice={getPrice}/>
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

export default CostRegistrationStep;
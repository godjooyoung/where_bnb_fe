import React, { useEffect, useState } from 'react';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import RoomLocationInput from '../registerStepComponent/RoomLocationInput';
import { styled } from 'styled-components';
function LocationRegistrationStep(props) {
    
    // 폼 입력이 완료되면 상태값을 부모로 올린다.
    const [formIsDone, setFormIsDone] = useState(false)
    const getFormIsDone = (x) => {
        setFormIsDone(x)
    }
    useEffect(()=>{
        props.getStepIsDone(formIsDone)
    },[formIsDone])

    return (
        <StepDiv>
        <StepWrapDiv>
            <RoomRegiTitle title="숙소의 위치는 어디인가요?" alert="정확한 주소는 게스트의 예약이 확정된 이후 공개됩니다."/>
                <div style={{width:'100%', height:'15px'}}></div>
            <RoomLocationInput getFormIsDone={getFormIsDone}/>
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
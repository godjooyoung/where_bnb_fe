import React from 'react';
import { styled } from 'styled-components';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import { getCookie } from "../../../cookie/Cookie";

function RegiEnd(props) {
    const welcomeTitle = getCookie('userName')+' 님, 축하합니다!'
    
    return (
        <StepDiv>
            <StepWrapDiv>
                <RoomRegiTitle title={welcomeTitle} alert="웨어비앤비 호스트가 되신 것을 진심으로 환영합니다. 숙소 호스팅을 통해 게⁠스⁠트⁠에⁠게 놀⁠라⁠운 경⁠험⁠을 선⁠사⁠하⁠는 데 동⁠참⁠해⁠주⁠셔⁠서 감⁠사⁠합⁠니⁠다." />
                <div style={{ width: '100%', height: '15px' }}></div>
                
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

export default RegiEnd;
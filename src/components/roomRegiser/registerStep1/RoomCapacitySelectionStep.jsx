import React, {useState, useEffect} from 'react';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import RoomInfo from '../registerStepComponent/RoomInfo';
import { styled } from 'styled-components';
function RoomCapacitySelectionStep(props) {
    
    useEffect(()=>{
        props.getStepIsDone(true)
    },[])

    // 폼 입력이 이루어지면 입력된 데이터를 부모로 올려준다.
    const [roomRequestDto, setRoomRequestDto] = useState({
        bathrooomNum : 0.5,
        bedNum : 1,
        bedroomNum :1,
        guestNum : 1,
        infant : false,
        pet : false
    })
    const getCapacityformData = (x) => {
        setRoomRequestDto({...roomRequestDto, ...x})
    }
    useEffect(()=>{
        props.getRegiData(roomRequestDto)
    },[roomRequestDto])

        
    return (
        <StepDiv>
        <StepWrapDiv>
            <RoomRegiTitle title="숙소의 기본 정보를 알려주세요." alert="침대 유형과 같은 세부 사항은 나중에 추가하실 수 있습니다."/>
                <div style={{width:'100%', height:'15px'}}></div>
            <RoomInfo initOptValue={1} optTitle="게스트" type="counter"  dataName="guestNum" getCapacityformData={getCapacityformData}/>
            <RoomInfo initOptValue={1} optTitle="침실" type="counter" dataName="bedroomNum" getCapacityformData={getCapacityformData}/>
            <RoomInfo initOptValue={1} optTitle="침대" type="counter" dataName="bedNum" getCapacityformData={getCapacityformData}/>
            <RoomInfo initOptValue={0.5} optTitle="욕실" type="counter" dataName="bathrooomNum" getCapacityformData={getCapacityformData}/>
            <RoomInfo initOptValue={false} optTitle="유아 동반가능" type="switch" dataName="infant" getCapacityformData={getCapacityformData}/>
            <RoomInfo initOptValue={false} optTitle="애견 동반가능" type="switch" dataName="pet" getCapacityformData={getCapacityformData}/>
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
export default RoomCapacitySelectionStep;
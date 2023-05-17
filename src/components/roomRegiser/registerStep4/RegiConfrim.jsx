import React from 'react';
import { styled } from 'styled-components';
import RoomRegiTitle from '../registerStepComponent/RoomRegiTitle';
import { getCookie } from "../../../cookie/Cookie";

function RegiConfrim(props) {
    const welcomeTitle = getCookie('userName')+' 님, 입력하신 내용을 확인해 주세요.'
    
    return (
        <StepDiv>
            <StepWrapDiv>
                <RoomRegiTitle title={welcomeTitle} alert=" 입력하신 내용을 전체적으로 확인해주세요." />
                <div style={{ width: '100%', height: '15px' }}></div>
                <ConfrimWrap>
                <ConfrimDiv><HeaderSpan>숙소 이름</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.roomName}</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>숙소 설명</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.description}</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>숙소의 위치</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.location}</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>게스트</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.guestNum} 명</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>침실</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.bedroomNum} 개</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>침대</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.bedNum} 개</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>욕실</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.bathrooomNum} 개</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>유아동반</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.infantExist?' 가능':' 불가능'}</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>애견동반</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.petExist?' 가능':' 불가능'}</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>숙소의 특징</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.keyword1}, {props.regiData.roomRequestDto.keyword2}</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>숙박비</HeaderSpan><DetailsSpan>{props.regiData.roomRequestDto.price} /박</DetailsSpan></ConfrimDiv>
                <ConfrimDiv><HeaderSpan>숙박 가능 일자</HeaderSpan>
                    <DetailsSpan>
                        {props.regiData.roomRequestDto.checkInDate}~
                        {props.regiData.roomRequestDto.checkOutDate}
                    </DetailsSpan>
                </ConfrimDiv>
                </ConfrimWrap>
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

export const ConfrimWrap = styled.div`
    display: flex !important;
    flex-direction: column !important;
`
export const ConfrimDiv = styled.div`
    display: flex !important;
    justify-content: space-between !important;
    margin: 15px 0px 0px 0px !important;
`
export const HeaderSpan = styled.span`
    font-size: 20px;
    line-height: 20px;
    color: #717171;
    margin-left: 5px;
    margin-right: 5px;
`
export const DetailsSpan = styled.span`
    margin-left: 5px;
    margin-right: 5px;
`
export default RegiConfrim;
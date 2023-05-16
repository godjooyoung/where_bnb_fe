import React, { useState, useEffect } from 'react';
import { ReactComponent as ExclamationMark } from "../../../assets/svg/exclamationMark.svg"
import { styled } from 'styled-components';
function RoomName(props) {

    const [roomName, setRoomName] = useState('')
    const roomNameOnchangeEventHandler = (e) => {
        setRoomName(e.target.value)
    }
    // 경고메세지 정규식
    const warningMessages = ['32자까지 입력하실 수 있습니다.', '숙소이름에 연속된 특수문자를 입력할 수 없습니다.', '보안을 위해 숙소이름에는 전화번호가 포함될 수 없습니다.', '숙소이름에 이모티콘이 입력되면 안됩니다.']
    const [warningMessage, setWarningMessage] = useState('')
    const roomNameKeyUpEventHandler = (e) => {
        const regexOne = /[!@#$%^&*(),.?":{}|<>]{2,}/g;// 특수문자 연속 입력
        const regexTwo = /\d{10,}/g; //숫자 열자리연속 입력
        const regexThr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; //이모지 입력

        if (roomName.length > 32) {
            setWarningMessage(warningMessages[0])
        } else {
            setWarningMessage('')
        }
        if (regexOne.test(roomName)) {
            setWarningMessage(warningMessages[1])
        }
        if (regexTwo.test(roomName)) {
            setWarningMessage(warningMessages[2])
        }
        if (regexThr.test(roomName)) {
            setWarningMessage(warningMessages[3])
        }
        if (roomName.length === 0) {
            setWarningMessage('')
        }
    }

    // 폼의 값이 변경되면 완료/미완 여부를 부모로 올린다.
    useEffect(() => {
        if (roomName.length === 0) {
            props.getFormIsDone(false)
            props.getRoomName(null)
        } else {
            props.getFormIsDone(true)
            props.getRoomName(roomName)
        }
    }, [roomName])

    return (
        <div>
            <div>
                <TextareaDiv length={roomName.length}>
                    <RoomNameTextarea onKeyUp={roomNameKeyUpEventHandler} onChange={roomNameOnchangeEventHandler} rows="5" autocomplete="off" value={roomName}></RoomNameTextarea>
                </TextareaDiv>
            </div>

            <InsertCheckerWrapDiv>
                <TextAreaInsertCheckerDiv>
                    <span>
                        {roomName.length}/32
                    </span>
                </TextAreaInsertCheckerDiv>
            </InsertCheckerWrapDiv>

            <TextAreaErrorMsgWrap isVisible={warningMessage}>
                <TextAreaErrorMsg>
                    <ErrorSpan>
                        <ExclamationMark color={'#c13515'} />
                    </ErrorSpan>
                    {warningMessage}
                </TextAreaErrorMsg>
            </TextAreaErrorMsgWrap>
        </div>
    );

}


// 텍스트에리어

export const TextareaDiv = styled.div`
    box-shadow: grey 0px 0px 0px 1px inset !important;
    border-radius: 8px !important;

    &:active{
        box-shadow: black 0px 0px 0px 2px inset !important;
    };
    &:focus{
        box-shadow: black 0px 0px 0px 2px inset !important;
    };
    &:target{
        box-shadow: black 0px 0px 0px 2px inset !important;
    }
`
export const RoomNameTextarea = styled.textarea`
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    color: rgb(34, 34, 34) !important;
    display: block !important;
    min-width: 100% !important;
    max-width: 100% !important;
    outline: none !important;
    border: none !important;
    margin: 0px !important;
    box-sizing: border-box !important;
    background-color: transparent !important;
    appearance: none !important;
    resize: vertical !important;
    max-height: 25vh !important;
    min-height: 144px !important;
    padding: 16px !important;
    text-overflow: ellipsis !important;
    font-weight: 400 !important;
    font-size: 18px !important;
    line-height: 28px !important;
    overflow-y: hidden !important;
    border-radius: 8px !important;
`

// 입력글자수
export const InsertCheckerWrapDiv = styled.div`
    -webkit-box-pack: start !important;
    display: flex !important;
    justify-content: flex-start !important;
    padding-top: 16px !important;
    width: 100% !important;
    animation-duration: 600ms !important;
    animation-iteration-count: 1 !important;
    animation-fill-mode: both !important;
`

export const TextAreaInsertCheckerDiv = styled.div`
    font-size: 12px !important;
    line-height: 16px !important;
    font-weight: 800 !important;
    color: rgb(113, 113, 113) !important;
`
// 에러메세지
export const TextAreaErrorMsgWrap = styled.div`
    visibility: initial; 
    visibility: hidden;
    visibility : ${(props) => {
        return props.isVisible ? 'initial' : 'hidden'
    }};
    margin-top: 16px;
    height: 0px;
`
export const TextAreaErrorMsg = styled.div`
    display: flex;
    flex-direction: row;
    color: #c13515;
    font-size: var(--f-cv-j-j-p);
    line-height: var(--f-l-h-bac);
    font-family: var(--e-ls-qkw);
    font-weight: var(--e-y-j-d-v-j);
`
export const ErrorSpan = styled.span`
    margin-right: 8px;
    color: #c13515;
    font-size: var(--f-cv-j-j-p);
    line-height: var(--f-l-h-bac);
    font-family: var(--e-ls-qkw);
    font-weight: var(--e-y-j-d-v-j);
`

export default RoomName;
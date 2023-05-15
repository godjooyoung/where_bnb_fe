import React, { useState, useEffect } from 'react';
import { ReactComponent as ExclamationMark } from "../../../assets/svg/exclamationMark.svg"
import { styled } from 'styled-components';

function RomeDesc(props) {
    const [roomDesc, setRoomDesc] = useState('')
    const roomDescOnchangeEventHandler = (e) => {
        setRoomDesc(e.target.value)
    }
    // 경고메세지 정규식
    const warningMessages = ['500자까지 입력하실 수 있습니다.', '숙소설명에 이모티콘을 포함하실 수 없습니다. 숙소 등록을 계속하려면 이모티콘을 삭제해주세요.']
    const [warningMessage, setWarningMessage] = useState('')
    const roomDescKeyUpEventHandler = (e) => {
        const regexOne = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; //이모지 입력

        if (roomDesc.length > 500) {
            setWarningMessage(warningMessages[0])
        } else {
            setWarningMessage('')
        }
        if (regexOne.test(roomDesc)) {
            setWarningMessage(warningMessages[1])
        }
        if (roomDesc.length === 0) {
            setWarningMessage('')
        }
    }

    // 폼의 값이 변경되면 완료/미완 여부를 부모로 올린다.
    useEffect(() => {
        if (roomDesc.length === 0) {
            props.getFormIsDone(false)
        } else {
            props.getFormIsDone(true)
        }
    }, [roomDesc])

    return (
        <div>
            <div>
                <TextareaDiv length={roomDesc.length}>
                    <RoomNameTextarea onKeyUp={roomDescKeyUpEventHandler} onChange={roomDescOnchangeEventHandler} rows="7" autocomplete="off" value={roomDesc}></RoomNameTextarea>
                </TextareaDiv>
            </div>

            <InsertCheckerWrapDiv>
                <TextAreaInsertCheckerDiv>
                    <span>
                        {roomDesc.length}/500
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


export default RomeDesc;
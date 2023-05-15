import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

function RoomInfo(props) {
    
    // 데이터명
    const dataName = props.dataName
    
    // 초기값
    const [initOptValue, setInitOptValue] = useState(props.initOptValue)
    
    // 변경되는 옵션값
    const [optValue, setOptValue] = useState(props.initOptValue)

    // counter :: 카운터 관련 내부 스테이트
    const [isDisable, setIsDisable] = useState(true)

    // 스위치 관련 내부 스테이트
    const [isWith, setIsWith] = useState(initOptValue) //동반여부

    useEffect(() => {
        if (optValue === initOptValue) {
            setIsDisable(true)
        }
        if (props.type === 'switch') {
            setOptValue(isWith)
        }
    }, [optValue, isWith])

    const [returnObj, setReturnObj] = useState({})
    
    const makeObj = ()=>{
        setReturnObj({...returnObj, [dataName]:optValue})
    }


    //폼 입력이 이루어지면 입력된 데이터를 부모로 올려준다.
    useEffect(() => {
        makeObj()
    }, [optValue])


    useEffect(()=>{
        // returnObj = {bednum :8}
        props.getCapacityformData(returnObj)
    },[returnObj])


    const minusBtnOnclickEvnetHandler = () => {
        setOptValue(optValue - initOptValue)
    }
    const plusBtnOnclickEventHandler = () => {
        setIsDisable(false)
        setOptValue(optValue + initOptValue)
    }

    const switchBtnOnClickEvnentHandler = () => {
        setIsWith(!isWith) //화면에 보이는 값을 바꾼다.
    }
    return (
        <>
            <OptItemWrapDiv>
                <OptItemDiv>
                    <OptWrapDiv>

                        <OptTitleDivWrap>
                            <OptTitleDiv>{props.optTitle}</OptTitleDiv>
                        </OptTitleDivWrap>

                        <OptControllWrap>
                            <OptControll type={props.type}>
                                {props.type === 'counter' ?
                                    <>
                                        <OptBtn type="button" disabled={isDisable} onClick={minusBtnOnclickEvnetHandler}>
                                            <OptControlInnerSpan disabled={isDisable}>
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible' }}><path d="m2 16h28"></path>
                                                </svg>
                                            </OptControlInnerSpan>
                                        </OptBtn>
                                        <OptValueDiv>
                                            <span>
                                                {optValue}
                                            </span>
                                        </OptValueDiv>
                                        <OptBtn type="button" onClick={plusBtnOnclickEventHandler}>
                                            <OptControlInnerSpan>
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible' }}><path d="m2 16h28m-14-14v28"></path>
                                                </svg>
                                            </OptControlInnerSpan>
                                        </OptBtn>
                                    </>
                                    :
                                    <div>
                                        <OptSwitch isWith={isWith} type="button" onClick={switchBtnOnClickEvnentHandler}>
                                            <OptSwitchCircle isWith={isWith}>
                                                {isWith ?
                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible' }}>
                                                        <path fill="none" d="m4 16.5 8 8 16-16"></path>
                                                    </svg> : <></>}
                                            </OptSwitchCircle>
                                        </OptSwitch>
                                    </div>
                                }
                            </OptControll>
                        </OptControllWrap>

                    </OptWrapDiv>
                </OptItemDiv>
            </OptItemWrapDiv>
        </>
    );
}

export const OptItemWrapDiv = styled.div`
    animation-delay: 400ms;
    width: 100% ;
    padding: 8px 0px ;
    border-bottom: 1px solid rgb(235, 235, 235) ;
    animation-duration: 600ms ;
    animation-iteration-count: 1;
    animation-fill-mode: both;
    font-size: 16px;
    line-height: 20px;
`
export const OptItemDiv = styled.div`
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 16px;
    line-height: 20px;
`
export const OptWrapDiv = styled.div`
    display: flex;
    gap: 8px 16px;
    font-size: 16px;
    line-height: 20px;
    color : rgb(34, 34, 34);
    @media screen and (min-width: 375px){
        flex-wrap: unset;
    }

`
export const OptTitleDivWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 1 auto;
    width: 100%;
`
export const OptTitleDiv = styled.div`
    color: var(--f-k-smk-x);
    font-family: var(--e-ls-qkw);
    font-size: var(--iw-ehf-f);
    line-height: var(---s-l-myu);
    font-size: 18px;
    line-height: 24px;
`



export const OptControllWrap = styled.div`
    display: flex;
    -webkit-box-direction: normal !important;
    font-size: 16px !important;
    line-height: 20px !important;
    color: rgb(34, 34, 34) !important;
`
export const OptControll = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 104px;
    height: 32px;
    color: var(--f-k-smk-x);
    font-weight: var(--e-y-j-d-v-j);
    font-size: var(--iw-ehf-f);
    line-height: var(---s-l-myu);
    font-family: var(--e-ls-qkw);
    
    justify-content : ${(props) => {
        return props.type === 'counter' ? 'space-between' : 'center'
    }};
`

export const OptBtn = styled.button`
    cursor: pointer;
    margin: 0;
    padding: 0;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    background: var(--f-mkcy-f);
    border-radius: 50%;
    flex-grow: 0;
    flex-shrink: 0;
    display: inline-block;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: black;
    font-family: inherit;
    outline: none;
    touch-action: manipulation;
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border-color : ${(props) => {
        return props.disabled ? 'var(--d-nc-lt-s)' : 'var(--iw-ihca)'
    }};
    &:hover{
        border-color: ${(props) => {
        return props.disabled ? 'var(--d-nc-lt-s)' : 'var(--f-k-smk-x)'
    }};
    }
`
export const OptControlInnerSpan = styled.span`
    padding: 5px;
    height: 22px;
    width: 22px;
    cursor: not-allowed;
    color: var(--d-nc-lt-s);
    text-align: center;
    font-size: 100%;
    cursor : ${(props) => {
        return props.disabled ? 'not-allowed' : 'pointer'
    }};
    color : ${(props) => {
        return props.disabled ? 'var(--d-nc-lt-s)' : 'var(--fo-jk-r-s)'
    }};
`

export const OptValueDiv = styled.div`
    font-weight: var(--e-y-j-d-v-j);
`
export const OptSwitch = styled.button`
    background-color: var(--iw-ihca);
    border-color: var(--iw-ihca);
    border-radius: 32px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    height: 32px;
    position: relative;
    min-width: 48px;
    width: 48px;
    outline: none;
    writing-mode: horizontal-tb;
    padding: 1px 6px;

    background-color : ${(props) => {
        return props.isWith ? 'var(--f-k-smk-x)' : 'var(--iw-ihca)'
    }};
    border-color : ${(props) => {
        return props.isWith ? 'var(--f-k-smk-x)' : 'var(--iw-ihca)'
    }};
`
export const OptSwitchCircle = styled.div`
    border-color: var(--iw-ihca);
    left: -1px;
    border-radius: 50%;
    border-style: solid;
    transform: translate3d(0,0,0);
    background-color: var(--f-mkcy-f);
    border-width: 2px;
    transition: transform 250ms ease-in-out;
    height: 32px;
    position: absolute;
    top: -1px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-color : ${(props) => {
        return props.isWith ? 'var(--f-k-smk-x)' : ' var(--iw-ihca)'
    }};

    transform : ${(props) => {
        return props.isWith ? 'translate3d(16px,0,0)' : 'translate3d(0,0,0)'
    }};
    color :  ${(props) => {
        return props.isWith ? 'var(--f-k-smk-x);' : ''
    }};


`
export default RoomInfo;
import React, { useState } from 'react';
import { styled } from 'styled-components';
function RoomCost(props) {
    // 초기값
    const [initOptValue, setInitOptValue] = useState(1000)
    
    // 옵션값
    const [optValue, setOptValue] = useState(initOptValue)

    const minusBtnOnclickEvnetHandler = () => {
        if(optValue !== initOptValue){
            setOptValue(optValue - initOptValue)
        }
    }
    const plusBtnOnclickEventHandler = () => {
        setOptValue(optValue + initOptValue)
    }


    return (
        <>
            <WrapDiv>
                <CostWrap>
                    <CostView>
                        {/* common 마이너스 버튼 */}
                        <OptBtn type="button"  onClick={minusBtnOnclickEvnetHandler}>
                            <OptControlInnerSpan >
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible' }}><path d="m2 16h28"></path>
                                </svg>
                            </OptControlInnerSpan>
                        </OptBtn>

                        <CostInputWrap>
                            <InputCostCanvas>
                                <InputCostArea>
                                    <InputLabel htmlFor="undefined-input">
                                        <div>
                                            <InputWrapDiv>
                                                <InputCost pattern="[0-9]*" id="undefined-input" autocomplete="off" type="text" value={"₩"+optValue}/>
                                            </InputWrapDiv>
                                        </div>
                                    </InputLabel>
                                </InputCostArea>
                            </InputCostCanvas>
                        </CostInputWrap>

                        {/* common 플러스 버튼 */}
                        <OptBtn type="button" onClick={plusBtnOnclickEventHandler}>
                            <OptControlInnerSpan>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible' }}><path d="m2 16h28m-14-14v28"></path>
                                </svg>
                            </OptControlInnerSpan>
                        </OptBtn>
                    </CostView>
                    <DaySpan>
                        /박
                    </DaySpan>
                </CostWrap>
            </WrapDiv>
        </>
    );
    
}

// 전체 영역 div
export const WrapDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(247, 247, 247);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    padding: 8px 24px 8px;
    width: 70vw;
`
export const CostWrap = styled.div`
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 12px;
`
export const CostView = styled.div`
    font-weight: var(--e-y-j-d-v-j);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: unset;
    height: unset;
    color: var(--f-k-smk-x);
    font-weight: var(--e-y-j-d-v-j);
    font-size: var(--iw-ehf-f);
    line-height: var(---s-l-myu);
    font-family: var(--e-ls-qkw);
    min-height: unset;
    flex-wrap: wrap;
    gap: 12px 0px;
`
export const InputCostCanvas = styled.div`
    position: relative;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    min-width: 125px;
    max-width: calc(100% - 104px);
`
export const InputCostArea = styled.div`
    position: relative;
    cursor: text;
    display: flex;
    min-height: auto;
    width: 100%;
    margin: 0px;
    border: none;
    color: black;
    height: auto;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
`

export const InputLabel = styled.label`
    position: relative;
    flex: 1 1 0%;
    padding: 0px;
`

export const InputWrapDiv = styled.div`
    display: flex;
    margin-top: 0px;
    border-radius: 8px;
    box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset;
    color: rgb(34, 34, 34);
    background-color: rgb(255, 255, 255);
    margin-left: 8px;
    margin-right: 8px;
    opacity: 1;
`

export const CostInputWrap = styled.div`
    position: relative;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    min-width: 125px;
    max-width: calc(100% - 104px);
    display: flex;
    justify-content: center;
`

// 버튼
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

// 금액 인풋
export const InputCost = styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding: 0px;
    margin: 12px;
    background-color: transparent;
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    text-align: center;
`

// 박 글자
export const DaySpan = styled.span`
    padding-top: 12px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
`
export default RoomCost;
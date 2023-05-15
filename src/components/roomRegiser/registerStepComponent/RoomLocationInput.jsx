import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

function RoomLocationInput(props) {
    // 내부
    const [addr, setAddr] = useState('')
    const [showClearIcon, setShowClearIcon] = useState(false)

    // 주소 입력 이벤트
    const iptOnChangeEventHandler = (e) => {
        setAddr(e.target.value)
    }

    // clearIcon클릭 시 이벤트
    const btnOnClickEventHandler = () => {
        if (addr.length > 0) {
            setAddr('')
        }
    }
    // 입력 시 clearIcon등장
    useEffect(() => {
        if (addr.length) {
            setShowClearIcon(true)
        } else {
            setShowClearIcon(false)
        }
    }, [addr])

    // 폼의 값이 변경되면 완료/미완 여부를 부모로 올린다.
    useEffect(()=>{
        if(addr.length === 0){
            props.getFormIsDone(false)
        }else{
            props.getFormIsDone(true)
        }
    },[addr])

    return (
        <>
            <LocationInputWrapDiv>
                <MapPointeIcon>
                    <div>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}>
                            <path d="M8 .5C4.963.5 2.5 3 2.5 6s1.833 6.084 5.5 9.25C11.666 12.084 13.5 9 13.5 6A5.5 5.5 0 0 0 8 .5zM8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                        </svg>
                    </div>
                </MapPointeIcon>
                <Label for="searchable-address-search">
                    <div>
                        <Input autocomplete="off" type="text" placeholder="주소를 입력하세요." value={addr} onChange={iptOnChangeEventHandler} />
                    </div>
                </Label>
                {showClearIcon ?
                    <ClearButton type="button" class="c1totxbb dir dir-ltr" onClick={btnOnClickEventHandler}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="검색 기록 삭제" role="img" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible' }}>
                            <path d="m6 6 20 20"></path>
                            <path d="m26 6-20 20"></path>
                        </svg>
                    </ClearButton>
                    : <></>}
            </LocationInputWrapDiv>
        </>
    );
}

export const LocationInputWrapDiv = styled.div`
    -webkit-box-align: center;
    position: relative;
    cursor: text;
    display: flex;
    min-height: 48px;
    width: 100%;
    margin: 0px;
    border: none; 
    color: #222222;
    background-color: rgb(255, 255, 255);
    height: unset;
    align-items: center;
    padding: 12px 12px 12px 16px;
    border-radius: 78px;
    box-shadow: 4px 5px 10px -4px gray;
    &:hover{
        box-shadow: inset 0 0 0 2px #222222;
    }
    &:active{
        box-shadow: inset 0 0 0 2px #222222;
    }
    &:focus{
        box-shadow: inset 0 0 0 2px #222222;
    }
`
export const Label = styled.label`
    position: relative;
    flex: 1 1 0%;
    padding: 0px;
`
export const MapPointeIcon = styled.div`
    -webkit-box-align: center;
    display: flex;
    align-items: center;
    padding: 0px;
    max-width: 50%;
    white-space: nowrap;
    margin-right: 8px;   
`
export const ClearButton = styled.button`
    border-radius: 50%;
    border-style: none;
    background-color: #dddddd;
    padding-top: 4px;
    padding-right: 4px;
    padding-left: 4px;
    padding-bottom: 4px;
    color: #717171;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover{
        background-color : #b0b0b0
    }
    &:active{
        background-color : #b0b0b0
    }
    &:focus{
        background-color : #b0b0b0
    }
`
export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding: 0px;
    margin: 0px 8px 0px 0px;
    color: #222222;
    background-color: transparent;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    appearance: none;
    flex: 1 1 0%;
    text-overflow: ellipsis;
`
export default RoomLocationInput;
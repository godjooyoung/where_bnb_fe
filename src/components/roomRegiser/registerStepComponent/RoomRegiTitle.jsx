import React from 'react';
import { styled } from 'styled-components';

function RoomRegiTitle(props) {
    return (
        <>
        <H1>{props.title}</H1>
        <RoomRegiTitleWrapDiv>
            <span>{props.alert}</span>
        </RoomRegiTitleWrapDiv>

        </>
    );
}

export const RoomRegiTitleWrapDiv = styled.div`
    font-size: 16px;
    line-height: 20px;
    color: #717171;
`
export const RoomRegiTitleSpan = styled.span`
    font-size: 16px;
    line-height: 16px;
    color: #717171;
`
export const H1 = styled.h1`
    margin-bottom: 8px;
    font-size: 26px;
    line-height: 30px;
    font-weight: 600;
    overflow-wrap: break-word;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color : #222222;
`
export default RoomRegiTitle;
import React from 'react';
import { styled } from 'styled-components';

function RegiStart(props) {
    const steps = [
    {
        title : '숙소 정보를 알려 주세요.',
        desc : '숙소 위치와 숙박 가능 인원 등 기본 정보를 알려주세요.',
        url : 'https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg',
    },
    {
        title : '숙소를 돋보이게 하세요.',
        desc : '사진을 5장 이상 제출하고, 숙소 이름과 설명을 추가해주시면 숙소가 돋보일 수 있도록 도와드릴게요.',
        url : 'https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg',
    },
    {
        title : '등록을 완료하세요.',
        desc : '간단한 질문에 답을 한 뒤, 숙소 요금을 설정하고 등록을 완료하세요.',
        url : 'https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg',
    },      
    ]

    return (
        <Step>
        <StepWrap>
            <StepH1Wrap>
                <StpeH1>간단하게 웨어비앤비 호스팅을 시작할 수 있습니다.</StpeH1>
            </StepH1Wrap>
            <StepDescWrap>
            {steps.map((step, idx)=>{
                return (
                        <StepDescCanvers>
                            <StepDecsNumWrap>{idx+1}</StepDecsNumWrap>
                            <div sytle={{width: '600px', marginBottom:'30px'}}>
                            <StepDecsTextWrap>
                                    <StepDescTitle>{step.title}</StepDescTitle>
                                    <StepDescSubTitle>{step.desc}</StepDescSubTitle>
                            </StepDecsTextWrap>
                            </div>
                            <StepDescImgWrap>
                                <StepDescImgCanvers>
                                    <StepDecsImg src={step.url}/>
                                </StepDescImgCanvers>
                            </StepDescImgWrap>
                        </StepDescCanvers>
                )
            })}
            </StepDescWrap>
        </StepWrap>
        </Step>
    );
}


export const Step = styled.div`
    margin-top: 88px !important;
    border-top: none !important;
    margin-bottom: 82px !important;
    padding-left: 80px !important;
    padding-right: 80px !important;
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    overflow-y: visible !important;

`
export const StepWrap =styled.div`
    overflow: visible;
    height: auto;
    flex-direction: row;
    justify-content: center;
    display: flex;

`
//타이틀
export const StepH1Wrap = styled.div`
    margin-right: var(--cw-a-a-u-a);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 50vw;
    max-width: 700px;
    height: 500px;
`

export const StpeH1 = styled.h1`
    margin-top: 0;
    font-weight: var(--jx-zk-pv) !important;
    font-size: 56px !important;
    line-height: 64px;
    margin-bottom: var(--jhzm-v-t);
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
    color: #222222;
`

//설명
export const StepDescWrap = styled.div`
    display: flex;
    margin-top: 0;
    width: 50vw;
    max-width: 600px;
    flex-direction: column;
    justify-content: center;
`
export const StepDescCanvers = styled.div`
    padding-top: 35px;
    padding-bottom: var(--kc-t-qr-j);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    max-width: 600px;
    display: flex;
    flex-direction: row;
`
export const StepDecsNumWrap = styled.div `
    padding-right: var(--jaa-ni-h);
    font-size: var(--lhy-d-yl);
    line-height: var(--fme-bf-w);
    color: var(--f-k-smk-x);
    font-weight: var(--jx-zk-pv);
`
export const StepDecsTextWrap = styled.div `
    margin-right: var(--jaa-ni-h);
    margin-right: var(--jaa-ni-h);
    max-width: 448px;
    display: flex;
    flex-direction: column;
`

export const StepDescTitle = styled.h2`
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: var(--f-k-smk-x);
    font-weight: var(--jx-zk-pv);
    font-size: var(--lhy-d-yl);
    line-height: var(--fme-bf-w);
    margin-bottom: var(--fgg-f-l-a);
    margin-top: 0;
`
export const StepDescSubTitle = styled.h3`
    margin: 0;
    font-size: var(--ll-l-ys-f);
    line-height: var(--f-xgviq);
    color: var(--fo-jk-r-s);
    font-weight: var(--e-y-j-d-v-j);
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`


export const StepDescImgWrap = styled.div`
    margin-left: auto;
    margin-top: 0;
`
export const StepDescImgCanvers = styled.div`
    background-position: 50% 50%;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: bottom; 
    height: 120px;
    width: 120px;
    min-height: 1px;
    
`

export const StepDecsImg = styled.img`
    object-fit: cover;
    object-position: center center;
    height: 100%;
    width: 100%;
    position: static;
    vertical-align: bottom;

`
//설명 타이틀
//설명 내용
//설명 이미지

export default RegiStart;
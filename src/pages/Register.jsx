import React, { useState } from 'react';
import { styled } from 'styled-components';
import RegiStart from '../components/roomRegiser/registerStep0/RegiStart'
import RegisterStepOneStart from '../components/roomRegiser/registerStep1/RegisterStepOneStart'
import RegisterStepTwoStart from '../components/roomRegiser/registerStep2/RegisterStepTwoStart'
import RegisterStepThrStart from '../components/roomRegiser/registerStep3/RegisterStepThrStart'
import LocationRegistrationStep from '../components/roomRegiser/registerStep1/LocationRegistrationStep'
import RoomCapacitySelectionStep from '../components/roomRegiser/registerStep1/RoomCapacitySelectionStep'
import RoomPhotoUploadStep from '../components/roomRegiser/registerStep2/RoomPhotoUploadStep'
import NameRegistrationStep from '../components/roomRegiser/registerStep2/NameRegistrationStep'
import DescriptionRegistrationStep from '../components/roomRegiser/registerStep2/DescriptionRegistrationStep'
import ConceptRegistrationStep from '../components/roomRegiser/registerStep3/ConceptRegistrationStep'
import CostRegistrationStep from '../components/roomRegiser/registerStep3/CostRegistrationStep'
function Register() {

    const [prevBtnDisable, setPrevBtnDisable] = useState(false)
    const [nextBtnDisable, setNextBtnDisable] = useState(false)
    const [step, setStep] = useState(0)
    
    const prevStepBtnOnClickEvent = () => {
        if(prevBtnDisable){

        }
    }
        
    const nextStepBtnOnClickEvent = () => {
        if(!nextBtnDisable){
            if(step!==12){
                setStep(step+1)
            }
        }
    }

    return (
        <>
            {/* 등록헤더 */}
            <RegiHeader>
                <div>
                    <span>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32px" height="20.92px" viewBox="0 0 439.000000 287.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,287.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M228 2766 c-97 -51 -178 -140 -178 -195 0 -41 338 -1145 515 -1679 104 -315 146 -394 298 -566 119 -135 309 -248 450 -267 223 -30 531 109 800 361 35 33 70 60 77 60 7 0 49 -33 94 -73 218 -195 389 -292 595 -337 110 -25 159 -25 255 0 171 44 398 215 514 389 89 133 112 194 310 821 287 906 375 1207 376 1282 1 78 -8 92 -118 169 -79 56 -125 64 -169 29 -31 -25 -38 -44 -127 -350 -115 -392 -293 -970 -401 -1302 -87 -266 -109 -321 -160 -407 -39 -67 -77 -116 -118 -153 -160 -144 -278 -145 -493 -1 -86 57 -268 229 -268 253 0 9 42 80 93 156 157 236 241 431 278 644 66 373 -128 689 -481 786 -88 25 -271 25 -360 1 -122 -33 -207 -83 -295 -171 -215 -215 -252 -509 -110 -878 50 -128 110 -238 221 -405 108 -161 108 -155 21 -224 -234 -188 -351 -255 -463 -265 -85 -8 -129 8 -216 79 -76 63 -137 159 -186 294 -23 61 -50 129 -60 150 -21 40 -108 309 -242 743 -45 146 -92 299 -105 340 -13 41 -63 208 -111 369 -47 162 -92 305 -100 316 -28 43 -88 56 -136 31z m2109 -772 c65 -33 117 -94 134 -157 17 -62 6 -219 -20 -297 -51 -151 -227 -454 -260 -448 -41 8 -207 298 -257 448 -24 72 -29 101 -29 190 0 120 13 156 83 224 85 81 234 99 349 40z"/></g></svg>
                    </span>
                </div>
            </RegiHeader>
            
            <RegiContent>
                {step===0?<RegiStart/>:<></>}
                
                {step===1?<RegisterStepOneStart/>:<></>}
                {step===2?<LocationRegistrationStep/>:<></>}
                {step===3?<RoomCapacitySelectionStep/>:<></>}
                
                {step===4?<RegisterStepTwoStart/>:<></>}
                {step===5?<RoomPhotoUploadStep/>:<></>}
                {step===6?<NameRegistrationStep/>:<></>}
                {step===7?<DescriptionRegistrationStep/>:<></>}

                {step===8?<RegisterStepThrStart/>:<></>}
                {step===9?<ConceptRegistrationStep/>:<></>}
                {step===10?<>달력...</>:<></>}
                {step===11?<CostRegistrationStep/>:<></>}
                {step===12?<div>엔딩</div>:<></>}
            </RegiContent>
            
            {/* 등록푸터 */}
            <RegiFooter>
            {/* 등록프로그래스바 */}
            <ProcessBarWrap>
                <Progress>
                    <ProgressValue></ProgressValue>
                </Progress>
                <Progress>
                    <ProgressValue></ProgressValue>
                </Progress>
                <Progress>
                    <ProgressValue></ProgressValue>
                </Progress>
            </ProcessBarWrap>
            {/* 버튼영역 */}
            <RegiButtons>
                <RegiButtonsCanvars>
                    <StepBtnPrev onClick={prevStepBtnOnClickEvent}>뒤로</StepBtnPrev>
                    <StepBtnNext onClick={nextStepBtnOnClickEvent}>다음</StepBtnNext>
                    <StepBtnStart>시작하기</StepBtnStart>
                </RegiButtonsCanvars>
            </RegiButtons> 
            </RegiFooter> 
        </>
    );
}
//헤더
export const RegiHeader = styled.div`
    display: flex;
    gap: 0px;
    padding: 32px 48px 0px;
    position: fixed;
    top: 0px;
    width: 100%;
`
export const RegiContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
`

//푸터
export const RegiFooter =styled.div`
    position: fixed;
    bottom: 0px;
    width: 100%;
`

//프로그래스
export const ProcessBarWrap = styled.div`
    display: flex;
    align-items: center;
    overflow-x: hidden;
    height: 6px;
    background-color: white;
    border-radius: 0px;
`
export const Progress = styled.div`
    overflow-x : hidden;
    height: 6px;
    background-color: #DDDDDD;
    border-radius: 0px;
    flex-grow: 1;
    margin-right: 3px;
`
export const ProgressValue = styled.div`
    overflow-x: hidden;
    height: 6px;
    background-color : #000000;
    border-radius: 0px;
    flex-grow: 1;
    width: 10%;
`
//버튼
export const RegiButtonsCanvars = styled.div`
    display: flex;
    width: 100%;
    margin-left: 1vh;
    margin-right : 1vh;
    /* 버튼 한개일때 */
    justify-content: flex-end;
    /* 버튼 두개일때 */
    /* justify-content: space-between; */
    
`
export const RegiButtons = styled.div`
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
`
//버튼
export const StepBtnPrev = styled.button`
    border-radius: var(--go-h-jh-l);
    border-width: 1px;
    border-style: solid;
    transition: box-shadow 0.2s ease,transform 0.1s ease;
    border: none;
    background: transparent;
    margin-left: -10px;
    margin-right: -10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
    cursor: pointer;
    margin: 0;
    text-align: center;
    font-size: var(--iw-ehf-f);
    line-height: var(---s-l-myu);
    font-weight: var(--jx-zk-pv);
    outline: none;
    color: var(--f-k-smk-x);
    text-decoration: underline;
    
    &:hover {
    border: none;
    background: var(---pc-g-v-g);
    }

    &:active {
    border: none;
    background: var(---pc-g-v-g);
    transform: scale(0.96);
    }
`
export const StepBtnNext = styled.button`
    padding-left: 32px !important;
    padding-right: 32px !important;
    cursor: pointer !important;
    display: inline-block !important;
    margin: 0px !important;
    position: relative !important;
    text-align: center !important;
    text-decoration: none !important;
    width: auto !important;
    touch-action: manipulation !important;
    font-family: var(--e-ls-qkw) !important;
    font-size: var(--iw-ehf-f) !important;
    line-height: var(---s-l-myu) !important;
    font-weight: var(--jx-zk-pv) !important;
    border-radius: var(--go-h-jh-l) !important;
    outline: none !important;
    padding: 14px 28px !important;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
    -webkit-tap-highlight-color: transparent !important;
    border: none !important;
    background: var(--f-k-smk-x) !important;
    color: var(--f-mkcy-f) !important;
    contain: paint !important;

    &:hover {
    border: none !important;
    background: var(--bgxgx) !important;
    color: var(--f-mkcy-f) !important;
    }

    &:active {
    transform: scale(0.96) !important;
    border: none !important;
    background: var(--bgxgx) !important;
    color: var(--f-mkcy-f) !important;
    }
`
export const StepBtnStart = styled.button`
    padding-left: 32px !important;
    padding-right: 32px !important;
    cursor: pointer !important;
    display: inline-block !important;
    margin: 0px !important;
    position: relative !important;
    text-align: center !important;
    text-decoration: none !important;
    width: auto !important;
    touch-action: manipulation !important;
    font-family: var(--e-ls-qkw) !important;
    font-size: var(--iw-ehf-f) !important;
    line-height: var(---s-l-myu) !important;
    font-weight: var(--jx-zk-pv) !important;
    border-radius: var(--go-h-jh-l) !important;
    outline: none !important;
    padding: 14px 28px !important;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
    border: none !important;
    background: var(--dc-gy-f-v) !important;
    color: var(--f-mkcy-f) !important;
    
    &:hover {
    border: none !important;
    background: var(--dc-gy-f-v) !important;
    color: var(--f-mkcy-f) !important;
    }

    &:active {
    transform: scale(0.96) !important;
    border: none !important;
    background: var(--ihf-tp-q) !important;
    color: var(--f-mkcy-f) !important;
    }
`
export const StepBtnEnd = styled.button`
    
`
export default Register;
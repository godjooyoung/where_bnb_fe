import React from 'react';
import { styled } from 'styled-components';

function RegisterStepOneStart() {
    return (
        <StepInfoWrap>
            <StepInfo>
                <StepText>
                    <StepNum>
                        1단계
                    </StepNum>
                    <StepTitle>
                        <>숙소 정보를 알려주세요.</>
                    </StepTitle>
                    <StepDesc>
                        먼저 숙소 위치와 수용 가능 인원을 알려주세요.
                    </StepDesc>
                </StepText>

                <StepVideoWrap>
                    <StepViedo>
                        <StViedio crossOrigin="anonymous" autoPlay muted>
                            <source type="video/mp4" src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"/>
                        </StViedio>
                    </StepViedo>
                </StepVideoWrap>
            </StepInfo>
        </StepInfoWrap>
    );
}
export const StepInfoWrap = styled.div`
    margin-top: auto !important;
    margin-bottom: auto !important;
`
export const StepInfo = styled.div`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    width: 100% !important;
    display: flex !important;
    width: 100% !important;
    height: 100% !important;
    opacity: 1 !important;
    transition: opacity 0.6s;
`
export const StepVideoWrap = styled.div`
    margin-left: 0;
    margin-bottom: 0;
    max-height: min( calc(50vw * 0.8753246753246753), calc( calc( 100vh - 88px - 86px ) * 0.8753246753246753 ) );
    max-width: min( 50vw, calc( 100vh - 88px - 86px ) );
    width: 770px;
    height: 674px;
    clip-path: inset(1px 1px);
`
export const StepViedo = styled.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
    will-change: transform;
    border-radius: var(--dls-base-video-border-radius,0);
`
export const StViedio = styled.video`
    object-fit: cover;
    display: block;
    height: 100%;
    width: 100%;
    overflow-clip-margin: content-box;
    overflow: clip;

`

export const StepText = styled.div`
    width: calc(50vw - 48px);
    max-width: 575px;
    margin-bottom: 0;
`
export const StepNum = styled.div`
    margin-bottom: var(--jaa-ni-h);
    font-size: var(--ll-l-ys-f);
    line-height: var(--f-xgviq);
    font-weight: var(--jx-zk-pv);

`
export const StepTitle = styled.h1`
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: var(--jx-zk-pv);
    overflow-wrap: break-word;

    font-size: 48px;
    line-height: 54px;

    margin-top: 0;
    margin-bottom: var(--ic-zlb-s);
`
export const StepDesc = styled.div`
    font-size: var(--y-g-ar-y);
    line-height: var(--cb-pewj);
`

export default RegisterStepOneStart;
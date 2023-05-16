import React, { useState } from 'react';
import keywordLogo00 from "../assets/keywordLogo00.jpeg"
import keywordLogo01 from "../assets/keywordLogo01.jpeg"
import keywordLogo02 from "..//assets/keywordLogo02.jpeg"
import keywordLogo03 from "..//assets/keywordLogo03.jpeg"
import keywordLogo04 from "../assets/keywordLogo04.jpeg"
import keywordLogo05 from "../assets/keywordLogo05.jpeg"
import { styled } from 'styled-components';




function Main() {
    //  “최고의 전망”, “해변 바로 앞”, “캠핑장”, “도시”, “레저”, “한적한 분위기”
    const [keywords, setKeywords] = useState([
        { url: keywordLogo00, desc: '한적한 분위기', isSelected: false },
        { url: keywordLogo01, desc: '최고의 전망', isSelected: false },
        { url: keywordLogo02, desc: '해변 바로 앞', isSelected: false },
        { url: keywordLogo03, desc: '캠핑장', isSelected: false },
        { url: keywordLogo04, desc: '도시', isSelected: false },
        { url: keywordLogo05, desc: '레저', isSelected: false }
    ])
    return (
        <>
            <div>
                <span>
                    <img />
                </span>
                <div>
                    <span>최고의 전망</span>
                </div>
            </div>

            <MainDiv>
                <GridDiv>
                    <GridItemDiv>
                        <GridItemTextWrap>
                            <GridItemTextTitle>
                                숙소제목
                            </GridItemTextTitle>
                            <GridItemTextConcept>
                                친근한, 바다와 인접한
                            </GridItemTextConcept>
                            <GridItemTextBookable>
                                6월 11일 -16일
                            </GridItemTextBookable>
                            <GridItemTextCost>
                                ₩199,200/박
                            </GridItemTextCost>
                        </GridItemTextWrap>

                        <GridItemImgWrap>
                            <GridItemImgCanvars>
                                <GridItemImgPresentation>
                                    <GridItemImg src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-553863823287705078/original/f2369864-c9eb-4222-a73a-018e55254aed.jpeg?im_w=720" art="test" />
                                </GridItemImgPresentation>
                            </GridItemImgCanvars>
                        </GridItemImgWrap>
                    </GridItemDiv>

                    <GridItemDiv>
                        <GridItemTextWrap>
                            <GridItemTextTitle>
                                숙소제목2
                            </GridItemTextTitle>
                            <GridItemTextConcept>
                                친근한, 바다와 인접한
                            </GridItemTextConcept>
                            <GridItemTextBookable>
                                6월 11일 -16일
                            </GridItemTextBookable>
                            <GridItemTextCost>
                                ₩199,200/박
                            </GridItemTextCost>
                        </GridItemTextWrap>

                        <GridItemImgWrap>
                            <GridItemImgCanvars>
                                <GridItemImgPresentation>
                                    <GridItemImg src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-553863823287705078/original/f2369864-c9eb-4222-a73a-018e55254aed.jpeg?im_w=720" art="test" />
                                </GridItemImgPresentation>
                            </GridItemImgCanvars>
                        </GridItemImgWrap>
                    </GridItemDiv>

                    <GridItemDiv>
                        <GridItemTextWrap>
                            <GridItemTextTitle>
                                숙소제목3
                            </GridItemTextTitle>
                            <GridItemTextConcept>
                                친근한, 바다와 인접한
                            </GridItemTextConcept>
                            <GridItemTextBookable>
                                6월 11일 -16일
                            </GridItemTextBookable>
                            <GridItemTextCost>
                                ₩199,200/박
                            </GridItemTextCost>
                        </GridItemTextWrap>

                        <GridItemImgWrap>
                            <GridItemImgCanvars>
                                <GridItemImgPresentation>
                                    <GridItemImg src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-553863823287705078/original/f2369864-c9eb-4222-a73a-018e55254aed.jpeg?im_w=720" art="test" />
                                </GridItemImgPresentation>
                            </GridItemImgCanvars>
                        </GridItemImgWrap>
                    </GridItemDiv>

                    <GridItemDiv>
                        <GridItemTextWrap>
                            <GridItemTextTitle>
                                숙소제목4
                            </GridItemTextTitle>
                            <GridItemTextConcept>
                                친근한, 바다와 인접한
                            </GridItemTextConcept>
                            <GridItemTextBookable>
                                6월 11일 -16일
                            </GridItemTextBookable>
                            <GridItemTextCost>
                                ₩199,200/박
                            </GridItemTextCost>
                        </GridItemTextWrap>

                        <GridItemImgWrap>
                            <GridItemImgCanvars>
                                <GridItemImgPresentation>
                                    <GridItemImg src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-553863823287705078/original/f2369864-c9eb-4222-a73a-018e55254aed.jpeg?im_w=720" art="test" />
                                </GridItemImgPresentation>
                            </GridItemImgCanvars>
                        </GridItemImgWrap>
                    </GridItemDiv>

                    <GridItemDiv>
                        <GridItemTextWrap>
                            <GridItemTextTitle>
                                숙소제목5
                            </GridItemTextTitle>
                            <GridItemTextConcept>
                                친근한, 바다와 인접한
                            </GridItemTextConcept>
                            <GridItemTextBookable>
                                6월 11일 -16일
                            </GridItemTextBookable>
                            <GridItemTextCost>
                                ₩199,200/박
                            </GridItemTextCost>
                        </GridItemTextWrap>

                        <GridItemImgWrap>
                            <GridItemImgCanvars>
                                <GridItemImgPresentation>
                                    <GridItemImg src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-553863823287705078/original/f2369864-c9eb-4222-a73a-018e55254aed.jpeg?im_w=720" art="test" />
                                </GridItemImgPresentation>
                            </GridItemImgCanvars>
                        </GridItemImgWrap>
                    </GridItemDiv>

                </GridDiv>
            </MainDiv>
        </>
    );
}

export const MainDiv = styled.div`
    padding-inline-start: 80px;
    padding-inline-end: 80px;
    margin-block-start: var(--jhzm-v-t);
    margin-block-end: var(--f-fw-z-a-i);
    background: var(--f-mkcy-f);
    margin-block-start: 16px;
    max-width: var(--page-shell-max-content-width,1760px);
    contain: paint layout;
    bottom: 0;
    width: calc(100% - var(--scrollbar-gutter,0%));
    display: grid;
`

export const GridDiv = styled.div`
    display: grid;
    // 브라우저 호환성
    grid-gap: 40px 24px;
    gap: 40px 24px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: minmax(100px);
`

export const GridItemWrap = styled.div`
    color: #222222 !important;
    font-size: 16px !important;
    line-height: 20px !important;
    flex-direction: column;
    grid-area: 1 / 1 / 2 / 2;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    z-index: 2;
    display: flex;
    margin: 0;
    padding-top: 0;
    margin-bottom: var(--b-y-unon);
`
export const GridItemDiv = styled.div`
    display: flex;
    flex-direction: var(--card-layout_flex-direction, column-reverse);
`

export const GridItemTextWrap = styled.div`
    font-size: 15px;
    line-height: 19px;
    display: grid;
    
`
export const GridItemTextTitle = styled.div`
    
`
export const GridItemTextConcept = styled.div`
    
`
export const GridItemTextBookable = styled.div`
    
`
export const GridItemTextCost = styled.div`
    
`

export const GridItemImgWrap = styled.div`
    height: 100%;
    min-width: 0;
    position: unset;
    display: grid;
`

export const GridItemImgCanvars = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
`

export const GridItemImgPresentation = styled.div`
    cursor: pointer;
    display: inline-block;
    vertical-align: bottom;
    height: 100%;
    width: 100%;
    min-height: 250px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url("https://a0.muscache.com/im/pictures/prohost-api/Ho…2369864-c9eb-4222-a73a-018e55254aed.jpeg?im_w=720");
`

export const GridItemImg = styled.img`
    overflow-clip-margin: content-box;
    overflow: clip;
    position: absolute;
    vertical-align: bottom;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: var(--dls-liteimage-object-position);
`
export default Main;
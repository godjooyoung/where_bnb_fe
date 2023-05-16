import React, { useEffect, useState } from 'react';
import keywordLogo00 from "../../../assets/keywordLogo00.jpeg"
import keywordLogo01 from "../../../assets/keywordLogo01.jpeg"
import keywordLogo02 from "../../../assets/keywordLogo02.jpeg"
import keywordLogo03 from "../../../assets/keywordLogo03.jpeg"
import keywordLogo04 from "../../../assets/keywordLogo04.jpeg"
import keywordLogo05 from "../../../assets/keywordLogo05.jpeg"
import { styled } from 'styled-components';

function RoomConcept(props) {
    const [keywords, setKeywords] = useState([
        {url:keywordLogo00, desc:'한적한 분위기', isSelected:false},
        {url:keywordLogo01, desc:'최고의 전망', isSelected:false}, 
        {url:keywordLogo02, desc:'해변 바로 앞', isSelected:false},
        {url:keywordLogo03, desc:'캠핑장', isSelected:false},
        {url:keywordLogo04, desc:'도시', isSelected:false},
        {url:keywordLogo05, desc:'레저', isSelected:false}
    ])

    const [selectedCnt, setSelectedCnt] = useState(0)
    // 중복을 피하기 위해 Set 사용.
    const mySet = new Set([]);
    const [selectedKeyword, setSelectedKeyword] = useState(mySet)

    const keywordBtnOnClickEvent = (idx, seletedYn) =>{
        const updatedKeywords = keywords.map((keyword, index) => {
            if (index === idx) {
                if(selectedCnt<2){
                    return { ...keyword, isSelected: !seletedYn };
                }else{
                    if(keyword.isSelected){
                        return { ...keyword, isSelected: false };
                    }
                }   
            }
            return keyword;
        });
        setKeywords(updatedKeywords);
    }

    useEffect(()=>{
        const selectedCount = keywords.reduce((acc, keyword) => {
            if (keyword.isSelected) {
                setSelectedKeyword(mySet.add(keyword.desc))
                return acc + 1;
            }
            return acc;
        }, 0);
        setSelectedCnt(selectedCount)
    },[keywords, selectedCnt])

    // 폼의 값이 변경되면 완료/미완 여부를 부모로 올린다.
    useEffect(() => {
        if (selectedCnt === 0) {
            props.getFormIsDone(false)
            
        } else {
            props.getFormIsDone(true)
            
        }
    }, [selectedCnt])
    
    useEffect(()=>{
        if(selectedCnt === 0){
            props.getKeywords({keyword1:null, keyword2:null})
        }else if(selectedCnt === 1){
            props.getKeywords({keyword1:Array.from(selectedKeyword)[0], keyword2:null})
        }
        else{
            props.getKeywords({keyword1:Array.from(selectedKeyword)[0], keyword2:Array.from(selectedKeyword)[1]})
        }
    },[selectedKeyword])
    return (
        <>
            <Concepts>
                {keywords.map((keyword,idx)=>{
                    return (
                        
                    <ConceptWrapDiv>
                        <ConceptBtn onClick={()=>{ return keywordBtnOnClickEvent(idx, keyword.isSelected)}} isSelected={keyword.isSelected}>
                            <div>
                                <div>
                                    <LogoSpanWrap>
                                        <LogoDiv><img src={keyword.url} width="18px" height="18px"></img></LogoDiv>
                                        <span>{keyword.desc}</span>
                                    </LogoSpanWrap>
                                </div>
                            </div>
                        </ConceptBtn>
                    </ConceptWrapDiv>
                        
                    )
                })}
            </Concepts>
        </>
    );
}

export const Concepts = styled.div`
    display: flex !important;
    flex-flow: row wrap !important;
    max-width: 630px;
    min-width: min(300px, 100vw);
    align-items: center !important;
    justify-content: flex-start !important;
    margin-left: -4px !important;
`
export const ConceptWrapDiv = styled.div`
    padding-left: 4px !important;
    padding-right: 4px !important;
    padding-bottom: 12px !important;
    animation-duration: 600ms !important;
    animation-iteration-count: 1 !important;
    animation-fill-mode: both !important;
`

export const ConceptBtn = styled.button`
    writing-mode: horizontal-tb !important;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    -webkit-box-direction: reverse !important;
    -webkit-box-orient: horizontal !important;
    -webkit-box-align: center !important;
    -webkit-box-pack: center !important;
    display: flex !important;
    cursor: pointer !important;
    text-align: center !important;
    border-width: 1px;
    border-style: solid !important;
    border-image: initial !important;
    background-color: rgb(255, 255, 255);
    outline: none !important;
    padding: 0px 16px !important;
    margin: 0px !important;
    border-color: var(--j-qkgmf);
    color: var(--f-k-smk-x);
    position: relative !important;
    transition-property: -ms-transform, -webkit-transform, transform, background-color, border-color !important;
    transition-duration: 0.15s !important;
    transition-timing-function: ease-in-out !important;
    border-radius: 32px !important;
    height: 56px !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: row-reverse !important;
    flex: 1 1 0% !important;
    font-size: 18px !important;
    line-height: 24px !important;
    font-weight: 600;

    &:hover{
        color: var(--bgxgx) !important;
        border-color: var(--bgxgx) !important;
    }
    &:hover{
        color: var(--bgxgx) !important;
        border-color: var(--bgxgx) !important;
        transform: scale(0.925) !important;
    }

    background-color : ${(props)=>{
        return props.isSelected?'var(---pc-g-v-g)':'rgb(255, 255, 255)'
    }};

    color : ${(props)=>{
        return props.isSelected?'var(--f-k-smk-x)':'var(--f-k-smk-x)'
    }};

    border-color : ${(props)=>{
        return props.isSelected?'var(--f-k-smk-x)':'var(--j-qkgmf)'
    }};

    font-weight : ${(props)=>{
        return props.isSelected?'800':'600'
    }};

    border-width : ${(props)=>{
        return props.isSelected?'2px':'1px'
    }};

    ;

`
export const LogoSpanWrap = styled.div`
    -webkit-box-align: center !important;
    font-size: 16px !important;
    line-height: 20px !important;
    display: flex !important;
    align-items: center !important;
`
export const LogoDiv = styled.div`
    margin-right: 12px !important;
    cursor: pointer !important;
    text-align: center !important;
    color: var(--f-k-smk-x) !important;
    font-weight: 600 !important;
`
export default RoomConcept;
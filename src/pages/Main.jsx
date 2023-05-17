import React, { useEffect, useState } from 'react';
import wishListLogo from "../assets/wishListLogo.png"
import keywordLogo00 from "../assets/keywordLogo00.jpeg"
import keywordLogo01 from "../assets/keywordLogo01.jpeg"
import keywordLogo02 from "..//assets/keywordLogo02.jpeg"
import keywordLogo03 from "..//assets/keywordLogo03.jpeg"
import keywordLogo04 from "../assets/keywordLogo04.jpeg"
import keywordLogo05 from "../assets/keywordLogo05.jpeg"
import { styled } from 'styled-components';
import { useQuery, useQueryClient } from "react-query";
import { getMainList, getMainListUser, getMainListKeyword, getMainListUserKeyword } from "../api/main";
import { getCookie } from '../cookie/Cookie';
import { instance, tokenInstance } from '../api/apiConfig';
import { AiFillHeart } from 'react-icons/ai'
import { ElectricScooterSharp } from '@mui/icons-material';

function Main() {
    const [keywords, setKeywords] = useState([
        { url: wishListLogo, desc : '위시 리스트'},
        { url: keywordLogo00, desc: '한적한 분위기'},
        { url: keywordLogo01, desc: '최고의 전망'},
        { url: keywordLogo02, desc: '해변 바로 앞'},
        { url: keywordLogo03, desc: '캠핑장'},
        { url: keywordLogo04, desc: '도시'},
        { url: keywordLogo05, desc: '레저'}
    ])
    const [clickheart,setClickheart] = useState(false)
    
    const queryClient = useQueryClient();
    
    // 로그인 상태 확인, 키워드검색 여부 확인
    const [isLogIn, setIsLogIn] = useState(false)
    const [isKeyword, setIsKeyword] = useState(false)
    
    // 키워드 선택 관련 스테이트
    const [searchKeyword, setSearchKeyword] = useState(null)

    // 최초 랜더링 시 로그인 여부, 키워드 여부를 판단해서 세팅함.
    useEffect(() => { 
        const checkLoginStatus = () => {
            if (getCookie('token')) {
                setIsLogIn(true);
                setSearchKeyword(null)
            } else {
                setIsLogIn(false);
            }
        };
        checkLoginStatus();

        const checkSearchKeyword =() =>{
            if(searchKeyword){
                setIsKeyword(true)
                console.log("선택키워드 53",searchKeyword)
            }else{
                setIsKeyword(false)
            }
        }
        checkSearchKeyword() 
    }, []);

    // 쿼리 설정
    const mainQuery = useQuery("MainList", getMainList, {
        enabled: !isLogIn, // isLogIn 값에 따라 쿼리 활성화 또는 비활성화
    });
    const mainUserQuery = useQuery("MainListUser", getMainListUser, {
        enabled: isLogIn, // isLogIn 값에 따라 쿼리 활성화 또는 비활성화
    });
    const mainKeywordQuery = useQuery("MainKeywordList", 
    () => getMainListKeyword({ keyword: searchKeyword }),
    {
        enabled: (!isLogIn && isKeyword), // isLogIn, isKeyword 값에 따라 쿼리 활성화 또는 비활성화
    })
    const mainKeywordUserQuery = useQuery("MainKeywordListUser", 
    () => getMainListUserKeyword({ keyword: searchKeyword }),
    {
        enabled: (isLogIn && isKeyword), // isLogIn, isKeyword 값에 따라 쿼리 활성화 또는 비활성화
    })

    // 쿼리 결과 담는 스테이트
    const [datas, setDatas] = useState([])

    // 쿼리 실행
    const { isLoading: isLoadingMain, isError: isErrorMain, data: dataMain } = mainQuery;
    const { isLoading: isLoadingMainUser, isError: isErrorMainUser, data: dataMainUser } = mainUserQuery;
    const { isLoading: isLoadingMainKeyword, isError: isErrorMainKeyword, data: dataMainKeyword } = mainKeywordQuery;
    const { isLoading: isLoadingMainKeywordUser, isError: isErrorMainKeywordUser, data: dataMainKeywordUser } = mainKeywordUserQuery;

    // 로그인 유뮤ㅡ 키워드 검색 유무에 따라서 데이이터를 재 요청해서 조회한다.
    useEffect(() => {
        if(isLogIn){
            if(searchKeyword){
                queryClient.cancelQueries({ queryKey: ['MainList', 'MainListUser', 'MainKeywordList'] })
                queryClient.invalidateQueries("MainKeywordListUser");
            }else{
                queryClient.cancelQueries({ queryKey: ['MainList', 'MainKeywordListUser', 'MainKeywordList'] })
                queryClient.invalidateQueries("MainListUser");
            }
        }else{
            if(searchKeyword){
                queryClient.cancelQueries({ queryKey: ['MainList', 'MainListUser', 'MainKeywordListUser'] })
                queryClient.invalidateQueries("MainKeywordList");
            }else{
                queryClient.cancelQueries({ queryKey: ['MainListUser', 'MainKeywordListUser', 'MainKeywordList'] })
                queryClient.invalidateQueries("MainList");
            }
            
        }
    }, [searchKeyword]);

    // 로그인 유무, 키워드 검색 유무에 따라 대치되는 데이터가 달라진다.
    useEffect(()=>{
        console.log("로그인유무",isLogIn)
        console.log("키워드 여부",isKeyword)
        console.log("선택 키워드", searchKeyword)
        console.log("dataMainUser",dataMainUser)
        console.log("dataMain",dataMain)
        console.log("dataMainKeyword",dataMainKeyword)
        console.log("dataMainKeywordUser",dataMainKeywordUser)

        if(isLogIn){
            if(isKeyword){
                if(dataMainKeywordUser){
                    setDatas([...dataMainKeywordUser])
                }
            }else{
                if(dataMainUser){
                    setDatas([...dataMainUser])
                }
            }
        }else{
            if(isKeyword){
                if(dataMainKeyword){
                    setDatas([...dataMainKeyword])
                }
            }else{
                if(dataMain){
                    setDatas([...dataMain])
                }              
            }            
        }
    },[dataMain, dataMainUser, dataMainKeyword, dataMainKeywordUser])

    useEffect(() => {
        if (searchKeyword) {
            setIsKeyword(true);
        }
    }, [searchKeyword]);
    
    const keywordsClickEventHandeler = (keyword)=>{
        if(keyword === keywords[0].desc){

        }else{
            console.log("키워드 변경,", keyword)
            setSearchKeyword(keyword)
        }
    }
    // 시간 계산
    const timeCalculater = (createdAt) => {
        // const ZONE = 9 * 60 * 60 * 1000; // 9시간
        // 현재시간
        const currentDate = new Date()
        const createdDate = new Date(createdAt)

        if (
            (createdDate.getFullYear() === currentDate.getFullYear()) &&
            (createdDate.getDate() === currentDate.getDate())
        ) {
            return '★ NEW'
        } else {
            return ' '
        }
    }

    //스트링포맷터 yyyy-mm-dd
    const dateFommater = (termDate) => {
        const stDate = termDate
        const splitDates = stDate.split('-')
        return splitDates[0]+'년 '+splitDates[1]+'월 '+splitDates[2]+'일'
    }


    const alarmTestBtnOnClickHandler = async(id) =>{
        await instance.put(`/room/like/${id}`, {},
            {
                headers : {
                    Authorization : `Bearer ${getCookie("token")}`
                },},)

        setClickheart((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    }

    let subscribeUrl = `${process.env.REACT_APP_SERVER_URL}/sub`;


    if(getCookie("token")){
        console.log("제발 들어와라.....");
        let eventSource = new EventSource(subscribeUrl + "?token=" + getCookie("token"));
        eventSource.addEventListener("notifyLike", function(event) {
        let message = event.data;
        alert(message);
        console.log(message)
    })
}
    if (isLoadingMain) {
        return <p>로딩중입니다....!</p>;
    }

    if (isErrorMain) {
        return <p>오류가 발생하였습니다...!</p>;
    }

    if (isLoadingMainUser) {
        return <p>로딩중입니다....!</p>;
    }

    if (isErrorMainUser) {
        return <p>오류가 발생하였습니다...!</p>;
    }

    return (
        <>
            <ConceptContainer>
                {keywords.map((keyword, idx)=>{
                    return (
                    <ConceptWrapDiv onClick={()=>{keywordsClickEventHandeler(keyword.desc)}}>
                        <ConceptImgDiv>
                            <img width="24px" height="24px" src={keyword.url} alt={keyword.desc+' 컨셉 키워드'}/>
                        </ConceptImgDiv>
                        <ConceptDescDiv>
                            <ConceptDesc>{keyword.desc}</ConceptDesc>
                        </ConceptDescDiv>
                    </ConceptWrapDiv>
                    )
                })}
            </ConceptContainer>
            <MainDiv>
                <GridDiv>
                    {datas && datas.length > 0 ? (
                        datas.map((item, idx) => (
                            <GridItemDiv key={item.roomId}>
                                <GridItemTextWrap>
                                    <GridItemTextConcept>{item.location}</GridItemTextConcept>
                                    <GridItemTextTitle>
                                        {timeCalculater(item.createdAt)}
                                    </GridItemTextTitle>
                                    <GridItemTextBookable>
                                        {dateFommater(item.checkInDate)} ~ {dateFommater(item.checkOutDate)}
                                    </GridItemTextBookable>
                                    <GridItemTextCost><GridItemTextSpan>₩{item.price}</GridItemTextSpan> /박</GridItemTextCost>
                                </GridItemTextWrap>
                                <GridItemImgWrap>
                                    <GridItemImgCanvars>
                                        <GridItemImgPresentation>
                                            <HeartIcon clickheart={clickheart[item.roomId]} onClick={() => {alarmTestBtnOnClickHandler(item.roomId)}}/>
                                            <GridItemImg src={item.imageFile[0].imageUrl} alt="메인숙소이미지" />
                                        </GridItemImgPresentation>
                                    </GridItemImgCanvars>
                                </GridItemImgWrap>
                            </GridItemDiv>
                        ))
                    ) : (
                        <p>데이터없음</p>
                    )}
                </GridDiv>
            </MainDiv>
        </>
    );
}


export const ConceptContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin: 15px;
    justify-content: center;
`
export const ConceptWrapDiv =  styled.div`
    cursor: pointer;
`
////
export const ConceptImgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ConceptDescDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

export const ConceptDesc = styled.span`
    text-align: center;
    color: var(--fo-jk-r-s);
    font-size: 12px;
    line-height: var(--f-l-h-bac);
`

export const MainDiv = styled.div`
    background: white;
    bottom: 0;
    position: relative;
    height: 80vh;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0 auto;
    padding-inline-start: 80px;
    padding-inline-end: 80px;
    margin-block-start: 16px;
    

`

export const GridDiv = styled.div`
    display: grid;
    // 브라우저 호환성
    grid-gap: 40px 24px;
    gap: 40px 24px;
    grid-template-columns: repeat( auto-fill, minmax(270px, 1fr));
    grid-auto-rows: minmax(240px, 1fr);
    padding : 0 auto;
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
    flex-direction: column-reverse;
    gap: 5px;
`

export const GridItemTextWrap = styled.div`
    font-size: 15px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
`
export const GridItemTextTitle = styled.div`
    margin: 2px 0px 2px 0px;
    text-align: center;
    font-size: 12px;
    line-height: 19px;
`
export const GridItemTextConcept = styled.div`
    line-height: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--f-k-smk-x);
    font-weight: var(--jx-zk-pv);
    margin: 2px 0px 2px 0px;
`
export const GridItemTextBookable = styled.div`
    line-height: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--fo-jk-r-s);
    grid-column: span 2;
    margin: 2px 0px 2px 0px;
`
export const GridItemTextCost = styled.div`
    grid-column: span 2;
    margin: 2px 0px 2px 0px;
`

export const GridItemTextSpan = styled.span`
    overflow: hidden;
    font-size: 16px;
    color: #717171;
    font-weight: 600;
    
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
    position: relative;
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
const HeartIcon = styled(AiFillHeart)`
    position: absolute;
    z-index: 1;
    top: 10px; // 원하는 위치로 조절 (예: 10px)
    right: 10px; // 원하는 위치로 조절 (예: 10px)
    font-size: 25px;
    color: ${(props) => (props.clickheart ? "red" : "gray")};
    opacity: ${(props) => (props.clickheart ? "1" : "0.5")};
`;
export default Main;
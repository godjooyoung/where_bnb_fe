import React, { useEffect, useState } from 'react';
import keywordLogo00 from "../assets/keywordLogo00.jpeg"
import keywordLogo01 from "../assets/keywordLogo01.jpeg"
import keywordLogo02 from "..//assets/keywordLogo02.jpeg"
import keywordLogo03 from "..//assets/keywordLogo03.jpeg"
import keywordLogo04 from "../assets/keywordLogo04.jpeg"
import keywordLogo05 from "../assets/keywordLogo05.jpeg"
import { styled } from 'styled-components';
import { useQuery } from "react-query";
import { getMainList } from "../api/main";
import { getCookie } from '../cookie/Cookie';
import { instance } from '../api/apiConfig';

function Main() {
    //  "최고의 전망", "해변 바로 앞", "캠핑장", "도시", "레저", "한적한 분위기"
    const [keywords, setKeywords] = useState([
        { url: keywordLogo00, desc: '한적한 분위기', isSelected: false },
        { url: keywordLogo01, desc: '최고의 전망', isSelected: false },
        { url: keywordLogo02, desc: '해변 바로 앞', isSelected: false },
        { url: keywordLogo03, desc: '캠핑장', isSelected: false },
        { url: keywordLogo04, desc: '도시', isSelected: false },
        { url: keywordLogo05, desc: '레저', isSelected: false }
    ])

    // const { isLoading, isError, data } = useQuery("MainList", getMainList);
    const [datas, setDatas] = useState([
        {
            roomId : "1",
            imageFile: ["https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-854745696847346650/original/44fe37d5-d874-4338-b5d8-a1c8df2aef7a.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200l",
                "https://a0.muscache.com/im/pictures/miso/Hosting-881215581530887635/original/e4d70003-b580-40f0-80de-653fe2943caf.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-854745696847346650/original/44fe37d5-d874-4338-b5d8-a1c8df2aef7a.jpeg?im_w=1200"],
            location: "서울특별시 강서구",
            price: 40000,
            checkInDate: '2023-05-16',
            checkOutDate: '2023-05-30',
            createdAt: '2023-05-16 15:00',
        },
        {
            roomId : "2",
            imageFile: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-881215581530887635/original/e4d70003-b580-40f0-80de-653fe2943caf.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200"
            ],
            location: "서울특별시 마포구",
            price: 39000,
            checkInDate: '2023-05-16',
            checkOutDate: '2023-05-30',
            createdAt: '2023-05-16 10:00',
        },
        {
            roomId : "3",
            imageFile: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-881215581530887635/original/e4d70003-b580-40f0-80de-653fe2943caf.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200"
            ],
            location: "대구광역시 수성구 범어동",
            price: 46000,
            checkInDate: '2023-05-14',
            checkOutDate: '2023-05-30',
            createdAt: '2023-05-14 10:00',
        },
        {
            roomId : "4",
            imageFile: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-881215581530887635/original/e4d70003-b580-40f0-80de-653fe2943caf.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200"
            ],
            location: "대구광역시 수성구 범어동",
            price: 90000,
            checkInDate: '2023-05-14',
            checkOutDate: '2023-05-30',
            createdAt: '2023-05-14 10:00',
        },
        {
            roomId : "5",
            imageFile: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200"
            ],
            location: "대구광역시 수성구 범어동",
            price: 80000,
            checkInDate: '2023-05-14',
            checkOutDate: '2023-05-30',
            createdAt: '2023-05-14 10:00',
        },
        {
            roomId : "6",
            imageFile: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-881215581530887635/original/e4d70003-b580-40f0-80de-653fe2943caf.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200"
            ],
            location: "대구광역시 수성구 범어동",
            price: 80000,
            checkInDate: '2023-05-14',
            checkOutDate: '2023-05-30',
            createdAt: '2023-05-14 10:00',
        },
        {
            roomId : "7",
            imageFile: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-881215581530887635/original/e4d70003-b580-40f0-80de-653fe2943caf.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200"
            ],
            location: "대구광역시 수성구 범어동",
            price: 80000,
            checkInDate: '2023-05-14',
            checkOutDate: '2023-05-30',
            createdAt: '2023-05-14 10:00',
        },
        {
            roomId : "8",
            imageFile: ["https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-854745696847346650/original/44fe37d5-d874-4338-b5d8-a1c8df2aef7a.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200l",
                "https://a0.muscache.com/im/pictures/miso/Hosting-881215581530887635/original/e4d70003-b580-40f0-80de-653fe2943caf.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-854745696847346650/original/44fe37d5-d874-4338-b5d8-a1c8df2aef7a.jpeg?im_w=1200"],
            location: "대구광역시 수성구 범어동",
            price: 80000,
            checkInDate: '2023-05-14',
            checkOutDate: '2023-05-30',
            createdAt: '2023-05-14 10:00',
        },
        {
            roomId : "9",
            imageFile: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-881215581530887635/original/e4d70003-b580-40f0-80de-653fe2943caf.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200"
            ],
            location: "대구광역시 수성구 범어동",
            price: 80000,
            checkInDate: '2023-05-14',
            checkOutDate: '2023-05-30',
            createdAt: '2023-05-14 10:00',
        },
        {
            roomId : "10",
            imageFile: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-854745696847346650/original/44fe37d5-d874-4338-b5d8-a1c8df2aef7a.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-845746412116984685/original/dc3a2dbe-f7ec-4df3-bb77-aef66b06cc69.jpeg?im_w=1200l",
                "https://a0.muscache.com/im/pictures/miso/Hosting-881215581530887635/original/e4d70003-b580-40f0-80de-653fe2943caf.jpeg?im_w=1200",
                "https://a0.muscache.com/im/pictures/miso/Hosting-854745696847346650/original/44fe37d5-d874-4338-b5d8-a1c8df2aef7a.jpeg?im_w=1200"],
            location: "대구광역시 수성구 범어동",
            price: 80000,
            checkInDate: '2023-05-14',
            checkOutDate: '2023-05-30',
            createdAt: '2023-05-14 10:00',
        },

    ])
    
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
            return 'New'
        } else {
            return ''
        }
    }
    const alarmTestBtnOnClickHandler = async(id) =>{
        await instance.post(`/room/like/${id}`, {},
            {
                headers : {
                    Authorization : `Bearer ${getCookie("token")}`
                },
            },
        )
    }
    // if (isLoading) {
    //     return <p>로딩중입니다....!</p>;
    // }

    // if (isError) {
    //     return <p>오류가 발생하였습니다...!</p>;
    // }
    // if(data){
    //     console.log("####### Main.jsx", data)
    // }

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
                    {datas && datas.length > 0 ? (
                        datas.map((item, idx) => (
                            <GridItemDiv key={item.roomId}>
                                <GridItemTextWrap>
                                    <GridItemTextTitle>
                                        {timeCalculater(item.createdAt)}
                                    </GridItemTextTitle>
                                    <GridItemTextConcept>{item.location}</GridItemTextConcept>
                                    <GridItemTextBookable>
                                        {item.checkInDate}~{item.checkOutDate}
                                    </GridItemTextBookable>
                                    <GridItemTextCost>₩{item.price}/박</GridItemTextCost>
                                </GridItemTextWrap>
                                <GridItemImgWrap>
                                    <GridItemImgCanvars>
                                        <GridItemImgPresentation>
                                            <GridItemImg src={item.imageFile[0]} alt="test" />
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

export const MainDiv = styled.div`
    background: white;
    bottom: 0;
    display: grid;
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
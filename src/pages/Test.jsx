import React from 'react';
import DragDrop from '../components/roomRegiser/DragDrop';
import RoomLocationInput from '../components/roomRegiser/RoomLocationInput';
import RoomInfo from '../components/roomRegiser/RoomInfo';
import RoomRegiTitle from '../components/roomRegiser/RoomRegiTitle'
import RoomConcept from '../components/roomRegiser/RoomConcept';
import RoomName from '../components/roomRegiser/RoomName';
import RoomDesc from '../components/roomRegiser/RomeDesc';
import RoomCost from '../components/roomRegiser/RoomCost';
function Test() {
    return (
        <>
            <div>TEST PAGE</div>
            <RoomRegiTitle title="숙소 사진 추가하기" alert="숙소 등록을 시작하려면 사진 5장을 제출하셔야 합니다. 나중에 추가하거나 변경하실 수 있습니다."/>
            <DragDrop/>

            <RoomRegiTitle title="이제 숙소에 이름을 지어주세요." alert="숙소 이름은 짧을수록 효과적입니다. 나중에 언제든지 변경할 수 있으니, 너무 걱정하지 마세요."/>
            <RoomName/>

            <RoomRegiTitle title="이제 숙소에 대해 설명해주세요." alert="숙소의 특징이 잘 드러나는 문구를 최대 2개까지 선택하실 수 있습니다. 선택한 문구로 숙소설명을 작성하실 수 있도록 도와드릴게요."/>
            <RoomConcept/>

            <RoomRegiTitle title="숙소 설명 작성하기" alert="숙소의 특징과 장점을 알려주세요."/>
            <RoomDesc/>


            <RoomRegiTitle title="숙소 기본 정보를 알려주세요." alert="침대 유형과 같은 세부 사항은 나중에 추가하시 수 있습니다."/>
            <RoomLocationInput/>
            <RoomInfo initOptValue={1} optTitle="게스트" type="counter"/>
            <RoomInfo initOptValue={1} optTitle="침실" type="counter"/>
            <RoomInfo initOptValue={1} optTitle="침대" type="counter"/>
            <RoomInfo initOptValue={0.5} optTitle="욕실" type="counter"/>
            <RoomInfo initOptValue={false} optTitle="유아 동반가능" type="switch"/>
            <RoomInfo initOptValue={false} optTitle="애견 동반가능" type="switch"/>
            

            <RoomCost/>
        </>
        
        /**: “최고의 전망”, “해변 바로 앞”, “캠핑장”, “도시”, “레저”, “한적한 분위기” */
    );
}

export default Test;
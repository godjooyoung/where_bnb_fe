import React from "react";
import { styled } from "styled-components";

function Footer(props) {
  return (
    <StFooter>
      <StFirstline>
        © 2023 Airbnb, Inc.·개인정보 처리방침이용약관사이트맵한국의 변경된 환불
        정책회사 세부정보 언어 선택 한국어 (KR) 통화 선택 ₩ KRW 지원 및 참고
        자료
      </StFirstline>
      <StSecondline>
        <StSecondlineinner>
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
          Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian
          Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호:
          IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅
          서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
          에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는
          통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소,
          체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
          호스트에게 있습니다.
        </StSecondlineinner>
      </StSecondline>
    </StFooter>
  );
}

export default Footer;

const StFooter = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 88px;
`;
const StFirstline = styled.div`
  padding: 12px 40px 12px;
  font-size: 14px;
`;
const StSecondline = styled.div`
  padding-inline-start: 40px;
  padding-inline-end: 40px;
  font-size: 10px;

`;
const StSecondlineinner = styled.div`
  padding-top: 8px;
  border-top: 1px solid gray;
`;

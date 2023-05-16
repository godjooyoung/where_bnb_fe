import React from "react";
import { CiCalendar } from "react-icons/ci";
import { styled } from "styled-components";

function Monthbox({ children, onClick, selected }) {
    const year = parseInt(children) < 5 ? 2024 : 2023;
  return (
    <Stmonthbox onClick={onClick} selected={selected}>
      <div>
        {selected ? (
          <img
            width={35}
            height={35}
            src="https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg"
            alt=""
          />
        ) : (
          <img
            width={35}
            height={35}
            src="https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg"
            alt=""
          />
        )}
      </div>
      <div>{children}월</div>
      <Styeartext>{year}</Styeartext>
    </Stmonthbox>
  );
}

export default Monthbox;

const Stmonthbox = styled.button`
  width: 120px;
  height: 130px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  border: ${(props) =>
    props.selected ? "2px solid black" : "1px solid lightgray"};
      background-color: ${(props) =>
    props.selected ? "#e0e0e0;" : "white"};
`;
const Styeartext = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

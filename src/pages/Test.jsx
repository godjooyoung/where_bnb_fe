import React from 'react';

function Test(props) {
    const alarmTestBtnOnClickHandler = () =>{
        alert('알람..')
        // 여기에 동작 추가하실수 있도록 이렇게 드림 되는걸까요..?
        
    }
    return (
        <div>
            <button onClick={alarmTestBtnOnClickHandler}>알람 테스트..</button>
        </div>
    );
}

export default Test;
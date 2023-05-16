import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as DragPhoto } from "../../../assets/svg/dragPhoto.svg"

function DragDrop(props) {
    const [dragActive, setDragActive] = useState(false)
    const inputRef = useRef();

    const handleFile = (files) => {
        alert("#### num of files," + files.length)
        // 파일 길이 체크 로직
        // 최소 다섯개
        // 이미지 파일로 한정 짓는 로직
    }

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true)
            console.log("#### dragActive", dragActive)
        } else if (e.type === 'dragleave') {
            setDragActive(false)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files);
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
        }
    }

    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <>
        <DragPositonDiv>
            <DragWrap>
            <UploadDiv>
            <FormWrapDiv>
            <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <Input id="input-file-upload" type="file" multiple={true} onChange={handleChange} ref={inputRef} />
                <Label id="lable-file-upload" htmlFor="input-file-upload">
                    <>
                        <UploadDivItemWrap>
                            <DragPhoto />
                            <DescDiv>여기로 사진을 끌어다 놓으세요.</DescDiv>
                            <SubDescDiv>5장 이상의 사진을 선택하세요.</SubDescDiv>
                            <UploadBtn onClick={onButtonClick}>기기에서 업로드</UploadBtn>
                        </UploadDivItemWrap>
                    </>
                </Label>
                {dragActive && <DropDiv id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></DropDiv>}
            </form>
            </FormWrapDiv>
            </UploadDiv>
            </DragWrap>
        </DragPositonDiv>
        </>
    );
}


export const DragPositonDiv = styled.div`
    position: relative;
    margin: 24px 0px;
    width: 100%;
    background-color: transparent;
`
export const Input = styled.input`
    display: none;
`
export const Label = styled.label`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px dashed rgb(176, 176, 176);
`
export const DropDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`
export const DragWrap = styled.div`
    position: relative;
    display: flex;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding-left: 24px;
    padding-right: 24px;

`
export const FormWrapDiv = styled.div`
    width: 100vw;
    height: 100%;
`
export const UploadDiv = styled.div`
    position: relative;
    display: flex;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    -webkit-box-direction: normal;
    padding-left: 6px;
    padding-right: 6px;
`

export const UploadDivItemWrap = styled.div`
    font-size: 14px;
    line-height: 1.43;
    color: rgb(34, 34, 34);
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px auto;
    align-items: center;
`

export const UploadBtn = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border-radius: var(--h-l-f-om-o);
    text-align: inherit;
    color: var(--f-k-smk-x);
    text-decoration: underline;
    font-weight: var(--jx-zk-pv);
    position: relative;
    outline: none;
`

export const DescDiv = styled.div`
    -webkit-box-align: center;
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 24px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: rgb(34, 34, 34);
    text-align: center;
`
export const SubDescDiv = styled.div`
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    color: rgb(34, 34, 34);
    text-align: center;
`
export default DragDrop;
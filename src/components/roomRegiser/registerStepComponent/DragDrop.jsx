import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as DragPhoto } from "../../../assets/svg/dragPhoto.svg"

function DragDrop(props) {
    const [dragActive, setDragActive] = useState(false)
    const inputRef = useRef();

    const [isDone, setIsDone] = useState(false)
    const [previews, setPreviews] = useState([])

    const handleFile = (files) => {
        if(files.length > 0){
            setIsDone(true)
            props.getImage(files);
        }else{
            setIsDone(false)
        }        
    }

    // 완료여부
    useEffect(()=>{
        props.getFormIsDone(isDone)
    },[isDone])

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true)
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
        
        //////////////
        
        const files = e.target.files
        if (files) {
            Array.from(files).forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviews((previews) => [...previews, reader.result]);
                };  
                reader.readAsDataURL(file);
            });
        }
        
        else {
            setPreviews([])
        }
        //////////////

        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
        }
    }

    useEffect(()=>{
        console.log("previews,,," , previews)
    },[previews])
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
            <PreviewDiv>
            {
            previews.map((preview)=>{
                return <img width="200px" height="200px" objectFit="cover" src={preview} ></img>
            })
            }
            </PreviewDiv>
            
            
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

export const PreviewDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px); /* 각 열의 크기를 200px로 고정 */
    grid-auto-rows: 200px;/* 각 행의 크기를 200px로 고정 */
    grid-auto-flow: row;
	column-gap: 10px;
	row-gap: 10px;
    height: 430px;
    max-height: 430px;
    justify-content : center;
    align-content: flex-start; /* 그리드 아이템을 위쪽 정렬 */
    overflow: auto; /* 그리드 영역이 넘칠 경우 스크롤 표시 */
`
export default DragDrop;
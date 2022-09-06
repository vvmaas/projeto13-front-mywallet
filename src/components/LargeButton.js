import styled from "styled-components";

export default function LargeButton({text}) {
    return (
        <LButton>
            <div>{text}</div>
        </LButton>
    )

}

const LButton = styled.button`
    border: none    ;
    width: 90vw;
    height: 7vh;
    background-color: #a328d6;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 9px;
    margin-top: 2vh;
    cursor: pointer;
div {
    color: white;
    font-size: 20px;
    font-weight: bold;
}

    
    `
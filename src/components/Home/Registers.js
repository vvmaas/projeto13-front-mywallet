import styled from "styled-components";

export default function Registers({list}) {

    let totalSum = 0

    for(let i=0;i<list.length;i++){
        if(list[i].type === "income"){
            totalSum += Number(list[i].value)
        } else {
            totalSum -= Number(list[i].value)
        }
    }

    return (
        <RegistersW>
            <ul>
                {list.map((item) => {return(
                    <li>
                        <div>
                            <Date>{item.date}</Date>
                            <TextRegister>{item.text}</TextRegister>
                        </div>
                        <ValueRegister income={item.type === "income"}>{Number(item.value).toFixed(2)}</ValueRegister>
                    </li>
                )})}
            </ul>

            <Balance>
                <TextBalance>SALDO</TextBalance>
                <ValueBalance positive={totalSum > 0}>{totalSum.toFixed(2)}</ValueBalance>
            </Balance>
        </RegistersW>
    )
}

const RegistersW = styled.div`
    width: 82vw;
    height: 66.5vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
ul {
    padding-top: 4vh ;
    margin-bottom: 0.5vh;
    overflow: auto;
    scrollbar-width: none;
}
ul::-webkit-scrollbar{
    display: none;
}
li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}
`

const Date = styled.span`
    margin-right: 9px;
    font-size: 16px;
    color: #c6c6c6;
`

const TextRegister = styled.span`
    font-size: 16px;
`

const ValueRegister = styled.span`
    color: ${props => props.income ? 'green' : 'red'};
    font-size: 16px;
`

const Balance = styled.div`
    display: flex;
    justify-content: space-between;
`

const TextBalance = styled.span`
    font-size: 17px;
    font-weight: bold;
`

const ValueBalance = styled.span`
    color: ${props => props.positive ? 'green' : 'red'};
    font-size: 17px;
    font-weight: 500;
`
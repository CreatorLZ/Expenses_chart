import React from 'react'
import styled from 'styled-components'
import {data} from './data'


const Buttoncustom= styled.div`
     width:50px;
     height:25px;
     background-color:black;
     color:white;
     border-radius:5px;
     margin-bottom:5px;
     margin-left:1px;
     align-items:center;
     justify-content:center;
     font-size: 14px;
     opacity: 0;
     &:hover  {
      opacity: 1;
      }
    `
    

const Container = styled.div`
background-color: hsl(30, 100%, 94.50980392156862%);
width:100%;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
box-shadow: '1px 2px 9px #c7b1b6'
`;

const Topwrapper = styled.div`
   background-color:hsl(10, 79%, 65%);
   color:white;
    width:370px;
    height:90px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
    border-radius:10px;
   
`;

const Bottomwrapper= styled.div`
background-color:white;
display:flex;
width:370px;
height:350px;
border-radius:10px;
flex-direction:column;
 `


const Icon= styled.div``;


const Text= styled.div`
 display:flex;
 flex-direction:column;
 padding:20px;
`
const Topbottom= styled.div`
 display: flex;
 flex:1;
 `

const Middlebottom= styled.div`
 display: flex;
 flex:3;
 margin-left:0;
 `;

const Dayscontainer = styled.div`
display: flex;
justify-content:space-around;


 `

const Bars = styled.div`
  border-radius:5px;
  background-color:hsl(10, 79%, 65%);
  width:40px;
  margin-left:10px;
  &:hover  {
    background-color:#252221;

  };

  `

const Barscontainer = styled.div`
  display: flex;
  align-items:flex-end;
  justify-content:"center";
`

const Downbottom= styled.div`
  display: flex;
  flex:1;
  align-items:center;
  justify-content:space-between;
  padding:10px;
 `

const Hr= styled.hr`
  width:90%;
  height: 2px;
  background-color:#f8e1dc;
  margin-left:18px;
  border: none;
  margin-top:25px;
`

const Totalamounttextright= styled.div`
display: flex;
flex-direction:column;
`
const Totalamounttextleft= styled.div`
display: "flex";
flex-direction:"column";
`

const Days = styled.div`
display:flex;
`;

const Bar1 = styled.div`
 &:hover ${Buttoncustom} {
        opacity: 1;
 }
 `
 
        
const Textcontent = styled.span`
    
   `
const Textcontentlarge = styled.h3`
      
   `

const Home = () => {
const day = new Date();
const currentDay = day.getDay();
console.log(currentDay);
 

  return (
    
    <Container>
      <Topwrapper>
            <Text>
                <Textcontent style={{fontSize:"12px", fontWeight:"400",marginBottom:"3px"}}>My balance</Textcontent>
                <Textcontent  style={{fontSize:"20px", fontWeight:"600"}}>$921.48</Textcontent>
            </Text>
            <Icon style={{marginRight:"15px"}}><svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg></Icon>
        </Topwrapper>
        <Bottomwrapper>
          <Topbottom>
          <Textcontent style={{fontSize:"20px", fontWeight:"600",marginLeft:"20px",marginTop:"15px"}}>Spending - Last 7 days</Textcontent>
          </Topbottom>
          <Middlebottom>
            <Barscontainer>
            {data.map(item =>(
          <Bar1>
          <Buttoncustom>{"$"+item.amount}</Buttoncustom>
          <Bars style={{height:`${item.amount * 2.5}px`, backgroundColor: item.id === currentDay ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)", }}/>
          </Bar1>
            ))}
            </Barscontainer>
          </Middlebottom>
          
          <Dayscontainer>
          <Days>
          <Textcontent style={{fontSize:"14px", fontWeight:"400",marginLeft:"13px",marginRight:"20px",marginTop:"5px",}}>mon</Textcontent>
          </Days>
          <Days>
          <Textcontent style={{fontSize:"14px", fontWeight:"400",marginLeft:"10px",marginRight:"20px",marginTop:"5px"}}>tue</Textcontent>
          </Days>
          <Days>
          <Textcontent  style={{fontSize:"14px", fontWeight:"400",marginLeft:"10px",marginRight:"20px",marginTop:"5px"}}>wed</Textcontent>
          </Days>
          <Days>
          <Textcontent style={{fontSize:"14px", fontWeight:"400",marginLeft:"6px",marginRight:"20px",marginTop:"5px"}}>thur</Textcontent>
          </Days>
          <Days>
          <Textcontent style={{fontSize:"14px", fontWeight:"400",marginLeft:"10px",marginRight:"20px",marginTop:"5px"}}>fri</Textcontent>
          </Days>
          <Days>
          <Textcontent  style={{fontSize:"14px", fontWeight:"400",marginLeft:"10px",marginRight:"20px",marginTop:"5px"}}>sat</Textcontent>
          </Days>
          <Days>
          <Textcontent  style={{fontSize:"14px", fontWeight:"400",marginLeft:"10px",marginRight:"20px",marginTop:"5px"}}>sun</Textcontent>
          </Days>
          </Dayscontainer>
          <Hr/>
          <Downbottom>
            <Totalamounttextleft>
            <Textcontentlarge  style={{fontSize:"14px", fontWeight:"400",marginLeft:"20px",marginTop:"15px"}}>Total this month</Textcontentlarge>
            <Textcontentlarge  style={{fontSize:"20px", fontWeight:"600",marginLeft:"20px",marginBottom:"15px"}}>$478.33</Textcontentlarge>
            </Totalamounttextleft>
            <Totalamounttextright>
            <Textcontentlarge variant="h3" style={{fontSize:"14px", fontWeight:"700",marginLeft:"68px"}}>+2.4%</Textcontentlarge>
            <Textcontent  style={{fontSize:"14px", fontWeight:"400",}}>from last month</Textcontent>
            </Totalamounttextright>
          </Downbottom>
        </Bottomwrapper>
    </Container>
  )
}

export default Home

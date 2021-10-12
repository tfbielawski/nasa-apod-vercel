/**Thomas Bielawski
 * Lambda School WEB45
 * 2.2.3 Nasa APOD Info.js
 * 7/14/2021
 * 2.2.4 Advanced styling
 * 7/15/2021
 */

//import react
import React from "react";
import styled from 'styled-components'
//Styled component
const InfoStyle = styled.div`
display: flex;
  text-align: center;
color: navy;
  font-weight: bold;
  width:80vh;
  display: flex;
  text-align: center;
  margin-left: 0%;
`
//Default function definition, pass in {explanation}
export default function Info({explanation}){
    //Return the title in h1 tag
    return <InfoStyle> <p>{explanation}</p> </InfoStyle>
}
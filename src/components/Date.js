/**Thomas Bielawski
 * Lambda School WEB45
 * 2.2.3 Nasa APOD date.js
 * 7/14/2021
 * 2.2.4 Advanced styling
 * 7/15/2021
 */

//Import statements
import React from "react";
import styled from "styled-components";
//Styled component
const DateStyle = styled.div`
color: white;
font-size: 0.5rem;
`
//Default function definition, pass in {date}
export default function Date({date}){
    //Render the styled containing the date
    return <DateStyle>  <h2>{date}</h2> </DateStyle>
}


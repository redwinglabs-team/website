import React from 'react';
import styled from 'styled-components';

const LabeledDescriptionContainer = styled.div`
display:flex;
justify-content:flex-start;
align-items:start;
flex-direction:column;
width:100%;
`
const TitleContainer = styled.div`
    display:flex;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
    font-size:32px;
    margin:0px;
    text-align:left;
    flex-wrap: wrap;
`

const LabeledTitleRegular = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
    margin-right:8px;
    text-align:left;
`

const LabeledTitleBold = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
    margin-right:8px;

    text-align:left;
`

const TextContainer = styled.div`
    display:flex;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.light};
    font-size:16px;
    margin-top:16px;
    text-align:left;
`

const LabeledDescription = ({title,description,containerStyle}) => {

    const alternateFontWeight = (text)=>{
        const sp = text.split(" ");
        const alternateTitle = sp.map((tl,index)=>
            index%2===0 ? (<LabeledTitleBold key={index}>
                {tl}
            </LabeledTitleBold>) :
            (
                <LabeledTitleRegular key={index}>
                    {tl}
                </LabeledTitleRegular>
            )
        )
        return alternateTitle
    }

    return (
        <LabeledDescriptionContainer style={{...containerStyle}}>
            <TitleContainer>
                {alternateFontWeight(title)}
            </TitleContainer>
            <TextContainer>
                {description}
            </TextContainer>
        </LabeledDescriptionContainer>
    );
};

export default LabeledDescription;
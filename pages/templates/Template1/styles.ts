import styled from 'styled-components'

export const Template1Container = styled.main`
overflow: hidden;
display: flex;
flex-direction: column;
margin-top: 50px;
width: 795px;
height: 1125px;
border-radius: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
inset 0px -1px 4px rgba(0, 0, 0, 0.25),
inset 0px 4px 4px rgba(255, 255, 255, 0.25);

>div {
  padding: 30px;
  width: 100%;
}
`
export const TopSection = styled.div` 
height: 150px;
background-color: ${({theme}) => theme.colors.green};
justify-self: flex-start;
h5 {
  margin-top: 10px;
}
  `
export const BottomSection = styled.div` 
  padding: 30px;
  `
  export const Title = styled.h4` 
  position: relative;
  margin-left: 15px;
  
  &::after{
    content: "";
    position: absolute;
    left: -15px;
    width: 10px;
    height: 30px;
    background-color: ${({theme}) => theme.colors.green};
  }
  `
  export const LinkTitle = styled.div` `
import styled from 'styled-components'

export const Container = styled.div`
 @media(max-width: 960px){
  display: flex;
  flex-direction: column;
  }
  display: flex;
  justify-content: space-between;
  max-width: 1200px;

`
export const TitlePage = styled.h1`
  color: #404040;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top:20px;

`;
export const Projects = styled.div`
  width: 100%;
  height: 200px;
  padding:20px;
  margin-right: 10px;
  margin-bottom:10px;
  background: #e0e0e0;
  border: 1px solid #cfcfcf;
`;
export const Title = styled.h6`
  font-size:17px;
  font-weight: bold;
  color: #424242;
  margin-bottom:12px;
`;

export const Content = styled.p`
  font-size: 14px;
  text-align: justify;
`;

export const Suggestions = styled.div`
  width: 100%;
  height: 300px;
  padding:20px;
  margin-right: 10px;
  margin-bottom:10px;
  background: #e0e0e0;
  border: 1px solid #cfcfcf;
  overflow: scroll;
`;

export const TitleSuggestion = styled.h6`
  font-size: 16px;
  font-weight: bold;
`;

export const ContentSuggestion = styled.p`
  font-size: 14px;
`;

export const Author = styled.span`
  font-size: 13px;
  font-style: italic;
`;
export const Votes = styled.span`
  font-size: 13px;
  color:green;
  font-weight: bold;
`;
export const Liked = styled.p`
  font-size: 15px;
  margin-top: 13px;
  color: green;
  display:flex;

`;



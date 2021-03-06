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
  list-style:none;

`;

export const TitleSuggestion = styled.h6`
  font-size: 16px;
  font-weight: bold;
`;

export const ContentSuggestion = styled.li`
  font-size: 14px;
  list-style:none;
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
export const Chat = styled.div`
  max-width: 300px;
  height: 500px;
  background: #000;
  color: #fff;
  padding:5px;
  overflow-y: auto;
  font-size:15px;
 
`;
export const Button = styled.button`
  width: 100%;
  padding: 5px;

`;



import React, { useState } from 'react'
import { Projects, TitlePage, Title, Container, Content, Suggestions, TitleSuggestion, ContentSuggestion,Liked, Author, Votes } from '../../styles'
import {Link} from 'react-router-dom'
import {FiThumbsUp} from 'react-icons/fi'

export default function Principal()
{
  const [suggestion, setSuggestions] = useState([])
  return(
    <>
      <TitlePage>Latest Projects</TitlePage>
      <Container>
        <Projects>
          <Title>Project For Kids</Title>
          <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...<Link to="/"> More</Link></Content>
        </Projects>
        <Projects>
          <Title>Project for Pets</Title>
          <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...<Link to="/"> More</Link></Content>

        </Projects>
        <Projects>
          <Title>Project for community</Title>
          <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...<Link to="/"> More</Link></Content>
        </Projects>
      </Container>
      <TitlePage>Suggestion Projects</TitlePage>
        <Suggestions>
          <TitleSuggestion>
            Project for poor kids <Author>by Lukas Conka</Author><Votes> 18 Votes</Votes>
          </TitleSuggestion>

          <ContentSuggestion>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          <Liked>
            <FiThumbsUp></FiThumbsUp> I liked
          </Liked>
          </ContentSuggestion>
          <hr />
          <TitleSuggestion>
            Project for poor kids <Author>by Lukas Conka</Author><Votes> 18 Votes</Votes>
          </TitleSuggestion>
          <ContentSuggestion>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          <Liked>
            <FiThumbsUp></FiThumbsUp> I liked
          </Liked>
          </ContentSuggestion>
          <hr />
          <TitleSuggestion>
            Project for poor kids <Author>by Lukas Conka</Author><Votes> 18 Votes</Votes>
          </TitleSuggestion>
          <ContentSuggestion>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          <Liked>
            <FiThumbsUp></FiThumbsUp> I liked
          </Liked>
          </ContentSuggestion>
          <hr />
        </Suggestions>




    </>
  )
}

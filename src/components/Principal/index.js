import React, { useState, useEffect } from 'react'
import { Projects, TitlePage, Title, Container, Content, Suggestions, TitleSuggestion, ContentSuggestion, Liked, Author, Votes } from '../../styles'
import { Link } from 'react-router-dom'
import { FiThumbsUp } from 'react-icons/fi'
import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_URL);


export default function Principal() {
  let [suggestion, setSuggestions] = useState([])

  const banco = [{
    title: 'Project for Community',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip.',
    author:'João da Silva',
    votes: "1"
  }]

  useEffect(() => {

    setSuggestions(banco)

    socket.on("FromApi", data => {
      const n = banco.concat(data).reverse()
      setSuggestions(n)
    })

  },[])
  return (
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
        {suggestion.map((suggestion, index) => (
          <li key={index}>
            <TitleSuggestion>
              {suggestion.title} <Author>by {suggestion.author}</Author><Votes> {suggestion.votes} Votes</Votes>
            </TitleSuggestion>
            <ContentSuggestion>
              {suggestion.content}
            <Liked><FiThumbsUp /> I liked</Liked>
            </ContentSuggestion>
            <hr />
          </li>
        ))}
      </Suggestions>
    </>

  )
}

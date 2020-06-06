import React, { useState, useEffect } from 'react'
import { Projects, TitlePage, Title, Container, Content, Suggestions, TitleSuggestion, ContentSuggestion, Liked, Author, Votes } from '../../styles'
import { Link } from 'react-router-dom'
import { FiThumbsUp } from 'react-icons/fi'
import io from 'socket.io-client';
import api from '../../services/api'

const socket = io(process.env.REACT_APP_API_URL);


export default function Principal() {
  const [suggestion, setSuggestions] = useState([])
  const [projects, setProjects] = useState([])

  const banco = [{
    title: 'Project for Community',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip.',
    author:'João da Silva',
    votes: "1"
  }]

  const projectsHighlights = async () => {
    try {
      const projects = await api.get('projects')
      setProjects(projects.data)
    } catch (error) {
      alert('Error unexpected try again.' + error)
    }

  }

  useEffect(() => {

    setSuggestions(banco)
    projectsHighlights()

    socket.on("FromApi", data => {
      const n = banco.concat(data).reverse()
      setSuggestions(n)
    })

  },[])
  return (
    <>

      <TitlePage>Latest Projects</TitlePage>
      <Container>
      {projects.map(project => (
        <Projects>
            <Title>{project.title}</Title>
            <Content>{project.description}<Link to="/"> More</Link></Content>
        </Projects>
        ))}
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

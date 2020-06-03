import React from 'react'
import { Projects, Title, Container } from '../../styles'

export default function Principal()
{
  return(
    <>
      <Title>Last Projects</Title>
      <Container>
        <Projects>
          Project For Kids
        </Projects>
        <Projects>
          Project for Pets
        </Projects>
        <Projects>
          Project for community
        </Projects>
      </Container>

    </>
  )
}

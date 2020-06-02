import React from 'react'
import Router from './routes'
import './styles.css'
import { Col, Row, Container } from 'react-bootstrap'
import Header from '../../components/Header'

export default function Dashboard() {

  return (
    <>
      <Header />
      <Router />
    </>
  )
}

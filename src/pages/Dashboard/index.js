import React, { useEffect } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

export default function Dashboard() {
  const token = localStorage.getItem('token')
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
    </div>
  )
}

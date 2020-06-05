import React, { useState, useEffect } from 'react'
import { Chat, Button } from '../../styles'
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import './styles.css'
const myId = uuidv4()
const socket = io(process.env.REACT_APP_API_URL);

const ChatMessage = () => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [messages, setMessages] = useState([])



  useEffect(() => {
    setName(localStorage.getItem('name'))

    const handleNewMessage = newMessage => setMessages([...messages, newMessage])
    socket.on('sendMessage', handleNewMessage)
    return () => socket.off('sendMessage', handleNewMessage)

  }, [messages])


  const handleInputChange = e => {
    setMessage(e.target.value)
  }
  const handleFormSubmit = e => {
    e.preventDefault()
    if (message.trim('')) {
      socket.emit('sendMessage', {
        id: myId,
        message,
        name
      })
      setMessage('')
    }
  }
  return (
    <>
      <Chat>
        <ul className="list">
          {messages.map((m, index) => (
            <li key={index} className={m.id === myId ? 'mine' : 'other'}>
              <span className="message message-mine">
              {m.name}: {m.message}
              </span>
            </li>
          ))}
        </ul>
      </Chat>
      <form className="form" onSubmit={handleFormSubmit}>
          <input value={message} onChange={handleInputChange} className="form__field" type="text" name="message" placeholder="your message"></input>
          <Button>Send</Button>
        </form>
    </>
  )
}

export default ChatMessage

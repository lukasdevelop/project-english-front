import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
const myId = uuidv4()
const socket = io(process.env.REACT_APP_API_URL);

const ChatMessage = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    console.log(messages)
    const handleNewMessage = newMessage =>
      setMessages([...messages, newMessage])
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
        message
      })
      setMessage('')
    }
  }
  return (
    <>
      <main className="container">
        <ul className="list">
          {messages.map(m => (
            <li key={m.id} className="list__item list__item--mine">
              <span className="message message-mine">
                {m.message}
              </span>
            </li>
          ))}
        </ul>
        <form className="form" onSubmit={handleFormSubmit}>
          <input value={message} onChange={handleInputChange} className="form__field" type="text" name="message" placeholder="your message"></input>
          <button>Send</button>
        </form>
      </main>
    </>
  )
}

export default ChatMessage

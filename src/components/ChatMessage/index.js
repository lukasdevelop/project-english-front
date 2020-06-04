import React from 'react'

export default function ChatMessage(props){
  return (
    <>
    <div>
      {props.name}
      <br />
      {props.message}
    </div>
    </>
  )
}

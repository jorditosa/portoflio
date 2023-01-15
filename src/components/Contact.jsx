import React from 'react'
import {BiSend} from 'react-icons/bi'
import Title from './Title'
import styled from 'styled-components'

// Styled components
const SendIcon = styled(BiSend)`
display: inline;
font-size: 24px;
margin: 0 0 0 6px;

`;

function Contact() {

  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className="flex justify-center items-center">
        <form 
        action="https://getform.io/f/ebc6fb87-e691-4c00-bbf8-0fce57b44b5c"
        method='POST'
        className='flex flex-col w-full md:w-8/12'
        >
        <Title>
          Parlem?  
        </Title>
          <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder='El teu nom'
          className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder='El teu email'
          className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />

          <textarea 
          name="message"
          placeholder='El teu missatge' 
          rows="10"
          className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
          />

          <button
          className='px-8 py-3 w-full md:w-max text-base font-medium rounded-md text-white dark:text-black bg-gradient-to-r from-indigo-700 to-orange-700 drop-shadow-md dark:from-indigo-300 dark:to-orange-300'
          > 
          Enviar el teu missatge <SendIcon />
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact
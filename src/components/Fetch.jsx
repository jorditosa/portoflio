import { useState, useEffect } from 'react'
import { BsEmojiWink } from 'react-icons/bs'
import styled from 'styled-components'

// Styled components
const EmojiWink = styled(BsEmojiWink)`
display: inline;
font-size: 22px;
margin-left: 1rem;
`;

function Fetch() {
  const [dogFact, setDogFact] = useState('')


  const dogAPICall = () => {
    const random = Math.floor(Math.random()*10)
    fetch('https://dogapi.dog/api/v2/breeds')
    .then(res => res.json())
    .then(response => setDogFact(response.data[random].attributes.description))
  }

  useEffect(() => {
    dogAPICall();
  }, [])

  return (
    <div className='flex flex-col items-center justify-center my-10 text-stone-600 dark:text-stone-400 text-sm'>
      <p className='text-indigo-800 dark:text-indigo-200 my-4'>
        Et deixo una petita anècdota animal...fet amb Fetch <EmojiWink />
      </p>
      <p className='w-full md:w-8/12 p-4 border-2 rounded-md focus:outline-none'>
        {dogFact}
      </p>
    </div>
  )
}

export default Fetch

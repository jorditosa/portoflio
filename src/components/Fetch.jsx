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


  const dogAPICall = async () => {
    const response = await fetch('https://dogapi.dog/api/v2/breeds')
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const random = Math.floor(Math.random()*10);

    dogAPICall().then(text => setDogFact(text.data[random].attributes.description));
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

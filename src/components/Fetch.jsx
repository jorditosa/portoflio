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
  const [filmFact, setFilmFact] = useState('')

  useEffect(() => {
    const random = Math.floor(Math.random()*6);

    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(text => setFilmFact(text.results[random].title));
  }, [])

  return (
    <div className='flex flex-col items-center justify-center my-10 text-stone-800 dark:text-stone-200 text-md text-center'>
      <p className='text-indigo-800 dark:text-indigo-200 my-4'>
        Quina pel·lícula de Star Wars vols que et recomani avui?.....fet amb fetch <EmojiWink />
      </p>
      <p className='w-full md:w-8/12 p-4 border-2 rounded-md focus:outline-none '>
        {filmFact}
      </p>
      <span className='py-2 text-sm text-stone-600 dark:text-stone-400'>SWAPI Api</span>
    </div>
  )
}

export default Fetch

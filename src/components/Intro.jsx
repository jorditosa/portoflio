import React from 'react'
import Foto from '../assets/foto-jordi.jpg'
import styled from 'styled-components'

// Styled components
const MainFoto = styled.img`
background-image: url(${Foto});
background-size: cover;
border-radius: 50%;
outline: 2px solid #3730a3;
box-shadow: 2px 2px 5px 1px #3730a3;
width: 100px;
height: 100px;
margin: 5px 0;
`;


function Intro() {


  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-3xl md:text-5xl dark:text-stone-200 mb-1 md:mb-3 font-bold'>Jordi Sanchez</h1>
        <MainFoto />
        <p className='text-base md:text-xl mb-3 font-medium'>Web developer</p>
        <p className='text-normal w-full md:w-8/12 mb-6 font-bold text-start'>Soc desenvolupador web, especialitzant-se en la part font-end, amb gran capacitat d'actualitzar-se i mantenir-se al dia de les últimes actualitzacions i tecnologies. Aqui pots trobar els meus repositoris públics {' '} 
        <a className='text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100' href="https://github.com/jorditosa" target="_blank" rel="noopener noreferrer">a GitHub</a>
        </p>
    </div>
  )
}

export default Intro
import React from 'react'
import Foto from '../assets/foto-jordi.jpg'
import styled from 'styled-components'
import { FcPhoneAndroid } from 'react-icons/fc'
import { useTranslation } from "react-i18next"

// Styled components
const MainFoto = styled.img`
background-image: url(${Foto});
background-size: cover;
background-repeat: no-repeat;
border: none;
outline: none;
width: 250px;
height: 250px;
`;


function Intro() {

  const [t, i18n] = useTranslation("global")

  return (
    <div className='h-screen flex items-center justify-center flex-col text-center'>
        <MainFoto/>
        <h1 className='text-3xl md:text-5xl dark:text-stone-200 mb-1 md:mb-3 font-bold py-10'>Jordi Sanchez</h1>
        <p className='text-md md:text-xl w-full md:w-8/12 mb-6 text-start'>{t("header.text")} {' '} 
        <a className='text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100' href="https://github.com/jorditosa" target="_blank" rel="noopener noreferrer">a GitHub</a>
        </p>
        <p className='text-start w-full md:w-8/12 mb-3'>{t("header.text-phone")} <a className='text-indigo-800 dark:text-indigo-400' href="tel:+34676253376">
        <FcPhoneAndroid style={{width: '35px', height: '35px', display: 'inline' }}/>
        </a></p> 
    </div>
  )
}

export default Intro
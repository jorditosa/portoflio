import React from 'react'
import Foto from '../assets/foto-jordi.jpg'
import styled from 'styled-components'
import { FcPhoneAndroid } from 'react-icons/fc'
import { useTranslation } from "react-i18next"

// Styled components
const MainFoto = styled.img`
line-height: 1;
background: #000000;
background-image: url(${Foto});
background-size: cover;
backgroun-repeat: no-repeat;
border-radius: 50%;
border: none;
box-shadow: 2px 2px 10px 2px #3730a3;
width: 150px;
height: 150px;
margin: 5px 0;
`;


function Intro() {

  const [t, i18n] = useTranslation("global")

  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-3xl md:text-5xl dark:text-stone-200 mb-1 md:mb-3 font-bold'>Jordi Sanchez</h1>
        <MainFoto/>
        <p className='text-base md:text-xl mb-3 font-medium'>Web developer</p>
        <p className='text-normal w-full md:w-8/12 mb-6 font-bold text-start'>{t("header.text")} {' '} 
        <a className='text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100' href="https://github.com/jorditosa" target="_blank" rel="noopener noreferrer">a GitHub</a>
        </p>
        <p className='text-start w-full md:w-8/12 mb-3'>{t("header.text-phone")} <a className='text-indigo-800 dark:text-indigo-400' href="tel:+34676253376">
        <FcPhoneAndroid style={{width: '35px', height: '35px', display: 'inline' }}/>
        </a></p> 
    </div>
  )
}

export default Intro
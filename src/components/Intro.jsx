import React from 'react'

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-3xl md:text-5xl dark:text-stone-200 mb-1 md:mb-3 font-bold'>Jordi Sanchez</h1>
        <p className='text-base md:text-xl mb-3 font-medium'>Web developer</p>
        <p className='text-normal max-w-xl mb-6 font-bold text-start'>Soc desenvolupador web, especialitzant-se en la part font-end, amb gran capacitat d'actualitzar-se i mantenir-se al dia de les últimes actualitzacions i tecnologies. Aqui pots trobar els meus repositoris públics {' '} 
        <a className='text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100' href="https://github.com/jorditosa" target="_blank" rel="noopener noreferrer">a GitHub</a>
        </p>
    </div>
  )
}

export default Intro
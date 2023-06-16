import { useState, useEffect } from 'react'
import {BsSun, BsMoon} from 'react-icons/bs'
import Intro from './components/Intro'
import Tech from './components/Tech'
import Timeline from './components/Timeline'
import Studies from './components/Studies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Fetch from './components/Fetch'
import Portfolio from './components/Portfolio'
import { useTranslation } from 'react-i18next'

function App() {
  const [theme, setTheme] = useState(null);

  const [t , i18n] = useTranslation();

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

  return (
    <>
    <div className='w-full fixed z-0 bg-gradient-to-b from-indigo-300 
      dark:from-stone-900 dark:to-stone-800 text-stone-900
        p-4 flex justify-end'>
      <button
      type='button'
      onClick={handleThemeSwitch}
      className="p-2 ml-3 text-md rounded-md dark:bg-indigo-100"
      >
        {theme === 'dark' ? (<BsMoon size={24}/>) : (<BsSun size={24}/>) }
      </button>

      <button
      type='button'
      onClick={() => i18n.changeLanguage("ca")}
      className="p-2 ml-3 text-md rounded-md dark:bg-indigo-100"
      >
        Cat
      </button>
      <button
      type='button'
      onClick={() => i18n.changeLanguage("es")}
      className="p-2 ml-3 text-md rounded-md dark:bg-indigo-100"
      >
        Esp
      </button>
    </div>

      <div className='bg-white 
      dark:bg-stone-900 text-stone-900 dark:text-stone-200 min-h-screen font-inter'>
        <div className='max-w-6xl w-11/12 mx-auto'>
          <Intro />
          <Tech />
          <Portfolio />
          <Timeline />
          <Studies />
          <Fetch />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
